import { Box, Container, styled, Typography } from "@mui/material";
import logoImg from "/src/assets/images/logo.png";
import starsImg from "/src/assets/images/Star.png";
import logosImg from "/src/assets/images/logos.png";

const Banner = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: theme.spacing(4),
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({

    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
    },
  }));

  return (
    <Box sx={{ mt: 10 }}>
      <CustomContainer>
        <CustomBox>
          <Typography
            sx={{
              color: "#7D8589",
              fontSize: "36px",
              fontWeight: "bold",
              mt: 2,
            }}>
          .Homisma
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#7D8589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            More than 45,000 trust Homisma
          </Typography>
        </CustomBox>

        <Box>
          <img src={starsImg} alt="stars" style={{ maxWidth: "100%", marginTop: 20,}} />
          <Typography
            variant="body2"
            sx={{
              color: "#7D8589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            5-Star Rating (2k+ Reviews)
          </Typography>
        </Box>
      </CustomContainer>
    </Box>
  );
}

export default Banner;