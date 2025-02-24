import { Grid2, Container } from "@mui/material";
import ComponentCard from "./ComponentCard";

// Komponent som listar och renderar flera kort baserat på en array av komponenter
const ComponentList = () => {
  const components = [
    { title: "Functional Component", description: "A simple function returning JSX." },
    { title: "Props", description: "Pass data to child components.", image: "https://placehold.co/200x200" },
    { title: "Class Component", description: "An older way to define React components." },
    { title: "State & Hooks", description: "Manage state using useState.", image: "https://placehold.co/250x250" },
  ];

  return (
    <Container sx={{ mt: 4 }}> {/* Container för att centrera och ge marginaler */}
      <Grid2 container spacing={1}> {/* Grid-layout för responsivitet och spacing */}
        {components.map((comp, index) => (
          <Grid2 item key={index} xs={12} sm={6} md={4}> {/* Responsiv kolumnstorlek */}
            <ComponentCard {...comp} /> {/* Renderar varje komponent som ett kort */}
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default ComponentList;