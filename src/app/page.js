import Head from "next/head";

import FoodCalendar from "./components/FoodCalendar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Food Menu Calendar</title>
      </Head>
      <main>
        <FoodCalendar />
      </main>
    </div>
  );
}
