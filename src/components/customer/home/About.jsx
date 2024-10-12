import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ReactPlayer from "react-player";

import { about } from "~/api/mock/barberData";
import TitleCustom from "~/components/custom/title/TitleCustom";

const VideoPlayer = ({ url }) => {
  if (url.includes("tiktok.com")) {
    const videoId = url.split("/").pop().split("?")[0];
    return (
      <Box sx={{ pt: "177.78%", position: "relative" }}>
        <iframe
          src={`https://www.tiktok.com/embed/v2/${videoId}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
          title="TikTok video"
          allowFullScreen
        />
      </Box>
    );
  }

  const isFacebook = url.includes("facebook.com");

  return (
    <Box
      sx={{
        overflow: isFacebook ? "hidden" : "visible",
        height: isFacebook ? "100%" : "400px",
      }}
    >
      <ReactPlayer url={url} width="100%" height="100%" controls />
    </Box>
  );
};

function About() {
  return (
    <Box
      sx={{
        py: { xs: 2, sm: 4 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
      }}
    >
      <Box sx={{ flex: 1, height: "100%", width: "100%" }}>
        {about.video_url && <VideoPlayer url={about.video_url} />}
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <TitleCustom title={about.title} />
        <Typography variant="body1">
          {about.content &&
            about.content.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
        </Typography>
      </Box>
    </Box>
  );
}

export default About;
