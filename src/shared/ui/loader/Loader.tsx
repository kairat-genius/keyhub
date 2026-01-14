import clsx from "clsx";

interface LoaderProps  {
  fullScreen?: boolean;
  halfScreen?: boolean;
}

const Loader = ({ fullScreen = true, halfScreen = false }: LoaderProps) => {
  return (
      <div
          className={clsx(
              "flex justify-center items-center w-full",
              fullScreen && "h-screen",
              halfScreen && "h-[70vh]"
          )}
      >
      <span
          className="size-8 border-4 border-red-200 border-t-red-600 rounded-full animate-spin box-border"
      />
      </div>
  );
};


export default Loader;
