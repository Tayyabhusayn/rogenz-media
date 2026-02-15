export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="mb-8 md:mb-0">
            <span className="text-2xl font-bold text-red-500">RoGenZ</span>
            <p className="mt-2 text-gray-400 text-sm max-w-md">
              Empowering the Rohingya Gen-Z through media, advocacy, and storytelling.
              The voice of the future.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Site</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="/news" className="text-base text-gray-400 hover:text-white">News</a></li>
                <li><a href="/about" className="text-base text-gray-400 hover:text-white">About</a></li>
                <li><a href="/founder" className="text-base text-gray-400 hover:text-white">Founder</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Terms</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Social</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="https://youtube.com/@rohingyagen-z" target="_blank" rel="noopener noreferrer" className="text-base text-gray-400 hover:text-white">YouTube</a></li>
                <li><a href="https://www.facebook.com/share/1AY916EqZ5/" target="_blank" rel="noopener noreferrer" className="text-base text-gray-400 hover:text-white">Facebook</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-base text-gray-400 hover:text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} RoGenZ Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
