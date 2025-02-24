import { Grid2, Container } from "@mui/material";
import ComponentCard from "./ComponentCard";

// Komponent som listar och renderar flera kort baserat på en array av komponenter
const ComponentList = () => {
  const components = [
    { title: "Functional Component", description: "A simple function returning JSX." },
    { title: "Props", description: "Pass data to child components.", image: "https://placehold.co/200x200" },
    { title: "Class Component", description: "An older way to define React components." },
    { title: "State & Hooks", description: "Manage state using useState.", image: "https://placehold.co/250x250" },
    { title: "Functional Component", description: "A simple function returning JSX." },
    { title: "Props", description: "Pass data to child components.", image: "https://placehold.co/200x200" },
    { title: "Class Component", description: "An older way to define React components." },
    { title: "State & Hooks", description: "Manage state using useState.", image: "https://placehold.co/250x250" },
    { title: "Functional Component", description: "A simple function returning JSX." },
    { title: "Props", description: "Pass data to child components.", image: "https://placehold.co/200x200" },
    { title: "Class Component", description: "An older way to define React components." },
    { title: "State & Hooks", description: "Manage state using useState.", image: "https://placehold.co/250x250" },
    { title: "Functional Component", description: "A simple function returning JSX." },
    { title: "Props", description: "Pass data to child components.", image: "https://placehold.co/200x200" },
    { title: "Class Component", description: "An older way to define React components." },
    { title: "State & Hooks", description: "Manage state using useState.", image: "https://placehold.co/250x250" },
    { title: "Functional Component", description: "A simple function returning JSX." },
    { title: "Props", description: "Pass data to child components.", image: "https://placehold.co/200x200" },
    { title: "Class Component", description: "An older way to define React components." },
    { title: "State & Hooks", description: "Manage state using useState.", image: "https://placehold.co/250x250" },
  ];

  return (
    <Container maxWidth={false} sx={{ width: "100vw", minHeight: "100vh", padding: 2 }}>
      <Grid2 container spacing={0} justifyContent="left">
        {components.map((comp, index) => (
          <Grid2 key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
            <ComponentCard {...comp} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default ComponentList;