import Container from "@mui/material/Container";

import { barberShop } from "~/api/mock/barberData"; // Nhập dữ liệu từ barberData
import GenericSlider from "~/components/custom/slider/GenericSlider";

function Products() {
  return (
    <Container>
      {barberShop.map((shop, index) => (
        <GenericSlider
          key={index}
          title={shop.product_type_name}
          items={shop.product_data}
        />
      ))}
    </Container>
  );
}

export default Products;
