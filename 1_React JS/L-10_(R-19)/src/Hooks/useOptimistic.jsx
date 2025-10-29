import React, { useOptimistic, useActionState } from "react";

async function sendComment(formData) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return formData.get("comment");
}

export default function Comments() {
  const [comments, setComments] = React.useState([
    "Nice post!",
    "Very helpful.",
  ]);

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, newComment) => [...state, newComment]
  );

  const [_, submitAction, isPending] = useActionState(async (_, formData) => {
    const newComment = await sendComment(formData);
    setComments((prev) => [...prev, newComment]);
  });

  function handleSubmit(formData) {
    const text = formData.get("comment");
    addOptimisticComment(text);
    submitAction(formData);
  }

  return (
    <form action={handleSubmit} style={{ padding: 20 }}>
      <h1>useOptimistic Hook</h1>
      <h2>Comments</h2>

      <ul>
        {optimisticComments.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>

      <textarea
        name="comment"
        placeholder="Add a comment..."
        disabled={isPending}
      />
      <br />
      <button type="submit" disabled={isPending}>
        {isPending ? "Posting..." : "Post Comment"}
      </button>
    </form>
  );
}
