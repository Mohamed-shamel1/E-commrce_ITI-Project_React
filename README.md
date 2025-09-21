# FASCO 🛍️✨

FASCO is a modern, feature-rich E-Commerce platform for clothing, built from the ground up with React. This project serves as a complete storefront experience, allowing users to browse products, manage their cart, and proceed through a simulated checkout process. It demonstrates best practices in modern frontend development, including component-based architecture, state management with the Context API, and client-side routing.

## 🌍 Live Demo

Experience the live version of the application here:
**👉 [https://e-commrce-iti-project-react.vercel.app/](https://e-commrce-iti-project-react.vercel.app/)**

## ✨ Features

  - **🏠 Dynamic Homepage:** Features an engaging layout with featured products and promotional sections.
  - **🧥 Shop & Product Pages:** A dedicated shop page to browse all items and detailed product pages for individual items.
  - **🔐 User Authentication:** Secure user registration, login, and forgot password functionality.
  - **🛒 Advanced Shopping Cart:** Add, remove, and update item quantities in a persistent shopping cart modal.
  - **✅ Smooth Checkout Flow:** A multi-step checkout process to simulate a real purchase.
  - **📱 Fully Responsive Design:** A seamless experience across desktop, tablet, and mobile devices.
  - **⚡ Modern State Management:** Utilizes React's Context API to manage global state for the cart and user authentication.
  - **🔄 Client-Side Routing:** Fast and smooth navigation between pages without full-page reloads, powered by React Router.

## 🛠️ Tech Stack

  - **Frontend:** React.js
  - **Routing:** React Router
  - **State Management:** React Context API
  - **Styling:** CSS / CSS Modules
  - **Build Tool:** Vite

## 📂 Project Structure

The project follows a component-based architecture to ensure scalability and maintainability.

```
/
├── public/              # Static assets and index.html
├── src/
│   ├── assets/          # Images, icons, and other static assets
│   ├── components/      # Reusable UI components (Navbar, Footer, Modals, etc.)
│   │   ├── ProductPage/ # Components specific to the product details view
│   │   ├── footer.jsx
│   │   ├── HomeNavbar.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   └── ShoppingCartModal.jsx
│   ├── contexts/        # React Context for global state management
│   │   ├── AuthContext.js
│   │   └── CartContext.js
│   ├── pages/           # Top-level page components managed by the router
│   │   ├── auth/
│   │   │   ├── ForgotPasswordPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   └── SignupPage.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── home.jsx
│   │   ├── ProductPage.jsx
│   │   └── shopPage.jsx
│   ├── styles/          # Global and page-specific CSS files
│   │   ├── App.css
│   │   ├── auth.css
│   │   ├── Cart.css
│   │   └── ...
│   ├── App.jsx          # Main application component with routing setup
│   └── main.jsx         # The entry point of the React application
├── .gitignore           # Files to be ignored by Git
├── package.json         # Project dependencies and scripts
└── README.md            # You are here!
```

## 🚀 Getting Started

To run this project locally, follow these simple steps:

1.  **Clone the repository:**

    ```sh
    git clone <YOUR_REPOSITORY_URL>
    ```

2.  **Navigate to the project directory:**

    ```sh
    cd FASCO
    ```

3.  **Install the dependencies:**

    ```sh
    npm install
    ```

4.  **Run the development server:**

    ```sh
    npm run dev
    ```

    The application will now be running on `http://localhost:5173` (or another port if 5173 is in use).

## 🤝 Contributing

Contributions are welcome\! If you'd like to help improve FASCO, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or fix:
    `git checkout -b feature/your-feature-name`
3.  Make your changes and commit them with a clear message.
4.  Push your branch to your fork and open a Pull Request against the main repository.

You can also open an **Issue** to report bugs or suggest new features.

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
