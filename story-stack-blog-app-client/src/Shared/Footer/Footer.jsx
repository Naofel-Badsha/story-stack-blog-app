import { Link } from "react-router";

const Footer = () => {
  return (
    
    <footer className="bg-[#F6F6F6] pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-medium text-gray-700">Story<span className='text-[#E64839]'>&</span>Stack</Link>
            <p className="text-gray-500 text-sm">
              Share your stories and technology experiences. We believe that every code has a story behind it.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg text-gray-700 font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="/" className="hover:text-[#E64839] transition">Home</a></li>
              <li><a href="/blogs" className="hover:text-[#E64839] transition">All Blogs</a></li>
              <li><a href="/about" className="hover:text-[#E64839] transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-[#E64839] transition">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg text-gray-700 font-semibold mb-4 border-b border-gray-700 pb-2">Categories</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-[#E64839] transition">Web Development</a></li>
              <li><a href="#" className="hover:text-[#E64839] transition">JavaScript</a></li>
              <li><a href="#" className="hover:text-[#E64839] transition">React & Next.js</a></li>
              <li><a href="#" className="hover:text-[#E64839] transition">UI/UX Design</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg text-gray-700 font-semibold mb-4 border-b border-gray-700 pb-2">Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">Subscribe to get updates on new posts.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#E64839]"
              />
              <button className="bg-[#E64839] hover:bg-[#414040] text-white font-medium py-2 rounded transition cursor-pointer">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Story & Stack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;