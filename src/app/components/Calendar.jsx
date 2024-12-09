'use client';

import React, { useState } from 'react';

const FoodMenuCalendar = () => {
  const startDate = new Date("2024-12-01"); // Start date for the calendar
  const days = Array.from({ length: 14 }, (_, index) => {
    const day = new Date(startDate);
    day.setDate(startDate.getDate() + index);
    return day.toLocaleDateString(); // Format the date as needed (e.g., 12/1/2024)
  });

  const [showFullWeek, setShowFullWeek] = useState(false); // State to toggle between Week 1 and Week 2

  const toggleWeek = () => {
    setShowFullWeek(!showFullWeek); // Toggle the state to show 14 days
  };

  // Dummy Data with different prices for each meal
  const mealData = {
    breakfast: [
      { meal: "Pancakes", cost: "$5" },
      { meal: "Cereal", cost: "$2.5" },
      { meal: "Omelette", cost: "$4.5" },
    ],
    lunch: [
      { meal: "Sandwich", cost: "$6" },
      { meal: "Salad", cost: "$4" },
      { meal: "Pizza", cost: "$8" },
    ],
    dinner: [
      { meal: "Soup", cost: "$5" },
      { meal: "Grilled Chicken", cost: "$10" },
      { meal: "Pasta", cost: "$7.5" },
    ],
  };

  return (
    <div className="p-5">
      <div className="overflow-x-auto mx-auto shadow-md rounded-lg border border-[#0D584F]">
        <table className="table-auto min-w-full border-separate border-spacing-0">
          {/* Main Header */}
          <thead className="bg-[#0D584F] text-white">
            <tr>
              <th className="border border-[#0D584F] p-4 text-center font-bold">
                <button
                  className="font-bold text-white hover:text-[#FE6B68] transition"
                  onClick={toggleWeek}
                >
                  {showFullWeek ? 'Cycle 1 Week 2' : 'Cycle 1 Week 1'}
                </button>
              </th>
              <th className="border border-[#0D584F] p-4 font-bold">Meal Cost</th>
              {days.slice(0, showFullWeek ? 14 : 7).map((day, index) => (
                <th
                  key={index}
                  className="border border-[#0D584F] p-4 font-bold text-center"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>

          {/* Subtables for Breakfast, Lunch, and Dinner */}
          <tbody>
            {['breakfast', 'lunch', 'dinner'].map((mealType) => (
              <React.Fragment key={mealType}>
                {/* Meal Type Header with lighter teal background */}
                <tr className="bg-[#3C7A74] text-white">
                  <td
                    colSpan={2}
                    className="border border-[#3C7A74] p-4 font-bold text-center"
                  >
                    {mealType.charAt(0).toUpperCase() + mealType.slice(1)}
                  </td>
                  <td
                    colSpan={showFullWeek ? 14 : 7}
                    className="border border-[#3C7A74] p-4"
                  ></td>
                </tr>

                {/* Meal Data Rows */}
                {mealData[mealType].map((meal, rowIndex) => (
                  <tr
                    key={`${mealType}-${rowIndex}`}
                    className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FA]'}
                  >
                    <td className="border border-[#3C7A74] p-4 font-semibold text-gray-600 text-center">
                      {meal.meal}
                    </td>
                    <td className="border border-[#3C7A74] p-4 text-center text-gray-600">
                      {meal.cost}
                    </td>
                    {days.slice(0, showFullWeek ? 14 : 7).map((_, colIndex) => (
                      <td
                        key={colIndex}
                        className="border border-[#3C7A74] p-4 text-center text-gray-600"
                      >
                        <div>{meal.meal}</div>
                        <div className="text-sm text-[#FE6B68] font-medium">
                          {meal.cost}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodMenuCalendar;
