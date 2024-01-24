import { FC, useState } from 'react';

const Greetings: FC = () => {
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
