import Box from "@mui/material/Box";

import { banners } from "~/api/mock/barberData";
import BannerSlider from "~/components/custom/slider/BannerSilder";

function Banner() {
  return (
    <Box
      sx={{
        py: 2,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <BannerSlider items={banners} />
    </Box>
  );
}

export default Banner;
