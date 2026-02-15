import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Founder - Md Harun | RoGenZ',
  description: 'Meet Md Harun, the founder of RoGenZ Media.',
};

export default function Founder() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
            <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
              <div>
                <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Leadership</h2>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Md Harun
                </h3>
              </div>
            </div>
            <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="relative lg:row-start-1 lg:col-start-2">
                <svg
                  className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20 text-gray-100"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
                </svg>
                <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                  <figure>
                    <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                      {/* Md Harun Image */}
                      <img 
                        className="rounded-lg shadow-lg object-cover object-center" 
                        src="/images/founder.jpg" 
                        alt="Md Harun, Founder of RoGenZ Media" 
                        width={500}
                        height={500}
                      />
                    </div>
                    <figcaption className="mt-3 flex text-sm text-gray-500">
                      <span className="ml-2">Founder of RoGenZ Media</span>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="text-base max-w-prose mx-auto lg:max-w-none">
                  <p className="text-lg text-gray-500">
                    Md Harun is a visionary young leader dedicated to amplifying the voices of the Rohingya community.
                    Recognizing the power of digital media, he established RoGenZ to bridge the gap between tradition and
                    the modern digital age, ensuring that the stories, struggles, and triumphs of his people are heard globally.
                  </p>
                </div>
                <div className="mt-5 prose prose-red text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                  <p>
                    As a member of Gen-Z, Harun brings a fresh perspective to advocacy. He believes in the power of education,
                    technology, and storytelling to effect change. Through RoGenZ, he aims to:
                  </p>
                  <ul className="list-disc pl-5 mt-4 space-y-2">
                    <li>Provide a platform for young Rohingya journalists.</li>
                    <li>Document human rights violations with accuracy and integrity.</li>
                    <li>Foster a sense of community and identity among the diaspora.</li>
                    <li>Connect the Rohingya cause with global youth movements.</li>
                  </ul>
                  <p className="mt-4">
                    "Our voice is our strongest weapon," says Harun. "We are not just victims of history; we are the architects of our future."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
