# Portal - Aplicação Next.js

Aplicação completa desenvolvida com Next.js 14 (App Router), TypeScript e Tailwind CSS, demonstrando rotas estáticas, dinâmicas, componentes reutilizáveis e layouts personalizados.

##  Funcionalidades

### Catálogo de Produtos
- Lista completa de produtos com filtro por categoria via query string
- Página individual de produto com galeria de imagens
- Rota dinâmica para categorias com tratamento de erro

### Blog de Artigos
- Lista de artigos ordenada cronologicamente
- Página individual de artigo com conteúdo completo
- Layout exclusivo para a seção do blog

### Componentes Reutilizáveis
- **Navigation**: Navegação principal
- **Footer**: Rodapé da aplicação
- **ProductCard**: Card para exibição de produtos
- **PostCard**: Card para exibição de posts
- **Breadcrumb**: Navegação estrutural automática
- **Container**: Container para padronização de largura

### Layouts
- Layout raiz com navegação e rodapé
- Layout exclusivo para seção de produtos
- Layout exclusivo para seção do blog

### Páginas
- Página inicial com resumos de produtos e posts
- Página Sobre com informações da aplicação
- Página 404 personalizada

##  Estrutura do Projeto

```
provNext/
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx      # Página individual de artigo
│   │   ├── layout.tsx         # Layout exclusivo do blog
│   │   └── page.tsx           # Lista de artigos
│   ├── categorias/
│   │   └── [slug]/
│   │       └── page.tsx       # Página de categoria
│   ├── produtos/
│   │   ├── [id]/
│   │   │   └── page.tsx       # Página individual de produto
│   │   ├── layout.tsx         # Layout exclusivo de produtos
│   │   └── page.tsx           # Lista de produtos
│   ├── sobre/
│   │   └── page.tsx           # Página Sobre
│   ├── layout.tsx             # Layout raiz
│   ├── page.tsx               # Página inicial
│   ├── not-found.tsx          # Página 404
│   └── globals.css            # Estilos globais
├── components/
│   ├── Breadcrumb.tsx
│   ├── Container.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   ├── PostCard.tsx
│   └── ProductCard.tsx
├── data/
│   ├── categories.ts          # Dados de categorias
│   ├── posts.ts               # Dados de posts
│   └── products.ts            # Dados de produtos
├── types/
│   └── index.ts               # Tipos TypeScript
└── package.json
```

##  Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **React 18** - Biblioteca UI

##  Instalação

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

3. Acesse [http://localhost:3000](http://localhost:3000)

##  Build de Produção

```bash
npm run build
npm start
```

##  Características Técnicas

-  Rotas estáticas e dinâmicas
-  Componentes reutilizáveis tipados
-  Layouts exclusivos por seção
-  Dados locais sem API externa
-  Filtros via query string
-  Breadcrumbs automáticos
-  Tratamento de erros (404, not found)
-  TypeScript em todo o projeto
-  Design responsivo com Tailwind CSS

##  Rotas Disponíveis

- `/` - Página inicial
- `/produtos` - Lista de produtos (com filtro `?categoria=slug`)
- `/produtos/[id]` - Página individual de produto
- `/categorias/[slug]` - Produtos de uma categoria
- `/blog` - Lista de artigos
- `/blog/[slug]` - Página individual de artigo
- `/sobre` - Página Sobre
- Qualquer rota inexistente - Página 404

