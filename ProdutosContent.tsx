'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useMemo, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import Breadcrumb from '@/components/Breadcrumb';
import { products } from '@/data/products';
import { categories } from '@/data/categories';

export default function ProdutosContent() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('categoria');
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryFilter || '');

  useEffect(() => {
    setSelectedCategory(categoryFilter || '');
  }, [categoryFilter]);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) {
      return products;
    }
    return products.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    const url = new URL(window.location.href);
    if (categorySlug) {
      url.searchParams.set('categoria', categorySlug);
    } else {
      url.searchParams.delete('categoria');
    }
    window.history.pushState({}, '', url.toString());
  };

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Produtos' }
        ]}
      />

      {/* Filtro de Categorias */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-900">Filtrar por Categoria</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleCategoryChange('')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              !selectedCategory
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Todas
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.slug)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedCategory === category.slug
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Lista de Produtos */}
      <div>
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Nenhum produto encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

