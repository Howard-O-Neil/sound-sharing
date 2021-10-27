import * as React from "react";
import { useState } from "react";

interface AppProps {
  message: string;
}

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal",
};

const App = ({ message }: AppProps) => {
  const [status, setStatus] = useState<string>(STATUS.NORMAL);
  const [mess, setMess] = useState<string>(message);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
    setMess("Mouse Enter " + message);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
    setMess(message);
  };

  return (
    <div>
      <h1 onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {mess}
      </h1>
    </div>
  );
};

export default App;
