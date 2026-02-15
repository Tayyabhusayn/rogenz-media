import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Eye, Heart, Shield, Users, Globe } from 'lucide-react';

export const metadata = {
  title: 'About Us | RoGenZ Media',
  description: 'Learn about our mission to amplify Rohingya voices through digital media.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-red-100">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gray-900 py-24 md:py-32 overflow-hidden">
           <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
           <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-600/20 to-transparent"></div>
           
           <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                 We are the Voice <br/>
                 <span className="text-red-500">of the Generation.</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                 RoGenZ is a youth-led media organization dedicated to amplifying the lived experiences of the Rohingya people through authentic storytelling and global advocacy.
              </p>
           </div>
        </section>

        {/* Mission & Vision Grid */}
        <section className="py-20 -mt-10 relative z-10">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8">
                 
                 {/* Mission Card */}
                 <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 transform transition-all hover:-translate-y-1">
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                       <Target className="w-8 h-8 text-red-600" />
                    </div>
                    <h2 className="text-3xl font-black text-gray-900 mb-4">Our Mission</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                       To provide accurate, timely, and impactful news coverage that sheds light on the Rohingya experience, 
                       advocates for fundamental human rights, and fosters a global community of solidarity.
                    </p>
                 </div>

                 {/* Vision Card */}
                 <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 transform transition-all hover:-translate-y-1">
                    <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                       <Eye className="w-8 h-8 text-red-600" />
                    </div>
                    <h2 className="text-3xl font-black text-gray-900 mb-4">Our Vision</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                       A world where the Rohingya people are recognized, respected, and granted their full rights as citizens. 
                       We envision a future where our youth lead the way in rebuilding our community's narrative.
                    </p>
                 </div>

              </div>
           </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-gray-50">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 className="text-4xl font-black text-gray-900">Our Core Values</h2>
                 <p className="mt-4 text-gray-600 text-lg">The principles that guide everything we do.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                    { title: 'Truth', icon: <Shield />, desc: 'Unyielding commitment to factual reporting and integrity.' },
                    { title: 'Empowerment', icon: <Users />, desc: 'Lifting up young voices and providing tools for self-advocacy.' },
                    { title: 'Resilience', icon: <Heart />, desc: 'Honoring the strength of our people through every story.' },
                    { title: 'Global Impact', icon: <Globe />, desc: 'Bridging the gap between the camps and the world stage.' }
                 ].map((value) => (
                    <div key={value.title} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-red-200 transition-colors">
                       <div className="text-red-600 mb-4">{value.icon}</div>
                       <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                       <p className="text-gray-600">{value.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Story Section */}
        <section className="py-24 overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
                 <div className="relative mb-16 lg:mb-0">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-100 rounded-full blur-3xl opacity-50"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
                      alt="Refugee Camp Community" 
                      className="rounded-3xl shadow-2xl relative z-10"
                    />
                 </div>
                 <div>
                    <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight">
                       Born from the Need for <span className="text-red-600 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Authentic Representation.</span>
                    </h2>
                    <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                       <p>
                          For too long, the story of the Rohingya has been told by outsiders. While international media coverage is vital, it often misses the nuances, the hopes, and the vibrant culture that exists beyond the headlines of crisis.
                       </p>
                       <p>
                          RoGenZ was founded by young Rohingya activists who saw the power of social media and digital journalism. We realized that we didn't need to wait for permission to tell our stories—we could build our own platform.
                       </p>
                       <p>
                          Today, we operate from within refugee camps in Bangladesh and diaspora communities worldwide, creating a unified digital voice for the next generation.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Join Us Section */}
        <section className="bg-red-600 py-16">
           <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-black text-white mb-6 italic">"Empowering the Rohingya Gen-Z to lead the narrative of our future."</h2>
              <a href="/contact" className="inline-block bg-white text-red-600 px-10 py-4 rounded-full font-black hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                 Join Our Movement
              </a>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
