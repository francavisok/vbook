import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getUsers } from "../state/users";

import AdminUserItem from "../commons/AdminUserItem";


import {
  Flex,
} from "@chakra-ui/react";

 const AdminUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

   useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]); 

/*   //modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  //form controll

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(values) {
    console.log('valuesss', values)
    await dispatch(addGenre(values));
    dispatch(getGenres()); 
    onClose();
  } */

  return (
    <Flex direction={"column"}>
      {/* <Button mb={"40px"} onClick={onOpen}>
        Add new genre
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new genre</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody pb={6}>

              <FormControl isInvalid={errors.genreName}>
                <FormLabel htmlFor="genreName">Genre name</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Genre name"
                  id="genreName"
                  {...register("genreName", {
                    required: "This is required",
                  })}
                />
                <FormErrorMessage>
                  {errors.genreName && errors.genreName.message}
                </FormErrorMessage>
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
 */}
      <Flex direction={"column"}>
        {users.map((user) => (
          <AdminUserItem user={user} key={user.id} />
        ))}
      </Flex>
    </Flex>
  );
};

export default AdminUsers