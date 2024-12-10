"use client";

import React, { useState, useEffect } from "react";
import juiceData from "@/app/data/juice.json";
import eggsData from "@/app/data/eggs.json";
import breadData from "@/app/data/bread.json";
import milkData from "@/app/data/milk.json";
import yogurtData from "@/app/data/yogurt.json";
import meatData from "@/app/data/meat.json";
import pastriesandpies from "@/app/data/Pastriesandpies.json";
import PrePackedCribs from "@/app/data/Pre-PackedCribs.json";
import SaladsandCheese from "@/app/data/SaladsandCheese.json";
import Grill from "@/app/data/Grill.json";
import pastaData from "@/app/data/PastaNoodleRice.json";
import soupData from "@/app/data/Soup.json";
import vegetablesData from "@/app/data/Vegetables.json";
import vegetarianData from "@/app/data/Vegetarian.json";

const FoodCalendar = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Default to showing 7 days
  const [dates, setDates] = useState([]); // Unique dates across all datasets

  useEffect(() => {
    const uniqueDates = [
      ...new Set([
        ...juiceData.map((item) => item.Date),
        ...eggsData.map((item) => item.Date),
        ...breadData.map((item) => item.Date),
        ...milkData.map((item) => item.Date),
        ...yogurtData.map((item) => item.Date),
        ...meatData[0].map((item) => item.Date),
        ...Grill.map((item) => item.Date || []), // Flatten and handle nested structure
        ...pastaData.map((item) => item.Date),
        ...soupData.map((item) => item.Date),
        ...vegetablesData.map((item) => item.Date),
      ]),
    ];
    setDates(uniqueDates);
  }, []);

  const toggleWeek = () => setIsExpanded(!isExpanded);

  const renderCategoryRows = (categoryName, categoryData, mealCost) => (
    <tr>
      <td className="border border-gray-300 p-4 text-center text-white font-semibold bg-[#498b83] text-lg">
        {categoryName}
      </td>
      <td className="border border-gray-300 p-4 text-center bg-teal-100 text-lg">
        ${mealCost}
      </td>
      {dates.slice(0, isExpanded ? 14 : 7).map((date, colIndex) => {
        const matchedItem = categoryData.find((item) => item.Date === date);
        return (
          <td
            key={colIndex}
            className="border border-gray-300 p-4 text-center bg-white"
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
  );

  return (
    <div className="p-5">
      <div className="overflow-x-auto mx-auto shadow-md rounded-lg border border-gray-300">
        <table className="table-auto min-w-max border-separate border-spacing-0">
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

          {/* Breakfast Section */}
          <tbody>
            <tr>
              <td
                className="border border-gray-300 p-4 text-start font-semibold text-xl bg-[#1f7167] text-white"
                colSpan={dates.length + 2}
              >
                Breakfast
              </td>
            </tr>
            {renderCategoryRows("Juice", juiceData, 5.96)}
            {renderCategoryRows("Eggs", eggsData, 2.58)}
            {renderCategoryRows("Bread", breadData, 3.21)}
            {renderCategoryRows("Milk", milkData, 49.39)}
            {renderCategoryRows("Yogurt", yogurtData, 2.03)}
          </tbody>

          {/* Lunch Section */}
          <tbody>
            <tr>
              <td
                className="border border-gray-300 p-4 text-start font-semibold text-xl bg-[#1f7167] text-white"
                colSpan={dates.length + 2}
              >
                Lunch
              </td>
            </tr>
            {renderCategoryRows("Meat", meatData[0], 0.64)}
            {renderCategoryRows("Pastries & Pies", pastriesandpies[0], 1.01)}
            {renderCategoryRows("Pre-Packed Cribs", PrePackedCribs[0], 2.6)}
            {renderCategoryRows("Salads and Cheese", SaladsandCheese[0], 4.36)}
          </tbody>
          {/* Dinner Section */}
          <tbody>
            <tr>
              <td
                className="border border-gray-300 p-4 text-start font-semibold text-xl bg-[#1f7167] text-white"
                colSpan={dates.length + 2}
              >
                Dinner
              </td>
            </tr>
            {renderCategoryRows("Grills", Grill, 5.6)}
            {renderCategoryRows("Pasta, Noodle, Rice", pastaData, 1.01)}
            {renderCategoryRows("Soup", soupData, 1.01)}
            {renderCategoryRows("Vegetables", vegetablesData, 1.01)}
            {renderCategoryRows("Vegetarian", vegetarianData, 1.01)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodCalendar;
