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
