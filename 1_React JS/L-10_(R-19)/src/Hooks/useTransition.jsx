import React, { useState, useTransition } from "react";

export default function SearchList() {
  const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      const newList = items.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(newList);
    });
  }

  return (
    <div style={{ padding: 20 }}>
        <h1>useTransition</h1>
      <h2>Search List</h2>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Type any Number"
      />
      {isPending && <p style={{ color: "gray" }}>Updating list...</p>}
      <ul>
        {filteredItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
