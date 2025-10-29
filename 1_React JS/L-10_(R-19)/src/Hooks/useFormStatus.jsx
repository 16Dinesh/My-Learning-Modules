import React, { useActionState, useFormStatus } from "react";

async function fakeSubmit(formData) {
  await new Promise(r => setTimeout(r, 1000));
  return `Hello, ${formData.get("name")}!`;
}

function SubmitButton() {
  const { pending } = useFormStatus();  // must be inside the <form>
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

export default function FormWithStatus() {
  const [message, submitAction] = useActionState(async (_, formData) => {
    const result = await fakeSubmit(formData);
    return result;
  }, null);

  return (
    <form action={submitAction} style={{ padding: 20 }}>
      <input name="name" placeholder="Enter your name" />
      <SubmitButton /> 
      {message && <p>{message}</p>}
    </form>
  );
}
