
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Cafetería de Origen' | 'Desayunos Energéticos' | 'Aperitivos Bolivianos' | 'Postres Tentadores' | 'Bebidas Refrescantes' | 'Panadería Artesanal';
  tags: ('vegano' | 'sin gluten' | 'picante' | 'nuevo' | 'popular' | 'tradicional')[];
  imageUrl: string;
  imageHint: string;
}

export const menuItems: MenuItem[] = [
  // Cafetería de Origen
  {
    id: '1',
    name: 'Espresso Intenso de los Yungas',
    description: 'Un shot concentrado de nuestro mejor café de altura de los Yungas, con notas achocolatadas y cítricas. Pura energía boliviana.',
    price: 'Bs. 10.00',
    category: 'Cafetería de Origen',
    tags: ['popular', 'tradicional'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'taza espresso aromatico granos yungas bolivia primer plano'
  },
  {
    id: '2',
    name: 'Cappuccino Cremoso de la Llajta',
    description: 'Nuestro espresso yungueño con leche fresca vaporizada y una capa de espuma sedosa. Arte latte con motivos andinos opcional.',
    price: 'Bs. 15.00',
    category: 'Cafetería de Origen',
    tags: ['popular'],
    imageUrl: '/Cappuccino.jpg',
    imageHint: 'cappuccino con arte latte andino cafeteria Cochabamba'
  },
  {
    id: 'cafe-americano',
    name: 'Americano Boliviano Robusto',
    description: 'Doble shot de espresso de Caranavi diluido con agua caliente, ideal para quienes disfrutan un sabor intenso y prolongado.',
    price: 'Bs. 12.00',
    category: 'Cafetería de Origen',
    tags: [],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'taza cafe americano negro vapor en mesa rustica bolivia'
  },
  {
    id: 'cafe-latte-vegano',
    name: 'Latte Vegano de Almendras y Canela',
    description: 'Espresso suave de Coroico con leche de almendras vaporizada, endulzado con sirope de agave y un toque de canela molida.',
    price: 'Bs. 18.00',
    category: 'Cafetería de Origen',
    tags: ['vegano', 'nuevo'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'latte vegano almendras canela en cafeteria moderna Cochabamba'
  },
  {
    id: '19',
    name: 'Mocaccino El Ceibo',
    description: 'La perfecta fusión de nuestro espresso, leche vaporizada y auténtico chocolate boliviano "El Ceibo", coronado con crema batida y cacao espolvoreado.',
    price: 'Bs. 18.00',
    category: 'Cafetería de Origen',
    tags: ['popular'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mocaccino con chocolate boliviano El Ceibo y crema batida'
  },
  {
    id: 'cafe-chocolate-vegano',
    name: 'Chocolate Caliente Vegano con Cacao Amazónico',
    description: 'Bebida densa y reconfortante hecha con cacao puro de la Amazonía boliviana y leche de coco orgánica. Una delicia sin lácteos.',
    price: 'Bs. 20.00',
    category: 'Cafetería de Origen',
    tags: ['vegano'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'taza chocolate caliente vegano cacao amazonico boliviano marshmallows veganos'
  },
  {
    id: '11',
    name: 'Café Helado "Dulce Tentación"',
    description: 'Nuestro espresso yungueño doble, servido sobre hielo, mezclado con leche fresca y un generoso toque de leche condensada artesanal.',
    price: 'Bs. 18.00',
    category: 'Cafetería de Origen',
    tags: ['nuevo'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'cafe helado con leche condensada en vaso alto bolivia'
  },
  {
    id: 'cafe-filtrado-v60',
    name: 'Café Filtrado V60 (Origen del Mes)',
    description: 'Descubre los matices de nuestros cafés especiales de microlotes bolivianos, preparados meticulosamente en V60. Pregunta por el origen del mes.',
    price: 'Bs. 20.00',
    category: 'Cafetería de Origen',
    tags: ['popular'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'preparacion cafe V60 barista boliviano cafeteria especializada'
  },
  {
    id: 'cafe-chai-latte',
    name: 'Té Chai Latte Especiado de la India (Estilo Boliviano)',
    description: 'Mezcla aromática de té negro, especias exóticas y leche vaporizada, con un toque dulce de miel de caña local.',
    price: 'Bs. 17.00',
    category: 'Cafetería de Origen',
    tags: [],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'taza te chai latte especias aromaticas con canela y anis estrella'
  },
  {
    id: 'cafe-matcha-latte',
    name: 'Matcha Latte Ceremonial Japonés',
    description: 'Té verde matcha de grado ceremonial batido con leche (opción vegana disponible). Lleno de antioxidantes y energía suave.',
    price: 'Bs. 22.00',
    category: 'Cafetería de Origen',
    tags: ['nuevo', 'vegano'], // Vegano si se pide con leche vegetal
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'matcha latte verde vibrante con arte latte sencillo'
  },
  {
    id: 'cafe-frappuccino-caramelo',
    name: 'Frappuccino de Café y Caramelo Salado',
    description: 'Bebida helada y cremosa con base de nuestro café, hielo, leche y un delicioso remolino de caramelo salado casero, coronado con crema.',
    price: 'Bs. 25.00',
    category: 'Cafetería de Origen',
    tags: ['popular', 'nuevo'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'frappuccino cafe caramelo salado con crema batida en vaso alto'
  },

  // Desayunos Energéticos
  {
    id: '3',
    name: 'Tostadas "De la Abuela" con Palta y Queso Chaqueño',
    description: 'Pan de campo artesanal tostado, cubierto con palta fresca de Mizque, lascas de queso chaqueño y un chorrito de aceite de oliva extra virgen.',
    price: 'Bs. 22.00',
    category: 'Desayunos Energéticos',
    tags: ['tradicional'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'tostadas palta queso chaqueño desayuno boliviano rustico'
  },
  {
    id: 'desayuno-avena-bowl',
    name: 'Bowl de Avena y Chía "Andino Power"',
    description: 'Avena y semillas de chía cocidas en leche (opción vegana con leche de almendras), servidas con mix de frutas de temporada de los valles, granola casera y nueces.',
    price: 'Bs. 25.00',
    category: 'Desayunos Energéticos',
    tags: ['vegano', 'sin gluten', 'popular'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'bowl avena chia frutas frescas granola nueces desayuno saludable bolivia'
  },
  {
    id: 'desayuno-yogurt-vegano',
    name: 'Bowl Vegano de Yogurt de Coco y Granola de Quinua',
    description: 'Yogurt cremoso de coco hecho en casa, acompañado de granola crocante de quinua y amaranto, y frutos rojos del valle.',
    price: 'Bs. 28.00',
    category: 'Desayunos Energéticos',
    tags: ['vegano', 'sin gluten', 'nuevo'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'bowl yogurt coco vegano granola quinua frutos rojos desayuno Cochabamba'
  },
  {
    id: 'desayuno-revuelto-tofu',
    name: 'Revuelto de Tofu "Ranchero Vegano"',
    description: 'Tofu orgánico desmenuzado y salteado con tomate fresco, cebolla, pimentón ahumado, un toque de cúrcuma y llajua casera. Servido con tortillas de maíz o pan integral tostado.',
    price: 'Bs. 30.00',
    category: 'Desayunos Energéticos',
    tags: ['vegano', 'sin gluten', 'picante'], // Sin gluten si se elige tortillas de maíz
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'revuelto tofu vegano ranchero con tortillas maiz y llajua boliviana'
  },
  {
    id: 'desayuno-continental-inkafe',
    name: 'Desayuno Continental Inkafe',
    description: 'Jugo de naranja natural, café o té a elección, porción de frutas de estación, pan tostado con mantequilla y mermelada casera.',
    price: 'Bs. 30.00',
    category: 'Desayunos Energéticos',
    tags: [],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'desayuno continental completo cafe jugo frutas pan tostado bolivia'
  },

  // Aperitivos Bolivianos
  {
    id: '8',
    name: 'Cuñapés Horneados (Porción de 4)',
    description: 'Deliciosos pancitos de queso y almidón de yuca, horneados hasta quedar doraditos. Un clásico de la tradición oriental boliviana.',
    price: 'Bs. 12.00',
    category: 'Aperitivos Bolivianos',
    tags: ['sin gluten', 'popular', 'tradicional'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'cuñapes horneados dorados queso boliviano primer plano'
  },
  {
    id: '9',
    name: 'Api Morado Caliente con Pastel de Queso Frito',
    description: 'Bebida tradicional y reconfortante de maíz morado, endulzada con canela y clavo, acompañada de un crujiente pastel frito relleno de queso fresco.',
    price: 'Bs. 20.00',
    category: 'Aperitivos Bolivianos',
    tags: ['popular', 'tradicional'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'api morado humeante con pastel queso frito tradicion boliviana'
  },
  {
    id: '10',
    name: 'Salteña Boliviana de Pollo Picantita (Unidad)',
    description: 'Empanada jugosa horneada, rellena de un guiso especiado de pollo, papas, arvejas y un toque de ají amarillo. ¡Cuidado, es adictiva!',
    price: 'Bs. 10.00',
    category: 'Aperitivos Bolivianos',
    tags: ['picante', 'popular', 'tradicional'],
    imageUrl: '/saltenia.jpeg',
    imageHint: 'salteña boliviana pollo jugosa recien horneada primer plano'
  },
  {
    id: 'trad-saltena-vegana',
    name: 'Salteña Vegana de Soya y Verduras (Unidad)',
    description: 'Nuestra innovadora versión vegana de la salteña, rellena de un sabroso guiso de soya texturizada con verduras frescas y especias andinas.',
    price: 'Bs. 12.00',
    category: 'Aperitivos Bolivianos',
    tags: ['vegano', 'nuevo', 'picante'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'salteña vegana soya verduras dorada bolivia innovacion'
  },
  {
    id: '13',
    name: 'Huminta a la Olla Dulce de Choclo Tierno',
    description: 'Tamal dulce hecho con choclo tierno molido, queso fresco y un toque de anís, envuelto en su propia chala y cocido lentamente a la olla. Sabor a hogar.',
    price: 'Bs. 15.00',
    category: 'Aperitivos Bolivianos',
    tags: ['sin gluten', 'tradicional'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'huminta boliviana dulce choclo tierno vapor saliendo'
  },
  {
    id: 'empanadas-queso-cebolla',
    name: 'Empanadas Fritas de Queso y Cebolla (Porción de 3)',
    description: 'Crujientes empanadas fritas rellenas de abundante queso criollo derretido y cebolla caramelizada. Un clásico para picar.',
    price: 'Bs. 18.00',
    category: 'Aperitivos Bolivianos',
    tags: ['popular', 'tradicional'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'empanadas fritas queso cebolla doradas bolivia'
  },

  // Postres Tentadores
  {
    id: '5',
    name: 'Cheesecake de Maracuyá de Coroico',
    description: 'Cremoso y suave cheesecake sobre base de galleta, coronado con una vibrante y acidita pulpa de maracuyá fresco de Coroico.',
    price: 'Bs. 20.00',
    category: 'Postres Tentadores',
    tags: ['popular'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'cheesecake maracuya coroico postre boliviano fresco y cremoso'
  },
  {
    id: '14',
    name: 'Brownie Intenso de Chocolate Amazónico con Nueces',
    description: 'Brownie denso y húmedo, hecho con chocolate orgánico de la Amazonía boliviana y generosos trozos de nueces. Para los verdaderos amantes del cacao.',
    price: 'Bs. 16.00',
    category: 'Postres Tentadores',
    tags: ['popular'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'brownie chocolate amazonico boliviano nueces oscuro y denso'
  },
  {
    id: 'postre-torta-chocolate-vegana',
    name: 'Torta Húmeda de Chocolate Vegana "Pecado Sin Culpa"',
    description: 'Deliciosa y esponjosa torta de chocolate hecha sin ingredientes de origen animal, cubierta con un rico frosting de cacao y aguacate. ¡Sorprendentemente buena!',
    price: 'Bs. 22.00',
    category: 'Postres Tentadores',
    tags: ['vegano', 'nuevo'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'torta chocolate vegana humeda frosting cacao aguacate postre saludable bolivia'
  },
  {
    id: 'postre-galletas-avena-gf',
    name: 'Galletas de Avena y Chispas de Chocolate (Sin Gluten)',
    description: 'Crujientes por fuera y suaves por dentro, estas galletas de avena certificada sin gluten con abundantes chispas de chocolate semi-amargo son una delicia para todos.',
    price: 'Bs. 15.00', // Porción de 3
    category: 'Postres Tentadores',
    tags: ['sin gluten'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'galletas avena chispas chocolate sin gluten caseras bolivia'
  },
  {
    id: 'postre-mousse-mango-coco',
    name: 'Mousse Cremoso de Mango y Coco (Vegano)',
    description: 'Ligero, aireado y refrescante mousse hecho con pulpa de mango natural de los valles, leche de coco cremosa y endulzado con sirope de agave. Un postre tropical y saludable.',
    price: 'Bs. 18.00',
    category: 'Postres Tentadores',
    tags: ['vegano', 'sin gluten', 'nuevo'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mousse mango coco vegano postre fresco tropical bolivia'
  },
  {
    id: '15',
    name: 'Affogato "Despertar Dulce"',
    description: 'Una generosa bola de helado de vainilla artesanal de La Paz, "ahogada" lentamente con un shot doble de nuestro espresso yungueño recién extraído.',
    price: 'Bs. 18.00',
    category: 'Postres Tentadores',
    tags: [],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'affogato cafe helado vainilla espresso boliviano contraste'
  },
  {
    id: 'postre-leche-asada',
    name: 'Leche Asada Tradicional Cochabambina',
    description: 'Postre clásico de la Llajta, suave y delicada crema horneada con un toque de canela y caramelo dorado. Como hecho en casa.',
    price: 'Bs. 16.00',
    category: 'Postres Tentadores',
    tags: ['tradicional', 'popular'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'leche asada cochabambina postre tradicional boliviano caramelo'
  },
  {
    id: 'postre-keke-quinua',
    name: 'Keke de Quinua Real con Pasas de Tarija',
    description: 'Un bizcocho nutritivo y delicioso hecho con harina de quinua real boliviana, endulzado con miel y con jugosas pasas de uva de Tarija.',
    price: 'Bs. 14.00', // Porción
    category: 'Postres Tentadores',
    tags: ['sin gluten', 'nuevo'], // Asumiendo que se hace con harinas sin gluten aparte de la quinua
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'keke quinua real pasas tarija postre saludable boliviano'
  },


  // Bebidas Refrescantes
  {
    id: '6',
    name: 'Jugo de Tumbo Fresco de los Valles Cruceños',
    description: 'Jugo natural hecho con tumbo (banana passionfruit) fresco de los valles de Santa Cruz, una explosión de sabor cítrico, dulce y exótico.',
    price: 'Bs. 18.00',
    category: 'Bebidas Refrescantes',
    tags: ['vegano', 'sin gluten', 'tradicional'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'jugo tumbo fresco boliviano vaso con hielo y rodaja fruta'
  },
  {
    id: '17',
    name: 'Jugo Detox Verde "Andino Revitalizante"',
    description: 'Combinación poderosa y refrescante de espinaca, pepino, manzana verde, jengibre fresco, apio y un toque de limón. ¡Pura vitalidad!',
    price: 'Bs. 20.00',
    category: 'Bebidas Refrescantes',
    tags: ['vegano', 'sin gluten', 'popular'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'jugo detox verde energizante ingredientes frescos bolivia'
  },
  {
    id: 'bebida-limonada-hierbabuena',
    name: 'Limonada Fresca con Hierbabuena de Huerto Local',
    description: 'Clásica limonada hecha con limones frescos y un generoso manojo de hierbabuena de nuestro huerto (o de productores locales).',
    price: 'Bs. 15.00',
    category: 'Bebidas Refrescantes',
    tags: ['vegano', 'sin gluten'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'limonada hierbabuena fresca vaso con hielo y hojas de menta bolivia'
  },
  {
    id: '12',
    name: 'Infusión de Hojas de Coca "Energía de los Andes"',
    description: 'Infusión tradicional de hojas de coca seleccionadas, ideal para la digestión, la energía y para aclimatarse a la altura de Cochabamba.',
    price: 'Bs. 8.00',
    category: 'Bebidas Refrescantes',
    tags: ['sin gluten', 'tradicional'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'infusion hojas coca en taza tradicional boliviana'
  },
  {
    id: 'bebida-smoothie-tropical',
    name: 'Smoothie Tropical Vegano "Paraíso Amazónico"',
    description: 'Batido cremoso y nutritivo con mango Kent, piña dulce, plátano maduro y leche de almendras orgánica. Sin azúcar añadida.',
    price: 'Bs. 22.00',
    category: 'Bebidas Refrescantes',
    tags: ['vegano', 'sin gluten', 'nuevo', 'popular'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'smoothie tropical vegano mango piña platano colores vibrantes bolivia'
  },
  {
    id: 'bebida-mocochinchi',
    name: 'Mocochinchi Refrescante Tradicional',
    description: 'Bebida típica boliviana a base de duraznos deshidratados (mocochinchi), cocidos con canela y clavo. Servido frío, es pura nostalgia.',
    price: 'Bs. 14.00',
    category: 'Bebidas Refrescantes',
    tags: ['vegano', 'sin gluten', 'tradicional', 'popular'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'vaso mocochinchi boliviano con durazno deshidratado y hielo'
  },

  // Sandwiches
  {
    id: '4',
    name: 'Sándwich Inkafe Club "Bien Servido"',
    description: 'Generoso sándwich de tres pisos con pollo a la plancha marinado en hierbas andinas, tocino crujiente, queso Edam local, lechuga fresca, tomate y nuestra mayonesa de rocoto casera en pan integral tostado. Acompañado de papas fritas rústicas.',
    price: 'Bs. 30.00',
    category: 'Aperitivos Bolivianos', // Re-categorizado a Aperitivos
    tags: ['nuevo', 'popular'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'club sandwich gourmet boliviano con papas fritas rusticas'
  },
  {
    id: '16',
    name: 'Sándwich Vegano de Hongos Salteados y Pesto de Huacataya',
    description: 'Hongos portobello y champiñones frescos salteados con pimientos de colores y cebolla caramelizada, con un delicioso pesto de huacataya (hierba andina) vegano en pan ciabatta artesanal.',
    price: 'Bs. 28.00',
    category: 'Aperitivos Bolivianos', // Re-categorizado
    tags: ['vegano', 'popular', 'nuevo'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'sandwich vegano hongos pesto huacataya pan ciabatta bolivia'
  },
  {
    id: '18',
    name: 'Panini Caprese Bolivianizado',
    description: 'Tomate fresco de Saipina, mozzarella de búfala artesanal (o queso chaqueño), y hojas de albahaca fresca con un toque de pesto de nueces amazónicas en pan panini tostado a la perfección.',
    price: 'Bs. 25.00',
    category: 'Aperitivos Bolivianos', // Re-categorizado
    tags: [],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'panini caprese boliviano tomate queso albahaca ingredientes frescos'
  },
  {
    id: 'sand-palta-tomate-gf',
    name: 'Sándwich de Palta y Tomate en Pan de Quinua (Sin Gluten)',
    description: 'Abundante palta cremosa, rodajas de tomate maduro de los valles, hojas de rúcula fresca y un toque de aceite de oliva extra virgen en nuestro pan casero de harina de quinua (100% sin gluten).',
    price: 'Bs. 26.00',
    category: 'Aperitivos Bolivianos', // Re-categorizado
    tags: ['vegano', 'sin gluten', 'nuevo'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'sandwich palta tomate pan quinua sin gluten vegano bolivia'
  },

  // Panadería Artesanal
  {
    id: 'pan-marraqueta',
    name: 'Marraqueta Cochabambina Crocante (Unidad)',
    description: 'Pan de batalla tradicional de Cochabamba, crujiente por fuera y suave y alveolado por dentro. Ideal para acompañar tu café o rellenar.',
    price: 'Bs. 2.00',
    category: 'Panadería Artesanal',
    tags: ['popular', 'tradicional'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'marraqueta boliviana pan tradicional cochabamba crocante'
  },
  {
    id: 'pan-integral-semillas',
    name: 'Pan Integral Artesanal con Semillas Andinas',
    description: 'Hogaza de pan integral hecho con masa madre y una nutritiva mezcla de semillas de girasol, linaza, sésamo y chía. Denso y sabroso.',
    price: 'Bs. 15.00', // Hogaza pequeña
    category: 'Panadería Artesanal',
    tags: ['vegano', 'nuevo'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'pan integral artesanal semillas andinas masa madre bolivia'
  },
  {
    id: 'pan-croissant',
    name: 'Croissant Clásico de Mantequilla Pura',
    description: 'Hojaldrado y dorado croissant hecho artesanalmente con mantequilla de alta calidad. Un placer francés con toque boliviano.',
    price: 'Bs. 8.00',
    category: 'Panadería Artesanal',
    tags: [],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'croissant mantequilla hojaldre artesanal panaderia bolivia'
  },
  {
    id: 'pan-queque-zanahoria-vegano',
    name: 'Queque de Zanahoria Vegano con Cobertura de Limón',
    description: 'Esponjoso y húmedo queque de zanahoria rallada, especias dulces (canela, nuez moscada) y trocitos de nueces, coronado con una ligera cobertura de limón. Totalmente vegano.',
    price: 'Bs. 12.00', // Porción
    category: 'Panadería Artesanal',
    tags: ['vegano', 'nuevo', 'popular'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'queque zanahoria vegano cobertura limon nueces panaderia bolivia'
  },
  {
    id: 'pan-rollo-canela',
    name: 'Rollo de Canela Clásico con Glaseado de Queso Crema',
    description: 'Suave y aromático rollo de masa dulce relleno de canela y azúcar morena, cubierto con un generoso glaseado de queso crema.',
    price: 'Bs. 10.00',
    category: 'Panadería Artesanal',
    tags: ['popular'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'rollo canela glaseado queso crema panaderia artesanal bolivia'
  },
  {
    id: 'pan-alfajor-maicena',
    name: 'Alfajor de Maicena Gigante con Dulce de Leche Casero',
    description: 'Dos tapas suaves de maicena que se deshacen en la boca, unidas por abundante dulce de leche casero y bordes cubiertos de coco rallado.',
    price: 'Bs. 9.00',
    category: 'Panadería Artesanal',
    tags: ['tradicional', 'popular'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'alfajor maicena gigante dulce de leche coco boliviano artesanal'
  }
];

export interface EventItem {
  id: string;
  name: string;
  date: string;
  time: string;
  description: string;
  type: 'Música en vivo' | 'Lecturas y Tertulias' | 'Juegos de mesa' | 'Promoción' | 'Taller';
  imageUrl: string;
  imageHint: string;
}

export const eventItems: EventItem[] = [
  {
    id: '1',
    name: 'Noche de Charango y Jazz Andino Fusión',
    date: 'Viernes, 25 de Octubre',
    time: '8:00 PM - 10:00 PM',
    description: 'Déjate llevar por una velada mágica con la fusión de ritmos andinos interpretados con charango y la improvisación del jazz. Músicos locales destacados.',
    type: 'Música en vivo',
    imageUrl: '/imagen1Charango.jpg',
    imageHint: 'musicos bolivianos charango quena jazz fusion escenario intimo cafeteria Cochabamba'
  },
  {
    id: '2',
    name: 'Tertulia Literaria: "Voces de la Llajta"',
    date: 'Miércoles, 13 de Noviembre',
    time: '7:00 PM - 8:30 PM',
    description: 'Únete a nuestra discusión mensual sobre obras de autores cochabambinos y bolivianos. Un espacio para compartir ideas y amor por las letras de nuestra tierra.',
    type: 'Lecturas y Tertulias',
    imageUrl: '/imagen2Acustico.jpg',
    imageHint: 'grupo de lectura Cochabamba discutiendo libros bolivianos en cafeteria acogedora'
  },
  {
    id: '3',
    name: 'Tardes de "Cacho" y Juegos Tradicionales',
    date: 'Sábado, 30 de Noviembre',
    time: '4:00 PM - 7:00 PM',
    description: 'Trae a tus amigos y disfruta de nuestra colección de juegos de mesa, con torneos amistosos de Cacho, Ajedrez y otros juegos bolivianos.',
    type: 'Juegos de mesa',
    imageUrl: '/imagenCacho.jpg',
    imageHint: 'gente jugando cacho dados cubilete cafeteria boliviana ambiente divertido'
  },
  {
    id: '4',
    name: 'Promo "Api con Pastel" para el Alma',
    date: 'Todos los Jueves de Invierno',
    time: '4:00 PM - 7:00 PM',
    description: 'Calienta tu tarde con nuestra promoción especial: un delicioso Api Morado o Blanco acompañado de un pastel de queso frito, ¡a precio de yapa!',
    type: 'Promoción',
    imageUrl: '/imagenApi.jpg',
    imageHint: 'promocion api morado pastel queso cafeteria Cochabamba invierno'
  },
  {
    id: '5',
    name: 'Taller de Barismo: "Del Grano a la Taza Boliviana"',
    date: 'Sábado, 18 de Enero',
    time: '10:00 AM - 1:00 PM',
    description: 'Aprende los secretos para preparar un café boliviano perfecto en casa. Desde la selección del grano hasta métodos de extracción. Cupos limitados, ¡inscríbete ya!',
    type: 'Taller',
    imageUrl: '/imagenBarista.jpg',
    imageHint: 'taller barismo Cochabamba aprendiendo metodos cafe boliviano'
  },
  {
    id: 'evento-degustacion-cafe',
    name: 'Degustación de Cafés de Altura de Bolivia',
    date: 'Primer Sábado de cada Mes',
    time: '11:00 AM',
    description: 'Explora la diversidad de perfiles de sabor de los cafés de diferentes regiones de Bolivia. Dirigido por nuestro barista experto.',
    type: 'Taller',
    imageUrl: '/imagenCafeAltura.jpg',
    imageHint: 'degustacion cafe boliviano varias tazas barista explicando'
  },
  {
    id: 'evento-musica-folclorica',
    name: 'Peña Acústica: "Cantos de mi Tierra"',
    date: 'Último Viernes de cada Mes',
    time: '8:30 PM',
    description: 'Disfruta de una noche íntima con música folclórica boliviana en formato acústico. Artistas locales invitados.',
    type: 'Música en vivo',
    imageUrl: '/imagenMusica.jpg',
    imageHint: 'musica folclorica boliviana acustica guitarra charango cafeteria noche'
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
  { id: 't4', name: 'M4', capacity: 6, status: 'available', position: { row: 2, col: 1 } }, // Mesa grande
  { id: 't5', name: 'M5', capacity: 4, status: 'available', position: { row: 2, col: 2 } },
  { id: 't6', name: 'M6', capacity: 2, status: 'available', position: { row: 2, col: 3 } },
  { id: 't7', name: 'V1', capacity: 1, status: 'available', position: { row: 3, col: 1 } }, // Ventana individual
  { id: 't8', name: 'V2', capacity: 1, status: 'available', position: { row: 3, col: 2 } }, // Ventana individual
  { id: 't9', name: 'S1', capacity: 3, status: 'available', position: { row: 4, col: 1 } }, // Sofá pequeño
  { id: 't10', name: 'Terraza1', capacity: 4, status: 'available', position: {row: 1, col: 4}}, // Mesa en terraza imaginaria
  { id: 't11', name: 'Terraza2', capacity: 2, status: 'reserved', position: {row: 2, col: 4}}, // Mesa en terraza imaginaria
];

export const availableTimes: string[] = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30", "20:00", "20:30"
];

// Lista de frutas de temporada (ejemplos para Bolivia, más extensa)
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
  'Uva',
  'Chirimoya',
  'Pacay',
  'Granada',
  'Mora',
  'Membrillo',
  'Higo'
];

// IDs de items que son candidatos a ser destacados.
// Estos IDs deben coincidir con los IDs de `menuItems`.
export const candidateFeaturedItemIds = [
    '5', // Cheesecake de Maracuyá de Coroico
    'desayuno-avena-bowl', // Bowl de Avena y Chía "Andino Power"
    '10', // Salteña Boliviana de Pollo Picantita
    '17', // Jugo Detox Verde "Andino Revitalizante"
    'pan-rollo-canela', // Rollo de Canela Clásico
    '1', // Espresso Intenso de los Yungas
    'bebida-mocochinchi', // Mocochinchi Refrescante Tradicional
    'postre-leche-asada' // Leche Asada Tradicional Cochabambina
];
