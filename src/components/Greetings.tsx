import { useState } from 'react';

const Greetings = () => {
  const [greetingText, setGreetingText] = useState<string>("It's good to see you");

  const clickHandler = () => {
    setGreetingText('Changed!');
  };

  return (
    <>
      <div>Hello World!</div>
      <div>{greetingText}</div>
      <button onClick={clickHandler}>Change</button>
    </>
  );
};

export default Greetings;
