import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ContactsSectionProps {
  onRegisterClick: () => void;
}

export default function ContactsSection({ onRegisterClick }: ContactsSectionProps) {
  return (
    <>
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
                      <a href="mailto:Inna.Petuhova@autobisconsult.ru" className="text-cyan-300 hover:text-cyan-200 transition-colors break-all">
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
                
                <Card className="bg-slate-900/50 border-pink-500/20 backdrop-blur hover-scale">
                  <CardContent className="p-4 flex items-center gap-4">
                    <Icon name="Globe" className="text-pink-400 flex-shrink-0" size={28} />
                    <div className="text-left">
                      <p className="text-gray-300 text-sm mb-1">Сайт</p>
                      <a href="https://a-b-c.su" target="_blank" rel="noopener noreferrer" className="text-pink-300 hover:text-pink-200 transition-colors">
                        a-b-c.su
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-slate-900/50 border-cyan-500/20 backdrop-blur hover-scale">
                    <CardContent className="p-4 flex items-center gap-3">
                      <Icon name="Send" className="text-cyan-400 flex-shrink-0" size={24} />
                      <div className="text-left">
                        <a href="https://t.me/abc_cons" target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:text-cyan-200 transition-colors text-sm">
                          Telegram
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-slate-900/50 border-purple-500/20 backdrop-blur hover-scale">
                    <CardContent className="p-4 flex items-center gap-3">
                      <Icon name="Users" className="text-purple-400 flex-shrink-0" size={24} />
                      <div className="text-left">
                        <a href="https://vk.com/abc_cons" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 transition-colors text-sm">
                          VK
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
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
            onClick={onRegisterClick}
          >
            <Icon name="Ticket" className="mr-2" size={24} />
            Получить электронный билет
          </Button>
        </div>
      </section>
    </>
  );
}
