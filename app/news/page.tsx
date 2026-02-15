import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import connectToDatabase from '@/lib/db';
import Article from '@/models/Article';

export const metadata = {
  title: 'News | RoGenZ',
  description: 'Latest updates from Rohingya Gen-Z.',
};

async function getAllArticles() {
  try {
    if (!process.env.MONGODB_URI) return [];
    await connectToDatabase();
    const articles = await Article.find({}).sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(articles));
  } catch (error) {
    console.error('Failed to fetch articles:', error);
    return [];
  }
}

export default async function NewsPage() {
  const articles = await getAllArticles();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.length > 0 ? (
            articles.map((article: any) => (
              <ArticleCard key={article._id} article={article} />
            ))
          ) : (
            <p className="text-gray-500">No news articles found.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
