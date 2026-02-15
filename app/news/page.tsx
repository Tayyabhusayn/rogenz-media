import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import connectToDatabase from '@/lib/db';
import Article from '@/models/Article';
import { Search, Filter } from 'lucide-react';

export const metadata = {
  title: 'Latest News | RoGenZ Media',
  description: 'Uncovering truth and sharing stories from the Rohingya community.',
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
    <div className="min-h-screen bg-white flex flex-col selection:bg-red-100">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-gray-50 py-16 border-b border-gray-100">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                 <div>
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">The Newsroom</h1>
                    <p className="text-xl text-gray-600 max-w-2xl">
                       Real-time reporting, in-depth analysis, and cultural features from across the Rohingya world.
                    </p>
                 </div>
                 
                 {/* Search & Filter Bar (Visual only for now) */}
                 <div className="flex flex-wrap gap-3">
                    <div className="relative">
                       <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                       <input 
                         type="text" 
                         placeholder="Search stories..." 
                         className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 outline-none w-full md:w-64 transition-all"
                       />
                    </div>
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors">
                       <Filter className="w-4 h-4" />
                       <span className="font-medium">Filter</span>
                    </button>
                 </div>
              </div>

              {/* Category Taps */}
              <div className="flex flex-wrap gap-2 mt-12 overflow-x-auto pb-2 no-scrollbar">
                 {['All Stories', 'Human Rights', 'Education', 'Culture', 'Health', 'Opinion', 'Tech'].map((cat) => (
                    <button 
                      key={cat}
                      className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-bold transition-all ${cat === 'All Stories' ? 'bg-red-600 text-white shadow-lg' : 'bg-white text-gray-600 border border-gray-200 hover:border-red-600 hover:text-red-600'}`}
                    >
                       {cat}
                    </button>
                 ))}
              </div>
           </div>
        </section>

        {/* Article Grid */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           {articles.length > 0 ? (
             <div>
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                  {articles.map((article: any) => (
                    <ArticleCard key={article._id} article={article} />
                  ))}
                </div>
                
                {/* Pagination Placeholder */}
                <div className="mt-20 flex justify-center">
                   <nav className="flex space-x-2">
                      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-red-600 text-red-600 font-bold">1</button>
                      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 font-bold hover:border-red-600 hover:text-red-600">2</button>
                      <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 font-bold hover:border-red-600 hover:text-red-600">3</button>
                   </nav>
                </div>
             </div>
           ) : (
             <div className="text-center py-32 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No stories yet</h3>
                <p className="text-gray-500 max-w-md mx-auto mb-8">We are working hard to bring you the latest news. Check back soon or visit the admin panel to publish.</p>
                <div className="flex justify-center space-x-4">
                   <a href="/" className="px-8 py-3 bg-gray-900 text-white rounded-full font-bold">Back Home</a>
                   <a href="/admin" className="px-8 py-3 bg-red-600 text-white rounded-full font-bold">Admin Login</a>
                </div>
             </div>
           )}
        </section>

        {/* Newsletter Banner */}
        <section className="max-w-7xl mx-auto px-4 mb-24">
           <div className="bg-red-600 rounded-[3rem] p-12 md:p-20 text-white text-center md:text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="relative z-10 md:grid md:grid-cols-2 items-center gap-12">
                 <div>
                    <h2 className="text-4xl font-black mb-4 tracking-tight">Stay updated with the latest alerts.</h2>
                    <p className="text-xl text-red-100 font-medium">Join 5,000+ people receiving our weekly newsletter.</p>
                 </div>
                 <div className="mt-8 md:mt-0 flex flex-col sm:flex-row gap-4">
                    <input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="flex-grow px-6 py-4 rounded-2xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-400"
                    />
                    <button className="px-8 py-4 bg-gray-900 text-white font-black rounded-2xl hover:bg-black transition-all transform hover:-translate-y-1">
                       Subscribe
                    </button>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
