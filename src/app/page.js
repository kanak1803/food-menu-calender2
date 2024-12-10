import Head from "next/head";
import Calendar from "./components/CalenderMenu";
import FetchRecipes from "./components/FetchRecipes";
import FoodMenuCalendar from "./components/FoodMenuCalender";
import CalenderMenu from "./components/CalenderMenu";
import FoodCalendar from "./components/FoodTable";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Food Menu Calendar</title>
      </Head>
      <main>
        {/* <FetchRecipes /> */}
        {/* <JuicePage/> */}
        {/* <CalenderMenu /> */}
        <FoodCalendar/>
        {/* <FoodMenuCalendar /> */}
      </main>
    </div>
  );
}
