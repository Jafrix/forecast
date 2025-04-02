import { useState, useEffect } from 'react';

function InfiniteScrollList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  
  const fetchData = async (pageNum) => {
    setIsLoading(true);
    
   
    await new Promise((resolve) => setTimeout(resolve, 1000));

   
    const newItems = Array.from({ length: 20 }, (_, i) => `Item #${(pageNum - 1) * 10 + i + 1}`);
    
    setItems((prev) => [...prev, ...newItems]);
    setIsLoading(false);
  };

  useEffect(() => {
   
    fetchData(page);
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      
      
      if (scrollTop + clientHeight >= scrollHeight - 5 && !isLoading) {
        setPage((prev) => prev + 1);
      }
    };

   
    window.addEventListener('scroll', handleScroll);

    return () => {
      
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]);

  return (
    <div style={{ minHeight: '200vh'}}>
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
  
  const loaderRef = useRef(null); 

  const fetchData = async (pageNum) => {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newItems = Array.from({ length: 10 }, (_, i) => `Item #${(pageNum - 1) * 10 + i + 1}`);
    
    setItems((prev) => [...prev, ...newItems]);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  useEffect(() => {
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isLoading) {
       
        setPage((prev) => prev + 1);
      }
    }, {
      rootMargin: '100px', 
      threshold: 0.1
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      
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
      
    
      <div ref={loaderRef} style={{ height: '20px' }} />
      
      {isLoading && <p>Загрузка...</p>}
    </div>
  );
}

export default InfiniteScrollList;