import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us | RoGenZ',
  description: 'Learn about RoGenZ Media and our mission.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="relative py-16 bg-white overflow-hidden">
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
              <h1>
                <span className="block text-base text-center text-red-600 font-semibold tracking-wide uppercase">Who We Are</span>
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Empowering the Next Generation
                </span>
              </h1>
              <p className="mt-8 text-xl text-gray-500 leading-8">
                RoGenZ (Rohingya Gen-Z) is a youth-led media organization dedicated to amplifying the voices of the Rohingya people. 
                Born from the need for authentic representation, we use the power of digital media to tell our own stories, 
                advocate for our rights, and build a brighter future.
              </p>
            </div>
            <div className="mt-6 prose prose-red prose-lg text-gray-500 mx-auto">
              <p>
                Our team consists of young journalists, activists, and creatives who are passionate about truth and justice. 
                We operate from within the refugee camps and diaspora communities, providing a unique and vital perspective 
                on the ongoing crisis.
              </p>
              <h3>Our Mission</h3>
              <p>
                To provide accurate, timely, and impactful news and media coverage that sheds light on the Rohingya experience 
                and fosters global solidarity.
              </p>
              <h3>Our Vision</h3>
              <p>
                A world where the Rohingya people are recognized, respected, and granted their full rights as citizens and human beings.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
