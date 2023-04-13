import React from 'react'
import { Box, Stack } from "@chakra-ui/react"
import Card from './Card'
import axios from "axios";


const Payment = () => {


    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("https://rozorpaychinmay.onrender.com/api/getkey")

        const { data: { order } } = await axios.post("https://rozorpaychinmay.onrender.com/api/checkout", {
            'amount':80
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Chinmay Programmer",
            description: "Tutorial of RazorPay",
            image: "https://avatars.githubusercontent.com/u/25058652?v=4",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

    return (
        <Box>

            <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>

               
                <Card amount={80} img={"https://img.freepik.com/free-vector/reserve-parking-space-curbside-pickup-abstract-concept-illustration-customer-walk-pickup-station-customers-arrival-keep-employees-safe-small-business_335657-3337.jpg?w=2000"} checkoutHandler={checkoutHandler} />

            </Stack>
        </Box>
    )
}

export default Payment