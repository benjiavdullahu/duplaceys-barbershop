import Link from "next/link";

export default function History() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              A legacy of barbering excellence passed down through generations
            </p>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Luigi Era */}
            <div className="mb-16">
              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      The Beginning:{" "}
                      <span className="text-red-600">Luigi's Legacy</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      Over 30 years ago, an Italian master barber named Luigi
                      established what would become Duplacye's Barbershop at 150
                      King Street East in downtown Hamilton. Luigi brought with
                      him the traditions of Old World barbering - the
                      craftsmanship, attention to detail, and dedication to
                      making every customer feel their best.
                    </p>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      Luigi wasn't just a barber; he was a pillar of the
                      community. His shop became a gathering place where men
                      would come not just for haircuts, but for conversation,
                      friendship, and the kind of personal service that's hard
                      to find today.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-600">
                      <p className="text-gray-700 italic">
                        "Luigi believed that a good haircut wasn't just about
                        looking good - it was about feeling confident and ready
                        to take on the world."
                      </p>
                    </div>
                  </div>
                  <div className="relative">
                    {/* Placeholder for Luigi photo/shop photo */}
                    <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <svg
                          className="w-16 h-16 mx-auto mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        <p className="text-sm">Historical Photo Placeholder</p>
                        <p className="text-xs">Luigi's era barbershop</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Transition */}
            <div className="mb-16">
              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:order-2">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      A New Chapter:{" "}
                      <span className="text-purple-800">
                        From Kosovo to Canada
                      </span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      In the midst of Luigi's successful barbershop, a young man
                      from Kosovo arrived in Canada seeking a new beginning. As
                      a refugee, he faced many challenges, but he was determined
                      to build a life for himself and contribute to his new
                      community.
                    </p>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      After applying to many places, fate led him to Luigi's
                      barbershop. Luigi saw something special in this
                      hardworking immigrant - dedication, skill, and the same
                      passion for barbering that had driven his own success. He
                      took him under his wing, teaching him not just the
                      techniques, but the heart of true barbering.
                    </p>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      For 25 years, they worked side by side. Luigi became not
                      just a boss, but a mentor and father figure. The shop
                      flourished under their partnership, with Aram and other
                      dedicated team members joining the family along the way.
                    </p>
                  </div>
                  <div className="lg:order-1 relative">
                    {/* Placeholder for father's early days photo */}
                    <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <svg
                          className="w-16 h-16 mx-auto mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <p className="text-sm">Team Photo Placeholder</p>
                        <p className="text-xs">Luigi and the early team</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Inheritance */}
            <div className="mb-16">
              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Passing the <span className="text-red-600">Torch</span>
                  </h2>
                </div>
                <div className="max-w-3xl mx-auto">
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed text-center">
                    When Luigi passed away, he made a decision that spoke
                    volumes about the trust and respect he had built with his
                    protégé. Rather than selling the business or passing it to
                    family, Luigi chose to give the barbershop to the man who
                    had worked alongside him with such dedication and skill.
                  </p>
                  <div className="bg-gradient-to-r from-red-50 to-purple-50 p-8 rounded-lg border border-gray-200 mb-6">
                    <p className="text-xl text-gray-800 font-medium text-center italic">
                      "Luigi's final gift was not just a business - it was the
                      continuation of a legacy, the passing of tradition from
                      one generation to the next."
                    </p>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed text-center">
                    This gesture represented more than a business transaction;
                    it was the recognition of shared values, mutual respect, and
                    the understanding that true barbering is about community,
                    craftsmanship, and caring for people.
                  </p>
                </div>
              </div>
            </div>

            {/* Modern Era - Family Business */}
            <div className="mb-16">
              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      Today:{" "}
                      <span className="text-purple-800">
                        A Family Tradition
                      </span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      In 2019-2020, the story took another beautiful turn. The
                      owner's brother decided to join the family business,
                      transforming Duplacye's from a solo operation into a true
                      family enterprise. This addition brought new energy while
                      maintaining the traditional values that have defined the
                      shop for over three decades.
                    </p>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      Today, Duplacye's Barbershop continues to serve the
                      Hamilton community with the same dedication to quality,
                      affordability, and personal service that Luigi first
                      established. The dark purple walls - a recent renovation -
                      symbolize the blend of tradition and modernity that
                      defines today's Duplacye's.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-2xl font-bold text-red-600">30+</p>
                        <p className="text-sm text-gray-600">
                          Years of Service
                        </p>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <p className="text-2xl font-bold text-red-600">25+</p>
                        <p className="text-sm text-gray-600">
                          Years of Experience
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    {/* Placeholder for current shop photo */}
                    <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <svg
                          className="w-16 h-16 mx-auto mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <p className="text-sm">Current Shop Photo</p>
                        <p className="text-xs">Modern Duplacye's interior</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Historical Video Section */}
            <div className="mb-16">
              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    From the <span className="text-red-600">Archives</span>
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Watch this rare footage from the early days when Luigi was
                    still with us, capturing the authentic spirit of traditional
                    barbering.
                  </p>
                </div>

                {/* Video placeholder */}
                <div className="max-w-3xl mx-auto">
                  <div className="bg-gray-800 rounded-lg h-64 md:h-96 flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg
                        className="w-20 h-20 mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h4m2-6a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="text-lg">Historical Video Placeholder</p>
                      <p className="text-sm text-gray-300">
                        Vintage footage from Luigi's era
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Values */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-red-600 to-purple-800 rounded-lg text-white p-8 md:p-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Our Values
                  </h2>
                  <p className="text-xl text-gray-200">
                    The principles that have guided us for over 30 years
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Community</h3>
                    <p className="text-gray-200">
                      We believe in building lasting relationships with our
                      neighbors and customers
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Quality</h3>
                    <p className="text-gray-200">
                      Every haircut is performed with skill, care, and attention
                      to detail
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Affordability</h3>
                    <p className="text-gray-200">
                      Quality service shouldn't break the bank - we keep our
                      prices fair
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Become Part of Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              When you visit Duplacye's, you're not just getting a haircut -
              you're becoming part of a tradition that spans over 30 years and
              continues to grow with each new customer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#services"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                View Our Services
              </Link>
              <Link
                href="/#location"
                className="bg-purple-800 hover:bg-purple-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Visit Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
