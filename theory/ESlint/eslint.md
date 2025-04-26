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

