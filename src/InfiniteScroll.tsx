import { useState, useEffect } from 'react';

function InfiniteScrollList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Заглушка: функция, которая симулирует запрос на сервер и возвращает новые данные
  const fetchData = async (pageNum) => {
    setIsLoading(true);
    
    // Симуляция задержки
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Допустим, формируем новые элементы
    const newItems = Array.from({ length: 20 }, (_, i) => `Item #${(pageNum - 1) * 10 + i + 1}`);
    
    setItems((prev) => [...prev, ...newItems]);
    setIsLoading(false);
  };

  useEffect(() => {
    // При первом рендере загружаем данные
    fetchData(page);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      
      // Проверяем, что пользователь доскроллил до конца (или почти до конца)
      if (scrollTop + clientHeight >= scrollHeight - 5 && !isLoading) {
        setPage((prev) => prev + 1);
      }
    };

    // Подписываемся на событие скролла
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Отписываемся при размонтировании
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]);

  return (
    <div style={{ minHeight: '200vh' /* Чтобы был скролл */ }}>
      <h1>Infinite Scroll Demo</h1>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      {isLoading && <p>Загрузка...</p>}
    </div>
  );
}

export default InfiniteScrollList;

======================================  Через INTERSECTION OBSERVER ==================================================

import React, { useState, useEffect, useRef } from 'react';

function InfiniteScrollList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  
  const loaderRef = useRef(null); // реф на "загрузочный" элемент

  const fetchData = async (pageNum) => {
    setIsLoading(true);

    // Имитация задержки и генерация данных
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newItems = Array.from({ length: 10 }, (_, i) => `Item #${(pageNum - 1) * 10 + i + 1}`);
    
    setItems((prev) => [...prev, ...newItems]);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  useEffect(() => {
    // Настраиваем Intersection Observer
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isLoading) {
        // Если наш "footer"-div появился в зоне видимости — грузим следующую страницу
        setPage((prev) => prev + 1);
      }
    }, {
      rootMargin: '100px', // чтобы начать подгружать чуть раньше
      threshold: 0.1
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      // При размонтировании убираем наблюдение
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [isLoading]);

  return (
    <div style={{ minHeight: '200vh' }}>
      <h1>Infinite Scroll with Intersection Observer</h1>
      <ul>
        {items.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
      
      {/* Элемент, за которым "следит" Intersection Observer */}
      <div ref={loaderRef} style={{ height: '20px' }} />
      
      {isLoading && <p>Загрузка...</p>}
    </div>
  );
}

export default InfiniteScrollList;