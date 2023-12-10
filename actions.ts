"use server";

export async function addQuestion(formData: FormData) {
  console.log(`should submit form ${formData.get("question")}`);
}
