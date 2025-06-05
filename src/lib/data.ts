
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Cafetería' | 'Desayunos' | 'Almuerzos' | 'Postres' | 'Bebidas' | 'Tradicional Boliviano' | 'Sandwiches';
  tags: ('vegano' | 'sin gluten' | 'picante' | 'nuevo')[];
  imageUrl: string;
  imageHint: string;
}

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Espresso Clásico Boliviano',
    description: 'Café intenso y aromático de granos seleccionados de los Yungas.',
    price: 'Bs. 10.00',
    category: 'Cafetería',
    tags: [],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'espresso bolivian coffee'
  },
  {
    id: '2',
    name: 'Cappuccino Cremoso de la Llajta',
    description: 'Espresso con leche vaporizada y una capa de espuma de leche, arte latte opcional.',
    price: 'Bs. 15.00',
    category: 'Cafetería',
    tags: [],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'cappuccino cochabamba cafe'
  },
  {
    id: '3',
    name: 'Tostadas con Palta Fresca y Queso Chaqueño',
    description: 'Pan artesanal tostado con palta fresca de Mizque y lascas de queso chaqueño.',
    price: 'Bs. 22.00',
    category: 'Desayunos',
    tags: [],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'avocado toast bolivian cheese'
  },
  {
    id: '4',
    name: 'Sándwich Inkafe Club Especial',
    description: 'Pollo a la plancha, tocino crujiente, lechuga, tomate y nuestra mayonesa de hierbas en pan integral.',
    price: 'Bs. 30.00',
    category: 'Sandwiches',
    tags: ['nuevo'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'club sandwich gourmet'
  },
  {
    id: '5',
    name: 'Cheesecake de Maracuyá de Coroico',
    description: 'Cremoso cheesecake con una cubierta de pulpa de maracuyá fresca de Coroico, equilibrio perfecto de dulce y ácido.',
    price: 'Bs. 20.00',
    category: 'Postres',
    tags: [],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'passionfruit cheesecake bolivia'
  },
  {
    id: '6',
    name: 'Jugo de Tumbo Fresco de Estación',
    description: 'Jugo natural hecho con tumbo fresco de los valles, una explosión de sabor cítrico y refrescante.',
    price: 'Bs. 18.00',
    category: 'Bebidas',
    tags: ['vegano', 'sin gluten'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'tumbo juice bolivia'
  },
  {
    id: '7',
    name: 'Ensalada Andina Power con Quinua Real',
    description: 'Mix de hojas verdes, quinua real, palta, tomate, choclo y cubos de queso fresco con vinagreta de hierbas andinas.',
    price: 'Bs. 28.00',
    category: 'Almuerzos',
    tags: ['sin gluten'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'andean quinoa salad'
  },
  {
    id: '8',
    name: 'Cuñapé Horneado (Porción)',
    description: 'Deliciosos pancitos de queso y almidón de yuca, tradición cochabambina.',
    price: 'Bs. 12.00',
    category: 'Tradicional Boliviano',
    tags: ['sin gluten'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'cuñape bolivian bread'
  },
  {
    id: '9',
    name: 'Api Morado con Pastel de Queso',
    description: 'Bebida tradicional caliente de maíz morado, acompañada de un delicioso pastel frito relleno de queso.',
    price: 'Bs. 20.00',
    category: 'Tradicional Boliviano',
    tags: [],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'api morado pastel bolivia'
  },
  {
    id: '10',
    name: 'Salteña Boliviana de Pollo',
    description: 'Empanada jugosa horneada rellena de pollo, papas, arvejas y un toque picante.',
    price: 'Bs. 10.00',
    category: 'Tradicional Boliviano',
    tags: ['picante'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'salteña boliviana'
  },
  {
    id: '11',
    name: 'Café Helado con Leche Condensada',
    description: 'Nuestro espresso boliviano sobre hielo, mezclado con leche y un toque dulce de leche condensada.',
    price: 'Bs. 18.00',
    category: 'Cafetería',
    tags: [],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'iced coffee condensed milk'
  },
  {
    id: '12',
    name: 'Té de Coca Digestivo',
    description: 'Infusión tradicional de hojas de coca, ideal para después de comer o para la altura.',
    price: 'Bs. 8.00',
    category: 'Bebidas',
    tags: ['sin gluten'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'coca tea bolivia'
  },
  {
    id: '13',
    name: 'Huminta a la Olla Dulce',
    description: 'Tamal dulce de choclo tierno envuelto en su propia chala y cocido a la olla.',
    price: 'Bs. 15.00',
    category: 'Tradicional Boliviano',
    tags: ['sin gluten'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'huminta boliviana'
  },
  {
    id: '14',
    name: 'Brownie de Chocolate Amargo con Nueces',
    description: 'Brownie denso y chocolatoso con trozos de nueces, perfecto para los amantes del cacao.',
    price: 'Bs. 16.00',
    category: 'Postres',
    tags: [],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'chocolate brownie nuts'
  },
  {
    id: '15',
    name: 'Affogato Clásico',
    description: 'Una bola de helado de vainilla artesanal "ahogada" en un shot de nuestro espresso caliente.',
    price: 'Bs. 18.00',
    category: 'Postres',
    tags: [],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'affogato coffee dessert'
  },
  {
    id: '16',
    name: 'Sándwich Vegano de Hongos Salteados',
    description: 'Hongos portobello y champiñones salteados con pimientos y cebolla caramelizada en pan ciabatta.',
    price: 'Bs. 28.00',
    category: 'Sandwiches',
    tags: ['vegano', 'nuevo'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'vegan mushroom sandwich'
  },
  {
    id: '17',
    name: 'Jugo Detox Verde',
    description: 'Combinación refrescante de espinaca, pepino, manzana verde, jengibre y limón.',
    price: 'Bs. 20.00',
    category: 'Bebidas',
    tags: ['vegano', 'sin gluten'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'green detox juice'
  },
  {
    id: '18',
    name: 'Panini Caprese Boliviano',
    description: 'Tomate fresco, mozzarella de búfala local y albahaca con un toque de pesto en pan panini tostado.',
    price: 'Bs. 25.00',
    category: 'Sandwiches',
    tags: [],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'caprese panini cochabamba'
  },
  {
    id: '19',
    name: 'Mocaccino Rico',
    description: 'Espresso, leche vaporizada y chocolate boliviano de alta calidad, coronado con crema batida.',
    price: 'Bs. 18.00',
    category: 'Cafetería',
    tags: [],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mocaccino bolivian chocolate'
  },
  {
    id: '20',
    name: 'Pique Macho (Versión Café)',
    description: 'Pequeña porción de nuestro famoso Pique Macho: carne de res picada, salchichas, papas fritas, tomate, cebolla y locoto. ¡Ideal para compartir!',
    price: 'Bs. 35.00',
    category: 'Almuerzos',
    tags: ['picante'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'pique macho cochabamba'
  }
];

export interface EventItem {
  id: string;
  name: string;
  date: string;
  time: string;
  description: string;
  type: 'Música en vivo' | 'Lecturas' | 'Juegos de mesa' | 'Promoción' | 'Taller';
  imageUrl: string;
  imageHint: string;
}

export const eventItems: EventItem[] = [
  {
    id: '1',
    name: 'Noche de Jazz Andino Fusión',
    date: 'Viernes, 25 de Octubre',
    time: '8:00 PM - 10:00 PM',
    description: 'Disfruta de una velada relajante con música jazz fusionada con ritmos andinos.',
    type: 'Música en vivo',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'andean jazz night cochabamba'
  },
  {
    id: '2',
    name: 'Club de Lectura: Autores Bolivianos',
    date: 'Miércoles, 13 de Noviembre',
    time: '7:00 PM - 8:30 PM',
    description: 'Únete a nuestra discusión mensual sobre destacadas obras de la literatura boliviana.',
    type: 'Lecturas',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'bolivian book club'
  },
  {
    id: '3',
    name: 'Tarde de Catan y Ajedrez',
    date: 'Sábado, 30 de Noviembre',
    time: '4:00 PM - 7:00 PM',
    description: 'Trae a tus amigos y disfruta de nuestra colección de juegos de mesa, con torneos de Catan y Ajedrez.',
    type: 'Juegos de mesa',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'board games catan chess'
  },
  {
    id: '4',
    name: 'Promo 2x1 en Cafés Filtrados',
    date: 'Todos los Martes',
    time: '3:00 PM - 6:00 PM',
    description: 'Aprovecha nuestra promoción especial en todos los cafés filtrados (V60, Chemex, Prensa Francesa).',
    type: 'Promoción',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'filter coffee promotion'
  },
  {
    id: '5',
    name: 'Taller de Barismo Básico',
    date: 'Sábado, 18 de Enero',
    time: '10:00 AM - 1:00 PM',
    description: 'Aprende los fundamentos para preparar un café perfecto en casa. Cupos limitados.',
    type: 'Taller',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'barista workshop cochabamba'
  }
];

export type TableStatus = 'available' | 'selected' | 'reserved';

export interface CafeTable {
  id: string;
  name: string;
  capacity: number;
  status: TableStatus;
  position: {
    row: number;
    col: number;
  };
}

export const initialCafeTables: CafeTable[] = [
  { id: 't1', name: 'M1', capacity: 2, status: 'available', position: { row: 1, col: 1 } },
  { id: 't2', name: 'M2', capacity: 4, status: 'available', position: { row: 1, col: 2 } },
  { id: 't3', name: 'M3', capacity: 2, status: 'reserved', position: { row: 1, col: 3 } },
  { id: 't4', name: 'M4', capacity: 6, status: 'available', position: { row: 2, col: 1 } },
  { id: 't5', name: 'M5', capacity: 4, status: 'available', position: { row: 2, col: 2 } },
  { id: 't6', name: 'M6', capacity: 2, status: 'available', position: { row: 2, col: 3 } },
  { id: 't7', name: 'V1', capacity: 1, status: 'available', position: { row: 3, col: 1 } }, // Ventana
  { id: 't8', name: 'V2', capacity: 1, status: 'available', position: { row: 3, col: 2 } }, // Ventana
  { id: 't9', name: 'S1', capacity: 8, status: 'available', position: { row: 4, col: 1 } }, // Sofá
];

export const availableTimes: string[] = [
  "08:00", "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00", "17:00",
  "18:00", "19:00", "20:00",
];

// Lista de frutas de temporada (ejemplos para Bolivia)
export const seasonalFruits: string[] = [
  'Mango',
  'Frutilla', // Fresa
  'Lúcuma',
  'Palta', 
  'Maracuyá',
  'Tumbo',
  'Achachairú',
  'Guapurú'
];

// IDs de items que son candidatos a ser destacados.
// Estos IDs deben coincidir con los IDs de `menuItems`.
// Por ejemplo, el cheesecake de maracuyá, jugo de tumbo y salteña.
export const candidateFeaturedItemIds = ['5', '6', '10', '13'];
