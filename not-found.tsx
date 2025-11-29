import Link from 'next/link';
import Container from '@/components/Container';

export default function NotFound() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-9xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Página Não Encontrada
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Voltar para Home
            </Link>
            <Link
              href="/produtos"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Ver Produtos
            </Link>
            <Link
              href="/blog"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Ver Blog
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

