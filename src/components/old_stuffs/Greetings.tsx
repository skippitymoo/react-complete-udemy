import { useState, JSX } from 'react';

const Greetings = (): JSX.Element => {
  const [greetingText, setGreetingText] = useState<string>("It's good to see you");

  const clickHandler = (): void => {
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
