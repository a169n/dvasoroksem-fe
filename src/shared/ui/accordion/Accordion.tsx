import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export const MyAccordion = ({ title, defaultOpen = true, children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Accordion
      defaultExpanded={defaultOpen}
      sx={{
        boxShadow: "none",
        border: "none",
        "& .MuiAccordionSummary-content": {
          margin: { xs: "12px 0", sm: "14px 0", md: "16px 0" },
        },
      }}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon
            sx={{
              fontSize: {
                xs: "20px",
                sm: "24px",
                md: "28px",
              },
            }}
          />
        }
        sx={{
          backgroundColor: "#f7f7f7",
          borderLeft: {
            xs: "3px solid black",
            sm: "4px solid black",
            md: "5px solid black",
          },
          minHeight: {
            xs: "48px",
            sm: "56px",
            md: "64px",
          },
          "& .MuiAccordionSummary-content": {
            margin: 0,
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            flexGrow: 1,
            textAlign: "left",
            fontSize: {
              xs: "18px",
              sm: "22px",
              md: "26px",
            },
            fontWeight: {
              xs: 500,
              md: 400,
            },
            lineHeight: {
              xs: "22px",
              sm: "26px",
              md: "30px",
            },
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: "transparent",
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 1.5, sm: 2, md: 2.5 },
        }}
      >
        {isMobile ? (
          <Typography component="div">{children}</Typography>
        ) : (
          children
        )}
      </AccordionDetails>
    </Accordion>
  );
};
