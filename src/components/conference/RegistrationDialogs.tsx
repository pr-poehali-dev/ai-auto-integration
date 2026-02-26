import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

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

interface RegistrationDialogsProps {
  showRegistration: boolean;
  showTicket: boolean;
  ticketData: RegistrationData | null;
  onRegistrationOpenChange: (open: boolean) => void;
  onTicketOpenChange: (open: boolean) => void;
  onRegistrationSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onDownloadTicket: () => void;
}

export default function RegistrationDialogs({
  showRegistration,
  showTicket,
  ticketData,
  onRegistrationOpenChange,
  onTicketOpenChange,
  onRegistrationSubmit,
  onDownloadTicket,
}: RegistrationDialogsProps) {
  return (
    <>
      <Dialog open={showRegistration} onOpenChange={onRegistrationOpenChange}>
        <DialogContent className="bg-slate-900 border-cyan-500/30 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Регистрация на конференцию
            </DialogTitle>
            <DialogDescription className="text-gray-200">
              Заполните форму, и мы вышлем вам электронный билет
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={onRegistrationSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-white">Фамилия Имя *</Label>
              <Input 
                id="fullName" 
                name="fullName" 
                required 
                className="bg-slate-800 border-cyan-500/30"
                placeholder="Иванов Иван"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">Телефон для связи *</Label>
              <Input 
                id="phone" 
                name="phone" 
                type="tel" 
                required 
                className="bg-slate-800 border-cyan-500/30"
                placeholder="+7 (999) 123-45-67"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="billingEmail" className="text-white">Адрес эл. почты для выставления счёта *</Label>
              <Input 
                id="billingEmail" 
                name="billingEmail" 
                type="email" 
                required 
                className="bg-slate-800 border-cyan-500/30"
                placeholder="billing@company.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-white">Название компании *</Label>
              <Input 
                id="company" 
                name="company" 
                required 
                className="bg-slate-800 border-cyan-500/30"
                placeholder="ООО «Название»"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="inn" className="text-white">ИНН *</Label>
                <Input 
                  id="inn" 
                  name="inn" 
                  required 
                  className="bg-slate-800 border-cyan-500/30"
                  placeholder="1234567890"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="kpp" className="text-white">КПП *</Label>
                <Input 
                  id="kpp" 
                  name="kpp" 
                  required 
                  className="bg-slate-800 border-cyan-500/30"
                  placeholder="123456789"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="legalAddress" className="text-white">Юридический адрес *</Label>
              <Input 
                id="legalAddress" 
                name="legalAddress" 
                required 
                className="bg-slate-800 border-cyan-500/30"
                placeholder="г. Москва, ул. Примерная, д. 1"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="seats" className="text-white">Количество мест *</Label>
              <select
                id="seats"
                name="seats"
                required
                defaultValue=""
                className="w-full rounded-md bg-slate-800 border border-cyan-500/30 text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="" disabled>Выберите количество</option>
                {[1,2,3,4,5,6,7,8,9,10].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'место' : n < 5 ? 'места' : 'мест'}</option>
                ))}
              </select>
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

      <Dialog open={showTicket} onOpenChange={onTicketOpenChange}>
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
                <div className="flex items-center justify-center mb-6">
                  <img 
                    src="https://cdn.poehali.dev/files/Реалистичное фото-высветленный.png" 
                    alt="ABC Auto Business Consulting" 
                    className="h-24 w-auto object-contain drop-shadow-[0_0_20px_rgba(14,165,233,0.4)]"
                  />
                </div>
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
                    <p className="text-sm text-gray-300">Кол-во мест</p>
                    <p className="font-semibold text-white">{ticketData.seats}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Телефон</p>
                    <p className="font-semibold text-white">{ticketData.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Дата</p>
                    <p className="font-semibold text-white">2 апреля 2026</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Время</p>
                    <p className="font-semibold text-white">10:00 - 18:00</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-cyan-500/20">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="w-32 h-32 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center text-white text-xs">
                        QR-код билета
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <p className="text-sm text-gray-300 font-semibold">Контакты и ссылки:</p>
                      <div className="space-y-2 text-sm">
                        <a href="https://a-b-c.su" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-pink-300 hover:text-pink-200 transition-colors">
                          <Icon name="Globe" size={16} />
                          <span>a-b-c.su</span>
                        </a>
                        <a href="https://t.me/abc_cons" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors">
                          <Icon name="Send" size={16} />
                          <span>t.me/abc_cons</span>
                        </a>
                        <a href="https://vk.com/abc_cons" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors">
                          <Icon name="Users" size={16} />
                          <span>vk.com/abc_cons</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={onDownloadTicket}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700"
                >
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать билет
                </Button>
                
                <div className="pt-4 border-t border-cyan-500/20 space-y-3">
                  <p className="text-sm text-gray-300 text-center font-semibold">Контакты организатора:</p>
                  <div className="flex flex-col gap-2 text-sm">
                    <a href="mailto:Inna.Petuhova@autobisconsult.ru" className="flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors">
                      <Icon name="Mail" size={16} />
                      <span>Inna.Petuhova@autobisconsult.ru</span>
                    </a>
                    <a href="tel:+79852320005" className="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors">
                      <Icon name="Phone" size={16} />
                      <span>+7-985-232-00-05</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
