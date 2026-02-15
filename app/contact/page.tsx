import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | RoGenZ',
  description: 'Get in touch with the RoGenZ team.',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Get in touch</h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                Have a story to share? Want to collaborate or support our cause? We'd love to hear from you.
              </p>
            </div>
            <div className="mt-9">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>+880 1859-371036</p>
                  <p className="mt-1">Mon-Fri 9am to 6pm</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>contact@rogenz.org</p>
                </div>
              </div>
              <div className="mt-6 flex">
                 <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <p>Cox's Bazar, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Send us a message</h2>
            <form action="#" method="POST" className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <div className="mt-1">
                  <input type="text" name="name" id="name" autoComplete="name" className="py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <div className="mt-1">
                  <input type="email" name="email" id="email" autoComplete="email" className="py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <div className="mt-1">
                  <textarea id="message" name="message" rows={4} className="py-3 px-4 block w-full shadow-sm focus:ring-red-500 focus:border-red-500 border border-gray-300 rounded-md"></textarea>
                </div>
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
