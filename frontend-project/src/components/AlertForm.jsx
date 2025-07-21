import React, { useState } from "react";
import { Bell, TrendingUp, Mail, DollarSign } from "lucide-react";

function AlertForm() {
  const [stock, setStock] = useState("");
  const [targetPrice, setTargetPrice] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAlert = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("Registering alert...");
    
    // Simulate API call since we don't have the actual setPriceAlert function
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setMessage("Alert set successfully! You'll be notified when the target price is reached.");
      setStock("");
      setTargetPrice("");
      setEmail("");
    } catch (err) {
      setMessage("Error: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-4 shadow-lg">
            <Bell className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Price Alert</h1>
          <p className="text-gray-600">Get notified when your stock hits the target price</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Set Your Alert
            </h2>
          </div>

          <div className="p-6 space-y-6">
            {/* Stock Symbol Input */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Stock Symbol
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <TrendingUp className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="e.g., AAPL, GOOGL, TSLA"
                  value={stock}
                  onChange={(e) => setStock(e.target.value.toUpperCase())}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg font-medium"
                  required
                />
              </div>
            </div>

            {/* Target Price Input */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Price
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <DollarSign className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  value={targetPrice}
                  onChange={(e) => setTargetPrice(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg font-medium"
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleAlert}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Setting Alert...
                </>
              ) : (
                <>
                  <Bell className="w-5 h-5" />
                  Set Price Alert
                </>
              )}
            </button>
          </div>
        </div>

        {/* Status Message */}
        {message && (
          <div className={`mt-6 p-4 rounded-2xl text-center font-medium transition-all duration-300 ${
            message.includes('Error') 
              ? 'bg-red-50 text-red-700 border border-red-200' 
              : message.includes('successfully')
              ? 'bg-green-50 text-green-700 border border-green-200'
              : 'bg-blue-50 text-blue-700 border border-blue-200'
          }`}>
            {message}
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>We'll notify you via email when your target price is reached</p>
        </div>
      </div>
    </div>
  );
}

export default AlertForm;