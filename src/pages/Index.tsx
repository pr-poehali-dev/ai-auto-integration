import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface Speaker {
  name: string;
  position: string;
  company: string;
}

interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  format: string;
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

  const schedule = [
    { time: '10:00 - 10:30', title: 'Регистрация и welcome-кофе' },
    { time: '10:30 - 11:15', title: 'Открытие конференции. ИИ в автопроме: тренды 2026' },
    { time: '11:15 - 12:00', title: 'Автоматизация продаж с помощью ИИ-ассистентов' },
    { time: '12:00 - 12:45', title: 'Предиктивная аналитика в сервисном обслуживании' },
    { time: '12:45 - 13:45', title: 'Обед и нетворкинг' },
    { time: '13:45 - 14:30', title: 'ИИ в маркетинге: персонализация и таргетинг' },
    { time: '14:30 - 15:15', title: 'Чат-боты нового поколения для дилерских центров' },
    { time: '15:15 - 16:00', title: 'Кейсы внедрения: от пилота до масштабирования' },
    { time: '16:00 - 17:00', title: 'Панельная дискуссия с топ-менеджерами' },
    { time: '17:00 - 18:00', title: 'Неформальное общение и фуршет' },
  ];

  const partners = ['Чанган Моторс', 'Джили Мотор', 'HAVAL', 'Hyundai', 'Яндекс', 'Сбер'];

  const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: RegistrationData = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
      position: formData.get('position') as string,
      format: formData.get('format') as string,
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.15),transparent_50%)]" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="flex justify-center mb-8">
              <img 
                src="https://cdn.poehali.dev/files/Вариант 2 .jpg" 
                alt="ABC Auto Business Consulting" 
                className="h-32 md:h-40 w-auto object-contain"
              />
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
              <Icon name="Sparkles" className="text-cyan-400" size={16} />
              <span className="text-sm text-cyan-300">22 января 2026 • Москва</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Конференция по внедрению ИИ
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              в бизнес-процессы автомобильных компаний
            </p>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Откройте новые горизонты: ИИ как катализатор роста в автомобильной отрасли
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/50 hover-scale"
                onClick={() => setShowRegistration(true)}
              >
                <Icon name="Ticket" className="mr-2" size={20} />
                Зарегистрироваться
              </Button>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg shadow-purple-500/50 hover-scale"
                onClick={() => document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Calendar" className="mr-2" size={20} />
                Программа
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-cyan-900/10" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-900/50 border-cyan-500/20 backdrop-blur hover-scale">
              <CardHeader>
                <Icon name="Users" className="text-cyan-400 mb-2" size={32} />
                <CardTitle className="text-cyan-400">Целевая аудитория</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                Топ- и middle-менеджмент автомобильных импортеров и дилеров: продажи, сервис, маркетинг, ИТ, HR
              </CardContent>
            </Card>
            
            <Card className="bg-slate-900/50 border-purple-500/20 backdrop-blur hover-scale">
              <CardHeader>
                <Icon name="Clock" className="text-purple-400 mb-2" size={32} />
                <CardTitle className="text-purple-400">Формат</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                Очная конференция с онлайн-трансляцией. С 10:00 до 18:00. Живое общение и нетворкинг
              </CardContent>
            </Card>
            
            <Card className="bg-slate-900/50 border-pink-500/20 backdrop-blur hover-scale">
              <CardHeader>
                <Icon name="Trophy" className="text-pink-400 mb-2" size={32} />
                <CardTitle className="text-pink-400">Преимущества</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                Актуальные знания, нетворкинг с ключевыми игроками, инновационные идеи от экспертов
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Спикеры конференции
          </h2>
          <p className="text-center text-gray-400 mb-12">Ведущие ТОП-менеджеры ИТ-компаний и автомобильных брендов</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.map((speaker, index) => (
              <Card key={index} className="bg-slate-900/50 border-cyan-500/20 backdrop-blur hover-scale">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                    {speaker.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-center text-lg">{speaker.name}</CardTitle>
                  <CardDescription className="text-center text-sm">{speaker.position}</CardDescription>
                  <p className="text-center text-cyan-400 text-sm font-medium">{speaker.company}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="py-20 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Программа конференции
          </h2>
          <p className="text-center text-gray-400 mb-12">20 января 2026</p>
          
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <Card key={index} className="bg-slate-900/50 border-purple-500/20 backdrop-blur hover-scale">
                <CardContent className="p-6 flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-3 md:w-40 shrink-0">
                    <Icon name="Clock" className="text-purple-400" size={20} />
                    <span className="text-purple-300 font-semibold">{item.time}</span>
                  </div>
                  <div className="h-px md:h-12 md:w-px bg-gradient-to-r md:bg-gradient-to-b from-transparent via-purple-500/50 to-transparent" />
                  <p className="text-gray-200">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Партнёры конференции
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="bg-slate-900/50 border-cyan-500/20 backdrop-blur hover-scale">
                <CardContent className="p-6 flex items-center justify-center min-h-[120px]">
                  <p className="text-center font-semibold text-gray-300">{partner}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Контакты
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="bg-slate-900/50 border-cyan-500/20 backdrop-blur">
              <CardContent className="p-6 text-center">
                <Icon name="Mail" className="text-cyan-400 mx-auto mb-3" size={32} />
                <p className="text-gray-400 text-sm mb-2">Email</p>
                <p className="text-cyan-300">info@ai-in-auto.com</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-900/50 border-purple-500/20 backdrop-blur">
              <CardContent className="p-6 text-center">
                <Icon name="Phone" className="text-purple-400 mx-auto mb-3" size={32} />
                <p className="text-gray-400 text-sm mb-2">Телефон</p>
                <p className="text-purple-300">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Не упустите шанс стать частью важного события!</h2>
          <p className="text-xl text-gray-300 mb-8">Измените будущее автомобильной отрасли вместе с нами</p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white shadow-xl shadow-purple-500/50 hover-scale"
            onClick={() => setShowRegistration(true)}
          >
            <Icon name="Ticket" className="mr-2" size={24} />
            Получить электронный билет
          </Button>
        </div>
      </section>

      <Dialog open={showRegistration} onOpenChange={setShowRegistration}>
        <DialogContent className="bg-slate-900 border-cyan-500/30 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Регистрация на конференцию
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Заполните форму, и мы вышлем вам электронный билет
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleRegistration} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">ФИО *</Label>
              <Input 
                id="fullName" 
                name="fullName" 
                required 
                className="bg-slate-800 border-cyan-500/30"
                placeholder="Иванов Иван Иванович"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  className="bg-slate-800 border-cyan-500/30"
                  placeholder="ivanov@company.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон *</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  required 
                  className="bg-slate-800 border-cyan-500/30"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Компания *</Label>
                <Input 
                  id="company" 
                  name="company" 
                  required 
                  className="bg-slate-800 border-cyan-500/30"
                  placeholder="ООО 'Авто'"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="position">Должность *</Label>
                <Input 
                  id="position" 
                  name="position" 
                  required 
                  className="bg-slate-800 border-cyan-500/30"
                  placeholder="Генеральный директор"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Формат участия *</Label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="format" value="offline" required className="text-cyan-500" />
                  <span>Очно</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="format" value="online" required className="text-cyan-500" />
                  <span>Онлайн</span>
                </label>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
            >
              Зарегистрироваться
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={showTicket} onOpenChange={setShowTicket}>
        <DialogContent className="bg-slate-900 border-cyan-500/30 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Ваш электронный билет
            </DialogTitle>
          </DialogHeader>
          
          {ticketData && (
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-cyan-500/30 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
              
              <CardHeader className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Конференция</p>
                    <CardTitle className="text-xl">ИИ в автопроме 2026</CardTitle>
                  </div>
                  <Icon name="Sparkles" className="text-cyan-400" size={32} />
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-400">Участник</p>
                    <p className="font-semibold">{ticketData.fullName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Компания</p>
                    <p className="font-semibold">{ticketData.company}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Должность</p>
                    <p className="font-semibold">{ticketData.position}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Формат</p>
                    <p className="font-semibold">{ticketData.format === 'offline' ? 'Очно' : 'Онлайн'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Дата</p>
                    <p className="font-semibold">20 января 2026</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Время</p>
                    <p className="font-semibold">10:00 - 18:00</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-cyan-500/20">
                  <div className="bg-white p-4 rounded-lg inline-block">
                    <div className="w-32 h-32 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center text-white text-xs">
                      QR-код билета
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={downloadTicket}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                >
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать билет
                </Button>
              </CardContent>
            </Card>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}