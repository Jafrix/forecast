# Browser Object Model (BOM)

это набор объектов, предоставляемых браузером для взаимодействия с окном, вкладкой, историей, экраном и другими функциями, не связанными напрямую с содержимым страницы (DOM).

В отличие от DOM (который работает с HTML-элементами), BOM управляет браузером и его окружением.

### Где используется BOM?

- Открытие/закрытие окон (window.open, window.close).

- Определение размеров экрана (адаптивный дизайн).

- Работа с URL и переадресация (location.href).

- Хранение данных (localStorage, sessionStorage).

- Геолокация (navigator.geolocation).

- Проверка онлайн-статуса (navigator.onLine).

1. window — Глобальный объект
   ✔ Содержит все глобальные переменные и функции.
   ✔ Управляет окном браузера (размеры, прокрутка, новые вкладки).

```js
// Открыть новое окно
window.open("https://example.com");

// Размеры окна
console.log("Ширина:", window.innerWidth, "Высота:", window.innerHeight);

// Прокрутка
window.scrollTo(0, 500); // Прокрутить до 500px
```

2. navigator — Информация о браузере и ОС
   ✔ Содержит данные о браузере, операционной системе и устройстве.

```js
console.log("Браузер:", navigator.userAgent);
console.log("ОС:", navigator.platform);
console.log("Язык:", navigator.language);

// Проверка онлайн-статуса
console.log("Онлайн?", navigator.onLine);

// Геолокация (требует разрешения)
navigator.geolocation.getCurrentPosition((pos) => {
  console.log("Широта:", pos.coords.latitude, "Долгота:", pos.coords.longitude);
});
```

3. screen — Информация об экране
   ✔ Позволяет получить данные о разрешении и размерах экрана.

```js
console.log("Ширина экрана:", screen.width);
console.log("Высота экрана:", screen.height);
console.log("Глубина цвета:", screen.colorDepth);
```

4. location — Работа с URL
   ✔ Позволяет читать и изменять URL страницы.

```js
console.log("Текущий URL:", location.href);
console.log("Хост:", location.hostname);
console.log("Протокол:", location.protocol);

// Перейти на другую страницу
location.href = "https://google.com";

// Перезагрузить страницу
location.reload();
```

5. history — Управление историей браузера
   ✔ Позволяет перемещаться по истории посещений.

```js
// Назад (как кнопка "Назад" в браузере)
history.back();

// Вперед (как кнопка "Вперед")
history.forward();

// Добавить запись в историю (без перезагрузки)
history.pushState({ page: 1 }, "Title 1", "/page1");
```

6. localStorage и sessionStorage — Хранение данных
   ✔ Позволяют сохранять данные в браузере.

```js
// Сохранить данные
localStorage.setItem("username", "John");
sessionStorage.setItem("token", "abc123");

// Получить данные
const user = localStorage.getItem("username"); // "John"
const token = sessionStorage.getItem("token"); // "abc123"

// Удалить данные
localStorage.removeItem("username");
```
