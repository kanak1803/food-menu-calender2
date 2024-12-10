"use client";

import React, { useState, useEffect } from "react";

// Import the JSON data (Assuming it's in the correct format and structure)
import juiceData from "@/app/data/juice.json";
import eggsData from "@/app/data/eggs.json";
import breadData from "@/app/data/bread.json";
import milkData from "@/app/data/milk.json";
import yogurtData from "@/app/data/yogurt.json";
import meatData from "@/app/data/meat.json"; // Import meat data
import pastriesandpies from "@/app/data/Pastriesandpies.json"
import PrePackedCribs from "@/app/data/Pre-PackedCribs.json"
import SaladsandCheese from "@/app/data/SaladsandCheese.json"

const FoodCalendar = () => {
  const [isExpanded, setIsExpanded] = useState(true); // Default to showing 14 days for both Breakfast and Lunch
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
        ...meatData[0].map((item) => item.Date), // Include dates from meatData
      ]),
    ];
    setDates(uniqueDates);
  }, []);

  // Toggle function for both Breakfast and Lunch tables
  const toggleWeek = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-5">
      <div className="overflow-x-auto mx-auto shadow-md rounded-lg border border-gray-300">
        {/* Main Table with both Breakfast and Lunch */}
        <table className="table-auto min-w-max border-separate border-spacing-0">
          {/* Main Header */}
          <thead className="bg-[#0D584F] text-white">
            <tr>
              <th
                className="border border-gray-300 p-4 text-center font-semibold cursor-pointer hover:text-[#FE6B68] transition text-lg"
                onClick={toggleWeek}
                rowSpan="2"
              >
                {isExpanded ? "Cycle 1 Week 1 & Week 2" : "Cycle 1 Week 1"}
              </th>
              <th
                className="border border-gray-300 p-4 text-center font-semibold text-lg"
                rowSpan="2"
              >
                Meal Cost
              </th>
              {/* Date Columns */}
              {dates.slice(0, isExpanded ? 14 : 7).map((date, index) => (
                <th
                  key={index}
                  className="border border-gray-300 p-4 text-center font-semibold text-lg"
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
                className="border border-gray-300 p-4 text-start font-semibold text-xl bg-[#1f7167] text-white"
                colSpan={dates.length + 2}
              >
                Breakfast
              </td>
            </tr>

            {/* Populate Categories and Recipes for Juice */}
            <tr>
              <td className="border border-gray-300 p-4 text-center text-white font-semibold bg-[#498b83] text-lg">
                Juice
              </td>
              <td className="border border-gray-300 p-4 text-center bg-teal-100 text-lg">
                $5.96
              </td>

              {/* Recipes for each day */}
              {dates.slice(0, isExpanded ? 14 : 7).map((date, colIndex) => {
                const matchedItem = juiceData.find((item) => item.Date === date);
                return (
                  <td key={colIndex} className="border border-gray-300 p-4 text-center bg-white">
                    {matchedItem ? (
                      matchedItem.Recipes.map((recipe, recipeIndex) => (
                        <div key={recipeIndex} className="p-3 mb-3 rounded-lg border bg-white text-sm">
                          <div className="font-semibold text-gray-700">{recipe.Recipe_Name}</div>
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
              <td className="border border-gray-300 p-4 text-center text-white font-semibold bg-[#498b83] text-lg">
                Eggs
              </td>
              <td className="border border-gray-300 p-4 text-center bg-teal-100 text-lg">
                $2.58
              </td>

              {/* Recipes for each day */}
              {dates.slice(0, isExpanded ? 14 : 7).map((date, colIndex) => {
                const matchedItem = eggsData.find((item) => item.Date === date);
                return (
                  <td key={colIndex} className="border border-gray-300 p-4 text-center bg-white">
                    {matchedItem ? (
                      matchedItem.Recipes.map((recipe, recipeIndex) => (
                        <div key={recipeIndex} className="p-3 mb-3 rounded-lg border bg-white text-sm">
                          <div className="font-semibold text-gray-700">{recipe.Recipe_Name}</div>
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
              <td className="border border-gray-300 p-4 text-center text-white font-semibold bg-[#498b83] text-lg">
                Bread
              </td>
              <td className="border border-gray-300 p-4 text-center bg-teal-100 text-lg">
                $3.21
              </td>

              {/* Recipes for each day */}
              {dates.slice(0, isExpanded ? 14 : 7).map((date, colIndex) => {
                const matchedItem = breadData.find((item) => item.Date === date);
                return (
                  <td key={colIndex} className="border border-gray-300 p-4 text-center bg-white">
                    {matchedItem ? (
                      matchedItem.Recipes.map((recipe, recipeIndex) => (
                        <div key={recipeIndex} className="p-3 mb-3 rounded-lg border bg-white text-sm">
                          <div className="font-semibold text-gray-700">{recipe.Recipe_Name}</div>
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
              <td className="border border-gray-300 p-4 text-center text-white font-semibold bg-[#498b83] text-lg">
                Milk
              </td>
              <td className="border border-gray-300 p-4 text-center bg-teal-100 text-lg">
                $49.39
              </td>

              {/* Recipes for each day */}
              {dates.slice(0, isExpanded ? 14 : 7).map((date, colIndex) => {
                const matchedItem = milkData.find((item) => item.Date === date);
                return (
                  <td key={colIndex} className="border border-gray-300 p-4 text-center bg-white">
                    {matchedItem ? (
                      matchedItem.Recipes.map((recipe, recipeIndex) => (
                        <div key={recipeIndex} className="p-3 mb-3 rounded-lg border bg-white text-sm">
                          <div className="font-semibold text-gray-700">{recipe.Recipe_Name}</div>
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
              <td className="border border-gray-300 p-4 text-center text-white font-semibold bg-[#498b83] text-lg">
                Yogurt
              </td>
              <td className="border border-gray-300 p-4 text-center bg-teal-100 text-lg">
                $2.03
              </td>

              {/* Recipes for each day */}
              {dates.slice(0, isExpanded ? 14 : 7).map((date, colIndex) => {
                const matchedItem = yogurtData.find((item) => item.Date === date);
                return (
                  <td key={colIndex} className="border border-gray-300 p-4 text-center bg-white">
                    {matchedItem ? (
                      matchedItem.Recipes.map((recipe, recipeIndex) => (
                        <div key={recipeIndex} className="p-3 mb-3 rounded-lg border bg-white text-sm">
                          <div className="font-semibold text-gray-700">{recipe.Recipe_Name}</div>
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

          {/* Lunch Table */}
          <tbody>
            {/* Lunch Header */}
            <tr>
              <td
                className="border border-gray-300 p-4 text-start font-semibold text-xl bg-[#1f7167] text-white"
                colSpan={dates.length + 2}
              >
                Lunch
              </td>
            </tr>

            {/* Populate Categories and Recipes for Meat */}
            <tr>
              <td className="border border-gray-300 p-4 text-center text-white font-semibold bg-[#498b83] text-lg">
                Meat
              </td>
              <td className="border border-gray-300 p-4 text-center bg-teal-100 text-lg">
                $0.64
              </td>

              {/* Recipes for each day */}
              {dates.slice(0, isExpanded ? 14 : 7).map((date, colIndex) => {
                const matchedItem = meatData[0].find((item) => item.Date === date);
                return (
                  <td key={colIndex} className="border border-gray-300 p-4 text-center bg-white">
                    {matchedItem ? (
                      matchedItem.Recipes.map((recipe, recipeIndex) => (
                        <div key={recipeIndex} className="p-3 mb-3 rounded-lg border bg-white text-sm">
                          <div className="font-semibold text-gray-700">{recipe.Recipe_Name}</div>
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
            <tr>
              <td className="border border-gray-300 p-4 text-center text-white font-semibold bg-[#498b83] text-lg">
              Pastries & Pies
              </td>
              <td className="border border-gray-300 p-4 text-center bg-teal-100 text-lg">
                $1.01
              </td>

              {/* Recipes for each day */}
              {dates.slice(0, isExpanded ? 14 : 7).map((date, colIndex) => {
                const matchedItem = pastriesandpies[0].find((item) => item.Date === date);
                return (
                  <td key={colIndex} className="border border-gray-300 p-4 text-center bg-white">
                    {matchedItem ? (
                      matchedItem.Recipes.map((recipe, recipeIndex) => (
                        <div key={recipeIndex} className="p-3 mb-3 rounded-lg border bg-white text-sm">
                          <div className="font-semibold text-gray-700">{recipe.Recipe_Name}</div>
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
            <tr>
              <td className="border border-gray-300 p-4 text-center text-white font-semibold bg-[#498b83] text-lg">
              Pre-Packed Cribs
              </td>
              <td className="border border-gray-300 p-4 text-center bg-teal-100 text-lg">
                $2.6
              </td>

              {/* Recipes for each day */}
              {dates.slice(0, isExpanded ? 14 : 7).map((date, colIndex) => {
                const matchedItem = PrePackedCribs[0].find((item) => item.Date === date);
                return (
                  <td key={colIndex} className="border border-gray-300 p-4 text-center bg-white">
                    {matchedItem ? (
                      matchedItem.Recipes.map((recipe, recipeIndex) => (
                        <div key={recipeIndex} className="p-3 mb-3 rounded-lg border bg-white text-sm">
                          <div className="font-semibold text-gray-700">{recipe.Recipe_Name}</div>
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
            <tr>
              <td className="border border-gray-300 p-4 text-center text-white font-semibold bg-[#498b83] text-lg">
              Salads and Cheese
              </td>
              <td className="border border-gray-300 p-4 text-center bg-teal-100 text-lg">
                $4.36
              </td>

              {/* Recipes for each day */}
              {dates.slice(0, isExpanded ? 14 : 7).map((date, colIndex) => {
                const matchedItem = SaladsandCheese[0].find((item) => item.Date === date);
                return (
                  <td key={colIndex} className="border border-gray-300 p-4 text-center bg-white">
                    {matchedItem ? (
                      matchedItem.Recipes.map((recipe, recipeIndex) => (
                        <div key={recipeIndex} className="p-3 mb-3 rounded-lg border bg-white text-sm">
                          <div className="font-semibold text-gray-700">{recipe.Recipe_Name}</div>
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
