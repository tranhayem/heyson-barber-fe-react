import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import barberInfo from "~/api/mock/barberInfo";
import TikTokIcon from "~/components/custom/icons/TikTokIcon";
import Logo from "~/components/custom/logo/Logo";

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "text.secondary" }}>
      {"Copyright © "}
      {new Date().getFullYear()} HeySon Barber. All rights reserved.
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        height: (theme) => theme.heySonCustom.footerHeight,
      }}
    >
      <Divider />

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          py: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            justifyContent: "space-between",
            gap: { xs: 2, sm: 4 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              flex: 1,
            }}
          >
            <Box
              sx={{
                width: { xs: "40%", sm: "80%" },
              }}
            >
              <Link
                href="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  cursor: "pointer",
                }}
              >
                <Logo width="100%" />
              </Link>

              <Stack
                direction="row"
                spacing={1}
                useFlexGap
                sx={{
                  mt: 2,
                  justifyContent: "center",
                  flexWrap: { xs: "none", sm: "wrap" },
                }}
              >
                {barberInfo.social.map(({ social_name, social_url }) => (
                  <IconButton
                    key={social_name}
                    size="small"
                    href={social_url}
                    aria-label={social_name}
                    sx={{
                      alignSelf: "center",
                      "&:hover": {
                        backgroundColor:
                          {
                            Facebook: "#3b5998",
                            Youtube: "#FF0000",
                            Email: "#EA4335",
                            Instagram: "#E4405F",
                            X: "#1DA1F2",
                          }[social_name] || "#000000",
                      },
                    }}
                  >
                    {social_name === "Facebook" && <FacebookIcon />}
                    {social_name === "Youtube" && <YouTubeIcon />}
                    {social_name === "Email" && <EmailIcon />}
                    {social_name === "TikTok" && <TikTokIcon />}
                    {social_name === "Instagram" && <InstagramIcon />}
                    {social_name === "X" && <XIcon />}
                  </IconButton>
                ))}
              </Stack>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              flex: 1,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "x-large",
                fontWeight: "bold",
                color: (theme) => theme.heySonCustom.palette.highlightColor,
                textTransform: "uppercase",
                textAlign: "center",
                "&:hover": {
                  filter: (theme) =>
                    `drop-shadow(0 0 10px ${theme.heySonCustom.palette.highlightColor})`,
                },
              }}
            >
              {barberInfo.barber_name}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                fontSize: "medium",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              {barberInfo.barber_description}
            </Typography>

            <Stack direction="row" spacing={1} alignItems="center">
              <LocationOnIcon fontSize="small" />

              <Typography variant="body2" color="text.secondary">
                {barberInfo.barber_address}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <PhoneIcon fontSize="small" />

              <Typography variant="body2" color="text.secondary">
                {barberInfo.barber_phone}
              </Typography>
            </Stack>
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "row",
              justifyContent: "space-evenly",
              gap: 4,
              flex: 1,
            }}
          >
            {["Dịch vụ", "HeySon Shop"].map((title, index) => (
              <Box
                key={title}
                sx={{ display: "flex", flexDirection: "column", gap: 1 }}
              >
                <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                  {title}
                </Typography>

                {title === "Dịch vụ" &&
                  barberInfo.services.map(({ service_name, url }) => (
                    <Link
                      key={service_name}
                      color="text.secondary"
                      variant="body2"
                      href={url}
                    >
                      {service_name}
                    </Link>
                  ))}

                {title === "HeySon Shop" &&
                  barberInfo.products.map(({ product_name, url }) => (
                    <Link
                      key={product_name}
                      color="text.secondary"
                      variant="body2"
                      href={url}
                    >
                      {product_name}
                    </Link>
                  ))}
              </Box>
            ))}
          </Box>
        </Box>

        <Divider width="100%" />

        <Copyright />
      </Container>
    </Box>
  );
}
