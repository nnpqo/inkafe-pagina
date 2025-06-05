
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Cafetería' | 'Desayunos' | 'Almuerzos' | 'Postres' | 'Bebidas' | 'Tradicional Boliviano' | 'Sandwiches' | 'Panadería';
  tags: ('vegano' | 'sin gluten' | 'picante' | 'nuevo' | 'popular')[];
  imageUrl: string;
  imageHint: string;
}

export const menuItems: MenuItem[] = [
  // Cafetería
  {
    id: '1',
    name: 'Espresso Clásico Boliviano',
    description: 'Café intenso y aromático de granos seleccionados de los Yungas.',
    price: 'Bs. 10.00',
    category: 'Cafetería',
    tags: ['popular'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'espresso bolivian coffee'
  },
  {
    id: '2',
    name: 'Cappuccino Cremoso de la Llajta',
    description: 'Espresso con leche vaporizada y espuma de leche, arte latte opcional.',
    price: 'Bs. 15.00',
    category: 'Cafetería',
    tags: ['popular'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'cappuccino cochabamba cafe'
  },
  {
    id: 'cafe-americano',
    name: 'Americano Intenso',
    description: 'Espresso doble diluido con agua caliente, sabor robusto.',
    price: 'Bs. 12.00',
    category: 'Cafetería',
    tags: [],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'americano coffee black'
  },
  {
    id: 'cafe-latte-vegano',
    name: 'Latte Vegano de Almendras',
    description: 'Espresso suave con leche de almendras vaporizada y un toque de canela.',
    price: 'Bs. 18.00',
    category: 'Cafetería',
    tags: ['vegano', 'nuevo'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'vegan almond latte'
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
    id: 'cafe-chocolate-vegano',
    name: 'Chocolate Caliente Vegano con Cacao Boliviano',
    description: 'Bebida caliente y reconfortante hecha con cacao puro de Bolivia y leche de coco.',
    price: 'Bs. 20.00',
    category: 'Cafetería',
    tags: ['vegano'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'vegan hot chocolate bolivian cacao'
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

  // Desayunos
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
    id: 'desayuno-avena-bowl',
    name: 'Bowl de Avena y Chía con Frutas de Temporada',
    description: 'Avena y semillas de chía cocidas lentamente, servidas con frutas frescas de temporada y nueces.',
    price: 'Bs. 25.00',
    category: 'Desayunos',
    tags: ['vegano', 'sin gluten', 'popular'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'oatmeal chia bowl fruits'
  },
  {
    id: 'desayuno-yogurt-vegano',
    name: 'Bowl Vegano de Yogurt de Coco y Granola Casera',
    description: 'Yogurt cremoso de coco con granola casera sin gluten y frutos rojos.',
    price: 'Bs. 28.00',
    category: 'Desayunos',
    tags: ['vegano', 'sin gluten'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'vegan yogurt granola bowl'
  },
  {
    id: 'desayuno-revuelto-tofu',
    name: 'Revuelto de Tofu Ranchero',
    description: 'Tofu desmenuzado y salteado con tomate, cebolla, pimiento y un toque de cúrcuma. Servido con tortillas de maíz.',
    price: 'Bs. 30.00',
    category: 'Desayunos',
    tags: ['vegano', 'sin gluten', 'picante'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'tofu scramble ranchero'
  },

  // Almuerzos
  {
    id: '7',
    name: 'Ensalada Andina Power con Quinua Real',
    description: 'Mix de hojas verdes, quinua real, palta, tomate, choclo y cubos de queso fresco con vinagreta de hierbas andinas.',
    price: 'Bs. 28.00',
    category: 'Almuerzos',
    tags: ['sin gluten', 'popular'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'andean quinoa salad'
  },
  {
    id: 'almuerzo-curry-lentejas',
    name: 'Curry Rojo de Lentejas y Vegetales',
    description: 'Lentejas rojas cocinadas en una salsa cremosa de curry rojo y leche de coco, con variedad de vegetales. Servido con arroz integral.',
    price: 'Bs. 35.00',
    category: 'Almuerzos',
    tags: ['vegano', 'sin gluten', 'picante'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'vegan lentil curry'
  },
  {
    id: 'almuerzo-hamburguesa-vegana',
    name: 'Hamburguesa Vegana de Quinua y Frijoles Negros',
    description: 'Deliciosa hamburguesa casera a base de quinua y frijoles negros, con lechuga, tomate, cebolla morada y salsa especial vegana en pan artesanal.',
    price: 'Bs. 38.00',
    category: 'Almuerzos',
    tags: ['vegano', 'nuevo'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'vegan quinoa burger'
  },
  {
    id: 'almuerzo-sopa-quinua',
    name: 'Sopa de Quinua Energizante',
    description: 'Sopa nutritiva y reconfortante con quinua, zanahoria, apio, papa y un toque de cilantro fresco.',
    price: 'Bs. 25.00',
    category: 'Almuerzos',
    tags: ['vegano', 'sin gluten'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'quinoa soup vegetables'
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
  },

  // Postres
  {
    id: '5',
    name: 'Cheesecake de Maracuyá de Coroico',
    description: 'Cremoso cheesecake con una cubierta de pulpa de maracuyá fresca de Coroico, equilibrio perfecto de dulce y ácido.',
    price: 'Bs. 20.00',
    category: 'Postres',
    tags: ['popular'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'passionfruit cheesecake bolivia'
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
    id: 'postre-torta-chocolate-vegana',
    name: 'Torta Húmeda de Chocolate Vegana',
    description: 'Deliciosa y esponjosa torta de chocolate hecha sin ingredientes de origen animal, cubierta con frosting de cacao.',
    price: 'Bs. 22.00',
    category: 'Postres',
    tags: ['vegano', 'nuevo'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'vegan chocolate cake'
  },
  {
    id: 'postre-galletas-avena-gf',
    name: 'Galletas de Avena y Chispas Sin Gluten',
    description: 'Crujientes por fuera y suaves por dentro, estas galletas de avena sin gluten con chispas de chocolate son una delicia.',
    price: 'Bs. 15.00', // Porción de 3
    category: 'Postres',
    tags: ['sin gluten'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'gluten free oatmeal cookies'
  },
  {
    id: 'postre-mousse-mango-coco',
    name: 'Mousse Cremoso de Mango y Coco',
    description: 'Ligero y refrescante mousse hecho con pulpa de mango natural y leche de coco, endulzado con sirope de agave.',
    price: 'Bs. 18.00',
    category: 'Postres',
    tags: ['vegano', 'sin gluten', 'nuevo'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'vegan mango coconut mousse'
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

  // Bebidas
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
    id: '17',
    name: 'Jugo Detox Verde Energizante',
    description: 'Combinación refrescante de espinaca, pepino, manzana verde, jengibre y limón.',
    price: 'Bs. 20.00',
    category: 'Bebidas',
    tags: ['vegano', 'sin gluten', 'popular'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'green detox juice'
  },
  {
    id: 'bebida-limonada-hierbabuena',
    name: 'Limonada Fresca con Hierbabuena',
    description: 'Clásica limonada con un toque refrescante de hierbabuena recién cortada.',
    price: 'Bs. 15.00',
    category: 'Bebidas',
    tags: ['vegano', 'sin gluten'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'lemonade mint fresh'
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
    id: 'bebida-smoothie-tropical',
    name: 'Smoothie Tropical Vegano',
    description: 'Batido cremoso con mango, piña, plátano y leche de almendras.',
    price: 'Bs. 22.00',
    category: 'Bebidas',
    tags: ['vegano', 'sin gluten', 'nuevo'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'vegan tropical smoothie'
  },

  // Tradicional Boliviano
  {
    id: '8',
    name: 'Cuñapé Horneado (Porción de 3)',
    description: 'Deliciosos pancitos de queso y almidón de yuca, tradición cochabambina.',
    price: 'Bs. 12.00',
    category: 'Tradicional Boliviano',
    tags: ['sin gluten', 'popular'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'cuñape bolivian bread'
  },
  {
    id: '9',
    name: 'Api Morado con Pastel de Queso',
    description: 'Bebida tradicional caliente de maíz morado, acompañada de un delicioso pastel frito relleno de queso.',
    price: 'Bs. 20.00',
    category: 'Tradicional Boliviano',
    tags: ['popular'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'api morado pastel bolivia'
  },
  {
    id: '10',
    name: 'Salteña Boliviana de Pollo Picante',
    description: 'Empanada jugosa horneada rellena de pollo, papas, arvejas y un toque picante de ají.',
    price: 'Bs. 10.00',
    category: 'Tradicional Boliviano',
    tags: ['picante'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'salteña boliviana chicken'
  },
  {
    id: 'trad-saltena-vegana',
    name: 'Salteña Vegana de Soya y Verduras',
    description: 'Nuestra versión vegana de la salteña, rellena de soya texturizada guisada con verduras y especias.',
    price: 'Bs. 12.00',
    category: 'Tradicional Boliviano',
    tags: ['vegano', 'nuevo', 'picante'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'vegan salteña bolivia'
  },
  {
    id: '13',
    name: 'Huminta a la Olla Dulce',
    description: 'Tamal dulce de choclo tierno envuelto en su propia chala y cocido a la olla.',
    price: 'Bs. 15.00',
    category: 'Tradicional Boliviano',
    tags: ['sin gluten'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'huminta boliviana sweet'
  },
  {
    id: 'trad-sopa-mani-vegana',
    name: 'Sopa de Maní Vegana Tradicional',
    description: 'Cremosa y sustanciosa sopa de maní al estilo boliviano, preparada sin carne. Acompañada de papas fritas hilo.',
    price: 'Bs. 30.00',
    category: 'Tradicional Boliviano',
    tags: ['vegano', 'sin gluten', 'nuevo'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'vegan peanut soup bolivia'
  },

  // Sandwiches
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
    id: '16',
    name: 'Sándwich Vegano de Hongos Salteados y Pesto',
    description: 'Hongos portobello y champiñones salteados con pimientos, cebolla caramelizada y pesto de albahaca vegano en pan ciabatta.',
    price: 'Bs. 28.00',
    category: 'Sandwiches',
    tags: ['vegano', 'popular'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'vegan mushroom pesto sandwich'
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
    id: 'sand-palta-tomate-gf',
    name: 'Sándwich de Palta y Tomate en Pan Sin Gluten',
    description: 'Abundante palta fresca, rodajas de tomate maduro, hojas de rúcula y un toque de aceite de oliva en pan artesanal sin gluten.',
    price: 'Bs. 26.00',
    category: 'Sandwiches',
    tags: ['vegano', 'sin gluten', 'nuevo'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'avocado tomato sandwich gluten free'
  },

  // Panadería
  {
    id: 'pan-marraqueta',
    name: 'Marraqueta Crujiente (Unidad)',
    description: 'Pan tradicional boliviano, crujiente por fuera y suave por dentro. Perfecto para acompañar tu café.',
    price: 'Bs. 2.00',
    category: 'Panadería',
    tags: ['popular'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'marraqueta bolivian bread'
  },
  {
    id: 'pan-integral-semillas',
    name: 'Pan Integral Artesanal con Semillas',
    description: 'Hogaza de pan integral hecho con masa madre y una mezcla de semillas de girasol, linaza y chía.',
    price: 'Bs. 15.00', // Hogaza pequeña
    category: 'Panadería',
    tags: ['vegano'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'artisanal whole wheat bread seeds'
  },
  {
    id: 'pan-croissant',
    name: 'Croissant Clásico de Mantequilla',
    description: 'Hojaldrado y delicioso croissant hecho con mantequilla de alta calidad.',
    price: 'Bs. 8.00',
    category: 'Panadería',
    tags: [],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'butter croissant classic'
  },
  {
    id: 'pan-queque-zanahoria-vegano',
    name: 'Queque de Zanahoria Vegano con Nueces',
    description: 'Esponjoso y húmedo queque de zanahoria y especias, con trozos de nueces. Totalmente vegano.',
    price: 'Bs. 12.00', // Porción
    category: 'Panadería',
    tags: ['vegano', 'nuevo'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'vegan carrot cake slice'
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
  'Guapurú',
  'Ciruela',
  'Durazno',
  'Uva'
];

// IDs de items que son candidatos a ser destacados.
// Estos IDs deben coincidir con los IDs de `menuItems`.
export const candidateFeaturedItemIds = [
    '5', // Cheesecake de Maracuyá de Coroico
    'desayuno-avena-bowl', // Bowl de Avena y Chía con Frutas de Temporada
    'trad-sopa-mani-vegana', // Sopa de Maní Vegana Tradicional
    '17', // Jugo Detox Verde Energizante
    'almuerzo-hamburguesa-vegana' // Hamburguesa Vegana de Quinua y Frijoles Negros
];
