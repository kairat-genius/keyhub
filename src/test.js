const parseTermsToJson = () => {
  // Находим основной контейнер
  const container = document.querySelector('.prose');
  if (!container) return "Контейнер не найден";

  const result = {
    lastUpdated: "",
    title: "Terms and Conditions",
    content: []
  };

  // 1. Извлекаем дату обновления (обычно первый абзац)
  const firstP = container.querySelector('p');
  if (firstP && firstP.textContent.includes('Last updated')) {
    result.lastUpdated = firstP.textContent.replace('Last updated: ', '').trim();
  }

  // 2. Проходим по всем важным элементам внутри
  const elements = container.querySelectorAll('h2, h3, p');

  elements.forEach((el) => {
    // Пропускаем первый абзац с датой, так как мы его уже записали
    if (el.textContent.includes('Last updated')) return;

    const tag = el.tagName.toLowerCase();
    const strong = el.querySelector('strong');

    // Проверяем, является ли это "определением" (p + strong в начале)
    if (tag === 'p' && strong && el.firstChild === strong) {
      result.content.push({
        type: "definition",
        term: strong.textContent.replace(':', '').trim(),
        text: el.textContent.replace(strong.textContent, '').trim()
      });
    } 
    // Обрабатываем обычные заголовки и параграфы
    else {
      result.content.push({
        type: tag,
        text: el.textContent.trim()
      });
    }
  });

  return JSON.stringify(result, null, 2);
};

console.log(parseTermsToJson());