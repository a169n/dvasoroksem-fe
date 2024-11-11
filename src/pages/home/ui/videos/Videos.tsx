import { useState } from "react";
import { Box, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { styled } from "@mui/material/styles";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import BauerVideo from "@assets/videos/Bauer.MP4";
import BauerVideoPreview from "@assets/videos/BauerPreview.svg";
import QCSVideo from "@assets/videos/QCS.MP4";
import QCSVideoPreview from "@assets/videos/QCSPreview.svg";

const VideoCardContainer = styled(Box)(() => ({
  position: "relative",
  overflow: "hidden",
  borderRadius: "8px",
  backgroundColor: "black",
  width: "100%",
  height: "100%",
  transition: "transform 0.3s ease",
  transform: "scale(1)",
  cursor: "pointer",
  "&.playing": {
    transform: "scale(1.05)",
  },
}));

const VideoPreview = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "filter 0.3s ease",
});

const PlayButton = styled(Box)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%) scale(1)",
  zIndex: 1,
  backgroundColor: "rgba(255, 255, 255, 0.3)",
  borderRadius: "50%",
  width: "60px",
  height: "60px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "transform 0.3s ease, background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    transform: "translate(-50%, -50%) scale(1.1)",
  },
}));

const VideoTitle = styled(Typography)(() => ({
  position: "absolute",
  bottom: "16px",
  left: "16px",
  right: "16px",
  textAlign: "center",
  color: "#fff",
  fontFamily: "Georgia, serif",
  fontSize: "24px",
  fontStyle: "italic",
  fontWeight: 400,
  transition: "opacity 0.3s ease",
  textShadow: "0 2px 4px rgba(0,0,0,0.5)",
}));

const VideoCard = ({ url, title, preview }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => setIsPlaying(!isPlaying);

  return (
    <VideoCardContainer
      className={isPlaying ? "playing" : ""}
      onClick={handlePlayPause}
    >
      <VideoPreview
        src={preview}
        alt="Video Preview"
        style={{
          filter: isPlaying ? "brightness(0)" : "brightness(0.7)",
          opacity: isPlaying ? 0 : 1,
        }}
      />
      {!isPlaying && (
        <PlayButton>
          <PlayArrowIcon fontSize="large" style={{ color: "#fff" }} />
        </PlayButton>
      )}
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        playing={isPlaying}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          opacity: isPlaying ? 1 : undefined,
          transition: "opacity 0.3s ease",
        }}
      />

      <VideoTitle
        style={{
          opacity: isPlaying ? 0 : 1,
          fontWeight: 400,
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
        }}
      >
        {title}
      </VideoTitle>
    </VideoCardContainer>
  );
};

export const Videos = () => {
  const videoData = [
    {
      url: BauerVideo,
      title: "Видеоотзыв от партнера Bauer",
      preview: BauerVideoPreview,
    },
    {
      url: QCSVideo,
      title: "Видеоотзыв от партнера QCS",
      preview: QCSVideoPreview,
    },
  ];

  return (
    <Box
      py={10}
      mb={5}
      sx={{ px: { xs: 2, sm: 4, md: 8 }, py: { xs: 2, sm: 4, md: 8 } }}
    >
      <Box
        display="flex"
        justifyContent="center"
        gap={3}
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        {videoData.map((video, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              height: "auto",
              maxWidth: "370px",
              backgroundColor: "#f7f7f7",
              borderRadius: "16px",
              paddingX: 3,
              paddingY: 4,
              boxShadow: 2,
            }}
          >
            <VideoCard
              url={video.url}
              title={video.title}
              preview={video.preview}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
