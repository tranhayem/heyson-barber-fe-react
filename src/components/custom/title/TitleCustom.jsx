import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function TitleCustom({ title }) {
  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "center",
        mb: { xs: 2, sm: 4 },
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          top: "50%",
          width: "100%",
          height: "1px",
          backgroundColor: (theme) => theme.heySonCustom.palette.highlightColor,
        },
        "&::before": {
          left: 0,
        },
        "&::after": {
          right: 0,
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          display: "inline-block",
          p: "12px 40px",
          backgroundColor: (theme) => theme.heySonCustom.palette.highlightColor,
          position: "relative",
          zIndex: 1,

          fontWeight: "bold",
          clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "2px",
            left: "2px",
            right: "2px",
            bottom: "2px",
            backgroundColor: (theme) => theme.palette.background.default,
            clipPath: "inherit",
            zIndex: -1,
          },
          "& span": {
            position: "relative",
            zIndex: 2,
          },
        }}
      >
        <span>{title}</span>
      </Typography>
    </Box>
  );
}

export default TitleCustom;
