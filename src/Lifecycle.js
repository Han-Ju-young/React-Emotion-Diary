import React, { useEffect, useState } from "react";

const UnMountTest = () => {
  useEffect(() => {
    console.log("Sub Component Mount");
    return () => {
      // Unmount 시점에 실행되게 됨
      console.log("Sub Component Unmount");
    };
  }, []);
  return <div>UN MOUNT TEST</div>;
};

const LifeCycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  useEffect(() => {
    console.log("Mount!");
  }, []); // 컴포넌트 시작 순간

  useEffect(() => {
    console.log("Update!");
  }); // 컴포넌트 업데이트 순간

  useEffect(() => {
    console.log(`count is update : ${count}`);
  }, [count]); // []의 값이 변화하게 되면 그 순간 콜백함수 실행

  useEffect(() => {
    console.log(`text is update : ${text}`);
  }, [text]); // 즉, 감지하고 싶은 값만 감지해서
  // 그 값이 변화하는 순간에만 콜백함수를 수행시키게 바꿀 수 있음

  return (
    <div>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>count up</button>
      </div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button onClick={toggle}>ON/OFF BUTTON</button>
      {isVisible && <UnMountTest />}
    </div>
  );
};

export default LifeCycle;
