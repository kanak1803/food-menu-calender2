'use client';

import React, { useState } from 'react';
import dummyData from '@/app/data/data.json'; // Import the JSON file

const FoodMenuCalendar = () => {
  // Extract dates from JSON data
  const datesInJSON = [...new Set(dummyData.map(item => item.Date))]; // Get unique dates

  const [showFullWeek, setShowFullWeek] = useState(false); // State to toggle between Week 1 and Week 2

  const toggleWeek = () => {
    setShowFullWeek(!showFullWeek); // Toggle the state to show 14 days
  };

  // Group the data by meal period and then by section (category)
  const groupedData = dummyData.reduce((acc, item) => {
    if (!acc[item.Meal_period]) acc[item.Meal_period] = {};
    if (!acc[item.Meal_period][item.Section]) acc[item.Meal_period][item.Section] = [];
    acc[item.Meal_period][item.Section].push(item);
    return acc;
  }, {});

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
              {datesInJSON.slice(0, showFullWeek ? 14 : 7).map((date, index) => (
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
            {Object.keys(groupedData).map((mealPeriod) => (
              <React.Fragment key={mealPeriod}>
                {/* Meal Period Header */}
                <tr className="bg-[#3C7A74] text-white">
                  <td
                    colSpan={2}
                    className="border border-[#3C7A74] p-4 font-bold text-center"
                  >
                    {mealPeriod}
                  </td>
                  <td
                    colSpan={showFullWeek ? 14 : 7}
                    className="border border-[#3C7A74] p-4"
                  ></td>
                </tr>

                {/* Categories and Recipes */}
                {Object.keys(groupedData[mealPeriod]).map((section) => {
                  const recipes = groupedData[mealPeriod][section];
                  return (
                    <React.Fragment key={section}>
                      {/* First Row with Category Name */}
                      <tr className="bg-[#F8F9FA]">
                        <td
                          rowSpan={recipes.length} // Span across all recipe rows for this category
                          className="border border-[#3C7A74] p-4 font-semibold text-gray-600 text-center"
                        >
                          {section}
                        </td>
                        <td
                          rowSpan={recipes.length} // Span across all recipe rows for this category
                          className="border border-[#3C7A74] p-4 text-center text-gray-600"
                        >
                          ${recipes.reduce((total, item) => total + item.total_unit_cost, 0).toFixed(2)}
                        </td>
                        {datesInJSON.slice(0, showFullWeek ? 14 : 7).map((date, colIndex) => {
                          const matchedItem = recipes.find(
                            (item) => item.Date === date
                          );

                          if (matchedItem) {
                            return (
                              <td
                                key={colIndex}
                                className="border border-[#3C7A74] p-4 text-center text-gray-600"
                              >
                                <ul>
                                  {matchedItem.Recipes.map((recipe) => (
                                    <li key={recipe.Recipe_ID}>
                                      <div>{recipe.Recipe_Name}</div>
                                      <div className="text-sm text-[#FE6B68] font-medium">
                                        ${recipe.Unit_Cost.toFixed(2)}
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </td>
                            );
                          } else {
                            return <td key={colIndex} className="border border-[#3C7A74] p-4"></td>;
                          }
                        })}
                      </tr>

                      {/* Remaining Rows for Recipes */}
                      {recipes.slice(1).map((item, rowIndex) => (
                        <tr
                          key={`${section}-${rowIndex}`}
                          className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FA]'}
                        >
                          {datesInJSON.slice(0, showFullWeek ? 14 : 7).map((date, colIndex) => {
                            const matchedItem = recipes.find(
                              (item) => item.Date === date
                            );

                            if (matchedItem) {
                              return (
                                <td
                                  key={colIndex}
                                  className="border border-[#3C7A74] p-4 text-center text-gray-600"
                                >
                                  <ul>
                                    {matchedItem.Recipes.map((recipe) => (
                                      <li key={recipe.Recipe_ID}>
                                        <div>{recipe.Recipe_Name}</div>
                                        <div className="text-sm text-[#FE6B68] font-medium">
                                          ${recipe.Unit_Cost.toFixed(2)}
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                </td>
                              );
                            } else {
                              return <td key={colIndex} className="border border-[#3C7A74] p-4"></td>;
                            }
                          })}
                        </tr>
                      ))}
                    </React.Fragment>
                  );
                })}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodMenuCalendar;
