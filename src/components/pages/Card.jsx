import { Button, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Card = ({ amount, img, checkoutHandler }) => {
    return (
        <VStack>
            <Image src={img} boxSize={"504"} objectFit="cover" />
            <Text>₹{amount}</Text>
            <Button onClick={() => checkoutHandler(amount)}>Book Spot</Button>
        </VStack>
    )
}

export default Card