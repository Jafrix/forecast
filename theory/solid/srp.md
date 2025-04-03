# S - Single responsibility (SRP)

Одна сущность (класс, компонента, функция) - одна обязанность

-Если из одной функции нельзя вынести другую осмысленную функцию, то принцип SRP соблюден !
(...из книги дядюшки Боба "Чистый код")

Классическая ошибка - один компонент и получает данные (через useEffect), и мапит данные:

```js
const TodosPage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const { data } = await axios.get("http//someapi/todos/");
      setTodos(firstTen);
    }
    getTodos();
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{`ID: ${todo.id}, Title: ${todo.title}`}</li>
        ))}
      </ul>
    </div>
  );
};
```

Как правило это рефакторинг компонент: вынос логики действий в отдельные функци(хуки), вынос маппинга данных в отд компонент

```js
const TodosPage = () => {
const todos = useTodos(); // Вынесли логику

// Вынесли компонент
return (
    <div>
      <h1>Todos</h1>
      <TodoList todos={todos}>
    </div>
)
};
```

Маппинг данных разбит отдельно

```js
const TodoList = ({ todos }) => {
  return (
    <>
    <ul>
    {todos.map(todo=> <TodoItem key={todo.id} />)}
  </ul>
  )
};
```
