import FormField from "@/shared/ui/form-field";
import { Link } from "react-router";

const LoginForm = () => {
  return (
    <form className="p-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
      {/* Email Field */}
      <FormField label="Email" id="email">
        <input
          type="email"
          id="email"
          placeholder="e.g. manager@keyhub.com"
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-700"
        />
      </FormField>
      {/* Password Field */}
      <FormField label="Password" id="password">
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-700"
        />
        <div className="flex justify-end">
          <Link
            to="#"
            className="w-fit text-sm text-orange-600 hover:text-orange-700 font-medium"
          >
            Forgot?
          </Link>
        </div>
      </FormField>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-blue-200 transition-all active:scale-[0.99] mt-2"
      >
        Log in
      </button>

      {/* Footer Link */}
      <p className="text-center text-sm text-slate-500 pt-2">
        Don't have an account?{" "}
        <Link
          to="/auth/register"
          className="text-orange-600 font-bold hover:underline"
        >
          Registration
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
