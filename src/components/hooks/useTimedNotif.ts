import { useState, useEffect } from "react";

const useTimedNotif = () => {
  const [notif, setNotif] = useState("");

  useEffect(() => {
    if (notif !== "") {
      const timer = setTimeout(() => {
        setNotif("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [notif]);

  return [notif, setNotif] as const;
};

export default useTimedNotif;
