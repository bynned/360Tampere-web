import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1570620661008-aebb815c4165?q=80&w=2671&auto=format&fit=crop&q=80"
            alt="360° view of Tampere"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">360°Tampere</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-50">Experience Tampere in 360° - Bringing the city to life, virtually anywhere, anytime!</p>
          <a
            href="#contact"
            className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Explore Our 360° Tours
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1691859491587-f2ac80e2b566?q=80&w=2702&auto=format&fit=crop&q=80"
                  alt="Tourist attractions"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Tourist Attractions</h3>
              <p className="text-gray-700">Immerse yourself in Tampere's most beautiful locations, from Pyynikki Ridge to Näsinneula Tower, all captured in stunning 360° detail.</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?q=80&w=2672&auto=format&fit=crop&q=80"
                  alt="Virtual experiences"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Virtual Experiences</h3>
              <p className="text-gray-700">Perfect for elderly homes and healthcare facilities, bringing the outside world to those who can't physically visit these locations.</p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?auto=format&fit=crop&q=80"
                  alt="Business promotion"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Business Promotion</h3>
              <p className="text-gray-700">Create immersive 360° content for amusement parks, businesses, and attractions to showcase your venue in an engaging way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1636452089599-56a0dc26b4f2?q=80&w=2670&auto=format&fit=crop&q=80"
                alt="360° video production"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-gray-700 mb-6">
                At 360Tampere, we're passionate about making Tampere's beauty accessible to everyone. 
                Our high-quality 360° videos capture the city's most breathtaking spots, allowing viewers 
                to explore its wonders from anywhere in the world.
              </p>
              <p className="text-gray-700">
                We specialize in creating immersive virtual experiences that bring joy to elderly residents 
                in care homes, help promote local attractions, and make Tampere's tourist spots accessible 
                to those who can't visit in person. Our technology bridges the gap between physical and 
                virtual experiences, making the city's treasures available to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Contact Us</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Get in Touch</h3>
                  <p className="text-gray-700 mb-4">
                    Ready to experience Tampere in 360°? Contact us to discuss your project!
                  </p>
                  <div className="space-y-2">
                    <p className="flex items-center text-gray-700">
                      <span className="font-semibold mr-2 text-gray-900">Email:</span>
                      contact@360tampere.fi
                    </p>
                    <p className="flex items-center text-gray-700">
                      <span className="font-semibold mr-2 text-gray-900">Phone:</span>
                      +358 22 23345293
                    </p>
                    <p className="flex items-center text-gray-700">
                      <span className="font-semibold mr-2 text-gray-900">Address:</span>
                      Hämeenkatu 1, Tampere
                    </p>
                  </div>
                </div>
                <div>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
