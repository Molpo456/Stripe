const stripe = Stripe("pk_test_51MdG6EFY7D2eJXuujiFQ7b9FQ7qmQ81SaEAsmDCJB1V780sD7zQ87jEUrBZevOAv0cuyFNLKFZUfwgYOMRRapj7500jmZQMGk6")
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