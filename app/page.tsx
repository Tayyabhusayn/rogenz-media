import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import NewsletterForm from '@/components/NewsletterForm';
import connectToDatabase from '@/lib/db';
import Article from '@/models/Article';
import { ChevronRight, ArrowRight, PlayCircle } from 'lucide-react';

async function getArticles() {
  try {
    if (!process.env.MONGODB_URI) {
        console.warn("MONGODB_URI not set, returning empty list");
        return [];
    }
    await connectToDatabase();
    const articles = await Article.find({}).sort({ createdAt: -1 }).limit(7);
    return JSON.parse(JSON.stringify(articles));
  } catch (error) {
    console.error('Failed to fetch articles:', error);
    return [];
  }
}

export default async function Home() {
  const allArticles = await getArticles();
  
  // Feature the first article, list the rest
  const featuredArticle = allArticles.length > 0 ? allArticles[0] : null;
  const recentArticles = allArticles.length > 0 ? allArticles.slice(1) : [];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-red-100 selection:text-red-900">
      <Navbar />
      
      {/* Breaking News Ticker */}
      <div className="bg-black text-white py-2 overflow-hidden whitespace-nowrap relative">
         <div className="absolute left-0 top-0 bottom-0 bg-red-600 px-3 flex items-center z-10 font-bold uppercase tracking-wider text-xs md:text-sm shadow-md">
            Breaking News
         </div>
         <div className="animate-marquee inline-block pl-32 md:pl-40 text-sm md:text-base font-medium">
            <span className="mx-4">• Rohingya Genocide Recognition Efforts Gain Global Momentum</span>
            <span className="mx-4">• New Education Initiatives Launch in Camps</span>
            <span className="mx-4">• Cultural Preservation Project Announces New Digital Archive</span>
            <span className="mx-4">• Global Youth Summit to Address Displacement Crisis</span>
         </div>
      </div>

      <main>
        {/* Hero Section */}
        {featuredArticle ? (
          <section className="relative w-full h-[60vh] md:h-[70vh] bg-gray-900 group overflow-hidden">
             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500 z-10" />
             <img 
               src={featuredArticle.image || 'https://images.unsplash.com/photo-1576675784432-99494141205c?q=80&w=2072&auto=format&fit=crop'} 
               alt={featuredArticle.title}
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20 bg-gradient-to-t from-black via-black/60 to-transparent pt-32">
                <div className="max-w-7xl mx-auto">
                   <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wide mb-3 shadow-sm">
                      Featured Story
                   </span>
                   <Link href={`/news/${featuredArticle.slug}`} className="block group/title">
                      <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 group-hover/title:underline decoration-red-500 underline-offset-8 transition-all">
                         {featuredArticle.title}
                      </h1>
                   </Link>
                   <p className="text-gray-200 text-lg md:text-xl max-w-3xl line-clamp-2 md:line-clamp-3 mb-6 font-light">
                      {featuredArticle.content.replace(/<[^>]+>/g, '')}
                   </p>
                   <Link 
                     href={`/news/${featuredArticle.slug}`}
                     className="inline-flex items-center text-white font-semibold border-b-2 border-red-500 pb-1 hover:text-red-400 hover:border-red-400 transition-colors"
                   >
                     Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                   </Link>
                </div>
             </div>
          </section>
        ) : (
          /* Fallback Hero if no articles */
          <section className="relative w-full h-[60vh] flex items-center justify-center bg-gray-900 text-center px-4">
             <div className="z-10 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                   The Voice of <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Resistance</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                   Uncovering truth, advocating for rights, and sharing the Rohingya story with the world.
                </p>
                <Link href="/news" className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all transform hover:-translate-y-1 shadow-lg shadow-red-900/20">
                   Explore Stories
                </Link>
             </div>
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          </section>
        )}

        {/* Latest News Grid */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center justify-between mb-12 border-b border-gray-200 pb-4">
              <h2 className="text-3xl font-bold text-gray-900 relative">
                 Latest News
                 <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-red-600 -mb-4 rounded-full"></span>
              </h2>
              <Link href="/news" className="hidden md:flex items-center text-red-600 font-medium hover:text-red-800 transition-colors">
                 View All News <ChevronRight className="h-5 w-5" />
              </Link>
           </div>
           
           {recentArticles.length > 0 ? (
             <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
               {recentArticles.map((article: any) => (
                 <ArticleCard key={article._id} article={article} />
               ))}
             </div>
           ) : (
             !featuredArticle && (
                <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-200 border-dashed">
                   <p className="text-gray-500 text-lg">No articles published yet.</p>
                   <Link href="/admin" className="text-red-600 font-medium mt-2 inline-block hover:underline">
                      Go to Admin Panel to publish
                   </Link>
                </div>
             )
           )}

           <div className="mt-12 text-center md:hidden">
              <Link href="/news" className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                 View All Stories
              </Link>
           </div>
        </section>

        {/* Mission / Video Section */}
        <section className="bg-gray-50 py-20 overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                 <div className="mb-12 lg:mb-0">
                    <span className="text-red-600 font-bold tracking-wider uppercase text-sm">Our Mission</span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                       Empowering a Generation <br/>Through Digital Media.
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                       RoGenZ (Rohingya Gen-Z) is more than just a media outlet. We are a movement. 
                       Born from the camps, driven by the desire for justice, and powered by the voices of the youth.
                    </p>
                    <ul className="space-y-4 mb-8">
                       {['Authentic Storytelling', 'Human Rights Advocacy', 'Cultural Preservation', 'Global Solidarity'].map((item) => (
                          <li key={item} className="flex items-center text-gray-700 font-medium">
                             <span className="bg-red-100 text-red-600 p-1 rounded-full mr-3">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                             </span>
                             {item}
                          </li>
                       ))}
                    </ul>
                    <Link href="/about" className="inline-flex items-center text-red-700 font-bold hover:text-red-900 transition-colors">
                       Learn more about us <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                 </div>
                 
                 {/* Video Placeholder Card */}
                 <div className="relative rounded-2xl shadow-2xl overflow-hidden group cursor-pointer aspect-video bg-gray-900">
                    <img 
                      src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=2076&auto=format&fit=crop" 
                      alt="Mission Video Thumbnail" 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <a 
                         href="https://youtube.com/@rohingyagen-z" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="transform transition-transform duration-300 group-hover:scale-110"
                       >
                          <PlayCircle className="w-20 h-20 text-white drop-shadow-lg" />
                       </a>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                       <p className="text-white font-bold text-lg">Watch: Our Story, Our Future</p>
                       <p className="text-gray-300 text-sm">Subscribe to our YouTube Channel</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-red-700 py-16">
           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
                 Stay Informed. Join the Movement.
              </h2>
              <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
                 Get the latest news, updates from the camps, and advocacy alerts delivered straight to your inbox.
              </p>
              <NewsletterForm />
              <p className="mt-3 text-sm text-red-200">
                 We care about the protection of your data. Read our <a href="#" className="text-white underline font-medium">Privacy Policy</a>.
              </p>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
