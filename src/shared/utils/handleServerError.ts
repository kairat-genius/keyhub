import type { FieldValues, Path, UseFormSetError } from 'react-hook-form';

type ServerErrorType = Record<string, string[] | string>;

interface HandleErrorsParams<T extends FieldValues> {
  response: ServerErrorType;
  setError: UseFormSetError<T>;
  showToast: (message: string, type: 'success' | 'invalid' | 'error') => void;
}

export const processServerErrors = <T extends FieldValues>({
  response,
  setError,
  showToast,
}: HandleErrorsParams<T>): boolean => {
  let hasError = false;
  const globalErrorKeys = ['detail', 'non_field_errors'];

  // 1. Обработка полей формы
  for (const [key, value] of Object.entries(response)) {
    if (globalErrorKeys.includes(key)) continue;

    const message = Array.isArray(value) ? value[0] : value;
    setError(key as Path<T>, {
      type: 'manual',
      message: message as string,
    });
    // Показываем тост для каждого поля (как в твоем исходном коде)
    showToast(message as string, 'invalid');
    hasError = true;
  }

  // 2. Обработка глобальных ошибок
  globalErrorKeys.forEach((key) => {
    if (key in response) {
      const value = response[key];
      const message = Array.isArray(value) ? value[0] : value;
      showToast(message as string, 'invalid');
      hasError = true;
    }
  });

  return hasError;
};