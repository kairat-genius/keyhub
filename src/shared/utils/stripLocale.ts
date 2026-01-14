import { LOCALES } from "../settings";

export const stripLocale = (pathname: string) => {
  const parts = pathname.split("/").filter(Boolean);

  if (LOCALES.includes(parts[0])) {
    return "/" + parts.slice(1).join("/");
  }

  return pathname;
};
