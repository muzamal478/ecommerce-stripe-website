const stripe = Stripe("pk_test_51RMMwbB1BMFDtz0DIP1H27nXn8e4PhXjRCCUaZ3is9TG85Rqk87k6PlNd6BGGVv47ieKEN0RvljrJNmHs9Up4iJV00pRAi1p87"); // Replace with your Stripe Publishable Key
const elements = stripe.elements();
const card = elements.create("card");
card.mount("#card-element");

card.on("change", ({ error }) => {
    const displayError = document.getElementById("card-errors");
    displayError.textContent = error ? error.message : "";
});

document.getElementById("submit-payment").addEventListener("click", async () => {
    const total = cart.reduce((sum, item) => sum + item.price, 0) * 100; // Convert to cents
    const response = await fetch("http://localhost:3000/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: total }),
    });
    const { clientSecret } = await response.json();

    const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card }
    });

    if (result.error) {
        document.getElementById("card-errors").textContent = result.error.message;
    } else {
        alert("Payment successful!");
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        window.location.href = "index.html";
    }
});