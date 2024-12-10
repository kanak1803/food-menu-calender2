"use client";

import React, { useState } from "react";
import breakfastData from "@/app/data/breakfast.json"; // Import the JSON data

const CalenderMenu = () => {
  const [showFullWeek, setShowFullWeek] = useState(false); // State to toggle between Week 1 and Week 2

  // Toggle the state to show 14 days
  const toggleWeek = () => setShowFullWeek(!showFullWeek);

  // Extract unique dates from JSON data
  const uniqueDates = [
    ...new Set(Object.values(breakfastData).flat().map((item) => item.Date)),
  ];

  const displayedDates = uniqueDates.slice(0, showFullWeek ? 14 : 7);

  // Group the breakfast data by category
  const breakfastCategories = Object.values(breakfastData).flat();

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
                  {showFullWeek ? "Cycle 1 Week 2" : "Cycle 1 Week 1"}
                </button>
              </th>
              <th className="border border-[#0D584F] p-4 font-bold">Meal Cost</th>
              {displayedDates.map((date, index) => (
                <th
                  key={index}
                  className="border border-[#0D584F] p-4 font-bold text-center"
                >
                  {date}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {/* Breakfast Header */}
            <tr className="bg-[#3C7A74] text-white">
              <td
                colSpan={2}
                className="border border-[#3C7A74] p-4 font-bold text-center"
              >
                Breakfast
              </td>
              <td
                colSpan={showFullWeek ? 14 : 7}
                className="border border-[#3C7A74] p-4"
              ></td>
            </tr>

            {/* Categories and Recipes */}
            {breakfastCategories.map((category, categoryIndex) => (
              <tr key={categoryIndex} className="bg-[#F8F9FA]">
                {/* Category Name */}
                <td
                  rowSpan={category.Recipes.length} // Span for all recipes
                  className="border border-[#3C7A74] p-4 font-semibold text-gray-600 text-center"
                >
                  {category.Section}
                </td>

                {/* Total Cost */}
                <td
                  rowSpan={category.Recipes.length} // Span for all recipes
                  className="border border-[#3C7A74] p-4 text-center text-gray-600"
                >
                  ${category.total_unit_cost.toFixed(2)}
                </td>

                {/* Recipes */}
                {displayedDates.map((date, colIndex) => {
                  const recipesForDate = category.Recipes.filter(
                    (recipe) => date === date
                  );

                  if (recipesForDate.length > 0) {
                    return (
                      <td
                        key={colIndex}
                        className="border border-[#3C7A74] p-4 text-center text-gray-600"
                      >
                        {recipesForDate.map((recipe) => (
                          <div key={recipe.Recipe_ID}>
                            <div className="text-sm font-semibold text-gray-700">
                              {recipe.Recipe_Name}
                            </div>
                            <div className="text-xs text-[#FE6B68] font-medium">
                              ${recipe.Unit_Cost.toFixed(2)}
                            </div>
                          </div>
                        ))}
                      </td>
                    );
                  } else {
                    return (
                      <td
                        key={colIndex}
                        className="border border-[#3C7A74] p-4 text-center text-gray-600"
                      >
                        No Recipe
                      </td>
                    );
                  }
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CalenderMenu;
