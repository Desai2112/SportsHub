import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const Premises = () => {
  const premises = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dgvslio7u/image/upload/v1719653121/Odoo%20Hackathone/dakh0hqbsis1uz6q663z.jpg",
      title: "Premises 1",
      location: "Indoor Sports Complex",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dgvslio7u/image/upload/v1719653121/Odoo%20Hackathone/ilqu110hqvrc43lw0gbd.jpg",
      title: "Premises 2",
      location: "Magic Field Turf",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dgvslio7u/image/upload/v1719653121/Odoo%20Hackathone/huhtuxdydt6uchkbyw2u.jpg",
      title: "Premises 3",
      location: "KickStart FC",
    },
  ];

  return (
    <>
      <Box
        id="premises"
        bg={useColorModeValue("gray.800", "gray.900")}
        py={16}
        px={8}
        mb-10
      >
        <Box textAlign="center" mb={12}>
          <Text fontSize="4xl" fontWeight="bold" color="white" mb={4}>
            Our Premises
          </Text>
          <Text fontSize="lg" color="whiteAlpha.800">
            Explore our top-notch sports facilities
          </Text>
        </Box>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          {premises.map((premise) => (
            <GridItem
              key={premise.id}
              as={motion.div}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              overflow="hidden"
              borderRadius="md"
              boxShadow="xl"
              position="relative"
              transform="translateY(0)"
              _hover={{ transform: "translateY(-5px)" }}
            >
              <Image
                src={premise.image}
                alt={premise.title}
                height="300px"
                width="100%"
                objectFit="cover"
                as={motion.img}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="rgba(0,0,0,0.6)"
                color="white"
                display="flex"
                alignItems="center"
                justifyContent="center"
                opacity={0}
                as={motion.div}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Text fontWeight="bold" fontSize="xl">
                  {premise.location}
                </Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Premises;
