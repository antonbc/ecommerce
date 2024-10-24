function Footer() {
  return (
    <div className="bg-gray-950 text-gray-300 py-10 text-center md:text-left antialiased">
      {/* Top Subscription Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center mb-16 ">
        <div>
          <h2 className="text-xl font-bold text-neutral-300">Stay Updated</h2>
          <p className="mt-2 text-sm text-gray-400">
            Subscribe to our newsletter to get the latest updates.
          </p>
        </div>
        <div className="flex justify-center md:justify-normal items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-l border border-gray-700 text-neutral-200"
          />
          <button className="p-2 bg-blue-600 text-neutral-200 rounded-r-md text-base hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 border-t border-gray-700">
        {/* Overall Header for Categories */}
        <h2 className="font-bold text-neutral-200 text-2xl my-8 text-center lg:text-left">
          Departments
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Men's Apparel Column */}
          <div>
            <h3 className="font-semibold text-neutral-200 mb-4">
              Men's Apparel
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Shirts
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pants
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shoes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Women's Apparel Column */}
          <div>
            <h3 className="font-semibold text-neutral-200 mb-4">
              Women's Apparel
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Dresses
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tops
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shoes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Electronics Column */}
          <div>
            <h3 className="font-semibold text-neutral-200 mb-4">Electronics</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Phones
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Laptops
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cameras
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Home & Garden Column */}
          <div>
            <h3 className="font-semibold text-neutral-200 mb-4">
              Home & Garden
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Furniture
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kitchen
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Decor
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Garden Tools
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        {/* Overall Header for Categories */}
        <h2 className="font-bold text-neutral-200 text-2xl mb-8 text-center lg:text-left">
          Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Footer Column 1 */}
          <div>
            <h3 className="font-bold text-neutral-100 mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Footer Column 2 */}
          <div>
            <h3 className="font-bold text-white mb-4">Company Info</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Corporate Responsibility
                </a>
              </li>
            </ul>
          </div>

          {/* Footer Column 3 */}
          <div>
            <h3 className="font-bold text-white mb-4">Payment</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Corporate Responsibility
                </a>
              </li>
            </ul>
          </div>

          {/* Footer Column 4 */}
          <div>
            <h3 className="font-bold text-white mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        <p>&copy; 2024 YourCompany. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
