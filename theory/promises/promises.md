# Promises

Promise.all - Ждем все промисы, если хоть один с ошибкой - catch, иначе then
Promise.allSettled - просто ждем выполнения всех промисов (всегда then) - опишет ошибку одного из промисов внутри вернувшихся данных
Promise.race - получаем первый ЛЮБОЙ выполнившийся промис - неважно какой!, даже ошибочный
Promise.any - получаем первый УСПЕШНО выполнившийся промис

Методы
.then .catch .finally

Pending Fulfilled Rejected
