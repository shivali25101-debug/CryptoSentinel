import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8765");

    setSocket(ws);

    ws.onopen = () => {
      console.log("✅ Connected to Backend");
    };

    ws.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      console.log("VM3 =", newData.vm3);
      setData(newData);
    };

    ws.onclose = () => {
      console.log("❌ Backend Disconnected");
    };

    return () => ws.close();
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        socket,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}