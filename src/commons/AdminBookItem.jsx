import React from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'

const AdminBookItem = ({book}) => {
  return (
    <Flex>
        <Image src={book.posterURL}/>
        <Text>{book.title}</Text>

    </Flex>
  )
}

export default AdminBookItem