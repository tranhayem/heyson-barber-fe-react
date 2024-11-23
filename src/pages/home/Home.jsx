import { Box, Container } from "@mui/material";
import {
  About,
  Banner,
  BarberList,
  ProductTypeList,
  ServiceTypeList,
  AchievementList,
  CustomerList,
} from "~/components/home";

const components = [
  Banner,
  About,
  ServiceTypeList,
  ProductTypeList,
  BarberList,
  AchievementList,
  CustomerList,
];

function Home() {
  return (
    <Container>
      {components.map((Component, index) => (
        <Box key={index}>
          <Component />
        </Box>
      ))}
    </Container>
  );
}

export default Home;
