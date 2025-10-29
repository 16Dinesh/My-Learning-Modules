export default function Styling() {
  const color = {
    backgroundColor: "red",
    color: "white",
    padding: "10px",
  };

  return (
    <>
      <div>
        <h1>Styling Components</h1>
        <p style={color}>This is the Styling component - Inline</p>
      </div>
    </>
  );
}
