import { styled } from "@mui/material/styles";

const StyledLogo = styled("img")(({ theme }) => ({
  height: "80%",
  transition: "filter 0.3s ease",
  "&:hover": {
    filter: `drop-shadow(0 0 10px ${theme.heySonCustom.palette.highlightColor})`,
  },
}));

const Logo = (props) => {
  return (
    <StyledLogo src="/static/favicons/logo.png" alt="HeySon Logo" {...props} />
  );
};

export default Logo;
