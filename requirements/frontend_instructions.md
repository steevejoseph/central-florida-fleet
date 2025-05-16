# Central Florida Fleet Website - Project Requirements Document (PRD)

## Project Overview

You are building a website for  **Central Florida Fleet**, a fleet mechanic company locally using **Next.js 14**, **shadcn/ui**, **Tailwind CSS**, and **Lucide Icons**. The platform allows users to do everything that can be done on this website: https://www.coxautoinc.com/fleet-services/

---

## Core Functionalities

## File Structure

```
central-florida-fleet
├── public
│   └── favicon.ico
├── requirements
│   └── frontend_instructions.md
├── src
│   ├── app
│   │   ├── api
│   │   │   └── auth
│   │   │       └── [...nextauth]
│   │   │           └── route.ts
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── server
│   │   ├── auth
│   │   │   ├── config.ts
│   │   │   └── index.ts
│   │   └── db.ts
│   ├── styles
│   │   └── globals.css
│   └── env.js
├── README.md
├── eslint.config.js
├── next-env.d.ts
├── next.config.js
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── prettier.config.js
├── start-database.sh
└── tsconfig.json
```

**Notes:**

- **Components**: All new components are placed in the `/components` directory at the root.
- **Pages**: All new pages are placed in the `/app` directory.
- **Next.js 14 App Router**: The project uses the Next.js 14 app router.
- **Data Fetching**: All data fetching is done in server components and data is passed down as props.
- **Client Components**: Components that use state or hooks include `'use client'` at the top of the file.

---

## Documentation and Code Examples


```
Categorization result: {"solution_request":true,"pain_anger":false,"advice_request":true,"money_talk":false}
```

---

## Implementation Details and Guidelines

### 1. Libraries and Tools

- **Next.js 15**: Utilize the app router for routing and page management.
- **shadcn/ui**: For reusable UI components.
- **Tailwind CSS**: For styling components efficiently.
- **Lucide Icons**: For iconography throughout the app.

- **Zod Package**: For defining and validating data structures.

### 2. Data Fetching and State Management

- All data fetching should be done in **server components** to leverage Next.js's server-side rendering and data fetching capabilities.
- Data fetched in server components should be passed down to **client components** as props.
- **Client components** that use state or React hooks must include `'use client'` at the top of the file.

### 3. Component Structure

- Components should be modular and reusable.
- Place all components in the `/components` directory.
- Follow the naming convention: `ComponentName.tsx`.

### 4. API Interaction

### 5. UI/UX Details
- **Accessibility**:
  - Ensure all interactive elements are accessible via keyboard navigation.
  - Use semantic HTML where appropriate.

### 6. Styling and Theming

- Use **Tailwind CSS** classes for styling.
- Consistent use of **shadcn/ui** components for uniform design.
- Incorporate **Lucide Icons** for visual enhancements.

### 7. Environment Variables

### 8. Error Handling

- Implement error handling for API requests.
- Display user-friendly messages in the UI when errors occur.

### 9. Data Processing and Filtering

- When defining themes or categories:
  - Include a `key` property that matches the property names in the categorization schema.
  - Ensure consistency between the categorization schema and the theme definitions.
- When filtering categorized data:
  - Use boolean values from the categorization results to filter posts into appropriate themes.
  - Double-check that the filtering logic correctly matches the structure of the categorization results.

### 10. Debugging and Logging

- Implement comprehensive logging throughout the application, especially in API routes and data processing functions.
- Log intermediate results, such as the number of posts fetched and categorized, to help identify issues in the data pipeline.
- Use `console.log` statements strategically to track the flow of data and catch potential issues early.

### 11. Error Handling

- Implement try-catch blocks in all asynchronous operations, especially those involving external API calls.
- Provide informative error messages that can help diagnose issues quickly.
- Consider implementing a custom error handling middleware for API routes to standardize error responses.

### 12. Component Integration and Data Flow

- Ensure proper data flow between parent and child components:
  - Pass data and callback functions as props from parent to child components.
  - Verify that prop types match between parent and child components.
- Implement proper state management in parent components:
  - Use useState for local component state.
  - Use useEffect for side effects like data fetching.
