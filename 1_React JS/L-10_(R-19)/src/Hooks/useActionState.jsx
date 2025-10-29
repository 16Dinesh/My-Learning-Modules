import React, { useActionState } from "react";

async function fakeSubmit(formData) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const name = formData.get("name");
  if (!name) throw new Error("Name is required!");
  return `Hello, ${name}!`;
}

export default function ActionForm() {
  const [message, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      try {
        const result = await fakeSubmit(formData);
        return result;
      } catch (err) {
        return err.message;
      }
    },
    null 
  );

  return (
    <form action={submitAction} style={{ padding: 20 }}>
      <h2>Form Action- useActionState </h2>

      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        disabled={isPending}
      />

      <button type="submit" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit"}
      </button>

      {message && <p>{message}</p>}
    </form>
  );
}
