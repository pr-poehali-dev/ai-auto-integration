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

  interface ScheduleItem {
    time?: string;
    title: string;
    subtitle?: string;
    topics?: string[];
    cases?: string;
    isSession?: boolean;
  }

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
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-2xl rounded-full" />
                <img 
                  src="https://cdn.poehali.dev/files/Реалистичное фото-высветленный.png" 
                  alt="ABC Auto Business Consulting" 
                  className="h-48 md:h-56 w-auto object-contain relative z-10 drop-shadow-[0_0_30px_rgba(14,165,233,0.6)]"
                />
              </div>
              
              <div className="flex items-center gap-4 px-8 py-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
                <Icon name="Sparkles" className="text-cyan-400" size={32} />
                <span className="text-2xl md:text-4xl text-cyan-300 font-medium">22 января 2026 • Москва</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              Конференция по внедрению ИИ
            </h1>
            
            <p className="text-2xl md:text-3xl text-white font-light">
              в бизнес-процессы автомобильных компаний
            </p>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
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
              <CardContent className="text-white">
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
          <p className="text-center text-gray-200 mb-12 text-lg">Ведущие ТОП-менеджеры ИТ-компаний и автомобильных брендов</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.map((speaker, index) => (
              <Card key={index} className="bg-slate-900/50 border-cyan-500/20 backdrop-blur hover-scale">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                    {speaker.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-center text-lg text-white">{speaker.name}</CardTitle>
                  <CardDescription className="text-center text-sm text-gray-200">{speaker.position}</CardDescription>
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
          <p className="text-center text-gray-200 mb-12 text-lg">20 января 2026</p>
          
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <Card 
                key={index} 
                className={`backdrop-blur hover-scale ${
                  item.isSession 
                    ? 'bg-gradient-to-r from-purple-600/40 to-pink-600/40 border-purple-400/60 shadow-lg shadow-purple-500/20' 
                    : 'bg-slate-800/80 border-cyan-400/40'
                }`}
              >
                <CardContent className="p-6">
                  {item.isSession ? (
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                      {item.topics && (
                        <ul className="space-y-2 ml-4">
                          {item.topics.map((topic, i) => (
                            <li key={i} className="text-white flex items-start gap-2">
                              <Icon name="ChevronRight" className="text-cyan-300 mt-1 shrink-0" size={16} />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {item.cases && (
                        <div className="mt-4 p-4 bg-cyan-500/30 rounded-lg border-2 border-cyan-400/50 shadow-md shadow-cyan-500/30">
                          <p className="text-sm font-semibold text-white mb-2">Кейсы:</p>
                          <p className="text-white text-sm">{item.cases}</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      {item.time && (
                        <>
                          <div className="flex items-center gap-3 md:w-40 shrink-0">
                            <Icon name="Clock" className="text-cyan-300" size={20} />
                            <span className="text-cyan-200 font-semibold">{item.time}</span>
                          </div>
                          <div className="h-px md:h-12 md:w-px bg-gradient-to-r md:bg-gradient-to-b from-transparent via-cyan-400/70 to-transparent" />
                        </>
                      )}
                      <p className="text-white font-medium">{item.title}</p>
                    </div>
                  )}
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
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center p-8 bg-slate-900/50 border border-cyan-500/20 backdrop-blur rounded-lg hover-scale relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-12 w-auto object-contain relative z-10 opacity-80 group-hover:opacity-100 transition-opacity filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Контакты
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="bg-slate-900/50 border-cyan-500/20 backdrop-blur overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="https://cdn.poehali.dev/files/Инна.png" 
                  alt="Инна Петухова" 
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Инна Петухова</h3>
                <p className="text-xl text-gray-200">Генеральный директор АВС</p>
              </div>
              
              <div className="space-y-4">
                <Card className="bg-slate-900/50 border-cyan-500/20 backdrop-blur hover-scale">
                  <CardContent className="p-4 flex items-center gap-4">
                    <Icon name="Mail" className="text-cyan-400 flex-shrink-0" size={28} />
                    <div className="text-left">
                      <p className="text-gray-300 text-sm mb-1">Email</p>
                      <a href="mailto:Inna.Petuhova@autobisconsult.ru" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                        Inna.Petuhova@autobisconsult.ru
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-900/50 border-purple-500/20 backdrop-blur hover-scale">
                  <CardContent className="p-4 flex items-center gap-4">
                    <Icon name="Phone" className="text-purple-400 flex-shrink-0" size={28} />
                    <div className="text-left">
                      <p className="text-gray-300 text-sm mb-1">Телефон</p>
                      <a href="tel:+79852320005" className="text-purple-300 hover:text-purple-200 transition-colors">
                        +7-985-232-00-05
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-white">Не упустите шанс стать частью важного события!</h2>
          <p className="text-xl text-white mb-8">Измените будущее автомобильной отрасли вместе с нами</p>
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
            <DialogDescription className="text-gray-200">
              Заполните форму, и мы вышлем вам электронный билет
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleRegistration} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-white">ФИО *</Label>
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
                <Label htmlFor="email" className="text-white">Email *</Label>
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
                <Label htmlFor="phone" className="text-white">Телефон *</Label>
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
                <Label htmlFor="company" className="text-white">Компания *</Label>
                <Input 
                  id="company" 
                  name="company" 
                  required 
                  className="bg-slate-800 border-cyan-500/30"
                  placeholder="ООО 'Авто'"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="position" className="text-white">Должность *</Label>
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
              <Label className="text-white">Формат участия *</Label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="format" value="offline" required className="text-cyan-500" />
                  <span className="text-white">Очно</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="format" value="online" required className="text-cyan-500" />
                  <span className="text-white">Онлайн</span>
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
                    <p className="text-sm text-gray-300">Конференция</p>
                    <CardTitle className="text-xl text-white">ИИ в автопроме 2026</CardTitle>
                  </div>
                  <Icon name="Sparkles" className="text-cyan-400" size={32} />
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-300">Участник</p>
                    <p className="font-semibold text-white">{ticketData.fullName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Компания</p>
                    <p className="font-semibold text-white">{ticketData.company}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Должность</p>
                    <p className="font-semibold text-white">{ticketData.position}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Формат</p>
                    <p className="font-semibold text-white">{ticketData.format === 'offline' ? 'Очно' : 'Онлайн'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Дата</p>
                    <p className="font-semibold text-white">20 января 2026</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Время</p>
                    <p className="font-semibold text-white">10:00 - 18:00</p>
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