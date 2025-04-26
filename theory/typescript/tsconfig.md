# Настройка tsconfig (некоторые примеры настройки на проекте)

## Strict mode

- можно включить по частям, а не Strict: true; чтобы ловить null \ undefined по частям, а не сразу "миллион багов"

```js
{
  "strictNullChecks": true,
  "noImplicitAny": true,
  "strictFunctionTypes": true
}
```

## Импорты через алиасы (@/utils)

- Что бы не писать полотно из точек и слешей типа ../../../utils/helpers

```js
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/*": ["*"]
    }
  }
}
```

- И тогда можно так:

```js
import { doSomething } from "@/utils/doSomething";
```

## Включение preserveConstEnums

- Когда хочешь оставить const enum без удаления на этапе компиляции (особенно для библиотек):

```js
{
  "compilerOptions": {
    "preserveConstEnums": true
  }
}
```

- Ускоряет runtime, уменьшает размер bundle, но требует аккуратности.

## Изоляция файлов (isolatedModules: true)

- Обязательно если ты используешь Babel + TypeScript вместо чистого tsc:

```js
{
  "compilerOptions": {
    "isolatedModules": true
  }
}
```

- Чтобы каждый файл можно было компилировать по отдельности без ошибок

## Отключение ошибок при emit (noEmitOnError: true)

- Запрещает билдиться, если есть ошибки типов:

```js
{
  "compilerOptions": {
    "noEmitOnError": true
  }
}
```

- Супер важно на CI/CD — чтобы сломанный билд не ушёл на прод

## Проекты-монорепозитории (composite: true)

- Если ты используешь TurboRepo, Nx, или pnpm workspaces, нужно указывать:

```js
{
  "compilerOptions": {
    "composite": true
  }
}
```

## Нюансы с output (ES6 vs CommonJS)

- Иногда надо собирать разное:

```js
{
  "compilerOptions": {
    "module": "ESNext",
    "target": "ES2017",
    "moduleResolution": "NodeNext"
  }
}
```

- Особенно актуально, если ты делаешь npm-библиотеки (под ESM и CJS одновременно).
