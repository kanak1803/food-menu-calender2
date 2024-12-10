"use client";

import React, { useState, useEffect } from "react";

// Import the JSON data (Assuming it's in the correct format and structure)
import juiceData from "@/app/data/juice.json"; // Import your juice data here
import eggsData from "@/app/data/eggs.json"; // Import your eggs data here
import breadData from "@/app/data/bread.json"; // Import your bread data here
import milkData from "@/app/data/milk.json"; // Import your milk data here
import yogurtData from "@/app/data/yogurt.json"; // Import your yogurt data here

const FoodCalendar = () => {
  const [isExpanded, setIsExpanded] = useState(true); // Default to showing 14 days
  const [dates, setDates] = useState([]); // Array to hold the unique dates

  useEffect(() => {
    // Get unique dates from the JSON data and set them
    const uniqueDates = [
      ...new Set([
        ...juiceData.map((item) => item.Date),
        ...eggsData.map((item) => item.Date),
        ...breadData.map((item) => item.Date),
        ...milkData.map((item) => item.Date),
        ...yogurtData.map((item) => item.Date),
      ]),
    ];
    setDates(uniqueDates);
  }, []);

  const toggleWeek = () => {
    setIsExpanded(!isExpanded); // Toggle between 7 and 14 days
  };

  return (
    <div className="p-5 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="overflow-x-auto mx-auto shadow-lg rounded-lg border border-gray-300">
        <table className="table-auto min-w-max border-separate border-spacing-0">
          {/* Main Header */}
          <thead className="bg-gradient-to-r from-[#0D584F] to-[#FE6B68] text-white">
            <tr>
              <th
                className="border border-gray-300 p-4 text-center font-bold cursor-pointer"
                onClick={toggleWeek}
                rowSpan="2"
              >
                {isExpanded ? "Cycle 1 Week 1 & Week 2" : "Cycle 1 Week 1"}
              </th>
              <th
                className="border border-gray-300 p-4 text-center font-bold"
                rowSpan="2"
              >
                Meal Cost
              </th>
              {/* Date Columns */}
              {dates.slice(0, isExpanded ? 14 : 7).map((date, index) => (
                <th
                  key={index}
                  className="border border-gray-300 p-4 text-center font-bold"
                >
                  {date}
                </th>
              ))}
            </tr>
          </thead>

          {/* Subtable: Breakfast (hardcoded header) */}
          <tbody>
            {/* Breakfast Header */}
            <tr>
              <td
                className="border border-gray-300 p-4 text-center font-bold bg-blue-200"
                colSpan={dates.length + 2}
              >
                Breakfast
              </td>
            </tr>

            {/* Populate Categories and Recipes for Juice */}
            <tr>
              <td className="border border-gray-300 p-4 text-center font-semibold bg-blue-100">
                Juice {/* Hardcoded category name */}
              </td>
              <td className="border border-gray-300 p-4 text-center bg-teal-100">
                {/* Total cost for the Juice category */}
                $5.96
              </td>

              {/* Recipes for each day */}
              {dates.slice(0, isExpanded ? 14 : 7).map((date, colIndex) => {
                const matchedItem = juiceData.find((item) => item.Date === date);
                return (
                  <td key={colIndex} className="border border-gray-300 p-4 text-center bg-white">
                    {matchedItem ? (
                      matchedItem.Recipes.map((recipe, recipeIndex) => (
                        <div key={recipeIndex}>
                          <div className="text-sm font-semibold text-gray-700">
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

            {/* Populate Categories and Recipes for Eggs */}
            <tr>
              <td className="border border-gray-300 p-4 text-center font-semibold bg-blue-100">
                Eggs {/* Hardcoded category name */}
              </td>
              <td className="border border-gray-300 p-4 text-center bg-teal-100">
                {/* Total cost for the Eggs category */}
                $2.58
              </td>

              {/* Recipes for each day */}
              {dates.slice(0, isExpanded ? 14 : 7).map((date, colIndex) => {
                const matchedItem = eggsData.find((item) => item.Date === date);
                return (
                  <td key={colIndex} className="border border-gray-300 p-4 text-center bg-white">
                    {matchedItem ? (
                      matchedItem.Recipes.map((recipe, recipeIndex) => (
                        <div key={recipeIndex}>
                          <div className="text-sm font-semibold text-gray-700">
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

            {/* Populate Categories and Recipes for Yogurt */}
            <tr>
              <td className="border border-gray-300 p-4 text-center font-semibold bg-blue-100">
                Yogurt {/* Hardcoded category name */}
              </td>
              <td className="border border-gray-300 p-4 text-center bg-teal-100">
                {/* Total cost for the Yogurt category */}
                $2.03
              </td>

              {/* Recipes for each day */}
              {dates.slice(0, isExpanded ? 14 : 7).map((date, colIndex) => {
                const matchedItem = yogurtData.find((item) => item.Date === date);
                return (
                  <td key={colIndex} className="border border-gray-300 p-4 text-center bg-white">
                    {matchedItem ? (
                      matchedItem.Recipes.map((recipe, recipeIndex) => (
                        <div key={recipeIndex}>
                          <div className="text-sm font-semibold text-gray-700">
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

            {/* Populate Categories and Recipes for Bread */}
            <tr>
              <td className="border border-gray-300 p-4 text-center font-semibold bg-blue-100">
                Bread {/* Hardcoded category name */}
              </td>
              <td className="border border-gray-300 p-4 text-center bg-teal-100">
                {/* Total cost for the Bread category */}
                $3.21
              </td>

              {/* Recipes for each day */}
              {dates.slice(0, isExpanded ? 14 : 7).map((date, colIndex) => {
                const matchedItem = breadData.find((item) => item.Date === date);
                return (
                  <td key={colIndex} className="border border-gray-300 p-4 text-center bg-white">
                    {matchedItem ? (
                      matchedItem.Recipes.map((recipe, recipeIndex) => (
                        <div key={recipeIndex}>
                          <div className="text-sm font-semibold text-gray-700">
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

            {/* Populate Categories and Recipes for Milk */}
            <tr>
              <td className="border border-gray-300 p-4 text-center font-semibold bg-blue-100">
                Milk {/* Hardcoded category name */}
              </td>
              <td className="border border-gray-300 p-4 text-center bg-teal-100">
                {/* Total cost for the Milk category */}
                $49.39
              </td>

              {/* Recipes for each day */}
              {dates.slice(0, isExpanded ? 14 : 7).map((date, colIndex) => {
                const matchedItem = milkData.find((item) => item.Date === date);
                return (
                  <td key={colIndex} className="border border-gray-300 p-4 text-center bg-white">
                    {matchedItem ? (
                      matchedItem.Recipes.map((recipe, recipeIndex) => (
                        <div key={recipeIndex}>
                          <div className="text-sm font-semibold text-gray-700">
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodCalendar;
