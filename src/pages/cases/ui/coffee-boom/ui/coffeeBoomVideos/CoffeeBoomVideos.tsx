import ReactPlayer from "react-player";
import { Box } from "@mui/material";
import { useInView } from "react-intersection-observer";

// Import video files
import coffeboomTikTok1 from "@assets/videos/coffeeBoom/coffeeboom_tiktok_1.mp4";
import coffeboomTikTok2 from "@assets/videos/coffeeBoom/coffeeboom_tiktok_2.mp4";
import coffeboomTikTok3 from "@assets/videos/coffeeBoom/coffeeboom_tiktok_3.mp4";
import coffeboomTikTok4 from "@assets/videos/coffeeBoom/coffeeboom_tiktok_4.mp4";
import coffeboomTikTok5 from "@assets/videos/coffeeBoom/coffeeboom_tiktok_5.mp4";
import coffeboomTikTok6 from "@assets/videos/coffeeBoom/coffeeboom_tiktok_6.mp4";

// Video Card component with lazy-load behavior
const VideoCard = ({ src }: { src: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Load only once when in view
    threshold: 0.2, // Trigger when 20% of the video card is visible
  });

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      {inView && (
        <ReactPlayer
          url={src}
          controls
          width={"307px"}
          height="546px"
          style={{
            borderRadius: "8px",
            overflow: "hidden",
            objectFit: "cover",
          }}
          config={{
            file: {
              attributes: {
                controlsList: "nodownload noremoteplayback",
                disablePictureInPicture: true,
              },
            },
          }}
        />
      )}
    </div>
  );
};

export const CoffeeBoomVideos = () => {
  const videos = [
    coffeboomTikTok1,
    coffeboomTikTok2,
    coffeboomTikTok3,
    coffeboomTikTok4,
    coffeboomTikTok5,
    coffeboomTikTok6,
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
        gridGap: "20px",
        justifyContent: "center",
        px: { xs: 2, sm: 4, md: 8 },
        backgroundColor: "#161616",
        padding: "20px 0",
      }}
    >
      {videos.map((video, index) => (
        <VideoCard key={index} src={video} />
      ))}
    </Box>
  );
};
