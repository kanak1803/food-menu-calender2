"use client";

import React, { useState, useEffect } from "react";

// Import the JSON data (Assuming it's in the correct format and structure)
import juiceData from "@/app/data/juice.json";
import eggsData from "@/app/data/eggs.json";
import breadData from "@/app/data/bread.json";
import milkData from "@/app/data/milk.json";
import yogurtData from "@/app/data/yogurt.json";

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
    <div className="p-5">
      <div className="overflow-x-auto mx-auto shadow-md rounded-lg border border-[#0D584F]">
        <table className="table-auto min-w-max border-separate border-spacing-0">
          {/* Main Header */}
          <thead className="bg-[#0D584F] text-white">
            <tr>
              <th
                className="border border-[#0D584F] p-4 text-center font-semibold cursor-pointer hover:text-[#FE6B68] transition text-lg"
                onClick={toggleWeek}
                rowSpan="2"
              >
                {isExpanded ? "Cycle 1 Week 1 & Week 2" : "Cycle 1 Week 1"}
              </th>
              <th
                className="border border-[#0D584F] p-4 text-center font-semibold text-lg"
                rowSpan="2"
              >
                Meal Cost
              </th>
              {/* Date Columns */}
              {dates.slice(0, isExpanded ? 14 : 7).map((date, index) => (
                <th
                  key={index}
                  className="border border-[#0D584F] p-4 text-center font-semibold text-lg"
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
                className="border border-[#0D584F] p-4 text-start font-semibold text-xl bg-[#1f7167] text-white"
                colSpan={dates.length + 2}
              >
                Breakfast
              </td>
            </tr>

            {/* Populate Categories and Recipes for Juice */}
            <tr>
              <td className="border border-[#0D584F] p-4 text-center text-white font-semibold bg-[#498b83] text-lg">
                Juice {/* Hardcoded category name */}
              </td>
              <td className="border border-[#0D584F] p-4 text-center bg-teal-100 text-lg">
                {/* Hardcoded meal cost for Juice */}
                $5.96
              </td>

              {/* Recipes for each day */}
              {dates.slice(0, isExpanded ? 14 : 7).map((date, colIndex) => {
                const matchedItem = juiceData.find(
                  (item) => item.Date === date
                );
                return (
                  <td
                    key={colIndex}
                    className="border border-[#0D584F] p-4 text-center bg-white"
                  >
                    {matchedItem ? (
                      matchedItem.Recipes.map((recipe, recipeIndex) => (
                        <div
                          key={recipeIndex}
                          className="p-3 mb-3 rounded-lg border bg-white text-sm"
                        >
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

            {/* Populate Categories and Recipes for Eggs */}
            <tr>
              <td className="border border-[#0D584F] p-4 text-center text-white font-semibold bg-[#498b83] text-lg">
                Eggs {/* Hardcoded category name */}
              </td>
              <td className="border border-[#0D584F] p-4 text-center bg-teal-100 text-lg">
                {/* Hardcoded meal cost for Eggs */}
                $2.58
              </td>

              {/* Recipes for each day */}
              {dates.slice(0, isExpanded ? 14 : 7).map((date, colIndex) => {
                const matchedItem = eggsData.find((item) => item.Date === date);
                return (
                  <td
                    key={colIndex}
                    className="border border-[#0D584F] p-4 text-center bg-white"
                  >
                    {matchedItem ? (
                      matchedItem.Recipes.map((recipe, recipeIndex) => (
                        <div
                          key={recipeIndex}
                          className="p-3 mb-3 rounded-lg border bg-white text-sm"
                        >
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

            {/* Populate Categories and Recipes for Yogurt */}
            <tr>
              <td className="border border-[#0D584F] p-4 text-center text-white font-semibold bg-[#498b83] text-lg">
                Yogurt {/* Hardcoded category name */}
              </td>
              <td className="border border-[#0D584F] p-4 text-center bg-teal-100 text-lg">
                {/* Hardcoded meal cost for Yogurt */}
                $2.03
              </td>

              {/* Recipes for each day */}
              {dates.slice(0, isExpanded ? 14 : 7).map((date, colIndex) => {
                const matchedItem = yogurtData.find(
                  (item) => item.Date === date
                );
                return (
                  <td
                    key={colIndex}
                    className="border border-[#0D584F] p-4 text-center bg-white"
                  >
                    {matchedItem ? (
                      matchedItem.Recipes.map((recipe, recipeIndex) => (
                        <div
                          key={recipeIndex}
                          className="p-3 mb-3 rounded-lg border bg-white text-sm"
                        >
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

            {/* Populate Categories and Recipes for Bread */}
            <tr>
              <td className="border border-[#0D584F] p-4 text-center text-white font-semibold bg-[#498b83] text-lg">
                Bread {/* Hardcoded category name */}
              </td>
              <td className="border border-[#0D584F] p-4 text-center bg-teal-100 text-lg">
                {/* Hardcoded meal cost for Bread */}
                $3.21
              </td>

              {/* Recipes for each day */}
              {dates.slice(0, isExpanded ? 14 : 7).map((date, colIndex) => {
                const matchedItem = breadData.find(
                  (item) => item.Date === date
                );
                return (
                  <td
                    key={colIndex}
                    className="border border-[#0D584F] p-4 text-center bg-white"
                  >
                    {matchedItem ? (
                      matchedItem.Recipes.map((recipe, recipeIndex) => (
                        <div
                          key={recipeIndex}
                          className="p-3 mb-3 rounded-lg border bg-white text-sm"
                        >
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

            {/* Populate Categories and Recipes for Milk */}
            <tr>
              <td className="border border-[#0D584F] p-4 text-center text-white font-semibold bg-[#498b83] text-lg">
                Milk {/* Hardcoded category name */}
              </td>
              <td className="border border-[#0D584F] p-4 text-center bg-teal-100 text-lg">
                {/* Hardcoded meal cost for Milk */}
                $49.39
              </td>

              {/* Recipes for each day */}
              {dates.slice(0, isExpanded ? 14 : 7).map((date, colIndex) => {
                const matchedItem = milkData.find((item) => item.Date === date);
                return (
                  <td
                    key={colIndex}
                    className="border border-[#0D584F] p-4 text-center bg-white"
                  >
                    {matchedItem ? (
                      matchedItem.Recipes.map((recipe, recipeIndex) => (
                        <div
                          key={recipeIndex}
                          className="p-3 mb-3 rounded-lg border bg-white text-sm"
                        >
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodCalendar;
