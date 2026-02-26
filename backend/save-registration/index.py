import json
import os
import boto3
import datetime


S3_KEY = 'registrations/data.json'


def get_s3():
    return boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
    )


def load_registrations(s3):
    try:
        obj = s3.get_object(Bucket='files', Key=S3_KEY)
        return json.loads(obj['Body'].read().decode('utf-8'))
    except BaseException:
        return []


def save_registrations(s3, data):
    s3.put_object(
        Bucket='files',
        Key=S3_KEY,
        Body=json.dumps(data, ensure_ascii=False).encode('utf-8'),
        ContentType='application/json'
    )


def handler(event: dict, context) -> dict:
    """Сохраняет заявку на регистрацию в S3."""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))

    s3 = get_s3()
    registrations = load_registrations(s3)

    new_entry = {
        'id': len(registrations) + 1,
        'fullName': body.get('fullName', ''),
        'phone': body.get('phone', ''),
        'billingEmail': body.get('billingEmail', ''),
        'company': body.get('company', ''),
        'inn': body.get('inn', ''),
        'kpp': body.get('kpp', ''),
        'legalAddress': body.get('legalAddress', ''),
        'seats': int(body.get('seats', 1)),
        'createdAt': datetime.datetime.now().strftime('%d.%m.%Y %H:%M')
    }

    registrations.append(new_entry)
    save_registrations(s3, registrations)

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True, 'id': new_entry['id']})
    }