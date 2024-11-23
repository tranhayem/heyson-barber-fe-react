import Container from "@mui/material/Container";

import { barberService } from "~/api/mock/barberData";
import GenericSlider from "~/components/custom/slider/GenericSlider";

function Services() {
  return (
    <Container>
      {barberService.map((service, index) => (
        <GenericSlider
          key={index}
          title={service.service_type_name}
          items={service.service_data}
        />
      ))}
    </Container>
  );
}

export default Services;
