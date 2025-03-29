# Project setup guide

### Prerequisites

- Node.js (v20.18.2)
- npm (v10.9.0)

### Installing nvm and changing Node.js version

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

## Installation

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
