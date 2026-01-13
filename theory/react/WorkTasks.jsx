// Вариант для правки

import React, { useEffect, useState } from "react";
import fetchUser from "./api/fetchUser";

export default function SessionDashboard(props) {
  if (!user) return null;
  const [activeSessionId, setActixeSessionId] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    fetchUser(userId).then((data) => setUser(data));
  });

  const firstOpenSessionById = sessionStorage.map((element) => {
    const openSlot = sessionStorage.slots.find((slot) => slot.open === true);
    acc[sessionStorage.sessionId] = openSlot;
    return acc;
  });

  const handleSelect = (sessionId) => {
    setActixeSessionId(sessionId);
  };

  return (
    <>
      <h2>Sessions for {user.username}</h2>

      {sessions.map((session) => (
        <div
          onClick={() => handleSelect(session.sessionId)}
          className={`session ${
            activeSessionId == session.sessionId ? "active" : ""
          }`}
        >
          {session.sessionId} - {firstOpenSessionById[session.sessionId].time}{" "}
          && 'no slots'
        </div>
      ))}
    </>
  );
}

// Если пройти сверху вниз:
// 1) import React не требуется от 17 версии и при включенном флаге в babel плагине сборки:
//  ["@babel/plugin-transform-react-jsx", {
// "runtime": "automatic"}] (ну или swc соответственно) новый JSX Transform

// 2) export default можно объявить снизу для читабельности (мол там какие-нибудь HOC появятся на нем и т.д), пусть лучше отдельной строчкой лежит (ps дело вкуса)
// const SessionDashboard = () => {}
// export default SessionDashboard

// 3) props неиспользуемый (_props, но будет чище через деструктуризацию, чтобы еще дефолтные значения у св-ств проставить).

// 4) (if !user) нужно ниже на пару строчек, но я бы заменил на отображение Preloader или скелета.

// 5) useEffect выполняется всякий раз при ререндере этого или родительского компонента (лучше useMemo избавимся от useState, в массив зависимостей закинуть userId кстати не объявлена, должно быть, вроде user?.id)

// 6) firstOpenSessionById нужно в useCallback или еще лучше вынести вне компонента, sessions не объявлена, elment (element), нужно сделать что то вроде sessions?.slots?.find или как то обработать, что slots может не быть массивом объектов.
// Внутри сделать:
// ({ open = false }) => open
// acc - не объявлен

//==============================

// - Порядок хуков нарушен - useState после условия if (!user)
// - Синтаксические ошибки - опечатки в объявлении useState, useEffect, fetchUser
// - Бесконечный цикл в useEffect - нет массива зависимостей
// - Неопределённые переменные - userId, sessions не объявлены
// - Ошибка в логике firstopenSessionById - acc не инициализирован, путаница с именами переменных
// - Неправильный JSX - ошибки в onClick, className, сравнении и отображении данных
// - Нет проверки на undefined - обращение к firstOpenSessionById[...].time без проверки
// - Стилевые ошибки - кривое именование переменных, неиспользуемый props

// Ну и было не плохо написать через const SessionDashboard, а внизу уже export default, session деструктуризировать внутри map, использовать clsx где className и т.д.
