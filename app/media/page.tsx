import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Media Gallery | RoGenZ',
  description: 'Photos and videos from the RoGenZ team and community.',
};

export default function Media() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Media Gallery</h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Visual stories from the ground.
          </p>
        </div>
        
        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
           {/* Placeholder Gallery Items */}
           {[1, 2, 3, 4, 5, 6].map((item) => (
             <div key={item} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
               <div className="flex-shrink-0">
                 <img className="h-48 w-full object-cover" src={`https://via.placeholder.com/400x300?text=Media+Item+${item}`} alt="" />
               </div>
               <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                 <div className="flex-1">
                   <p className="text-sm font-medium text-red-600">
                     Documentary
                   </p>
                   <a href="#" className="block mt-2">
                     <p className="text-xl font-semibold text-gray-900">Life in the Camps: Part {item}</p>
                     <p className="mt-3 text-base text-gray-500">
                       A glimpse into the daily struggles and resilience of our people.
                     </p>
                   </a>
                 </div>
               </div>
             </div>
           ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
