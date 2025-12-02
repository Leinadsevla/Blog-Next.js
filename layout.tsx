import Container from '@/components/Container';

export default function ProdutosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <Container>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Catálogo de Produtos
          </h1>
          <p className="text-gray-600">
            Explore nossa seleção completa de produtos de qualidade
          </p>
        </header>
        {children}
      </Container>
    </div>
  );
}

