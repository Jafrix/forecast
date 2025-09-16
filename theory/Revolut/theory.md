Что такое CORS и как с ним работать?
Как устроен процесс загрузки страницы в браузере? (Критические стадии рендеринга)
Что такое localStorage/sessionStorage?
Чем отличается GET и POST запросы?
Что такое Webpack, Babel, Vite?
Что такое SEO и как фронтенд влияет на него?
Как оптимизировать загрузку кода?
Chunks (bundle)
минификация, аглификация
gzip
tree-shaking: husky, ESLint, SonarLint (SonarCloud)
lazy loading / async / defer
rel = preload(Загружает важные ресурсы как можно раньше (шрифты, скрипты, стили для текущей страницы).), prefetch( Предварительно загружает ресурсы для следующих страниц, которые, скорее всего, понадобятся)
critical css (критические стили в html)
мультиплексирование http 2.0
SSR
cdn

В чём разница между display: block, inline и inline-block?
Блочная модель CSS?
Что такое селектор? Какие существуют? Специфичность селекторов? (style, id, class, attrib, tag, \*)
Разница между display: none и visibility: hidden?
Что такое Flexbox и Grid?
Как сделать вертикальное и горизонтальное центрирование элемента? (джоук! мемас slightly smiling face )
Что такое препроцессоры (Scss/Less)? Чем отличаются от CSS-in-JS?
Чем отличается Tailwind от CSS.

JS:

Разница между глубоким (deep) и поверхностным (shallow) копированием объекта? Как сделать каждое из них?
Поверхностное:
Object.assign
objA = objB
{...obj}
Глубокое:
рекурсивно
JSON.parse JSON.stringify
structuredClone
JS in browser:

Что такое hoisting?
Что такое Promise, async/await?
Что такое замыкание? Пример использования.
Что происходит при вызове setTimeout(fn, 0)?
Как работает прототипное наследование?
Как клонировать объект в JS?
Event Listeners
Методы поиска элементов в DOM?
Перемещение по DOM-дереву? parentNode, childNode, firstChild, lastChild, nextSibling, previousSibling, parentElement, children, firstElementChild, lastElement, nextElementSibling, previousElementSibling
Что такое BOM?
Виды событий в JS?
События мыши: click, dblclick, mouseover, mouseout, mousedown, mouseup, mousemove.

События клавиатуры: keydown, keyup, keypress.

События формы: submit, reset, focus, blur, change.

События документа: load, unload, ready, scroll, resize.

События таймера: setTimeout, setInterval.

События перетаскивания: dragstart, dragend, dragenter, dragleave, dragover, drop.

События анимации: animationstart, animationend, animationiteration.

События сети: online, offline.

События истории браузера: popstate.

События геолокации: geolocation.

Добавление обработчика событий в DOM-элемент? Сколько принимает addEventListener и какие? Удаление обработчика?
Что такое Event Propagation (распространение события)? Какие есть фазы?
Что такое Event Delegation (делегирование событий)?
Что такое координаты в браузере? Что делает getBoundingClientRect?
Разница между анализом строки user-agent, feature detection и feature inference и ?
Разница между preventDefault, stopPropagation и stopImmidiatePropagation?
Разница между event.target и event.currentTarget?
target - элемент, в котором происходит event или элемент вызвавший event.
currentTarget - элемент к которому прикреплен event listener
Для чего используется метод .scrollIntoView()?
Что такое IntersectionObserver и для чего может использоваться?
Для чего используется URLSearchParams?

Асинхронный JS:

Что относится к асинхронному коду?
Таймеры
Promise? Что такое? Его методы: race, any, allSettled
Async/Await
EventLoop: микротаски (перечислить что относится), макротаски (перечислить примеры). Что такое queueMicrotask? mutationObserver?

Был ли опыт работы с SSR? Гидратация, регидратация?  
Чем отличаются классовые и функциональные компоненты?
Что делают хуки useState, useEffect, useRef, useCallback, useMemo?
Как работает useEffect при монтировании, обновлении и демонтировании?
Зачем нужны ключи (key) в списке компонентов?
Что такое props drilling и как с этим работать?
Как работает reconciliation в React?
В чём разница между controlled и uncontrolled компонентами?
Как оптимизировать производительность компонентов?
Что такое Portals, Error Boundaries?
Что такое Context API и когда его использовать?
Что вы знаете о серверных рендерах (Remix Framework, React Router, Next.js)?
