import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types';

interface PostCardProps {
  post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        {post.image && (
          <div className="relative w-full h-48 bg-gray-200">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-blue-600 uppercase">
              {post.category}
            </span>
            <span className="text-gray-400 text-xs">•</span>
            <span className="text-xs text-gray-500">
              {formatDate(post.publishedAt)}
            </span>
          </div>
          <h2 className="text-xl font-bold mb-3 text-gray-900">{post.title}</h2>
          <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
            {post.excerpt}
          </p>
          <div className="flex justify-between items-center mt-auto">
            <span className="text-sm text-gray-500">Por {post.author}</span>
            <span className="text-blue-600 text-sm font-semibold hover:underline">
              Ler mais →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

