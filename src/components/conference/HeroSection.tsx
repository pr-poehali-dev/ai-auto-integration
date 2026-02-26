import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onRegisterClick: () => void;
}

export default function HeroSection({ onRegisterClick }: HeroSectionProps) {
  return (
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
              <span className="text-2xl md:text-4xl text-cyan-300 font-medium">2 апреля 2026 • Москва</span>
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
              onClick={onRegisterClick}
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
  );
}
