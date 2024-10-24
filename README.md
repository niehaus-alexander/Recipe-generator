# Project Title: Lazy Recipe

## Video Demo: [Link to Video on Youtube](https://www.youtube.com/watch?v=0ENvm179Rn0)

## CS50 Final Project - Project Description

This project is my final submission for Harvard's CS50 Introduction to Computer Science course. It encompasses various technical implementations and architectural decisions aimed at creating a functional web application. Below is a comprehensive overview of the technical details of this project.

### Technologies Used

The project leverages several technologies, including Next.js, React, Tailwind CSS, and Daisy UI. Next.js serves as the framework for building the application, providing server-side rendering and static site generation capabilities. React is utilized for building interactive user interfaces, enabling a component-based architecture that promotes reusability. Tailwind CSS offers a utility-first CSS framework that allows for rapid UI development, while Daisy UI enhances Tailwind's components, providing pre-designed elements that improve aesthetics and functionality.

### Application Structure

The application consists of five main pages, each designed to fulfill specific user needs and enhance overall functionality.

1. Landing Page ("/")

The landing page serves as the entry point for users. It features an introductory text and an image designed to convey the purpose of the application. The page includes a "Get Started" button that routes users to the "/inspiration" page. The routing is handled by Next.js's built-in Link component, which facilitates client-side navigation without full page reloads, resulting in a smoother user experience.

2. Inspiration Page ("/inspiration")

On the inspiration page, I utilize the useSWR hook, which simplifies data fetching and caching from external APIs. Specifically, it fetches data from the MealDB API based on the selected cuisine. Users can choose a cuisine type, which updates the local state using the useState hook. When the cuisine selection changes, the application triggers a new fetch request to the API.

To maintain user preferences across sessions, I implemented the useLocalStorageState hook. This hook stores the selected cuisine in the browser's local storage, allowing the application to retain the user's last selection even after they navigate away from the page.

Each recipe is displayed using a Card component, which contains key details such as the recipe name, a brief description, and buttons for navigating to the recipe's details page or favoriting the recipe. The favoriting functionality is implemented using a state variable to manage the list of favorite recipes.

3. Favorites Page ("/favorites")

The favorites page lists all recipes that the user has favorited. The dropdown menu in the navigation bar provides quick access to this section, facilitating easy navigation. The recipes are rendered using a similar Card component, and each card retains the functionality to toggle the favorite status.

4. Recipe Creator Page ("/creator")

The "/creator" page includes a form that allows users to create and submit their own recipes. The form captures essential details such as recipe name, ingredients, and preparation instructions. I use the useState hook to manage the form state and to toggle between edit and delete modes.

When a user opts to delete or edit a recipe, the corresponding state updates trigger conditional rendering to display the appropriate UI elements. The recipe creation process also ensures that submitted recipes are stored in a centralized state, making them accessible across different pages.

5. Random Recipe Picker Page ("/random-recipe-picker")

The random recipe picker page randomly selects a recipe either from the user's favorites or from the broader MealDB database. This functionality enhances user engagement by introducing an element of discovery. The selection logic is implemented using JavaScript's Math.random() function to ensure randomness. Users can view the details of the randomly selected recipe and choose to favorite it if desired.

### Theming and UI/UX Enhancements

In the top right corner of the navigation bar, users can toggle between dark and light modes. This feature is implemented by leveraging Daisy UI's theme capabilities in conjunction with a useEffect hook. When the user toggles the theme, the application updates the HTML data-theme attribute accordingly, allowing Tailwind CSS to apply the appropriate styles.

### State Management and Data Flow

The application employs a centralized state management approach. Created and favorited recipes are stored in the \_app.js file, which serves as the global state container. This structure simplifies data passing across components, allowing functions for deleting, favoriting, and editing recipes to be accessed as props. By maintaining a single source of truth for the application's state, I ensure data consistency and facilitate easier debugging.
Conclusion

This project serves as a demonstration of my ability to integrate various web technologies to build a functional and interactive application. The combination of Next.js for routing, React for component management, Tailwind CSS for styling, and Daisy UI for enhanced UI components creates a cohesive user experience. The technical decisions made throughout the development process reflect my understanding of modern web development practices and my ability to apply these concepts effectively. Through this project, I have not only consolidated my technical skills but also gained valuable experience in creating a user-oriented web application.

## 🍽️ Recipe Website

Welcome to the **Recipe Website**! This is a project that allows users to create and manage their own recipes, as well as explore new ones from [TheMealDB](https://www.themealdb.com/api.php). Users can favorite their own recipes or ones fetched from the external database, and even randomly pick a recipe to try next!

## 🚀 Features

### Current Features

- **Create Recipes**: Users can create their own personalized recipes by entering the ingredients, steps, and other details.
- **Favorite Recipes**: Users can favorite their own recipes or any recipes fetched from the MealDB API.
- **Random Recipe Picker**: Not sure what to cook? You can randomly select a recipe from the MealDB database or from your own list of favorites.
- **Explore MealDB**: Fetch and explore a vast collection of recipes from the MealDB API.

### Planned Future Features

- **User Authentication**: Implement user authentication to allow users to log in, sign up, and manage their accounts.
- **Database Connection**: Recipes and user data will be stored persistently in a connected database for better scalability and reliability.

## 🛠️ Technologies Used

- **Frontend**:
  - Tailwind CSS
  - Daisy UI
  - JavaScript (React)
- **External API**:

  - [TheMealDB API](https://www.themealdb.com/api.php) for fetching recipes.

- **Database** (Planned):

  - MongoDB / PostgreSQL (To be decided)

- **Authentication** (Planned):
  - JWT (JSON Web Token) for secure authentication.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
