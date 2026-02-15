import Link from 'next/link';
import { format } from 'date-fns';

interface Article {
  _id: string;
  title: string;
  slug: string;
  category: string;
  content: string;
  image: string;
  author: string;
  createdAt: string;
}

export default function ArticleCard({ article }: { article: Article }) {
  // Strip HTML tags for excerpt
  const excerpt = article.content.replace(/<[^>]+>/g, '').substring(0, 150) + '...';

  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <div className="flex-shrink-0 h-48 w-full relative">
        <img className="h-full w-full object-cover" src={article.image || 'https://via.placeholder.com/400x300'} alt={article.title} />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-red-600">
            {article.category}
          </p>
          <Link href={`/news/${article.slug}`} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900 hover:text-red-700 transition-colors">{article.title}</p>
            <p className="mt-3 text-base text-gray-500">{excerpt}</p>
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <span className="sr-only">{article.author}</span>
            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
              {article.author.charAt(0)}
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              {article.author}
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={article.createdAt}>
                {format(new Date(article.createdAt), 'MMM d, yyyy')}
              </time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
