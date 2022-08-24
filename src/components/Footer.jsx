import { Stack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <Stack direction={"row"} align="center" justify={"space-between"} bgColor='pink' mt={'auto'} >
      <Image
        boxSize="100px"
        objectFit="cover"
        src="https://media-exp1.licdn.com/dms/image/C560BAQGp306CSTk2yg/company-logo_200_200/0/1586255689376?e=2147483647&v=beta&t=uqldPM3J_8r8Vkg5xdZ0vsou-o3MCjNmgZjzC9nEpk4"
        alt="Dan Abramov"
      />
      <Text fontSize="sm">© 2022 VBook company. All rights reserved</Text>
      <FaInstagramSquare />
    </Stack>
  );
};

export default Footer;
