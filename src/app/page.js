import Head from "next/head";
import Calendar from "./components/CalenderMenu";
import FetchRecipes from "./components/FetchRecipes";
import FoodMenuCalendar from "./components/FoodMenuCalender";
import CalenderMenu from "./components/CalenderMenu";
import FoodCalendar from "./components/FoodCalendar";
import FoodCalendarWithAPI from "./components/FoodCalendarWithAPI";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Food Menu Calendar</title>
      </Head>
      <main>
        
        <FoodCalendar/>
        {/* <FoodCalendarWithAPI/> */}
      </main>
    </div>
  );
}
