import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from './ContactForm';
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
                  <p>mdharunkms51@gmail.com</p>
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
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
