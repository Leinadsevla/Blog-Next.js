import Link from 'next/link';
import Container from '@/components/Container';
import ProductCard from '@/components/ProductCard';
import PostCard from '@/components/PostCard';
import { products } from '@/data/products';
import { posts } from '@/data/posts';

export default function Home() {
  // Pegar os 3 produtos mais recentes
  const recentProducts = [...products]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 3);

  // Pegar os 3 posts mais recentes
  const recentPosts = [...posts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Container>
        {/* Hero Section */}
        <section className="py-16 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Bem-vindo ao Portal
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Descubra produtos incríveis e leia artigos interessantes em um só lugar
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/produtos"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Ver Produtos
            </Link>
            <Link
              href="/blog"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
            >
              Ler Blog
            </Link>
          </div>
        </section>

        {/* Produtos Recentes */}
        <section className="py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Produtos Recentes</h2>
            <Link
              href="/produtos"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Ver todos →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Posts Recentes */}
        <section className="py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Posts Recentes</h2>
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Ver todos →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}

