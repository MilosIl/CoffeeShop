# Coffee Shop Application Documentation

"Coffee Shop" is a collaborative project by **Quantox Academy** students, designed and developed under the supervision of instructors. It showcases a modern design created by the design team and was developed by the frontend team from the **React and React Native** course.

## Project Description

The "Coffee Shop" project showcases our progress and skills gained through learning and practice. It reflects our ability to create a well-designed, functional, and user-friendly application. Through this project, we demonstrate our growth in frontend development and modern web technologies.

Built by design of students from Quantox Academy: [link of design](https://www.figma.com/design/OkuGlbVZOxtCwzEu4Hf1hT/Cafe-Academy---Design?node-id=0-4799)
 
## Technologies Used

- **Frontend framework** : React
- **State management** : Context API
- **UI component library** : 
- **CSS framework** : 
- **Linting & Formatting**: ESLint and Prettier
- **Build Tool** : Vite
- **Package manager** : npm
  
## Project Setup

### Prerequisites

- Node.js (v20.18.2)
- npm (v10.9.0)

#### Installing nvm and changing Node.js version

1. Install `nvm` (Node Version Manager):
    - For Windows, download and install from [nvm-windows](https://github.com/coreybutler/nvm-windows/releases).
    - For macOS/Linux, use the following command:
      ```sh
      curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
      ```

2. Restart your terminal and verify the installation:
    ```sh
    nvm -v
    ```

3. Install the required Node.js version:
    ```sh
    nvm install 20.18.2
    ```

4. Use the installed Node.js version:
    ```sh
    nvm use 20.18.2
    ```
5. Check what version of Node.js is used:
   ```sh
   node -v
   ```

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/MilosIl/CoffeeShop
    cd CoffeeShop
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

### Starting development server

To start the development server with hot module replacement:
```sh
npm run dev
```

### Building for Production

To create a production build:
```sh
npm run build
```

The output will be in the `dist` directory.

### Linting

To run ESLint:
```sh
npm run lint
```

### Formatting

To format the code using Prettier:
```sh
npm run format
```

## Folder Structure

The project structure is as follows:
```
src/
  components/    # Reusable components
  providers/     # Providers
  pages/         # Page components
  styles/        # Global styles
  App.jsx        # Main application component
  main.jsx       # Entry point
```

## Component Documentation

Each component is documented with prop types and usage examples. Refer to the `components` directory for detailed documentation on each component.

## State Management

State is managed using ContextAPI. Context providers are located in the `provider/context` directory. Each context is responsible for a specific part of the application state.

## Routing

Routing is handled using `react-router`. Routes are defined in the `App.js` file. Each route corresponds to a page component located in the `pages` directory.

## Styling and Theme

Styling is done using CSS modules. Global styles are located in the `styles` directory. The application supports theming, and themes can be switched dynamically.

#### Global styles:

#### Typography:
  - font-family:
  
#### Color palette
Light theme:
- primary-color:
- background-color:

Dark theme:
- primary-color:
- background-color:

## Branch Usage

### Development Branch
The `development` branch is used for active development. All new features, bug fixes, and other changes are first committed to this branch.

### Staging Branch
The `staging` branch is used for testing the application before it is released to production. Changes from the `development` branch are merged into the `staging` branch for testing. This branch should be stable and free of major bugs.

### Master Branch
The `master` branch is the production-ready branch. It contains the stable version of the application that is deployed to production. Only thoroughly tested and approved changes from the `staging` branch are merged into the `master` branch.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes using the convention from `commitlint.config.js` (`git commit -m "feat: Add some feature"`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.
