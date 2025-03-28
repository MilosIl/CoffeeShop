# Routing Guide

Routing is handled using `react-router`. Routes are defined in the `App.js` file. Each route corresponds to a page component located in the `pages` directory.

## Example: Adding a New Route

To add a new route, follow these steps:

1. Create a new component in the `pages` directory. For example, `LoginPage.jsx`:

   ```javascript
   // filepath: \src\pages\LoginPage\LoginPage.jsx
   import React from 'react';

   const LoginPage = () => {
     return <h1>LoginPage Us</h1>;
   };

   export { LoginPage };
   ```

2. Export page from `index.js` located in `src\pages\index.js`

   ```
    export * from './LoginPage.jsx'
   ```

3. Import the new component and define the route in `AppRouter.jsx`:

   ```javascript
   // filepath: \src\routes\AppRouter.jsx
    import { Route, Routes } from 'react-router';
    import { LoginPage } from '../pages/';

    const AppRouter = () => {
      return (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      );
    };
    export { AppRouter };
   ```

4. Navigate to `/login` in your browser to see the new page.
