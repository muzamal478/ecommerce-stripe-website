# E-Commerce Website with Stripe Payment Integration

## Project Overview
This repository contains a fully functional e-commerce website designed to showcase products, manage a shopping cart, and process payments securely using Stripe. Built with HTML, CSS, JavaScript, and Bootstrap, the website features a responsive layout, smooth animations, and a user-friendly interface.

## Features
- **Product Listing**: Browse and view product details with images and prices.
- **Cart Management**: Add, remove, and view items in the cart with a calculated total.
- **Stripe Payment Integration**: Secure checkout process using Stripe’s API.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices.
- **Animations**: Enhanced user experience with hover effects and transitions.

## Technologies Used
- **HTML5**: Structural foundation of the website.
- **CSS3**: Custom styling with animations and responsiveness.
- **JavaScript**: Dynamic functionality for cart and payment processing.
- **Bootstrap 5**: Framework for consistent and responsive design.
- **Stripe API**: Secure payment gateway integration.
- **Node.js**: Server-side support for Stripe transactions.

## Installation and Setup
Follow these steps to run the project locally:

### Prerequisites
- [Node.js](https://nodejs.org) installed.
- A [Stripe](https://stripe.com) account with test API keys.
- Git installed.

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/muzamal478/ecommerce-stripe-website.git
   cd ecommerce-stripe-website
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Stripe Keys**:
   - Open `js/stripe.js` and replace `pk_test_your_publishable_key` with your Stripe Publishable Key.
   - Open `server.js` and replace `sk_test_your_secret_key` with your Stripe Secret Key.

4. **Add Product Image**:
   - Place a product image in the `images/` folder (e.g., `product.jpg`) or update the `products` array in `js/script.js` with a valid image URL.

5. **Run the Server**:
   ```bash
   node server.js
   ```
   - Open your browser and navigate to `http://localhost:3000`.

6. **Test Payment**:
   - Add products to the cart and proceed to checkout.
   - Use Stripe’s test card: `4242 4242 4242 4242`, any future date, and any 3-digit CVC.
   - Verify payments in the [Stripe Dashboard](https://dashboard.stripe.com/test/payments).

## File Structure
```
ECCOMMERCE-WEBSITE/
├── css/
│   └── styles.css          # Custom CSS for styling and animations
├── images/                 # Directory for product images
├── js/
│   ├── script.js           # JavaScript for cart and UI logic
│   └── stripe.js           # JavaScript for Stripe payment integration
├── node_modules/           # Node.js dependencies
├── .gitignore              # Files to exclude from Git
├── .env                    # Environment variables (if used)
├── cart.html               # Cart page
├── checkout.html           # Checkout page with Stripe integration
├── index.html              # Homepage with product listing
├── LICENSE                 # Project license
├── package-lock.json       # Lock file for dependencies
├── package.json            # Node.js package configuration
├── product.html            # Product details page
├── README.md               # Project documentation
└── server.js               # Node.js server for Stripe API
```

## Usage
- **Browse Products**: Explore the homepage to view available products.
- **Add to Cart**: Select items and manage them in the cart.
- **Checkout**: Complete purchases securely via Stripe.

## Contributing
Contributions are welcome. Please follow these steps:
1. Fork the repository.
2. Create a branch: `git checkout -b feature-name`.
3. Commit changes: `git commit -m "Add feature"`.
4. Push to your fork: `git push origin feature-name`.
5. Submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

## Contact
For questions or support, contact Muzamal Asghar at [your-email@example.com] or open an issue on this repository.