import Head from "next/head";
import Calendar from "./components/Calendar";
import FetchRecipes from "./components/FetchRecipes";
import FoodMenuCalendar from "./components/FoodMenuCalender";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Food Menu Calendar</title>
      </Head>
      <main>
        {/* <FetchRecipes />
        <Calendar /> */}
        <FoodMenuCalendar />
      </main>
    </div>
  );
}
