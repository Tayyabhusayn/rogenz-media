import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Linkedin, Twitter, Quote } from 'lucide-react';

export const metadata = {
  title: 'Founder - Md Harun | RoGenZ',
  description: 'Meet Md Harun, the visionary founder of RoGenZ Media.',
};

export default function Founder() {
  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-red-100">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section with Parallax-like feel */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
                 
                 {/* Image Content */}
                 <div className="lg:col-span-5 mb-12 lg:mb-0 relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-red-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                    
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
                       <img 
                         src="/images/founder.jpg" 
                         alt="Md Harun" 
                         className="w-full h-auto object-cover aspect-[4/5]"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                       <div className="absolute bottom-6 left-6 text-white">
                          <p className="text-sm font-bold uppercase tracking-widest text-red-400 mb-1">Founder & CEO</p>
                          <h2 className="text-3xl font-black">Md Harun</h2>
                       </div>
                    </div>

                    {/* Quick Stats/Socials */}
                    <div className="absolute -right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col space-y-4 bg-white p-3 rounded-full shadow-xl border border-gray-100">
                       <a href="#" className="p-2 text-gray-400 hover:text-red-600 transition-colors"><Twitter className="w-5 h-5" /></a>
                       <a href="#" className="p-2 text-gray-400 hover:text-blue-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
                       <a href="mailto:mdharunkms51@gmail.com" className="p-2 text-gray-400 hover:text-red-600 transition-colors"><Mail className="w-5 h-5" /></a>
                    </div>
                 </div>

                 {/* Text Content */}
                 <div className="lg:col-span-7">
                    <div className="max-w-2xl">
                       <span className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-widest mb-6">
                          Leadership Profile
                       </span>
                       <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-8">
                          Driving Change Through <br/>
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">Digital Empowerment.</span>
                       </h1>
                       
                       <div className="relative mb-10 pl-8 border-l-4 border-red-600 italic text-xl text-gray-600 font-medium leading-relaxed">
                          <Quote className="absolute -left-3 -top-4 w-8 h-8 text-red-100 -z-10" />
                          "Our voice is our strongest weapon. We are not just victims of history; we are the architects of our future. Through RoGenZ, we ensure that the world hears the truth directly from us."
                       </div>

                       <div className="prose prose-lg text-gray-600 mb-10">
                          <p>
                             Md Harun is a visionary young leader dedicated to amplifying the voices of the Rohingya community. 
                             Recognizing the power of digital media, he established RoGenZ to bridge the gap between 
                             tradition and the modern digital age.
                          </p>
                          <p>
                             As a member of Gen-Z, Harun brings a fresh perspective to advocacy. He believes in the power 
                             of education, technology, and storytelling to effect change. His leadership has turned 
                             RoGenZ into a vital platform for young journalists across the diaspora.
                          </p>
                       </div>

                       <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                          <div>
                             <p className="text-3xl font-bold text-gray-900">5+</p>
                             <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">Years of Advocacy</p>
                          </div>
                          <div>
                             <p className="text-3xl font-bold text-gray-900">10k+</p>
                             <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">Community Impact</p>
                          </div>
                       </div>
                    </div>
                 </div>

              </div>
           </div>
        </section>

        {/* Goals / Vision Section */}
        <section className="bg-gray-50 py-24">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 className="text-3xl font-black text-gray-900">Harun's Vision for RoGenZ</h2>
                 <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Strategic goals aimed at long-term empowerment and justice.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                 {[
                    {
                       title: 'Journalism Training',
                       desc: 'Providing a platform and professional training for young Rohingya journalists in the camps.',
                       icon: '✍️'
                    },
                    {
                       title: 'Evidence Gathering',
                       desc: 'Documenting human rights violations with accuracy and integrity for global accountability.',
                       icon: '🛡️'
                    },
                    {
                       title: 'Cultural Identity',
                       desc: 'Fostering a sense of community and preserving Rohingya identity among the youth diaspora.',
                       icon: '🌍'
                    }
                 ].map((goal) => (
                    <div key={goal.title} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                       <div className="text-4xl mb-4">{goal.icon}</div>
                       <h3 className="text-xl font-bold text-gray-900 mb-3">{goal.title}</h3>
                       <p className="text-gray-600 leading-relaxed">{goal.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Connect Section */}
        <section className="py-20 text-center">
           <h2 className="text-2xl font-bold mb-8 text-gray-900">Get in touch with Harun</h2>
           <div className="flex justify-center space-x-6">
              <a href="mailto:mdharunkms51@gmail.com" className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-all flex items-center">
                 <Mail className="mr-2 h-5 w-5" /> Send an Email
              </a>
              <a href="/contact" className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-all">
                 Inquiry Form
              </a>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
