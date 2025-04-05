import React from 'react';
import { Smartphone, Bluetooth, Download, ArrowRight, Activity, Battery, Users, Minus } from 'lucide-react';

function VapeLogo() {
  return (
    <div className="relative w-8 h-8 flex items-center justify-center">
      {/* Vape device body */}
      <div className="absolute w-2 h-8 bg-purple-600 rounded-sm transform rotate-45" />
      {/* Crossed line */}
      <div className="absolute w-8 h-1 bg-pink-500 rounded-full transform -rotate-45" />
      {/* Vapor wisp */}
      <Minus className="w-3 h-3 text-purple-400 absolute -top-1 -right-1 transform rotate-45" strokeWidth={2} />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <VapeLogo />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              NicSwipe
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a>
            <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors">About</a>
            <a href="#testimonials" className="text-gray-600 hover:text-purple-600 transition-colors">Stories</a>
          </div>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
            Download
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Break Free from
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                {" "}Vaping
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your journey to a vape-free future starts here. Join thousands of young adults taking control of their lives with our innovative app and smart device.
            </p>
            <div className="flex space-x-4">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Get the App
              </button>
              <button className="border border-purple-600 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition-colors flex items-center">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30 -top-10 -right-10"></div>
            <div className="absolute -z-10 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-30 -bottom-10 -left-10"></div>
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000"
              alt="Young adults using NicSwipe app"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20" id="features">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Smart Features for Your Journey</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Progress Tracking</h3>
              <p className="text-gray-600">Monitor your journey with detailed analytics and milestone celebrations</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bluetooth className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Device Sync</h3>
              <p className="text-gray-600">Connect with our wearable device for real-time support and tracking</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Community Support</h3>
              <p className="text-gray-600">Connect with others on the same journey and share your success</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="relative">
          <div className="absolute -z-10 w-full h-96 bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center p-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Your Personal Recovery Assistant</h2>
              <p className="text-gray-600 mb-8">
                Our app adapts to your journey, providing personalized support when you need it most. With dark and light modes, smart notifications, and real-time tracking, staying committed has never been easier.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Battery className="w-5 h-5 text-pink-500" />
                  <span>24/7 Craving Management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Smartphone className="w-5 h-5 text-purple-500" />
                  <span>Beautiful Dark/Light Modes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Activity className="w-5 h-5 text-pink-500" />
                  <span>Health Improvement Tracking</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000"
                alt="App interface preview"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 py-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <VapeLogo />
              <span className="text-lg font-bold">NicSwipe</span>
            </div>
            <div className="text-gray-500 text-sm">
              © 2025 NicSwipe. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;