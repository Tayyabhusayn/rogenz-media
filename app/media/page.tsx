import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PlayCircle, Image as ImageIcon, Video, Mic, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Media Hub | RoGenZ Media',
  description: 'A collection of visual stories, documentaries, and podcasts from the Rohingya community.',
};

export default function Media() {
  const categories = [
    { name: 'All Media', icon: <ExternalLink size={16}/> },
    { name: 'Documentaries', icon: <Video size={16}/> },
    { name: 'Photo Essays', icon: <ImageIcon size={16}/> },
    { name: 'Podcasts', icon: <Mic size={16}/> },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Voices from the Coast",
      category: "Documentary",
      duration: "12:45",
      thumbnail: "https://images.unsplash.com/photo-1576675784432-99494141205c?q=80&w=2072",
      type: 'video'
    },
    {
      id: 2,
      title: "Camps in Monochrome",
      category: "Photo Essay",
      duration: "18 Photos",
      thumbnail: "https://images.unsplash.com/photo-1540339832862-4745511505de?q=80&w=2070",
      type: 'photo'
    },
    {
      id: 3,
      title: "Education Under the Sun",
      category: "Documentary",
      duration: "08:20",
      thumbnail: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=2076",
      type: 'video'
    },
    {
      id: 4,
      title: "The Sound of Resilience",
      category: "Podcast",
      duration: "24:00",
      thumbnail: "https://images.unsplash.com/photo-1478737270239-2fccd27ee086?q=80&w=2070",
      type: 'audio'
    },
    {
      id: 5,
      title: "Tradition in Exile",
      category: "Photo Essay",
      duration: "12 Photos",
      thumbnail: "https://images.unsplash.com/photo-1529653762956-b0a2727bd522?q=80&w=2070",
      type: 'photo'
    },
    {
      id: 6,
      title: "The Next Generation",
      category: "Documentary",
      duration: "15:30",
      thumbnail: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070",
      type: 'video'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-red-100">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="py-20 bg-gray-900 text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-red-600/10 to-transparent"></div>
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
              <h1 className="text-4xl md:text-6xl font-black mb-6 italic tracking-tight">The Media Hub</h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
                 Experience the Rohingya story through immersive visuals, powerful documentaries, and deep-dive audio.
              </p>
           </div>
        </section>

        {/* Filter Bar */}
        <section className="bg-white border-b border-gray-100 sticky top-20 z-40">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex items-center justify-center space-x-4 md:space-x-8 overflow-x-auto no-scrollbar">
                 {categories.map((cat) => (
                    <button 
                      key={cat.name}
                      className={`flex items-center space-x-2 whitespace-nowrap text-sm font-bold uppercase tracking-widest pb-2 border-b-2 transition-all ${cat.name === 'All Media' ? 'border-red-600 text-gray-900' : 'border-transparent text-gray-400 hover:text-gray-900'}`}
                    >
                       {cat.icon}
                       <span>{cat.name}</span>
                    </button>
                 ))}
              </div>
           </div>
        </section>

        {/* Media Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {galleryItems.map((item) => (
                 <div key={item.id} className="group cursor-pointer">
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100 mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                       <img 
                         src={item.thumbnail} 
                         alt={item.title} 
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                       />
                       
                       {/* Overlay */}
                       <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                          {item.type === 'video' && <PlayCircle className="text-white w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity transform scale-90 group-hover:scale-100 duration-500" />}
                       </div>

                       {/* Category Tag */}
                       <div className="absolute top-4 left-4">
                          <span className="bg-white/90 backdrop-blur-md text-gray-900 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-lg">
                             {item.category}
                          </span>
                       </div>

                       {/* Duration Tag */}
                       <div className="absolute bottom-4 right-4">
                          <span className="bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-bold">
                             {item.duration}
                          </span>
                       </div>
                    </div>
                    
                    <div>
                       <h3 className="text-2xl font-black text-gray-900 group-hover:text-red-600 transition-colors leading-tight mb-2">
                          {item.title}
                       </h3>
                       <p className="text-gray-500 font-medium text-sm flex items-center">
                          Watch on YouTube <ExternalLink size={14} className="ml-2" />
                       </p>
                    </div>
                 </div>
              ))}
           </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-50">
           <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-3xl mb-8">
                 <Video className="text-red-600 w-10 h-10" />
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">Have a Story to Tell?</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                 We are always looking for creative content from within the community. If you are a filmmaker, photographer, or podcaster, let's collaborate.
              </p>
              <a href="/contact" className="inline-block bg-gray-900 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-black transition-all transform hover:-translate-y-1 shadow-xl">
                 Submit Your Media
              </a>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
