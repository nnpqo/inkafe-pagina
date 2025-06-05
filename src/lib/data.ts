export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Cafetería' | 'Desayunos' | 'Almuerzos' | 'Postres' | 'Bebidas';
  tags: ('vegano' | 'sin gluten')[];
  imageUrl: string;
  imageHint: string;
}

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Espresso Clásico',
    description: 'Café intenso y aromático, la base de todo buen café.',
    price: 'S/ 7.00',
    category: 'Cafetería',
    tags: [],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'espresso coffee'
  },
  {
    id: '2',
    name: 'Cappuccino Cremoso',
    description: 'Espresso con leche vaporizada y una capa de espuma de leche.',
    price: 'S/ 10.00',
    category: 'Cafetería',
    tags: [],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'cappuccino art'
  },
  {
    id: '3',
    name: 'Tostadas con Palta',
    description: 'Pan artesanal tostado con palta fresca y un toque de limón.',
    price: 'S/ 15.00',
    category: 'Desayunos',
    tags: ['vegano'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'avocado toast'
  },
  {
    id: '4',
    name: 'Sándwich Inkafe Club',
    description: 'Pollo, tocino, lechuga, tomate y mayonesa en pan de molde.',
    price: 'S/ 22.00',
    category: 'Almuerzos',
    tags: [],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'club sandwich'
  },
  {
    id: '5',
    name: 'Cheesecake de Maracuyá',
    description: 'Cremoso cheesecake con una cubierta de pulpa de maracuyá.',
    price: 'S/ 14.00',
    category: 'Postres',
    tags: [],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'passionfruit cheesecake'
  },
  {
    id: '6',
    name: 'Jugo de Lúcuma Fresco',
    description: 'Jugo natural hecho con lúcuma fresca de temporada.',
    price: 'S/ 12.00',
    category: 'Bebidas',
    tags: ['vegano', 'sin gluten'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'lucuma juice'
  },
  {
    id: '7',
    name: 'Ensalada Vegana Power',
    description: 'Mix de hojas verdes, quinua, palta, tomate cherry y vinagreta especial.',
    price: 'S/ 20.00',
    category: 'Almuerzos',
    tags: ['vegano', 'sin gluten'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'vegan salad'
  },
  {
    id: '8',
    name: 'Galletas de Avena Sin Gluten',
    description: 'Deliciosas galletas caseras de avena, perfectas para celíacos.',
    price: 'S/ 8.00',
    category: 'Postres',
    tags: ['sin gluten'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'oatmeal cookies'
  }
];

export interface EventItem {
  id: string;
  name: string;
  date: string;
  time: string;
  description: string;
  type: 'Música en vivo' | 'Lecturas' | 'Juegos de mesa' | 'Promoción';
  imageUrl: string;
  imageHint: string;
}

export const eventItems: EventItem[] = [
  {
    id: '1',
    name: 'Noche de Jazz Acústico',
    date: 'Viernes, 25 de Octubre',
    time: '8:00 PM - 10:00 PM',
    description: 'Disfruta de una velada relajante con música jazz en vivo.',
    type: 'Música en vivo',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'jazz night'
  },
  {
    id: '2',
    name: 'Club de Lectura: "Cien Años de Soledad"',
    date: 'Miércoles, 13 de Noviembre',
    time: '7:00 PM - 8:30 PM',
    description: 'Únete a nuestra discusión mensual sobre grandes obras literarias.',
    type: 'Lecturas',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'book club'
  },
  {
    id: '3',
    name: 'Tarde de Juegos de Mesa',
    date: 'Sábado, 30 de Noviembre',
    time: '4:00 PM - 7:00 PM',
    description: 'Trae a tus amigos y disfruta de nuestra colección de juegos de mesa.',
    type: 'Juegos de mesa',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'board games'
  },
  {
    id: '4',
    name: 'Promo 2x1 en Lattes',
    date: 'Todos los Martes',
    time: '3:00 PM - 6:00 PM',
    description: 'Aprovecha nuestra promoción especial en todos los lattes.',
    type: 'Promoción',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'coffee promotion'
  }
];
