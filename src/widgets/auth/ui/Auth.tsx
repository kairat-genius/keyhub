import { Outlet, useMatches } from "react-router";

type AuthRouteHandle = {
  title: string;
  subtitle: string;
};

const Auth = () => {
  const matches = useMatches();

  const current = [...matches]
    .reverse()
    .find((match) => match.handle && (match.handle as AuthRouteHandle).title);

  const { title, subtitle } = (current?.handle as AuthRouteHandle);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-linear-to-r from-orange-600 to-amber-900 p-8 text-center">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            {title}
          </h1>
          <p className="text-amber-100 mt-2 text-sm uppercase tracking-wider font-medium">
            {subtitle}
          </p>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;
