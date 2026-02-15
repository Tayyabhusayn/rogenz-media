import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import connectToDatabase from '@/lib/db';
import Article from '@/models/Article';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  if (!process.env.MONGODB_URI) return { title: 'RoGenZ | News' };

  try {
    await connectToDatabase();
    const article = await Article.findOne({ slug });
  
    if (!article) return { title: 'Not Found' };

    return {
      title: `${article.title} | RoGenZ`,
      description: article.content.substring(0, 160),
    };
  } catch (error) {
    return { title: 'RoGenZ | News' };
  }
}

async function getArticle(slug: string) {
  try {
    await connectToDatabase();
    const article = await Article.findOne({ slug });
    if (!article) return null;
    return JSON.parse(JSON.stringify(article));
  } catch (error) {
    return null;
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
         <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96 w-full relative">
               <img 
                 src={article.image || 'https://via.placeholder.com/1200x600'} 
                 alt={article.title}
                 className="w-full h-full object-cover"
               />
            </div>
            <div className="p-8">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-medium mr-4">
                  {article.category}
                </span>
                <span>{format(new Date(article.createdAt), 'MMMM d, yyyy')}</span>
                <span className="mx-2">•</span>
                <span>By {article.author}</span>
              </div>
              
              <h1 className="text-4xl font-extrabold text-gray-900 mb-8">{article.title}</h1>
              
              <div 
                className="prose prose-red prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
         </article>
      </main>

      <Footer />
    </div>
  );
}
