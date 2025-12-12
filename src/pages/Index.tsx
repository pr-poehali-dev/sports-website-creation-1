import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'equipment', 'books'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const equipmentItems = [
    {
      title: 'Блокировочный тренажер',
      description: 'Улучшает технику блокирования и прыжковую выносливость',
      icon: 'Shield',
      link: 'https://www.sportmaster.ru/product/18036934/'
    },
    {
      title: 'Тренажер для подачи',
      description: 'Отработка точности и силы подачи мяча',
      icon: 'Target',
      link: 'https://www.sportmaster.ru/product/17926745/'
    },
    {
      title: 'Сетка-симулятор',
      description: 'Развитие реакции и координации движений',
      icon: 'Activity',
      link: 'https://www.sportmaster.ru/product/16581234/'
    },
    {
      title: 'Силовой комплекс',
      description: 'Развитие взрывной силы и выносливости спортсменов',
      icon: 'Dumbbell',
      link: 'https://www.sportmaster.ru/catalog/trenazhery/'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">🏐 ВОЛЕЙБОЛ</h1>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'Обо мне' },
                { id: 'equipment', label: 'Тренажеры' },
                { id: 'books', label: 'Учебники' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block animate-bounce-subtle">
              <div className="text-8xl mb-4">🏐</div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Профессиональная
              <span className="block text-primary mt-2">подготовка волейболистов</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Современные методики тренировок, качественное оборудование и авторские учебные материалы
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="text-lg px-8"
                onClick={() => scrollToSection('equipment')}
              >
                <Icon name="Zap" size={20} className="mr-2" />
                Тренажеры
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8"
                onClick={() => scrollToSection('books')}
              >
                <Icon name="BookOpen" size={20} className="mr-2" />
                Учебники
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Обо мне</h2>
              <p className="text-xl text-muted-foreground mt-4">Дроздов Артём Александрович</p>
              <div className="w-20 h-1 bg-primary mx-auto mt-4" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 animate-slide-in-left">
                <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
                  <Icon name="GraduationCap" size={48} className="text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Студент 4 курса</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Факультет физической культуры и спорта (ФКиС). Изучаю современные методики спортивной подготовки и тренерское мастерство.
                  </p>
                </div>
              </div>
              <div className="space-y-6 animate-fade-in">
                <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
                  <Icon name="Trophy" size={48} className="text-secondary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Капитан команды</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Капитан футбольной команды университета. Активно занимаюсь футболом и веду команду к победам.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-card p-8 rounded-2xl shadow-lg border border-border animate-scale-in">
              <div className="flex items-start gap-4">
                <Icon name="Target" size={32} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Моя цель</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Развитие спорта через профессиональную подготовку, лидерство в команде и создание качественных 
                    учебных материалов для спортсменов всех уровней подготовки.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="equipment" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Волейбольные тренажеры</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональное оборудование для эффективных тренировок
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {equipmentItems.map((item, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-2 hover:border-primary"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{item.description}</CardDescription>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                    <a href={item.link}>
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="books" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Учебные материалы</h2>
              <p className="text-xl text-muted-foreground">
                Авторские методические пособия для тренеров и спортсменов
              </p>
              <div className="w-20 h-1 bg-primary mx-auto mt-4" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-scale-in">
                <img 
                  src="https://cdn.poehali.dev/projects/7b84bc79-2949-4f51-bea6-199d7cde6b76/files/e837f145-1a22-456d-a4a6-50b90c406dfe.jpg"
                  alt="Обложка учебника по волейболу"
                  className="w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Современная методика тренировок</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                      <p>Теоретические основы волейбола</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                      <p>Практические упражнения и тренировки</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                      <p>Тактика игры и стратегии команды</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Check" size={24} className="text-primary mt-1 flex-shrink-0" />
                      <p>Физическая подготовка спортсменов</p>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="w-full md:w-auto text-lg px-8" asChild>
                  <a href="#">
                    <Icon name="Download" size={20} className="mr-2" />
                    Скачать учебник
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-accent text-accent-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="text-4xl">🏐</div>
            <h3 className="text-2xl font-bold">Волейбольная подготовка</h3>
            <p className="text-accent-foreground/80">
              Профессиональные тренировки • Качественное оборудование • Методические материалы
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button variant="outline" size="icon" className="bg-accent-foreground/10 hover:bg-accent-foreground/20 border-accent-foreground/20">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="bg-accent-foreground/10 hover:bg-accent-foreground/20 border-accent-foreground/20">
                <Icon name="Phone" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="bg-accent-foreground/10 hover:bg-accent-foreground/20 border-accent-foreground/20">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
            <p className="text-sm text-accent-foreground/60 pt-8">
              © 2024 Все права защищены
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;