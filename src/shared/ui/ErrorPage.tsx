import { useRouteError, isRouteErrorResponse } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Ошибка</h1>
          <p className="text-muted-foreground">{error.status} — {error.statusText}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div>
        <h1 className="text-2xl font-semibold mb-2">Произошла ошибка</h1>
        <pre className="whitespace-pre-wrap text-sm text-red-600">{String(error)}</pre>
      </div>
    </div>
  );
}
