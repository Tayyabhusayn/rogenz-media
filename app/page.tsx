import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import connectToDatabase from '@/lib/db';
import Article from '@/models/Article';

async function getArticles() {
  try {
    if (!process.env.MONGODB_URI) {
        console.warn("MONGODB_URI not set, returning empty list");
        return [];
    }
    await connectToDatabase();
    const articles = await Article.find({ featured: true }).sort({ createdAt: -1 }).limit(3);
    return JSON.parse(JSON.stringify(articles));
  } catch (error) {
    console.error('Failed to fetch articles:', error);
    return [];
  }
}

export default async function Home() {
  const featuredArticles = await getArticles();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-red-700">
        <div className="absolute inset-0">
          {/* Fallback pattern if image fails */}
          <div className="absolute inset-0 bg-red-800 opacity-50 pattern-grid-lg"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-600 opacity-90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Rohingya Gen-Z Media
          </h1>
          <p className="mt-6 text-xl text-red-100 max-w-3xl">
            The voice of a new generation. Uncovering truth, advocating for rights, and sharing our stories with the world.
          </p>
          <div className="mt-10">
            <Link
              href="/news"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-white hover:bg-red-50"
            >
              Read Latest News
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Featured Stories</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Highlights from our community and the world.
          </p>
        </div>

        {featuredArticles.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map((article: any) => (
              <ArticleCard key={article._id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow border border-gray-200">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No articles yet</h3>
            <p className="mt-1 text-sm text-gray-500">Get started by creating a new article in the Admin Panel.</p>
            <div className="mt-6">
              <Link
                href="/admin"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Go to Admin Panel
              </Link>
            </div>
            {!process.env.MONGODB_URI && (
                 <p className="mt-4 text-xs text-red-500 bg-red-50 p-2 rounded inline-block">
                    ⚠️ Database Not Configured: Please add MONGODB_URI to Vercel Environment Variables.
                 </p>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
