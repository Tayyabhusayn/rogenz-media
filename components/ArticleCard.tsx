import Link from 'next/link';
import { format } from 'date-fns';
import { Clock, User } from 'lucide-react';

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
  const content = article.content || '';
  const excerpt = content.replace(/<[^>]+>/g, '').substring(0, 120) + '...';

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 transform hover:-translate-y-1">
      <div className="flex-shrink-0 h-56 w-full relative overflow-hidden">
        <div className="absolute top-4 left-4 z-10">
           <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
              {article.category}
           </span>
        </div>
        <img 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
          src={article.image || 'https://via.placeholder.com/400x300'} 
          alt={article.title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <Link href={`/news/${article.slug}`} className="block">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors line-clamp-2 leading-tight">
              {article.title}
            </h3>
            <p className="mt-3 text-base text-gray-500 line-clamp-3 leading-relaxed">
              {excerpt}
            </p>
          </Link>
        </div>
        
        <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center text-sm text-gray-400 font-medium">
             <User className="h-4 w-4 mr-1 text-red-500" />
             <span className="truncate max-w-[100px]">{article.author}</span>
          </div>
          <div className="flex items-center text-sm text-gray-400">
             <Clock className="h-4 w-4 mr-1 text-red-500" />
             <time dateTime={article.createdAt}>
               {format(new Date(article.createdAt), 'MMM d, yyyy')}
             </time>
          </div>
        </div>
      </div>
    </div>
  );
}
