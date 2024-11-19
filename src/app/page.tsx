"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { CalendarDays, Users, MapPin, Shield } from "lucide-react";
import Image from "next/image";
import EventSlider from "./components/EventSlider";

export default function LandingPage() {
  const router = useRouter();
  const { user } = useAuth();

  const features = [
    {
      icon: <CalendarDays className="h-6 w-6" />,
      title: "Event Planning",
      description:
        "Create and manage events with our intuitive tools. From small gatherings to large conferences.",
      image: "/images/charity/fundraiser.jpeg",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Attendee Management",
      description:
        "Track RSVPs, send invitations, and manage your guest list effortlessly.",
      image: "/images/corporate/business-conference-1.jpeg",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Venue Selection",
      description:
        "Discover and book perfect venues for your events. Virtual or in-person.",
      image: "/images/competitions/lady-justice-aluoch.jpeg",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Platform",
      description:
        "Your events and data are protected with enterprise-grade security.",
      image: "/images/food-and-drink/street-food-festival.jpeg",
    },
  ];

  const stats = [
    { label: "Events Created", value: "10K+" },
    { label: "Active Users", value: "50K+" },
    { label: "Countries", value: "30+" },
    { label: "Success Rate", value: "99%" },
  ];

  const corporateImages = [
    {
      src: "/images/corporate/business-conference-1.jpeg",
      alt: "Business Conference",
    },
    {
      src: "/images/corporate/corporate-meeting-1.jpeg",
      alt: "Corporate Meeting",
    },
  ];

  const culturalImages = [
    {
      src: "/images/cultural/cultural-festival-1.jpeg",
      alt: "Cultural Festival",
    },
    {
      src: "/images/cultural/sol-fest.jpeg",
      alt: "Cultural Performance",
    },
    {
      src: "/images/cultural/high-fashion.jpeg",
      alt: "high-fashion",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cultural/cultural-festival-1.jpeg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/eptaevents.png"
                alt="Epta Events Logo"
                width={200}
                height={80}
                className="brightness-0 invert"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Create Unforgettable Events
            </h1>
            <p className="text-xl text-white mb-8">
              Plan, organize, and host amazing events with our powerful
              platform. From intimate gatherings to grand celebrations.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => router.push(user ? "/create" : "/register")}
                className="bg-[#f02e65] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#ab073d] transition-colors"
              >
                {user ? "Create Event" : "Get Started Free"}
              </button>
              <button
                onClick={() => router.push("/dashboard")}
                className="bg-white text-[#f02e65] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Events
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className="text-[#f02e65] font-semibold mb-2">Our Features</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for Successful Events
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools and features to make your event planning
              journey smooth and successful
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#f02e65]/0 to-[#f02e65]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  {/* Feature Icon */}
                  <div className="text-[#f02e65] bg-[#f02e65]/10 p-3 rounded-xl inline-block">
                    {feature.icon}
                  </div>

                  {/* Feature Image */}
                  <div className="mt-4 h-40 rounded-xl overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Feature Content */}
                  <h3 className="text-xl font-semibold mt-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Add this Stats Section after the Features Section */}
      {/* Stats Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl font-bold text-[#f02e65] mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Add these new sliders in the Featured Events Section, right after the existing ones */}
      {/* Inside the Featured Sliders div, add: */}
      {/* About Us Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-[#f02e65] font-semibold mb-2">About Us</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Creating Memorable Events That Last a Lifetime
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Epta Events, we believe every occasion deserves to be
              extraordinary. With over a decade of experience in event planning
              and management, we&apos;ve mastered the art of turning your vision
              into reality.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column - Image Grid */}
            <div className="lg:col-span-7 space-y-8">
              {/* Main Image with Stats */}
              <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="/images/charity/fundraiser.jpeg"
                  alt="Our Team"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Stats Container */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between text-white">
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-1">500+</div>
                      <div className="text-sm font-medium">
                        Events Organized
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-1">50K+</div>
                      <div className="text-sm font-medium">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold mb-1">98%</div>
                      <div className="text-sm font-medium">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-8">
                  <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg group">
                    <Image
                      src="/images/competitions/lady-justice-aluoch.jpeg"
                      alt="Wedding Event"
                      fill
                      className="object-cover transform group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-semibold text-lg">Competition</h3>
                      <p className="text-sm text-white/90">
                        Creating magical moments
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg group">
                    <Image
                      src="/images/corporate/business-conference-1.jpeg"
                      alt="Corporate Event"
                      fill
                      className="object-cover transform group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-semibold text-lg">Corporate</h3>
                      <p className="text-sm text-white/90">
                        Professional excellence
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Image Grid */}
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-4">
                  <div className="relative h-[200px] rounded-xl overflow-hidden shadow-lg group">
                    <Image
                      src="/images/cultural/cultural-festival-1.jpeg"
                      alt="Cultural Event"
                      fill
                      className="object-cover transform group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-semibold text-lg">Cultural</h3>
                      <p className="text-sm text-white/90">Rich traditions</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="relative h-[200px] rounded-xl overflow-hidden shadow-lg group">
                    <Image
                      src="/images/cultural/sol-fest.jpeg"
                      alt="Concert Event"
                      fill
                      className="object-cover transform group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-semibold text-lg">Concerts</h3>
                      <p className="text-sm text-white/90">
                        Unforgettable shows
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="relative h-[200px] rounded-xl overflow-hidden shadow-lg group">
                    <Image
                      src="/images/food-and-drink/street-food-festival.jpeg"
                      alt="Food and drinks"
                      fill
                      className="object-cover transform group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="font-semibold text-lg">Food and drinks</h3>
                      <p className="text-sm text-white/90">
                        Celebrating success
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-8">
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <div className="grid gap-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#f02e65]/10 p-4 rounded-xl">
                      <CalendarDays className="h-8 w-8 text-[#f02e65]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Expert Planning
                      </h3>
                      <p className="text-gray-600">
                        Our professional event planners bring years of
                        experience to make your event flawless.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#f02e65]/10 p-4 rounded-xl">
                      <Users className="h-8 w-8 text-[#f02e65]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Dedicated Team
                      </h3>
                      <p className="text-gray-600">
                        A passionate team committed to supporting you throughout
                        your event journey.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#f02e65]/10 p-4 rounded-xl">
                      <MapPin className="h-8 w-8 text-[#f02e65]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Perfect Venues
                      </h3>
                      <p className="text-gray-600">
                        Access to exclusive venues and locations perfectly
                        suited to your event.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#f02e65]/10 p-4 rounded-xl">
                      <Shield className="h-8 w-8 text-[#f02e65]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        100% Satisfaction
                      </h3>
                      <p className="text-gray-600">
                        We guarantee the success of your event with our proven
                        track record.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => router.push("/create")}
                  className="w-full mt-8 bg-[#f02e65] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#ab073d] transition-colors inline-flex items-center justify-center gap-2 group"
                >
                  Start Planning Your Event
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Events Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Events
            </h2>
            <p className="text-gray-600">
              Discover our most popular and upcoming events
            </p>
          </div>

          {/* Event Categories */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {[
              "Weddings",
              "Corporate",
              "Birthdays",
              "Graduations",
              "Cultural",
              "Concerts",
            ].map((category, index) => (
              <div key={category} className="group cursor-pointer">
                <div className="relative h-40 rounded-xl overflow-hidden mb-2">
                  <Image
                    src={`/images/${category.toLowerCase()}/${category.toLowerCase()}-${index + 1}.jpeg`}
                    alt={category}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white font-semibold text-lg">
                      {category}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Sliders */}
          <div className="space-y-12">
            {/* Corporate Events */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Corporate Events</h3>
              <EventSlider images={corporateImages} />
            </div>

            {/* Cultural Events */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Cultural Celebrations
              </h3>
              <EventSlider images={culturalImages} />
            </div>

            {/* Concert Events */}
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Next Event?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join thousands of event organizers who trust Epta events
          </p>
          <button
            onClick={() => router.push(user ? "/create" : "/register")}
            className="px-8 py-4 bg-[#f02e65] rounded-full text-lg font-semibold hover:bg-[#ab073d] transition-colors"
          >
            {user ? "Create Your Event" : "Sign Up Now"}
          </button>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Features</li>
                <li>Pricing</li>
                <li>Templates</li>
                <li>Integration</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Community</li>
                <li>Partners</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Security</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p> 2024 Epta events. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
