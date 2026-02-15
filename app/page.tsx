import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import NewsletterForm from '@/components/NewsletterForm';
import HeroSection from '@/components/HeroSection';
import AnimatedSection from '@/components/AnimatedSection';
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
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-red-100 selection:text-red-900 overflow-x-hidden">
      <Navbar />
      
      {/* Scroll Progress Bar at the top */}
      <div className="h-0" />
      
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
        {/* Animated Hero Section */}
        <HeroSection featuredArticle={featuredArticle} />

        {/* Latest News Grid */}
        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <AnimatedSection>
              <div className="flex items-center justify-between mb-12 border-b border-gray-200 pb-4">
                 <h2 className="text-3xl font-bold text-gray-900 relative">
                    Latest News
                    <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-red-600 -mb-4 rounded-full"></span>
                 </h2>
                 <Link href="/news" className="hidden md:flex items-center text-red-600 font-medium hover:text-red-800 transition-colors">
                    View All News <ChevronRight className="h-5 w-5" />
                 </Link>
              </div>
           </AnimatedSection>
           
           {recentArticles.length > 0 ? (
             <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
               {recentArticles.map((article: any, index: number) => (
                 <AnimatedSection key={article._id} delay={index * 0.1}>
                    <ArticleCard article={article} />
                 </AnimatedSection>
               ))}
             </div>
           ) : (
             !featuredArticle && (
                <AnimatedSection>
                   <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-200 border-dashed">
                      <p className="text-gray-500 text-lg">No articles published yet.</p>
                      <Link href="/admin" className="text-red-600 font-medium mt-2 inline-block hover:underline">
                         Go to Admin Panel to publish
                      </Link>
                   </div>
                </AnimatedSection>
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
                 <AnimatedSection>
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
                 </AnimatedSection>
                 
                 <AnimatedSection delay={0.2}>
                    {/* Video Placeholder Card */}
                    <div className="relative rounded-2xl shadow-2xl overflow-hidden group cursor-pointer aspect-video bg-gray-900">
                       <img 
                         src="/images/flag.jpg" 
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
                 </AnimatedSection>
              </div>
           </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-red-700 py-16">
           <AnimatedSection>
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
           </AnimatedSection>
        </section>
      </main>

      <Footer />
    </div>
  );
}
