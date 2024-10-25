import { Box, Button, Input, SimpleGrid, Text, Textarea } from "@chakra-ui/react";

import style from "@/styles/contact.module.css";
import { useState } from "react";
export default function Contact() {

     const [formData, setFormData] = useState({
       name: "",
       phone: "",
       email: "",
       message: "",
     });

     // Handle input change to update the state
     const handleChange = (e) => {
       setFormData({
         ...formData,
         [e.target.name]: e.target.value,
       });
     };

     // Handle form submit
     const handleSubmit = (e) => {
       e.preventDefault();
       // Log the form data to the console
       console.log("Form Data: ", formData);
     };

    return (
      <Box className={style.container}>
        <Box className={style.box}>
          <Box className={style.box1}>
            <Box display={"flex"} flexDirection={"column"} color={"black"}>
              <Box display={"flex"} gap={5} width={"100%"}>
                <Box
                  height={"2px"}
                  width={"8%"}
                  bgColor={"#FFC631"}
                  mt={"10px"}
                ></Box>
                <Text
                  fontFamily={"archivo, sans-serif"}
                  fontSize={"14px"}
                  fontWeight={600}
                  color={"black"}
                >
                  CONTACT US
                </Text>
              </Box>
              <Box>
                <Text
                  fontWeight={700}
                  fontSize={"45px"}
                  color={"black"}
                  width={"80%"}
                >
                  Do You Have any
                  <span style={{ color: "#0DA574" }}> Questions?</span>
                </Text>
              </Box>
            </Box>
            <Box
              as="form"
              w="100%"
              mx="auto"
              mt={8}
              //   p={4}
              //   borderRadius="md"
              onSubmit={handleSubmit}
            >
              <SimpleGrid columns={2} spacing={4} mb={6} gap={6}>
                <Input
                  name="name"
                  placeholder="Name"
                  size="lg"
                  value={formData.name}
                  onChange={handleChange}
                  border={"1px solid #A9A9A9"}
                  borderRadius={0}
                  p={4}
                />
                <Input
                  name="phone"
                  placeholder="Phone"
                  size="lg"
                  value={formData.phone}
                  onChange={handleChange}
                  border={"1px solid #A9A9A9"}
                  borderRadius={0}
                  p={4}
                />
              </SimpleGrid>

              {/* Email Address field */}
              <Input
                name="email"
                placeholder="Email Address"
                size="lg"
                mb={6}
                value={formData.email}
                onChange={handleChange}
                border={"1px solid #A9A9A9"}
                borderRadius={0}
                p={4}
              />

              {/* Message field */}
              <Textarea
                name="message"
                placeholder="Message"
                size="lg"
                mb={6}
                value={formData.message}
                onChange={handleChange}
                border={"1px solid #A9A9A9"}
                borderRadius={0}
                p={4}
              />

              {/* Submit button */}
              <Button
                type="submit"
                size="lg"
                bg="yellow.400"
                color="black"
                _hover={{ bg: "yellow.500" }}
                w="100%"
                borderRadius={0}
              >
                SEND MESSAGE
              </Button>
            </Box>
          </Box>
          <Box className={style.box2}>
            <Box>
              <Text fontWeight={700} fontSize={"30px"}>
                Ready to elevate your vacuum solutions?
              </Text>
            </Box>
            <Box>
              <Text fontWeight={400} fontSize={"14px"} color={"#A9A9A9"}>
                ADDRESS
              </Text>
              <Text fontWeight={500} fontSize={"18px"} >
                No. 57, 8th cross, 1st B cross, Doddanna Industrial Estate,
                Vishwaneedam post, Near Peenya 2nd stage, Bangalore-560091
              </Text>
            </Box>

            <Box>
              <Text fontWeight={400} fontSize={"14px"} color={"#A9A9A9"}>
                EMAIL
              </Text>
              <Text fontWeight={500} fontSize={"18px"} >support@uniquevacuum.co.in</Text>
            </Box>

            <Box>
              <Text fontWeight={400} fontSize={"14px"} color={"#A9A9A9"}>
                PHONE
              </Text>
              <Text fontWeight={500} fontSize={"18px"} >+91 9886726920 <br /> 080 28367059</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    );
}