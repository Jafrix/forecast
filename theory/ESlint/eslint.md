# Настройка ESlint

## Разные правила для разных папок проекта

- Например, у тебя есть папка src/ и tests/, и ты хочешь в тестах разрешить any, а в src запретить
```js
{
  "overrides": [
    {
      "files": ["src/**/*.ts", "src/**/*.tsx"],
      "rules": {
        "@typescript-eslint/no-explicit-any": "error"
      }
    },
    {
      "files": ["tests/**/*.ts", "tests/**/*.tsx"],
      "rules": {
        "@typescript-eslint/no-explicit-any": "off"
      }
    }
  ]
}
```
- удобно, чтобы тесты были гибкими, а основная логика — строгой

## Фиксация порядка импортов (import/order)

- Чтобы всегда автоматически расставлять импорты: сторонние библиотеки → алиасы → относительные пути.


- можно включить по частям, а не Strict: true; чтобы ловить null \ undefined по частям, а не сразу "миллион багов"

```js
{
  "plugins": ["import"],
  "rules": {
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always"
      }
    ]
  }
}
```
- круто, если ещё настроить автосортировку через Prettier или eslint‑fix

## Запрет глухих console.log на проде

- Оставляем console.warn, console.error, но запрещаем обычные log


- можно включить по частям, а не Strict: true; чтобы ловить null \ undefined по частям, а не сразу "миллион багов"

```js
{
  "rules": {
    "no-console": ["error", { "allow": ["warn", "error"] }]
  }
}
```
## Обязательный default в switch-case


- можно включить по частям, а не Strict: true; чтобы ловить null \ undefined по частям, а не сразу "миллион багов"

```js
{
  "rules": {
    "default-case": "error"
  }
}
```
- Спасает от багов в больших enum‑переключениях

## Запрет пустых catch-блоков


- можно включить по частям, а не Strict: true; чтобы ловить null \ undefined по частям, а не сразу "миллион багов"

```js
{
  "rules": {
    "no-empty": ["error", { "allowEmptyCatch": false }]
  }
}
```
## Обязательная проверка перед доступом к свойствам

- в TS проектах — защищает от доступа к null/undefined


- можно включить по частям, а не Strict: true; чтобы ловить null \ undefined по частям, а не сразу "миллион багов"

```js
{
  "rules": {
    "@typescript-eslint/strict-boolean-expressions": "error"
  }
}
```
## Разрешить jsx только в

- Делает проект более предсказуемым


- можно включить по частям, а не Strict: true; чтобы ловить null \ undefined по частям, а не сразу "миллион багов"

```js
{
  "rules": {
    "react/jsx-filename-extension": [
      "error",
      { "extensions": [".tsx"] }
    ]
  }
}
```
## Настройка правила на магические числа
```js
{
  "rules": {
    "no-magic-numbers": ["warn", { "ignore": [0, 1, -1] }]
  }
}
```
