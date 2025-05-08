# E-Commerce Website with Stripe Payment Integration

## Description
This is a fully responsive e-commerce website built with HTML, CSS, JavaScript, and Bootstrap, featuring secure payment processing using Stripe. The project includes a homepage with product listings, a product details page, a cart system, and a checkout page with Stripe integration for seamless transactions.

## Features
- Responsive design optimized for mobile and desktop devices.
- Product listing and detailed product pages.
- Cart functionality with add/remove items and total calculation.
- Secure payment processing with Stripe using environment variables.
- Smooth animations and transitions for an enhanced user experience.
- Clean and modular code structure for maintainability.

## Installation
Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/muzamal478/ecommerce-stripe-website.git
   cd ecommerce-stripe-website
   ```

2. **Install Node.js**:
   - Download and install Node.js from [nodejs.org](https://nodejs.org).

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Add Product Image**:
   - Place a product image in the `images/` folder named `product.jpg`, or update the `products` array in `js/script.js` with a valid image URL.

5. **Set Up Environment Variables**:
   - Create a `.env` file in the project root.
   - Add your Stripe Secret Key:
     ```plaintext
     STRIPE_SECRET_KEY=your-secret-key
     ```
   - Obtain the key from the Stripe Dashboard (test mode).

## Usage
1. **Run the Server**:
   ```bash
   npm start
   ```
   - Open your browser and navigate to `http://localhost:3000`.

2. **Test the Website**:
   - Browse products on the homepage.
   - Click a product to view details and add it to the cart.
   - View the cart, proceed to checkout, and complete a test payment.

## Stripe Setup
1. **Create a Stripe Account**:
   - Sign up at [stripe.com](https://stripe.com) and enable test mode.
   - Obtain your **Publishable Key** and **Secret Key** from the Stripe Dashboard.

2. **Configure Stripe Keys**:
   - In `js/stripe.js`, replace `pk_test_your_publishable_key` with your Publishable Key.
   - In `.env`, set `STRIPE_SECRET_KEY` to your Secret Key.

3. **Test Payments**:
   - Use Stripe’s test card: `4242 4242 4242 4242`, any future date, and any 3-digit CVC.
   - Verify payments in the Stripe Dashboard under “Payments”.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript, Bootstrap 5
- **Backend**: Node.js, Express
- **Payment**: Stripe API
- **Environment**: dotenv
- **Version Control**: Git, GitHub

## Screenshots
*(Optional: Add screenshots for visual appeal)*  
To add screenshots:
1. Create an `assets/images` folder in the repository.
2. Upload screenshots (e.g., `homepage.png`, `checkout.png`).
3. Embed in the README:
   ```markdown
   ![Homepage](assets/images/homepage.png)
   ```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For questions or feedback, contact:
- **GitHub**: [muzamal478](https://github.com/muzamal478)
- **Email**: your-email@example.com

---
*This project was created as a portfolio piece to demonstrate e-commerce and payment integration skills.*