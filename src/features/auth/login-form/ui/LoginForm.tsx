
const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Header with your new brand colors */}
        <div className="bg-linear-to-r from-blue-600 to-indigo-900 p-10 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight">Keyhub</h2>
          <p className="text-blue-100 mt-2 text-sm uppercase tracking-wider font-medium">
            Car Key Management System
          </p>
        </div>

        {/* Form Section */}
        <form className="p-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          
          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="e.g. manager@keyhub.com"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-700"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-slate-700">Password</label>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Forgot?
              </a>
            </div>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-700"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-blue-200 transition-all active:scale-[0.99] mt-2"
          >
            Sign In
          </button>

          {/* Footer Link */}
          <p className="text-center text-sm text-slate-500 pt-2">
            Don't have an account?{' '}
            <a href="#" className="text-blue-600 font-bold hover:underline">
              Registration
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;