"use client";
import React, { useState } from "react";

const FetchRecipes = () => {
  const [query, setQuery] = useState(""); // State for the query input
  const [recipes, setRecipes] = useState([]); // State to store fetched recipes
  const [loading, setLoading] = useState(false); // State to manage loading
  const [error, setError] = useState(null); // State to manage errors

  const fetchRecipes = async () => {
    setLoading(true); // Set loading state
    setError(null); // Reset error state

    try {
      const response = await fetch(
        "https://4e7d-2401-4900-1c44-209b-5cb3-9f92-4231-917e.ngrok-free.app/receive_data",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }), // Pass the query in the request body
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setRecipes(data); // Assuming the API response is an array of recipes
    } catch (err) {
      setError(err.message); // Capture any error messages
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  console.log(recipes);
  console.log(query);

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">Search for Recipes</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter recipe name (e.g., Orange Mango Juice)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
      </div>

      <button
        onClick={fetchRecipes}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Searching..." : "Search"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="mt-5">
        <h2 className="text-lg font-semibold mb-3">Results:</h2>
        {recipes.length > 0 ? (
          <table className="table-auto min-w-full border-collapse border-spacing-2">
            <thead>
              <tr className="bg-[#0D584F] text-white">
                <th className="p-4 border">Meal Period</th>
                <th className="p-4 border">Section</th>
                <th className="p-4 border">Date</th>
                <th className="p-4 border">Recipe Name</th>
                <th className="p-4 border">Unit Cost</th>
              </tr>
            </thead>
            <tbody>
              {recipes.map((meal, index) => (
                <tr key={index} className="bg-gray-100">
                  <td className="p-4 border">{meal.Meal_period}</td>
                  <td className="p-4 border">{meal.Section}</td>
                  <td className="p-4 border">{meal.Date}</td>
                  {/* Loop through Recipes array */}
                  {meal.Recipes.map((recipe, recipeIndex) => (
                    <React.Fragment key={recipeIndex}>
                      <td className="p-4 border">{recipe.Recipe_Name}</td>
                      <td className="p-4 border">${recipe.Unit_Cost}</td>
                    </React.Fragment>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          !loading && <p>No recipes found. Try another query.</p>
        )}
      </div>
    </div>
  );
};

export default FetchRecipes;
