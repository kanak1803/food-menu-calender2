"use client";

import React from "react";

// Import the JSON data for Meat (Lunch)
import meatData from "@/app/data/meat.json";

const MeatTable = ({ dates, isExpanded }) => {
  return (
    <div className="overflow-x-auto mx-auto shadow-md rounded-lg border border-gray-300 mt-5">
      <table className="table-auto min-w-max border-separate border-spacing-0">
        {/* Main Header for Meat (Lunch) */}
        <thead className="bg-[#0D584F] text-white">
          <tr>
            <th className="border border-gray-300 p-4 text-center font-semibold text-lg" rowSpan="2">
              Meat {/* Hardcoded header for Meat */}
            </th>
            <th className="border border-gray-300 p-4 text-center font-semibold text-lg" rowSpan="2">
              Meal Cost
            </th>
            {/* Date Columns for Meat */}
            {dates.slice(0, isExpanded ? 14 : 7).map((date, index) => (
              <th key={index} className="border border-gray-300 p-4 text-center font-semibold text-lg">
                {date}
              </th>
            ))}
          </tr>
        </thead>

        {/* Meat Body */}
        <tbody>
          {/* Loop through the meat data for each day */}
          {meatData[0].map((item, rowIndex) => (
            <tr key={rowIndex}>
              <td className="border border-gray-300 p-4 text-center text-white font-semibold bg-[#498b83] text-lg">
                {item.Section} {/* Dynamic Section */}
              </td>
              <td className="border border-gray-300 p-4 text-center bg-teal-100 text-lg">
                ${item.total_unit_cost.toFixed(2)} {/* Total meal cost */}
              </td>

              {/* Recipes for each day */}
              {dates.slice(0, isExpanded ? 14 : 7).map((date, colIndex) => {
                // Find the corresponding item for the date
                const matchedItem = meatData[0].find((i) => i.Date === date); 
                return (
                  <td key={colIndex} className="border border-gray-300 p-4 text-center bg-white">
                    {matchedItem ? (
                      // Loop through recipes for the matched date
                      matchedItem.Recipes.map((recipe, recipeIndex) => (
                        <div key={recipeIndex} className="p-3 mb-3 rounded-lg border bg-white text-sm">
                          <div className="font-semibold text-gray-700">
                            {recipe.Recipe_Name}
                          </div>
                          <div className="text-xs text-[#0D584F] font-medium">
                            ${recipe.Unit_Cost.toFixed(2)}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div>No recipe available</div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MeatTable;
