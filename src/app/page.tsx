import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  async function doSomething(formData: FormData) {
    "use server";

    console.log("A form was submitted on the server");
  }

  fetch("https://google.com/api/hello");

  return (
    <>
      <form action={doSomething}>
        <input type="text" name="name" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
