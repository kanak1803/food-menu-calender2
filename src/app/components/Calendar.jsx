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
      <div className="overflow-x-auto mx-auto"> {/* Centering the table */}
        <table className="table-auto min-w-max border-collapse border border-gray-300">
          {/* Main Header */}
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">
                <button
                  className="font-bold text-center w-full"
                  onClick={toggleWeek}
                >
                  {showFullWeek ? 'Cycle 1 Week 2' : 'Cycle 1 Week 1'}
                </button>
              </th>
              <th className="border border-gray-300 p-2 w-20">Meal Cost</th>
              {days.slice(0, showFullWeek ? 14 : 7).map((day, index) => (
                <th key={index} className="border border-gray-300 p-2">{day}</th>
              ))}
            </tr>
          </thead>

          {/* Subtables for Breakfast, Lunch, and Dinner */}
          <tbody>
            {['breakfast', 'lunch', 'dinner'].map((mealType) => (
              <React.Fragment key={mealType}>
                {/* Meal Type Header */}
                <tr>
                  <td
                    colSpan={2}
                    className="border border-gray-300 p-2 font-bold text-center bg-gray-100"
                  >
                    {mealType.charAt(0).toUpperCase() + mealType.slice(1)}
                  </td>
                  <td colSpan={showFullWeek ? 14 : 7} className="border border-gray-300 p-2 bg-gray-100"></td>
                </tr>

                {/* Meal Data Rows */}
                {mealData[mealType].map((meal, rowIndex) => (
                  <tr key={`${mealType}-${rowIndex}`}>
                    <td className="border border-gray-300 p-2 font-bold">
                      {meal.meal}
                    </td>
                    <td className="border border-gray-300 p-2 w-20">
                      <input
                        type="text"
                        placeholder={meal.cost}
                        className="w-full"
                        readOnly
                      />
                    </td>
                    {days.slice(0, showFullWeek ? 14 : 7).map((_, colIndex) => (
                      <td key={colIndex} className="border border-gray-300 p-2">
                        {/* Show meal name and price */}
                        <div>{meal.meal}</div>
                        <div className="text-sm text-gray-500">{meal.cost}</div> {/* Price below the meal */}
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
