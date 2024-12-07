import Head from "next/head";
import Calendar from "./components/Calendar";


export default function Home() {
  return (
    <div>
    <Head>
      <title>Food Menu Calendar</title>
    </Head>
    <main>
      <Calendar />
    </main>
  </div>
  );
}
