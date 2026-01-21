
export const emailValidation = {
  required: 'Почта обязателен',
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Введите корректный email',
  },
};

export const otpCodeValidation = {
  required: "Код подтверждения обязателен",
  pattern: {
    value: /^\d{6}$/,
    message: "Код должен состоять из 6 цифр",
  },
};