- Ensure child components correctly consume and render passed props:
  - Implement proper type checking for props.
  - Handle cases where props might be undefined or null.

### 13. Debugging and Troubleshooting

- Implement comprehensive logging throughout the application:
  - Log important state changes and data fetching results.
  - Use descriptive log messages to track the flow of data.
- Utilize browser developer tools:
  - Check the console for errors and log messages.
  - Use the React Developer Tools to inspect component hierarchy and props.
- Implement error boundaries to catch and display errors gracefully.

### 14. Component Rendering and Conditional Logic

- Implement proper conditional rendering:
  - Handle loading states with appropriate UI feedback.
  - Display error messages when data fetching or processing fails.
  - Ensure components gracefully handle empty or null data.
- Use React.Fragment or shorthand <> </> to wrap multiple elements without adding extra nodes to the DOM.

### 15. API Integration and Data Processing

- Implement robust error handling in API calls:
  - Use try-catch blocks to handle exceptions.
  - Provide informative error messages for different types of failures.
- Process API responses correctly:
  - Ensure data structures match between API responses and component expectations.
  - Implement data transformation functions if necessary to format API data for component consumption.

### 16. Performance Considerations

- Implement proper memoization techniques:
  - Use React.memo for functional components that render often with the same props.
  - Use useMemo for expensive computations.
  - Use useCallback for functions passed as props to child components.
- Optimize re-renders:
  - Avoid unnecessary re-renders by properly structuring component hierarchy.
  - Use keys correctly in list rendering to help React identify which items have changed.

### 17. Testing and Quality Assurance

- Implement unit tests for critical components and functions:
  - Test components in isolation using tools like Jest and React Testing Library.
  - Implement integration tests for connected components.
- Perform thorough manual testing:
  - Test all user interactions and edge cases.
  - Verify correct data display and updates across different scenarios.

---

## Additional Notes
- **Scalability**: The architecture should allow for easy addition of new features or categories in the future.
- **Testing**: Write unit tests for critical functions, especially those interacting with external APIs.
- **Documentation**: Comment code where necessary and maintain updated documentation for developers.

---

## Additional Implementation Guidelines

1. Server-Side API Calls:
   - All interactions with external APIs (e.g., Reddit, OpenAI) should be performed server-side.
   - Create dedicated API routes in the `pages/api` directory for each external API interaction.
   - Client-side components should fetch data through these API routes, not directly from external APIs.

2. Environment Variables:
   - Store all sensitive information (API keys, credentials) in environment variables.
   - Use a `.env.local` file for local development and ensure it's listed in `.gitignore`.
   - For production, set environment variables in the deployment platform (e.g., Vercel).
   - Access environment variables only in server-side code or API routes.

3. Error Handling and Logging:
   - Implement comprehensive error handling in both client-side components and server-side API routes.
   - Log errors on the server-side for debugging purposes.
   - Display user-friendly error messages on the client-side.

4. Type Safety:
   - Use TypeScript interfaces for all data structures, especially API responses.
   - Avoid using `any` type; instead, define proper types for all variables and function parameters.

5. API Client Initialization:
   - Initialize API clients (e.g., Snoowrap for Reddit, OpenAI) in server-side code only.
   - Implement checks to ensure API clients are properly initialized before use.

6. Data Fetching in Components:
   - Use React hooks (e.g., `useEffect`) for data fetching in client-side components.
   - Implement loading states and error handling for all data fetching operations.

7. Next.js Configuration:
   - Utilize `next.config.mjs` for environment-specific configurations.
   - Use the `env` property in `next.config.mjs` to make environment variables available to the application.

8. CORS and API Routes:
   - Use Next.js API routes to avoid CORS issues when interacting with external APIs.
   - Implement proper request validation in API routes.

9. Component Structure:
   - Separate concerns between client and server components.
   - Use server components for initial data fetching and pass data as props to client components.

10. Security:
    - Never expose API keys or sensitive credentials on the client-side.
    - Implement proper authentication and authorization for API routes if needed.

By following these principles and requirements, we can create a more robust, secure, and maintainable application, avoiding common pitfalls in Next.js and React development.
