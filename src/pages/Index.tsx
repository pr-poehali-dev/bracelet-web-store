import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Icon from '@/components/ui/icon';

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Паракорд Elite",
      price: 1200,
      image: "/img/36efd5ce-8672-4abc-b9c5-d6f2a958dbc0.jpg",
      category: "Паракорд",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 3,
      name: "Outdoor Pro",
      price: 1800,
      image: "/img/87a63b22-442d-4c79-a8b9-d642c014e152.jpg",
      category: "Паракорд",
      sizes: ["S", "M", "L"]
    }
  ];

  const reviews = [
    {
      name: "Александр К.",
      text: "Отличное качество браслета! Носил в походе - выдержал всё.",
      rating: 5
    },
    {
      name: "Мария В.",
      text: "Красивый дизайн, удобно сидит на руке. Рекомендую!",
      rating: 5
    },
    {
      name: "Дмитрий П.",
      text: "Быстрая доставка, браслет соответствует описанию.",
      rating: 4
    }
  ];

  const sizeChart = [
    { size: "XS", wrist: "14-15 см", bracelet: "16 см" },
    { size: "S", wrist: "15-16 см", bracelet: "17 см" },
    { size: "M", wrist: "16-18 см", bracelet: "19 см" },
    { size: "L", wrist: "18-20 см", bracelet: "21 см" },
    { size: "XL", wrist: "20-22 см", bracelet: "23 см" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-secondary">BraceletStore</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="font-medium hover:text-primary transition-colors">Главная</a>
              <a href="#catalog" className="font-medium hover:text-primary transition-colors">Каталог</a>
              <a href="#reviews" className="font-medium hover:text-primary transition-colors">Отзывы</a>
              <a href="#about" className="font-medium hover:text-primary transition-colors">О нас</a>
              <a href="#delivery" className="font-medium hover:text-primary transition-colors">Доставка</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="ShoppingCart" size={18} />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-secondary mb-6">
            Плетёные браслеты<br />
            <span className="text-primary">из паракорда</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Стильные и прочные браслеты ручной работы. Идеальны для активного образа жизни и повседневной носки.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="ShoppingBag" size={20} />
              Смотреть каталог
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Ruler" size={20} />
              Таблица размеров
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary mb-4">Каталог браслетов</h3>
            <p className="text-muted-foreground">Выберите идеальный браслет для себя</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg bg-muted">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <Badge variant="secondary">{product.category}</Badge>
                  </div>
                  <CardDescription className="mb-4">
                    Доступные размеры: {product.sizes.join(", ")}
                  </CardDescription>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                    <Button className="bg-primary hover:bg-primary/90">
                      <Icon name="Plus" size={16} />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Size Chart */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary mb-4">Таблица размеров</h3>
            <p className="text-muted-foreground">Выберите правильный размер браслета</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Размер</TableHead>
                      <TableHead className="font-semibold">Обхват запястья</TableHead>
                      <TableHead className="font-semibold">Длина браслета</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sizeChart.map((size) => (
                      <TableRow key={size.size}>
                        <TableCell className="font-medium">{size.size}</TableCell>
                        <TableCell>{size.wrist}</TableCell>
                        <TableCell>{size.bracelet}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-secondary">
                    <Icon name="Info" size={16} className="inline mr-2" />
                    Для точного измерения используйте сантиметровую ленту или нитку
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary mb-4">Отзывы покупателей</h3>
            <p className="text-muted-foreground">Что говорят наши клиенты</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon 
                        key={i}
                        name="Star" 
                        size={16} 
                        className={i < review.rating ? "text-primary fill-current" : "text-muted-foreground"}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{review.text}"</p>
                  <p className="font-semibold text-secondary">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-secondary mb-8">О нас</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h4 className="text-xl font-semibold mb-4 text-secondary">Качество превыше всего</h4>
                <p className="text-muted-foreground mb-6">
                  Мы создаём браслеты из высококачественного паракорда и натуральной кожи. 
                  Каждый браслет плетётся вручную с особым вниманием к деталям.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4">
                    <Icon name="Shield" size={32} className="text-primary mx-auto mb-2" />
                    <p className="font-semibold">Гарантия качества</p>
                  </div>
                  <div className="text-center p-4">
                    <Icon name="Truck" size={32} className="text-primary mx-auto mb-2" />
                    <p className="font-semibold">Быстрая доставка</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg">
                  <Icon name="CheckCircle" size={24} className="text-primary" />
                  <span>Ручная работа</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg">
                  <Icon name="CheckCircle" size={24} className="text-primary" />
                  <span>Прочные материалы</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg">
                  <Icon name="CheckCircle" size={24} className="text-primary" />
                  <span>Стильный дизайн</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-secondary mb-4">Доставка и оплата</h3>
            <p className="text-muted-foreground">Удобные способы получения заказа</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="Package" size={48} className="text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Почта России</h4>
                <p className="text-sm text-muted-foreground">По всей России 3-7 дней</p>
                <p className="font-semibold text-primary mt-2">от 300 ₽</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Пункт выдачи</h4>
                <p className="text-sm text-muted-foreground">СДЭК, Wildberries</p>
                <p className="font-semibold text-primary mt-2">от 150 ₽</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Icon name="CreditCard" size={48} className="text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Оплата</h4>
                <p className="text-sm text-muted-foreground">Карта, наличные, СБП</p>
                <p className="font-semibold text-primary mt-2">Безопасно</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-primary-foreground" />
                </div>
                <h5 className="font-bold text-lg">BraceletStore</h5>
              </div>
              <p className="text-sm opacity-80">
                Качественные браслеты ручной работы для активного образа жизни
              </p>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">Каталог</h6>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:text-primary transition-colors">Паракорд браслеты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Плетёные браслеты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Аксессуары</a></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">Информация</h6>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Возврат</a></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">Контакты</h6>
              <div className="space-y-2 text-sm opacity-80">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 978 898 74 01</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>infobrasletsotre@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-white/20" />
          
          <div className="text-center text-sm opacity-60">
            <p>© 2024 BraceletStore. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;