export default function Jsx() {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString(); 

  return (
    <>
      <div>
        <h1>Concept of JSX</h1>
        <p>Jsx only return One Parent Element</p>
        <p>it can Embedding JavaScript in JSX with &#123; &#125;</p>
        <h2>Date - {date}</h2>
        <h2>Time - {time}</h2>
      </div>
    </>
  );
}
