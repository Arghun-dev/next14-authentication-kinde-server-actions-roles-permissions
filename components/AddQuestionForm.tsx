import { addQuestion } from "@/actions";

export default function AddQuestionForm() {
  return (
    <form action={addQuestion}>
      <label htmlFor="question">Question</label>
      <input type="text" name="question" id="question" />
      <button type="submit">Add</button>
    </form>
  );
}
