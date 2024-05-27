import { Box, Container, Flex, Heading, VStack, Text, Input, Textarea, Button, SimpleGrid, Image } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [recipes, setRecipes] = useState([
    {
      title: "Spaghetti Carbonara",
      image: "https://via.placeholder.com/150",
      description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    },
    {
      title: "Chicken Tikka Masala",
      image: "https://via.placeholder.com/150",
      description: "Chunks of roasted marinated chicken in a spiced curry sauce.",
    },
  ]);

  const [newRecipe, setNewRecipe] = useState({
    title: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe({ ...newRecipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecipes([...recipes, newRecipe]);
    setNewRecipe({ title: "", image: "", description: "" });
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="teal.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">Recipe Sharing</Heading>
      </Flex>

      <Box as="section" my={8}>
        <Heading size="md" mb={4}>Featured Recipes</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {recipes.map((recipe, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={recipe.image} alt={recipe.title} />
              <Box p={4}>
                <Heading size="md">{recipe.title}</Heading>
                <Text mt={2}>{recipe.description}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Box as="section" my={8}>
        <Heading size="md" mb={4}>Submit Your Recipe</Heading>
        <Box as="form" onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <Input
              placeholder="Recipe Title"
              name="title"
              value={newRecipe.title}
              onChange={handleChange}
              required
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={newRecipe.image}
              onChange={handleChange}
              required
            />
            <Textarea
              placeholder="Recipe Description"
              name="description"
              value={newRecipe.description}
              onChange={handleChange}
              required
            />
            <Button type="submit" colorScheme="teal" width="full">Submit</Button>
          </VStack>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;