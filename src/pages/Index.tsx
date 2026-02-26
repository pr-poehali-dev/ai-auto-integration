import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import HeroSection from '@/components/conference/HeroSection';
import ProgramSection from '@/components/conference/ProgramSection';
import ContactsSection from '@/components/conference/ContactsSection';
import RegistrationDialogs from '@/components/conference/RegistrationDialogs';

interface Speaker {
  name: string;
  position: string;
  company: string;
}

interface RegistrationData {
  fullName: string;
  phone: string;
  billingEmail: string;
  company: string;
  inn: string;
  kpp: string;
  legalAddress: string;
  seats: string;
}

interface ScheduleItem {
  time?: string;
  title: string;
  subtitle?: string;
  topics?: string[];
  cases?: string;
  isSession?: boolean;
}

export default function Index() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showTicket, setShowTicket] = useState(false);
  const [ticketData, setTicketData] = useState<RegistrationData | null>(null);
  const { toast } = useToast();

  const speakers: Speaker[] = [
    { name: 'Александр Петров', position: 'CTO', company: 'Чанган Моторс Россия' },
    { name: 'Мария Иванова', position: 'Директор по ИИ', company: 'Джили Мотор' },
    { name: 'Дмитрий Соколов', position: 'Вице-президент по инновациям', company: 'HAVAL' },
    { name: 'Елена Волкова', position: 'Руководитель отдела цифровизации', company: 'Hyundai Motor CIS' },
  ];

  const schedule: ScheduleItem[] = [
    { time: '10:00 - 10:30', title: 'Регистрация и welcome-кофе' },
    { 
      title: 'СЕССИЯ 1: ИИ НА ФРОНТЕ: КЛИЕНТСКИЙ ОПЫТ И ПРОДАЖИ',
      isSession: true,
      topics: [
        'Основные системные ошибки и смена парадигмы',
        'Цифровизация и клиентские ожидания',
        'Системные последствия и смена клиентских ценности (ожидания поколения Z - технологичность и комфорт)',
        'Сервис как точка дифференциации',
        'Маркетинг и коммуникации: гибкие предложения',
        'Ошибки традиционных дилеров и действия лидеров рынка',
        'Возможности для российских дилеров'
      ],
      cases: 'Чат-боты, которые действительно продают и сокращают нагрузку на менеджеров. Прогнозная аналитика спроса на модели и комплектации. Генеративный ИИ для персонализированных предложений.'
    },
    { time: '12:45 - 13:45', title: 'Обед и нетворкинг' },
    {
      title: 'СЕССИЯ 2: ИИ В СЕРВИСЕ: ЭФФЕКТИВНОСТЬ И ЛОЯЛЬНОСТЬ',
      isSession: true,
      topics: [
        'Почему сервис важнее продаж',
        'Системная ошибка: только количество заказ-нарядов',
        'Апсейл как ключевой инструмент',
        'Долгосрочные отношения с клиентом',
        'Сервис как маркетинговый инструмент',
        'Использование цифровых инструментов (ИИ)',
        'Пакеты услуг и подписка'
      ],
      cases: 'Предиктивный сервис, ИИ для управления запасными частями, оптимизация логистики дилерских перевозок. Умный fleet-менеджмент. Как считать экономику ИИ-сервиса.'
    },
    {
      title: 'СЕССИЯ 3: ВНУТРЕННЯЯ КУХНЯ: ИИ ДЛЯ HR, МАРКЕТИНГА И БЕЗОПАСНОСТИ',
      isSession: true,
      topics: [
        'Эволюция маркетинга: маркетинг 1.0 в российском автобизнесе (пример устаревшего подхода)',
        'Маркетинг 6.0 — ключевые принципы: Digital-коммуникации, контент и сообщество, персонализация предложений, иммерсивный опыт',
        'Примеры китайских лидеров',
        'Гибкость предложений',
        'Сервис как часть маркетинга',
        'KPI нового маркетинга и долгосрочные результаты'
      ],
      cases: 'ИИ-ассистенты для onboarding, анализ тональности обращений в КСО, генерация маркетингового контента'
    },
    {
      title: 'СЕССИЯ 4: ВНЕДРЕНИЕ ИИ: С ЧЕГО НАЧАТЬ?',
      isSession: true,
      topics: [
        'Введение в ИИ',
        'Разбор внедрения инструментов ИИ в повседневную жизнь сотрудников дилерского центра на примере реальных кейсов',
        'Готовые фреймворки',
        'Шаблоны промптов и т.д.'
      ],
      cases: 'Формат: делай как я, повторяй за мной. ИИ – это не сложно!'
    },
    { time: '17:00 - 18:00', title: 'Неформальное общение и фуршет' },
  ];

  const partners = [
    { name: 'Changan', logo: 'https://cdn.poehali.dev/files/CHangan.png' },
    { name: 'Evolute', logo: 'https://cdn.poehali.dev/files/Evolute.png' },
    { name: 'Geely', logo: 'https://cdn.poehali.dev/files/Geely.png' },
    { name: 'Jetour', logo: 'https://cdn.poehali.dev/files/Jetour.png' },
    { name: 'Voyah', logo: 'https://cdn.poehali.dev/files/Voyah.png' },
    { name: 'Сбер', logo: 'https://cdn.poehali.dev/files/СБЕР.png' },
  ];

  const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: RegistrationData = {
      fullName: formData.get('fullName') as string,
      phone: formData.get('phone') as string,
      billingEmail: formData.get('billingEmail') as string,
      company: formData.get('company') as string,
      inn: formData.get('inn') as string,
      kpp: formData.get('kpp') as string,
      legalAddress: formData.get('legalAddress') as string,
      seats: formData.get('seats') as string,
    };
    
    setTicketData(data);
    setShowRegistration(false);
    setShowTicket(true);
    
    toast({
      title: 'Регистрация успешна!',
      description: 'Ваш электронный билет готов. Проверьте email.',
    });
  };

  const downloadTicket = () => {
    toast({
      title: 'Билет отправлен',
      description: 'Электронный билет отправлен на вашу почту',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <HeroSection onRegisterClick={() => setShowRegistration(true)} />
      <ProgramSection speakers={speakers} schedule={schedule} partners={partners} />
      <ContactsSection onRegisterClick={() => setShowRegistration(true)} />
      <RegistrationDialogs
        showRegistration={showRegistration}
        showTicket={showTicket}
        ticketData={ticketData}
        onRegistrationOpenChange={setShowRegistration}
        onTicketOpenChange={setShowTicket}
        onRegistrationSubmit={handleRegistration}
        onDownloadTicket={downloadTicket}
      />
    </div>
  );
}
