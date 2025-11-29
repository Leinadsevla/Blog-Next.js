import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-bold hover:text-red-200 transition">
              Portal
            </Link>
            <div className="flex space-x-4">
              <Link href="/produtos" className="hover:text-red-200 transition">
                Produtos
              </Link>
              <Link href="/blog" className="hover:text-red-200 transition">
                Blog
              </Link>
              <Link href="/sobre" className="hover:text-red-200 transition">
                Sobre
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

