const recipeData = [
  {
    id: 1,
    name: "Pad Thai",
    ingredients: ["pepper", "onion", "coconut milk", "rice"],
    cuisine: "thai",
    difficulty: "moderate",
    timeInMinutes: 30,
    preparation: "Cook rice. Chop vegetables. Cook everything",
    imageUrl:
      "https://images.unsplash.com/photo-1503810473512-f64b56827964?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDI%3D",
  },
  {
    id: 2,
    name: "Spaghetti Bolognese",
    ingredients: [
      "spaghetti",
      "ground beef",
      "tomato sauce",
      "onion",
      "garlic",
    ],
    cuisine: "italian",
    difficulty: "easy",
    timeInMinutes: 40,
    preparation: "Boil spaghetti. Cook beef with sauce. Combine and serve.",
    imageUrl:
      "https://images.unsplash.com/photo-1503810473512-f64b56827964?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDI%3D",
  },
  {
    id: 3,
    name: "Chicken Curry",
    ingredients: ["chicken", "curry powder", "coconut milk", "potato", "onion"],
    cuisine: "indian",
    difficulty: "moderate",
    timeInMinutes: 50,
    preparation: "Cook chicken. Add vegetables and curry. Simmer until done.",
    imageUrl:
      "https://images.unsplash.com/photo-1503810473512-f64b56827964?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDI%3D",
  },
  {
    id: 4,
    name: "Tacos",
    ingredients: ["tortillas", "ground beef", "lettuce", "cheese", "tomato"],
    cuisine: "mexican",
    difficulty: "easy",
    timeInMinutes: 20,
    preparation: "Cook beef. Prepare toppings. Assemble tacos.",
    imageUrl:
      "https://images.unsplash.com/photo-1503810473512-f64b56827964?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDI%3D",
  },
  {
    id: 5,
    name: "Sushi",
    ingredients: ["sushi rice", "nori", "fish", "avocado", "cucumber"],
    cuisine: "japanese",
    difficulty: "hard",
    timeInMinutes: 60,
    preparation: "Prepare rice. Slice ingredients. Roll sushi.",
    imageUrl:
      "https://images.unsplash.com/photo-1503810473512-f64b56827964?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDI%3D",
  },
  {
    id: 6,
    name: "Greek Salad",
    ingredients: ["cucumber", "tomato", "feta cheese", "olives", "onion"],
    cuisine: "greek",
    difficulty: "easy",
    timeInMinutes: 15,
    preparation: "Chop ingredients. Mix together. Serve.",
    imageUrl:
      "https://images.unsplash.com/photo-1503810473512-f64b56827964?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDI%3D",
  },
  {
    id: 7,
    name: "Beef Stroganoff",
    ingredients: ["beef", "mushrooms", "sour cream", "onion", "garlic"],
    cuisine: "russian",
    difficulty: "moderate",
    timeInMinutes: 45,
    preparation: "Cook beef and mushrooms. Add sour cream. Serve over noodles.",
    imageUrl:
      "https://images.unsplash.com/photo-1503810473512-f64b56827964?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDI%3D",
  },
  {
    id: 8,
    name: "Chicken Alfredo",
    ingredients: [
      "chicken",
      "fettuccine",
      "alfredo sauce",
      "parmesan",
      "garlic",
    ],
    cuisine: "italian",
    difficulty: "easy",
    timeInMinutes: 30,
    preparation: "Cook pasta. Prepare chicken. Mix with sauce. Serve.",
    imageUrl:
      "https://images.unsplash.com/photo-1503810473512-f64b56827964?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDI%3D",
  },
  {
    id: 9,
    name: "Fried Rice",
    ingredients: ["rice", "egg", "carrot", "peas", "soy sauce"],
    cuisine: "chinese",
    difficulty: "easy",
    timeInMinutes: 20,
    preparation: "Cook rice. Fry with vegetables and egg. Add soy sauce.",
    imageUrl:
      "https://images.unsplash.com/photo-1503810473512-f64b56827964?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDI%3D",
  },
  {
    id: 10,
    name: "Moussaka",
    ingredients: [
      "eggplant",
      "ground beef",
      "tomato sauce",
      "béchamel sauce",
      "potato",
    ],
    cuisine: "greek",
    difficulty: "hard",
    timeInMinutes: 90,
    preparation:
      "Cook beef with sauce. Layer with eggplant and potatoes. Bake with béchamel.",
    imageUrl:
      "https://images.unsplash.com/photo-1503810473512-f64b56827964?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDI%3D",
  },
];

export default recipeData;
