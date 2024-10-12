import Box from "@mui/material/Box";
import CustomSlider from "~/components/custom/slider/CustomSlider";
import TitleCustom from "../title/TitleCustom";

function GenericSlider({ title, items = [] }) {
  if (
    !items.length ||
    (items.length === 1 && Object.keys(items[0]).length === 0)
  ) {
    return null;
  }

  return (
    <Box sx={{ py: { xs: 2, sm: 4 } }}>
      <TitleCustom title={title} />
      <Box>
        <CustomSlider items={items} />
      </Box>
    </Box>
  );
}

export default GenericSlider;
