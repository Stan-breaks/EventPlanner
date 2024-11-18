"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "./context/AuthContext";
import { CalendarDays, Users, MapPin, Shield } from "lucide-react";

export default function LandingPage() {
  const router = useRouter();
  const { user } = useAuth();

  const features = [
    {
      icon: <CalendarDays className="h-6 w-6" />,
      title: "Event Planning",
      description:
        "Create and manage events with our intuitive tools. From small gatherings to large conferences.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Attendee Management",
      description:
        "Track RSVPs, send invitations, and manage your guest list effortlessly.",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Venue Selection",
      description:
        "Discover and book perfect venues for your events. Virtual or in-person.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Platform",
      description:
        "Your events and data are protected with enterprise-grade security.",
    },
  ];

  const stats = [
    { label: "Events Created", value: "10K+" },
    { label: "Active Users", value: "50K+" },
    { label: "Countries", value: "30+" },
    { label: "Success Rate", value: "99%" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#f02e65] to-[#ab073d] text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Create Unforgettable Events
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Epta events helps you plan, organize, and execute extraordinary
              events with ease. From concept to celebration, we&apos;ve got you
              covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push(user ? "/create" : "/register")}
                className="px-8 py-4 bg-white text-[#f02e65] rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {user ? "Create Event" : "Get Started Free"}
              </button>
              <button
                onClick={() => router.push("/dashboard")}
                className="px-8 py-4 border-2 border-white rounded-full text-lg font-semibold hover:bg-white hover:text-[#f02e65] transition-colors"
              >
                Explore Events
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Everything You Need for Successful Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-[#f02e65] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[#f02e65] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
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
            <p>© 2024 Epta events. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
