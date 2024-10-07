import { useState } from "react";
import {loadStripe} from '@stripe/stripe-js';

function useCheckouts() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const total = JSON.parse(localStorage.getItem("totalAmount")) || 0;

    const [deliveryData, setDeliveryData] = useState({
        name: "",
        number: "",
        email: "",
        city: "",
        state: "",
        zip: "",
        state2: "",
        address: ""
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDeliveryData({ ...deliveryData, [name]: value })
    }

    const makePayment = async () => {
        if (deliveryData.name == "" || deliveryData.email == "" || deliveryData.number == "" || deliveryData.address == "") {
            alert("Please fill all the fields of Delivery information!");
            return;
        }
        localStorage.setItem("deliveryInfo", JSON.stringify(deliveryData));
        console.log(deliveryData)
        const stripe = await loadStripe('pk_test_51Q5TZQFHwQXqOYDjJbKamWUsyy8ahDklYRT60blp2R040VsZWBuPXzzOmlVcYffRKKJuUr68AxkMJLLpRrOmNGfi00xmbrM2Vp');
        const body = {
            products: cartItems,
        }
        const header = {
            "Content-Type": "application/json"
        }
        const response = await fetch(`http://localhost:7000/api/create-checkout-session`, {
            method: "POST",
            headers: header,
            body: JSON.stringify(body)
        })

        const session = await response.json();
        const result = stripe.redirectToCheckout({
            sessionId: session.id
        });

        if (result.error) {
            console.log(result.error)
        }
    }

    return {total, deliveryData, cartItems, handleInputChange, makePayment}
}
export default useCheckouts