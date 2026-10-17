# Start in Poland

Гид для иностранных студентов, которые только приехали в Польшу: документы, быт, здоровье, интерактивный чек-лист первых недель и экстренные номера. Переключатель языка RU / EN.

## Структура

```
index.html   разметка страницы
style.css    стили, светлая и тёмная тема
data.js      весь текст сайта на двух языках
app.js       рендер главной, переключение языка, чек-лист
cities.js    данные по городам на двух языках
city.js      рендер страницы города
cities/<город>/index.html   отдельная страница каждого города
```

Чтобы добавить город: допиши объект в `CITIES` в `cities.js` и создай папку `cities/<slug>/` с копией любого `index.html` из соседнего города, поменяв `data-city` и `<title>`.

Чтобы поменять или дополнить текст, правь только `data.js`: у каждого языка одинаковая структура (`sections` → `cards` → `points`). ID пунктов чек-листа должны совпадать в обоих языках.

## Запуск локально

Просто открой `index.html` в браузере, сборка не нужна.

## Деплой на GitHub Pages

```bash
git init
git add .
git commit -m "Start in Poland"
git branch -M main
git remote add origin https://github.com/<username>/start-in-poland.git
git push -u origin main
```

Дальше в репозитории: **Settings → Pages → Source: Deploy from a branch → main / root**. Через минуту сайт будет по адресу `https://<username>.github.io/start-in-poland/`.

## Важно

Информация актуальна на октябрь 2026 и не является официальной. Перед подачей документов проверяйте gov.pl, nfz.gov.pl и свой университет.
