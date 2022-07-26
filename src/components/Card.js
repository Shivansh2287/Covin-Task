import {
  Heading,
  Avatar,
  Box,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../redux/reducers/userSlice";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getUserDetails = (userid) => {
    dispatch(fetchUser(userid));
    navigate(`/users/${userid}`);
  };
  return (
    <Box
      maxW={"300px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={6}
      textAlign={"center"}
    >
      <Avatar
        size={"xl"}
        src={props.details.avatar}
        alt={"Avatar Alt"}
        mb={4}
        pos={"relative"}
      />
      <Heading fontSize={"2xl"} fontFamily={"body"}>
        {props.details.first_name + " " + props.details.last_name}
      </Heading>
      <Text fontWeight={600} color={"gray.500"} mb={4}>
        {props.details.email}
      </Text>

      <Stack mt={8} direction={"row"} spacing={4}>
        <Button
          onClick={() => getUserDetails(props.details.id)}
          flex={1}
          fontSize={"sm"}
          rounded={"full"}
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
        >
          Know more
        </Button>
      </Stack>
    </Box>
  );
}
