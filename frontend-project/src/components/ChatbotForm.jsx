import React, { useState } from "react";
import { MessageCircle, Send, Bot, User, TrendingUp, Brain, Sparkles } from "lucide-react";

function ChatbotForm() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMessage = query;
    setIsLoading(true);
    
    // Add user message to chat history
    setChatHistory(prev => [...prev, { type: 'user', message: userMessage }]);
    setQuery("");
    
    // Simulate API call since we don't have the actual askChatbot function
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const mockResponse = `Based on your question about "${userMessage}", here's my analysis: Stock markets show mixed signals today. I'd recommend diversifying your portfolio and considering long-term investment strategies. Always do your own research and consult with financial advisors for personalized advice.`;
      
      setResponse(mockResponse);
      setChatHistory(prev => [...prev, { type: 'bot', message: mockResponse }]);
    } catch (err) {
      const errorMsg = "Error: " + err.message;
      setResponse(errorMsg);
      setChatHistory(prev => [...prev, { type: 'bot', message: errorMsg }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mb-4 shadow-lg">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
            Stock Advisor AI
            <Sparkles className="w-6 h-6 text-purple-600" />
          </h1>
          <p className="text-gray-600">Get intelligent insights and advice for your investment decisions</p>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <Brain className="w-5 h-5" />
              AI Assistant
              <div className="ml-auto flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-purple-100">Online</span>
              </div>
            </h2>
          </div>

          {/* Chat History */}
          <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50">
            {chatHistory.length === 0 ? (
              <div className="text-center py-12">
                <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Ask me anything about stocks!</p>
                <p className="text-gray-400 text-sm mt-2">Try: "What's the outlook for tech stocks?" or "Should I invest in renewable energy?"</p>
              </div>
            ) : (
              <>
                {chatHistory.map((chat, index) => (
                  <div key={index} className={`flex gap-3 ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {chat.type === 'bot' && (
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm ${
                      chat.type === 'user' 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' 
                        : 'bg-white border border-gray-200 text-gray-800'
                    }`}>
                      <p className="text-sm leading-relaxed">{chat.message}</p>
                    </div>
                    {chat.type === 'user' && (
                      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Loading indicator */}
                {isLoading && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl shadow-sm">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        <span className="text-sm text-gray-500">Thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-gray-100">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Ask about stocks, market trends, investment strategies..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSubmit(e)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-800"
                  disabled={isLoading}
                  required
                />
              </div>
              <button
                onClick={handleSubmit}
                disabled={isLoading || !query.trim()}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Quick Suggestions */}
        <div className="mt-6">
          <p className="text-sm text-gray-600 mb-3 text-center">Quick suggestions:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "Market outlook for 2025",
              "Best dividend stocks",
              "Tech stock analysis",
              "Portfolio diversification"
            ].map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setQuery(suggestion)}
                className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm border border-gray-200 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 transition-all duration-200"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-6 text-xs text-gray-400 bg-gray-50 rounded-2xl p-4">
          <p>💡 This is an AI assistant for educational purposes. Always consult with qualified financial advisors for investment decisions.</p>
        </div>
      </div>
    </div>
  );
}

export default ChatbotForm;