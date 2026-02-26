import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Speaker {
  name: string;
  position: string;
  company: string;
}

interface ScheduleItem {
  time?: string;
  title: string;
  subtitle?: string;
  topics?: string[];
  cases?: string;
  isSession?: boolean;
}

interface ProgramSectionProps {
  speakers: Speaker[];
  schedule: ScheduleItem[];
  partners: { name: string; logo: string }[];
}

export default function ProgramSection({ speakers, schedule, partners }: ProgramSectionProps) {
  return (
    <>
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
          <p className="text-center text-gray-200 mb-12 text-lg">2 апреля 2026</p>
          
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
    </>
  );
}
