import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Smartphone Premium',
    description: 'Smartphone com tela de 6.7 polegadas, processador de última geração e câmera tripla de 108MP. Ideal para fotografia profissional e uso intensivo.',
    price: 2999.99,
    category: 'eletronicos',
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
      'https://images.unsplash.com/photo-1523206489230-b012c601826d?w=800',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800'
    ],
    inStock: true,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    name: 'Notebook Gamer',
    description: 'Notebook gamer com placa de vídeo dedicada, 16GB RAM e SSD de 512GB. Perfeito para jogos e trabalho pesado.',
    price: 5499.99,
    category: 'eletronicos',
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800'
    ],
    inStock: true,
    createdAt: '2024-02-10'
  },
  {
    id: '3',
    name: 'Box J.R.R. Tolkien - O Hobbit + O Senhor dos Anéis',
    description: 'Coleção completa em edição especial com caixa protetora. Inclui O Hobbit e a trilogia O Senhor dos Anéis (A Sociedade do Anel, As Duas Torres e O Retorno do Rei). Edição em português com capas elegantes e símbolos característicos.',
    price: 249.99,
    category: 'livros',
    images: [
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800',
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800'
    ],
    inStock: true,
    createdAt: '2024-01-20'
  },
  {
    id: '4',
    name: 'O Silmarillion - J.R.R. Tolkien',
    description: 'Obra póstuma editada por Christopher Tolkien, contando a história da Primeira e Segunda Era da Terra-média. Edição em português com capa ilustrada em tons de azul e verde, retratando montanhas imponentes e paisagens fantásticas.',
    price: 89.99,
    category: 'livros',
    images: [
      'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800'
    ],
    inStock: true,
    createdAt: '2024-02-05'
  },
  {
    id: '5',
    name: 'Sofá Retrátil',
    description: 'Sofá retrátil 3 lugares, estofado em tecido premium. Confortável e elegante para sua sala de estar.',
    price: 1899.99,
    category: 'casa-decoracao',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800'
    ],
    inStock: true,
    createdAt: '2024-01-30'
  },
  {
    id: '6',
    name: 'Luminária de Mesa',
    description: 'Luminária de mesa moderna com regulagem de intensidade. Design minimalista e funcional.',
    price: 129.99,
    category: 'casa-decoracao',
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800'
    ],
    inStock: true,
    createdAt: '2024-02-15'
  },
  {
    id: '7',
    name: 'O Programador Pragmático',
    description: 'Livro clássico sobre desenvolvimento de software, com dicas práticas e princípios fundamentais para programadores.',
    price: 79.99,
    category: 'livros',
    images: [
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800',
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800'
    ],
    inStock: true,
    createdAt: '2024-01-10'
  },
  {
    id: '8',
    name: 'Clean Code',
    description: 'Guia essencial sobre como escrever código limpo e manutenível. Leitura obrigatória para desenvolvedores.',
    price: 89.99,
    category: 'livros',
    images: [
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800'
    ],
    inStock: true,
    createdAt: '2024-02-01'
  },
  {
    id: '9',
    name: 'Fones de Ouvido Bluetooth',
    description: 'Fones de ouvido sem fio com cancelamento de ruído ativo e bateria de longa duração. Som de alta qualidade.',
    price: 399.99,
    category: 'eletronicos',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
      'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800'
    ],
    inStock: true,
    createdAt: '2024-02-20'
  },
  {
    id: '10',
    name: 'O Hobbit - J.R.R. Tolkien',
    description: 'A clássica aventura de Bilbo Bolseiro, que embarca em uma jornada épica com treze anões e o mago Gandalf. Edição em português com capa elegante e ilustrações características do universo tolkieniano.',
    price: 59.99,
    category: 'livros',
    images: [
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800',
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800'
    ],
    inStock: true,
    createdAt: '2024-01-25'
  },
  {
    id: '11',
    name: 'Carrinho Miniatura',
    description: 'Carrinho miniatura educativo e divertido, perfeito para estimular a criatividade e o desenvolvimento das crianças. Feito com materiais seguros e de alta qualidade.',
    price: 89.99,
    category: 'brinquedos',
    images: [
      'https://images.unsplash.com/photo-1546464676-9a2775a6e2f5?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1546464676-9a2775a6e2f5?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1546464676-9a2775a6e2f5?w=800&auto=format&fit=crop&q=80'
    ],
    inStock: true,
    createdAt: '2024-02-25'
  },
  {
    id: '12',
    name: 'Hot Rod de Metal Fundido',
    description: 'Brinquedo hot rod de metal fundido azul, modelo em escala detalhado. Perfeito para colecionadores e entusiastas de carros. Design clássico e acabamento premium.',
    price: 149.99,
    category: 'brinquedos',
    images: [
      'https://images.unsplash.com/photo-1545094729-5e4860fc9452?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1545094729-5e4860fc9452?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1545094729-5e4860fc9452?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    inStock: true,
    createdAt: '2024-02-26'
  },
  {
    id: '13',
    name: 'Carrinho de Brinquedo',
    description: 'Carrinho de brinquedo colorido e resistente, ideal para crianças de todas as idades. Desenvolve coordenação motora e proporciona horas de diversão.',
    price: 79.99,
    category: 'brinquedos',
    images: [
      'https://images.unsplash.com/photo-1545426373-6588267475be?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1545426373-6588267475be?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1545426373-6588267475be?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    inStock: true,
    createdAt: '2024-02-27'
  }
];

