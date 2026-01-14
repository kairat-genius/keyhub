import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold mb-4">Страница не найдена</h1>
      <p className="text-lg text-muted-foreground mb-6">
        К сожалению, запрошенная страница не существует.
      </p>
      <div>
        <button
        
          className="px-4 py-2 bg-gradient-primary text-white rounded cursor-pointer"
          onClick={() => navigate(-1)}
        >
          Назад
        </button>
      </div>
    </div>
  );
}
