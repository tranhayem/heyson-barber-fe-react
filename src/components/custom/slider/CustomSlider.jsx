import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useCallback, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function CustomSlider({ items }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = useCallback((index) => setHoveredIndex(index), []);
  const handleMouseLeave = useCallback(() => setHoveredIndex(null), []);

  return (
    <Box>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={8000}
      >
        {items &&
          items.map((item, index) => (
            <Box key={index} sx={{ p: 1 }}>
              <Card
                sx={{
                  width: "100%",
                  border: "2px solid",
                  borderColor: (theme) =>
                    theme.heySonCustom.palette.highlightColor,
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <CardMedia
                  image={item.image_url}
                  title={item.name ? item.name : "HeySon Barber"}
                  sx={{ height: "200px", objectFit: "cover" }}
                />
                {(item.name ||
                  item.nickname ||
                  item.description ||
                  item.price) && (
                  <CardContent
                    sx={{
                      p: "12px !important",
                      backgroundColor: "#F8EFBA",
                      color: "black",
                      borderTop: "2px solid",
                      borderColor: (theme) =>
                        theme.heySonCustom.palette.highlightColor,
                    }}
                  >
                    {item.name && !item.price && (
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: "medium",
                          fontWeight: "bold",
                          color: (theme) =>
                            hoveredIndex === index
                              ? theme.heySonCustom.palette.highlightColor
                              : "inherit",
                        }}
                      >
                        {item.name}
                      </Typography>
                    )}

                    {item.nickname && (
                      <Typography
                        sx={{ textAlign: "center", fontWeight: "bold" }}
                      >
                        {item.nickname}
                      </Typography>
                    )}

                    {item.description && (
                      <Typography>{item.description}</Typography>
                    )}

                    {item.name && item.price && (
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          color: (theme) =>
                            hoveredIndex === index
                              ? theme.heySonCustom.palette.highlightColor
                              : "inherit",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "medium",
                            fontWeight: "bold",
                            flex: 3,
                          }}
                        >
                          {item.name}
                        </Typography>

                        <Typography
                          sx={{
                            fontSize: "medium",
                            fontWeight: "bold",
                            flex: 1,
                            textAlign: "right",

                            color: (theme) =>
                              theme.heySonCustom.palette.highlightColor,
                          }}
                        >
                          {item.price}
                        </Typography>
                      </Box>
                    )}
                  </CardContent>
                )}
              </Card>
            </Box>
          ))}
      </Carousel>
    </Box>
  );
}

export default CustomSlider;
