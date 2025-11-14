export const EventExample = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Clicked!", e.clientX);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Input:", e.target.value);
  };

  return (
    <div>
      <h3>Event Example</h3>
      <button onClick={handleClick}>Click Me</button>
      <input onChange={handleChange} placeholder="Type something" />
    </div>
  );
};
