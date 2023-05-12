const stripe = Stripe("Public Key Here")
const button = document.getElementsByClassName("order-button1")[0]
button.addEventListener("click", () => {
    fetch("checkout.php", {
        method: "POST",
        header: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({})
    }).then(res => res.json())
    .then(payload => {
        stripe.redirectToCheckout({ sessionId: payload.id })
    })
})
