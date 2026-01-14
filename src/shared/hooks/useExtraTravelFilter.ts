import { useMemo } from "react";

interface UseExtraTravelFilterProps {
  // Передаем только значение конкретного поля
  value: boolean | null | undefined;
  // Коллбэк, который принимает только то, что может вернуть этот фильтр
  onChange: (value: boolean | null) => void | Promise<void>;
}

export const useExtraTravelFilter = ({
  value,
  onChange,
}: UseExtraTravelFilterProps) => {
  
  const extraTravelValue = useMemo(() => {
    if (value === null || value === undefined) return undefined;
    return value ? "yes" : "no";
  }, [value]);

  const handleExtraTravelChange = (
    incomingValue: string | number | (string | number)[]
  ) => {
    const val = Array.isArray(incomingValue) ? incomingValue[0] : incomingValue;
    
    if (val === "yes") void onChange(true);
    else if (val === "no") void onChange(false);
    else void onChange(null);
  };

  return {
    extraTravelValue,
    handleExtraTravelChange,
  };
};