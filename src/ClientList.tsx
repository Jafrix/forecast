// import { ChangeEvent, useRef, useState } from "react";

/**
 * Реализовать сценарии:
 *
 * 1. При смене города в выпадающем списке "region" необходимо выполнить
 *   запрос к серверному API GET /clients, отправив код выбранного города в
 *  параметре с именем city
 *
 * Предполагая, что /clients возвращает массив пользователей (IClient[]),доступных
 * в выбранном регионе, необходимо отобразить список этих пользователей.
 *
 * 2. Добавить механизм фильтрации пользователей по параметру isPremium
 *
 * 3. Добавить механизм поиска клиента по названию организации (orgName)
 *
 * Выбор компонентов для реализации п 2 и 3 остается за разработчиком
 */

// interface IClient {
//   id: string;
//   email: string;
//   isPremium: boolean;
//   orgName: string;
// }

// interface IOption {
//   code: string;
//   name: string;
// }

// interface ClientListProps {
//   options: IOption[];
// }

// const ClientList: React.FC<ClientListProps> = ({ options }) => {
//   const [clients, setClients] = useState<IClient[]>([]);
//   const [cities, setCities] = useState("");
//   const [onlyPremium, setOnlyPremium] = useState(false);
//   const [orgName, setOrgName] = useState("");

//   const handleChangeCity = async (e) => {
//     const citycode = e.target.value;
//     setCities(citycode);

//     try {
//       const response = await fetch(`/clients?city=${citycode}`);
//       if (!response.ok) {
//         throw new Error("No data from serv");
//       }

//       const data = await response.json();
//       setClients(data);
//     } catch (error) {
//       console.error("error", error);
//       setClients([]);
//     }
//   };

//   const filteredClients = clients
//     .filter((client) => {
//       return !onlyPremium || client.isPremium;
//     })
//     .filter((client) => {
//       return client.orgName.toLowerCase().includes(orgName.toLowerCase());
//     });

//   return (
//     <div>
//       <select name="region" value={cities} onChange={handleChangeCity}>
//         <option value="">Choose city</option>
//         {options.map((option) => (
//           <option key={option.code} value={option.code}>
//             {option.name}
//           </option>
//         ))}
//       </select>

//       <div>
//         <label>
//           Only Premium ?
//           <input
//             type="checkbox"
//             checked={isPremium}
//             onChange={(e) => setOnlyPremium(e.target.checked)}
//           />
//         </label>

//         <label>
//           Organization
//           <input
//             type="text"
//             value={orgName}
//             onChange={(e) => setOrgName(e.target.value)}
//           />
//         </label>
//       </div>

//       <h2>CLients was found: {filteredClients.length}</h2>

//       <ul>
//         {filteredClients.map((client) => (
//           <li key={client.id}>
//             <p>Email: {client.email}</p>
//             <p>Premium: {client.isPremium ? "Yes" : "No"}</p>
//             <p>Organization: {client.orgName}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

//? ====================================================================================

// interface IClient {
//   id: string;
//   email: string;
//   isPremium: boolean;
//   orgName: string;
// }

// interface IOption {
//   code: string;
//   name: string;
// }

// interface ClientListProps {
//   options: IOption[];
// }

// const ClientList: React.FC<ClientListProps> = ({ options }) => {

//   const [selectedCity, setSelectedCity] = useState<string>('');
//   const [clients, setClients] = useState<IClient[]>([]);
//   const [onlyPremium, setOnlyPremium] = useState<boolean>(false);
//   const [searchTerm, setSearchTerm] = useState<string>('');

//   const handleRegionChange = async (e: ChangeEvent<HTMLSelectElement>) => {
//     const cityCode = e.target.value;
//     setSelectedCity(cityCode);

//         try {

//             const response = await fetch(`/clients?city=${cityCode}`);

//             if (!response.ok) {
//         throw new Error('Ошибка при получении данных от сервера');
//       }

//       const data: IClient[] = await response.json();

//       setClients(data);
//     } catch (error) {
//       console.error('Ошибка:', error);
//       setClients([]);
//     }
//   };

//     const filteredClients = clients
//     .filter((client) => {
//            return !onlyPremium || client.isPremium;
//     })
//     .filter((client) => {
//         return client.orgName.toLowerCase().includes(searchTerm.toLowerCase());
//     });

//   return (
//     <div>
//       <h2>Выберите город</h2>
//       <select name="region" value={selectedCity} onChange={handleRegionChange}>
//         <option value="">-- Не выбрано --</option>
//         {options.map((option) => (
//           <option key={option.code} value={option.code}>
//             {option.name}
//           </option>
//         ))}
//       </select>

//       <div >
//         <label >
//           <input
//             type="checkbox"
//             checked={onlyPremium}
//             onChange={(e) => setOnlyPremium(e.target.checked)}
//           />
//           Только Premium
//         </label>

// <label>
//   Поиск по организации:
//   <input
//     type="text"
//     value={searchTerm}
//     onChange={(e) => setSearchTerm(e.target.value)}
//     />
// </label>
//       </div>

//       <h3>
//         Найдено клиентов: {filteredClients.length}
//       </h3>

//       <ul>
//         {filteredClients.map((client) => (
//           <li key={client.id}>
//             <p>Email: {client.email}</p>
//             <p>Premium: {client.isPremium ? 'Да' : 'Нет'}</p>
//             <p>Организация: {client.orgName}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ClientList;

//? =================================== Uncontrolled ==========================================

// const Uncontrolled = () => {
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     const value = inputRef.current.value;
//     console.log(value);
//   };
//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleClick}>Get some Value</button>
//     </div>
//   );
// };

//? ============================== Controlled =================================================

// const Controlled = () => {
//   const [value, setValue] = useState("");

//   const handleClick = (e) => {
//     const value = e.target.value;
//     setValue(value);
//   };

//   return (
//     <div>
//       <input type="text" value={value} onChange={handleClick} />
//       <p>Get some Value: {value}</p>
//     </div>
//   );
// };

//? ============================== Errors in React = 1 =================================================

// const WrongSetterComponent = () => {
//   const [counter, setCounter] = useState(0);

//   const increaseCounter = () => {
//     setCounter(counter + 1);
//     setCounter(counter + 1);
//     setCounter(counter + 1); // ???

//     console.log(counter); // ???
//   };

//   return (
//     <>
//       <div>Counter is : {counter}</div>
//       <button onClick={increaseCounter}></button>
//     </>
//   );
// };

//? ============================== Errors in React = 2 =================================================
