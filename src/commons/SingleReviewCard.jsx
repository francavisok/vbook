import React from "react";
import {
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Flex,
  Button,
  RadioGroup,
  Stack,
  Radio,
  useColorModeValue,
  Divider,
  Textarea,
  Heading,
  Text,
  Spacer,
} from "@chakra-ui/react";

const SingleReviewCard = ({ review }) => {
  return (
    <Flex
      direction={"column"}
      align={"center"}
      justify={"center"}
      rounded={"lg"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"lg"}
      p={8}
      spacing={4}
      maxWidth="80%"
      minW={"80%"}
      m={"auto"}
      mb={"20px"}
    >
      <Flex align={"center"} w={"100%"}>
        <Text>{review.createdAt.split("T")[0]}</Text>
        <Text ml={'25px'} fontWeight={'bold'} >{`UserName : ${review.userId}`}</Text>

        <Spacer />
        <Button size="sm" colorScheme="pink">
          Edit comment
        </Button>
        {/* <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Purchase details</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Flex direction={"column"}>
                  <Heading size={"sm"}>Adress</Heading>
                  <Text>{order.direction}</Text>
                  <Heading size={"sm"} mt={"25px"}>
                    Payment method
                  </Heading>
                  <Text>{order.paymentMethod}</Text>
                </Flex>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal> */}
      </Flex>

      <Divider my={"15px"} />

      <Flex width={"100%"} my="10px" align={"start"} direction={"column"}>
        <Text fontWeight={"bold"}>Rating</Text>
        <Text>{`${review.valoration}`}</Text>
        <Text fontWeight={"bold"}>Comment</Text>
        <Text>{review.reviewComment}</Text>
        <Spacer />
      </Flex>
    </Flex>
  );
};

export default SingleReviewCard;
