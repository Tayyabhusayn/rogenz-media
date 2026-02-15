import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import connectToDatabase from '@/lib/db';
import Article from '@/models/Article';

async function getArticles() {
  try {
    if (!process.env.MONGODB_URI) return [];
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
          <img
            className="w-full h-full object-cover opacity-30"
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="News background"
          />
          <div className="absolute inset-0 bg-red-700 mix-blend-multiply" aria-hidden="true" />
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
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-500 text-lg">No articles found. Please configure the database and add content via the Admin Panel.</p>
            <p className="text-sm text-gray-400 mt-2">(Set MONGODB_URI in .env.local)</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
