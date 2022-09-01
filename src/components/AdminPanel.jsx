import React from "react";

import AdminBooks from "./AdminBooks";
import  AdminGenres  from "./AdminGenres";
import AdminUsers from "./AdminUsers";
import AdminOrders from "./AdminOrders";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  useColorModeValue,

} from "@chakra-ui/react";

const AdminPanel = () => {
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
      maxWidth="fit-content"
      minW={'70%'}
      m={"auto"}
    >
      <Tabs isFitted variant="enclosed" minW={'100%'}>
        <TabList mb="1em">
          <Tab>Users</Tab>
          <Tab>Genres</Tab>
          <Tab>Books</Tab>
          <Tab>Orders</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <AdminUsers />
          </TabPanel>
          <TabPanel>
            <AdminGenres />
          </TabPanel>
          <TabPanel>
            <AdminBooks />
          </TabPanel>
          <TabPanel>
            <AdminOrders />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default AdminPanel;
