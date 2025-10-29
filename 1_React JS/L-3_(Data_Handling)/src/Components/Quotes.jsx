import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchQuotes = async () => {
  const response = await axios.get("https://dummyjson.com/quotes");
  return response.data.quotes.slice(0, 2);
};

function Quotes() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["quotes"],
    queryFn: fetchQuotes,
  });

  if (isLoading) return <p>Loading quotes...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div>
      <h3>Quotes</h3>
      <h4>Data Fetching with React Query</h4>
      <ul>
        {data.map((quote) => (
          <li key={quote.id}>
            <q>{quote.quote}</q> — <strong>{quote.author}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quotes;
