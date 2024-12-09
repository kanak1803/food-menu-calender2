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
        "https://21ac-2401-4900-1c44-209b-a8ab-8733-81c7-a398.ngrok-free.app/receive_data",
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
          placeholder="Enter recipe name (e.g., Pasta)"
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
          <ul className="list-disc pl-5">
            {recipes.map((recipe, index) => (
              <li key={index} className="mb-2">
                {recipe} {/* Display recipe information */}
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p>No recipes found. Try another query.</p>
        )}
      </div>
    </div>
  );
};

export default FetchRecipes;
