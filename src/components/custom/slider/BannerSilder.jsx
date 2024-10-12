import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

function BannerSlider({ items }) {
  return (
    <Box>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={8000}
        showDots={true}
        dotListClass="custom-dot-list-style"
      >
        {items &&
          items.map((item, index) => (
            <Card key={index}>
              <CardMedia
                image={item.image_url}
                title={item.name}
                sx={{
                  height: { xs: "40vh", sm: "60vh" },
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </Card>
          ))}
      </Carousel>
    </Box>
  );
}

export default BannerSlider;
