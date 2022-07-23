import {
  Heading,
  Avatar,
  Box,
  Text,
  useColorModeValue,
  Button,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function SingleUser(props) {
  const navigate = useNavigate();
  return (
    <Stack direction="column">
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
      </Box>
      <Button onClick={() => navigate("/")}>Go back</Button>
    </Stack>
  );
}
