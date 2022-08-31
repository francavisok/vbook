import React, { useState } from "react";
import { Image, Text, Spacer, Icon, Tooltip } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Flex,
  Button,
  Select,
  RadioGroup,
  Stack,
  Radio,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";

import { useForm, Controller } from "react-hook-form";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

import { getUsers } from "../state/users";
import { deleteUser } from "../state/userAdminActions";
import { promoteUser } from "../state/userAdminActions";
import { demoteUser } from "../state/userAdminActions";

const AdminUserItem = ({ user }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  //estado para manejar el valor de radio input
  //const [value, setValue] = React.useState("1");

  //delete user action
  async function handleDeleteClick(userId) {
    await dispatch(deleteUser(userId));
    dispatch(getUsers());
  }

  //modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  //form controll

  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(values) {
    console.log("values", values);
    if (values.role === "admin") {
      await dispatch(promoteUser(user.id));
    } else {
      await dispatch(demoteUser(user.id));
    }
    dispatch(getUsers());
    onClose();
  }

  return (
    <Flex width={"100%"} my="10px">
      <Text ml={"30px"}>{`${user.name} ${user.lastname} (${user.role})`}</Text>

      <Spacer />
      <Tooltip
        label="Edit user"
        bg="white"
        placement={"top"}
        color={"gray.800"}
        fontSize={"1.2em"}
      >
        <span>
          <Icon as={FaEdit} _hover={{ color: "blue" }} onClick={onOpen} />
        </span>
      </Tooltip>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit user</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody pb={6}>
              <FormControl id="role">
                <FormLabel>Set new role</FormLabel>
                <Controller
                  name="role"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup {...field}>
                      <Stack direction="row">
                        {user.role === "admin" ? (
                          <Radio value="user">User</Radio>
                        ) : (
                          <Radio value="admin">Admin</Radio>
                        )}
                      </Stack>
                    </RadioGroup>
                  )}
                />
              </FormControl>

              <Flex mt={7} justify={"end"}>
                <Button
                  colorScheme="blue"
                  mr={3}
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </Flex>
            </ModalBody>
          </form>
        </ModalContent>
      </Modal>

      <Tooltip
        label="Delete user"
        bg="white"
        placement={"top"}
        color={"gray.800"}
        fontSize={"1.2em"}
      >
        <span>
          <Icon
            as={FaTrashAlt}
            ml="20px"
            _hover={{ color: "red" }}
            onClick={() => handleDeleteClick(user.id)}
          />
        </span>
      </Tooltip>
    </Flex>
  );
};

export default AdminUserItem;
