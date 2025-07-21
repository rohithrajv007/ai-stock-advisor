import React from "react";
import { TrendingUp, Bot, Bell, Sparkles, BarChart3, Zap } from "lucide-react";

// Mock ChatbotForm component
const ChatbotForm = () => {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-200">
      <div className="space-y-4">
        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
          <Bot className="w-6 h-6 text-purple-600" />
          <span className="text-gray-700">Ask me anything about stocks, market trends, or investment strategies...</span>
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="What stocks should I consider for long-term growth?"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg">
            Ask AI
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button className="p-3 text-left bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl border border-purple-200 hover:from-purple-100 hover:to-indigo-100 transition-all duration-200">
            <span className="text-sm font-medium text-purple-700">📊 Analyze AAPL stock</span>
          </button>
          <button className="p-3 text-left bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200 hover:from-blue-100 hover:to-cyan-100 transition-all duration-200">
            <span className="text-sm font-medium text-blue-700">🔍 Market outlook 2025</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Mock AlertForm component
const AlertForm = () => {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-200">
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Stock Symbol</label>
            <input
              type="text"
              placeholder="e.g., AAPL, TSLA, NVDA"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Target Price ($)</label>
            <input
              type="number"
              placeholder="150.00"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Alert Type</label>
          <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Price Above Target</option>
            <option>Price Below Target</option>
            <option>Percentage Change</option>
          </select>
        </div>
        <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg">
          <Bell className="w-5 h-5 inline-block mr-2" />
          Create Alert
        </button>
        <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-200">
          <h4 className="font-medium text-green-800 mb-2">Active Alerts (2)</h4>
          <div className="space-y-2 text-sm text-green-700">
            <div className="flex justify-between items-center">
              <span>AAPL above $200</span>
              <span className="text-xs bg-green-100 px-2 py-1 rounded-full">Active</span>
            </div>
            <div className="flex justify-between items-center">
              <span>TSLA below $180</span>
              <span className="text-xs bg-green-100 px-2 py-1 rounded-full">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2">
                  📈 AI Stock Advisor
                  <Sparkles className="w-6 h-6 text-indigo-600" />
                </h1>
                <p className="text-sm text-gray-600">Your Smart Investment Companion</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        {/* Hero Section */}
        <section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Powered by Advanced AI</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Make Smarter Investment
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Decisions</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get AI-powered stock analysis and never miss important price movements with our intelligent alert system.
            </p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200">
                <Bot className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">AI Chat Assistant</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200">
                <Bell className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Smart Price Alerts</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200">
                <BarChart3 className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Real-time Analysis</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content - Your Components */}
        <main className="pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* AI Chatbot Section */}
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-3 py-1 mb-3">
                    <Bot className="w-4 h-4 text-purple-600" />
                    <span className="text-xs font-semibold text-purple-700 uppercase tracking-wide">AI Assistant</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    Chat with AI Stock Advisor
                  </h3>
                  <p className="text-gray-600">
                    Get intelligent insights, market analysis, and personalized investment advice from our AI assistant.
                  </p>
                </div>
                <ChatbotForm />
              </div>

              {/* Price Alerts Section */}
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-3 py-1 mb-3">
                    <Bell className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">Smart Alerts</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    Set Price Alerts
                  </h3>
                  <p className="text-gray-600">
                    Never miss important price movements. Get notified when your target stocks hit specific price points.
                  </p>
                </div>
                <AlertForm />
              </div>

            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold">AI Stock Advisor</h4>
              </div>
              <p className="text-gray-400 mb-6">Empowering smart investment decisions with AI technology</p>
              <div className="text-sm text-gray-500 space-y-2">
                <p>© 2025 AI Stock Advisor. All rights reserved.</p>
                <p className="flex items-center justify-center gap-1">
                  <span className="text-yellow-400">⚠️</span>
                  Investment advice is for educational purposes only. Always consult with qualified financial advisors.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;