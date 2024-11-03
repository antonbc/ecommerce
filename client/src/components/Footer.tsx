function Footer() {
  return (
    <div className="bg-gray-950 text-gray-300 py-10 text-center md:text-left antialiased">
      {/* Top Subscription Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center mb-16">
        <div>
          <h2 className="text-xl font-bold text-neutral-300">Stay Updated</h2>
          <p className="mt-2 text-sm text-gray-400">
            Subscribe to our newsletter to get the latest updates.
          </p>
        </div>
        <div className="flex justify-center md:justify-normal items-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-2 rounded-l border border-gray-700 text-neutral-200"
          />
          <button className="p-2 bg-blue-600 text-neutral-200 rounded-r-md text-base hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>

      {/* Departments Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 border-t border-gray-700">
        <h2 className="font-bold text-neutral-200 text-2xl my-8 text-center lg:text-left">
          Departments
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Electronics */}
          <div>
            <h3 className="font-semibold text-neutral-200 mb-4">Electronics</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Accessories</a></li>
              <li><a href="#" className="hover:underline">Headphones</a></li>
              <li><a href="#" className="hover:underline">Smart Phones</a></li>
              <li><a href="#" className="hover:underline">Television</a></li>
            </ul>
          </div>

          {/* Computers */}
          <div>
            <h3 className="font-semibold text-neutral-200 mb-4">Computers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Computer Components</a></li>
              <li><a href="#" className="hover:underline">Monitors</a></li>
              <li><a href="#" className="hover:underline">Laptops</a></li>
              <li><a href="#" className="hover:underline">External Components</a></li>
            </ul>
          </div>

          {/* Women's Fashion */}
          <div>
            <h3 className="font-semibold text-neutral-200 mb-4">Women's Fashion</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Clothing</a></li>
              <li><a href="#" className="hover:underline">Shoes</a></li>
              <li><a href="#" className="hover:underline">Handbags</a></li>
              <li><a href="#" className="hover:underline">Accessories</a></li>
            </ul>
          </div>

          {/* Men's Fashion */}
          <div>
            <h3 className="font-semibold text-neutral-200 mb-4">Men's Fashion</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Clothing</a></li>
              <li><a href="#" className="hover:underline">Shoes</a></li>
              <li><a href="#" className="hover:underline">Watches</a></li>
              <li><a href="#" className="hover:underline">Accessories</a></li>
            </ul>
          </div>

          {/* Sports & Outdoors */}
          <div>
            <h3 className="font-semibold text-neutral-200 mb-4">Sports & Outdoors</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Sports</a></li>
              <li><a href="#" className="hover:underline">Fitness</a></li>
              <li><a href="#" className="hover:underline">Outdoor Recreation</a></li>
            </ul>
          </div>

          {/* Home & Kitchen */}
          <div>
            <h3 className="font-semibold text-neutral-200 mb-4">Home & Kitchen</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Kitchen & Dining</a></li>
              <li><a href="#" className="hover:underline">Bath</a></li>
              <li><a href="#" className="hover:underline">Furniture</a></li>
              <li><a href="#" className="hover:underline">Lighting & Ceiling Fans</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <h2 className="font-bold text-neutral-200 text-2xl mb-8 text-center lg:text-left">
          Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-neutral-100 mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Track Order</a></li>
              <li><a href="#" className="hover:underline">Returns & Refunds</a></li>
              <li><a href="#" className="hovaer:underline">Shipping Info</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="font-bold text-white mb-4">Company Info</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press</a></li>
              <li><a href="#" className="hover:underline">Investor Relations</a></li>
              <li><a href="#" className="hover:underline">Corporate Responsibility</a></li>
            </ul>
          </div>

          {/* Payment */}
          <div>
            <h3 className="font-bold text-white mb-4">Payment</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Payment Methods</a></li>
              <li><a href="#" className="hover:underline">Gift Cards</a></li>
              <li><a href="#" className="hover:underline">Coupons & Offers</a></li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="font-bold text-white mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">YouTube</a></li>
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
