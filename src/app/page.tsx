import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/banner/duplaceys.jpg"
            alt="Duplacye's Barbershop - Traditional barbering in downtown Hamilton"
            fill
            className="object-cover filter blur-[8px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/55"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-white">
              <div className="mb-4 lg:mb-6">
                <span
                  className="text-purple-200 text-lg font-medium tracking-[0.2em] uppercase"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  HAMILTON&apos;S LEGACY BARBERSHOP
                </span>
              </div>
              <h1
                className="text-5xl md:text-6xl lg:text-8xl font-light mb-4 lg:mb-6 leading-[0.9]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Duplacye&apos;s
                <span
                  className="block text-4xl md:text-5xl lg:text-6xl text-gray-200 font-light italic"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Barbershop
                </span>
              </h1>
              <p
                className="text-xl md:text-2xl lg:text-3xl mb-3 lg:mb-4 text-gray-200 leading-relaxed font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Where tradition meets craftsmanship
              </p>
              <p
                className="text-base lg:text-lg mb-6 lg:mb-8 text-gray-300 leading-relaxed max-w-3xl mx-auto font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Eight decades of barbering tradition in the heart of downtown
                Hamilton. Traditional techniques meet modern style.
              </p>
              <div className="flex justify-center mb-6 lg:mb-8">
                <Link
                  href="#services"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 lg:px-10 py-3 lg:py-4 rounded font-medium text-lg transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105 tracking-wide"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  View Services
                </Link>
              </div>
              <div
                className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 justify-center text-sm lg:text-base"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <div className="flex items-center">
                  <div className="flex text-yellow-400  mr-2">
                    {"★".repeat(4)}★
                  </div>
                  <span className="text-gray-200">
                    4.4 (104 Google reviews)
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="flex text-yellow-400  mr-2">
                    {"★".repeat(5)}
                  </div>
                  <span className="text-gray-200">5 (Yelp)</span>
                </div>
                <div className="text-gray-200 font-medium">
                  80+ Years Legacy
                </div>
              </div>

              {/* Visit Info */}
              <div className="mt-12 lg:mt-16 bg-black/60 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-slate-700/50 shadow-2xl max-w-2xl mx-auto">
                <div className="text-center">
                  <h3
                    className="text-2xl font-light mb-4 text-gray-200"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Visit Us Today
                  </h3>
                  <div
                    className="space-y-3 text-gray-200"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <p className="text-lg font-medium">
                      150 King Street East, Downtown Hamilton
                    </p>
                    <div className="border-t border-slate-600/50 pt-4 mt-4">
                      <p className="text-sm font-medium">Tuesday - Saturday</p>
                      <p className="text-lg font-semibold text-gray-200">
                        9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hidden lg:block">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-black to-slate-900 text-white ">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center">
              <div className="group bg-black/30 backdrop-blur rounded-xl p-6 border border-purple-600/20 hover:border-purple-600/50 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-gray-200  mb-2 group-hover:scale-110 transition-transform duration-300">
                  80+
                </div>
                <div className="text-gray-300 text-sm lg:text-base">
                  Years Legacy
                </div>
              </div>
              <div className="group bg-black/30 backdrop-blur rounded-xl p-6 border border-purple-600/20 hover:border-purple-600/50 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-gray-200 mb-2 group-hover:scale-110 transition-transform duration-300">
                  Under $30
                </div>
                <div className="text-gray-300 text-sm lg:text-base">
                  All Services
                </div>
              </div>
              <div className="group bg-black/30 backdrop-blur rounded-xl p-6 border border-purple-600/20 hover:border-purple-600/50 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-gray-200 mb-2 group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <div className="text-gray-300 text-sm lg:text-base">
                  Master Barbers
                </div>
              </div>
              <div className="group bg-black/30 backdrop-blur rounded-xl p-6 border border-purple-600/20 hover:border-purple-600/50 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-gray-200 mb-2 group-hover:scale-110 transition-transform duration-300">
                  104
                </div>
                <div className="text-gray-300 text-sm lg:text-base">
                  Google Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <span
                className="text-gray-200 text-lg font-medium tracking-[0.2em] uppercase mb-4 block"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                OUR EXPERTISE
              </span>
              <h2
                className="text-4xl lg:text-6xl font-light mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Services & Pricing
              </h2>
            </div>

            <div className="bg-gray-900/80 rounded-xl p-8 lg:p-12 max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                  <span
                    className="text-lg font-medium text-white tracking-wide"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    HAIRCUT
                  </span>
                  <span
                    className="text-xl font-light text-gray-200"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    $23.00
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                  <span
                    className="text-lg font-medium text-white tracking-wide"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    SHAVE
                  </span>
                  <span
                    className="text-xl font-light text-gray-200"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    $22.00
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                  <span
                    className="text-lg font-medium text-white tracking-wide"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    BEARD TRIM
                  </span>
                  <span
                    className="text-xl font-light text-gray-200"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    $12.00
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                  <span
                    className="text-lg font-medium text-white tracking-wide"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    NECK TRIM
                  </span>
                  <span
                    className="text-xl font-light text-gray-200"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    $10.00
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                  <span
                    className="text-lg font-medium text-white tracking-wide"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    SHAMPOO
                  </span>
                  <span
                    className="text-xl font-light text-gray-200"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    $10.00
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                  <span
                    className="text-lg font-medium text-white tracking-wide"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    HIGHLIGHT
                  </span>
                  <span
                    className="text-xl font-light text-gray-200"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    $30.00
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span
                    className="text-lg font-medium text-white tracking-wide"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    BLACK COLOUR
                  </span>
                  <span
                    className="text-xl font-light text-gray-200"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    $25.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-12 lg:py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 lg:mb-12">
              <span
                className="text-red-600 text-lg font-medium tracking-[0.2em] uppercase mb-4 block"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                MEET THE MASTER
              </span>
              <h2
                className="text-3xl lg:text-5xl font-light text-gray-900 mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our Barber
              </h2>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-200 max-w-md mx-auto">
              <div className="text-center">
                <div className="mb-4">
                  <span className="bg-slate-800 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Master Barber & Owner
                  </span>
                </div>
                <h3
                  className="text-2xl lg:text-3xl font-light text-gray-900 mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Besim Avdullahu
                </h3>
                <p
                  className="text-gray-700 font-medium text-lg"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  30+ Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <span
                className="text-red-600 text-lg font-medium tracking-[0.2em] uppercase mb-4 block"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                VISIT US
              </span>
              <h2
                className="text-4xl lg:text-6xl font-light text-gray-900 mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Find Our Location
              </h2>
              <p
                className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Located in the heart of downtown Hamilton on King Street East
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Shop Photo */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                <div className="h-64 lg:h-80">
                  <Image
                    src="/images/general/Shop.webp"
                    alt="Duplacye's Barbershop storefront at 150 King Street East, Hamilton"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 bg-gray-50">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Our Storefront
                  </h3>
                  <p className="text-gray-600">
                    Traditional barbershop in downtown Hamilton
                  </p>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                <div className="h-64 lg:h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.8234567890123!2d-79.8653678846154!3d43.2557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c84d1e3b1234%3A0x567890abcdef!2s150%20King%20St%20E%2C%20Hamilton%2C%20ON!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Duplacye's Barbershop Location - 150 King St East, Hamilton, ON"
                  ></iframe>
                </div>
                <div className="p-6 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        150 King Street East
                      </h3>
                      <p className="text-gray-600">Hamilton, Ontario</p>
                    </div>
                    <a
                      href="https://maps.google.com/?q=150+King+St+East,+Hamilton,+ON"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800 hover:bg-slate-900 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm"
                    >
                      Open in Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-300 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3
                className="text-2xl lg:text-3xl font-light text-gray-200 mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Duplacye&apos;s Barbershop
              </h3>
              <p
                className="text-sm text-gray-200 font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Family owned since 2008
              </p>
            </div>
            <div>
              <h4
                className="text-lg lg:text-xl font-medium text-white mb-6"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Hours & Services
              </h4>
              <div
                className="space-y-2 text-sm lg:text-base"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <p>Tuesday - Saturday: 9:00 AM - 5:00 PM</p>
                <p>Sunday & Monday: Closed</p>
              </div>
            </div>
            <div>
              <h4
                className="text-lg lg:text-xl font-medium text-white mb-6"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Visit Us
              </h4>
              <div
                className="space-y-2 text-sm lg:text-base"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <p>150 King St East</p>
                <p>Hamilton, Ontario</p>
                <p className="text-gray-200 font-bold text-lg lg:text-xl">
                  905-522-8512
                </p>
                <p className="text-gray-500">bavdullahub@gmail.com</p>
                <p className="text-gray-200 text-xs lg:text-sm mt-2">
                  Downtown Hamilton • Near Jackson Square
                </p>
              </div>
            </div>
          </div>
          <div
            className="border-t border-gray-800 mt-8 lg:mt-12 pt-8 text-center text-gray-500 text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <p>
              &copy; {new Date().getFullYear()} Duplacye&apos;s Barbershop. A
              Hamilton tradition for over 80 years.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
