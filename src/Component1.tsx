

// function Component() {  
//     const [counter, setCounter] = useState(0);  
  
//     const handleClick = () => {  
//       setCounter(s => s + 1);  
//     };  
  
//     useEffect(() => {  
//       let update = counter * 2;  
//       console.log(update);  
//     }, [counter]);  
  
//     if (counter % 2 === 0) {  
//       return <MyButton handleClick={handleClick} />;  
//     }  
  
//     return (  
//       <>  
//         <div>{counter}</div>  
//         <MyButton handleClick={handleClick} />  
//       </>  
//     );  
//   }