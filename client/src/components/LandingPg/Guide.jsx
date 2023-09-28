import { Box, Button, styled, Typography } from "@mui/material";

import buyIcon from "/src/assets/images/buy_icon.png";
import sellIcon from "/src/assets/images/sell_icon.png";
import rentIcon from "/src/assets/images/rent_icon.png";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CustomButton from "/src/components/Custom/CustomButton";

const Guide = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "5%",
          height: "1px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></div>

      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        How it works?
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "center",
          }}
        >
          Everything you need to know when you want to maintain your home - All
          in one place
        </Typography>
      </CustomBox>

      <GuidesBox>
        <GuideBox>
          <img src={buyIcon} alt="buyIcon" />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Maintenance
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
              Materials and Services
            </Typography>
            <ArrowRightAltIcon style={{ color: "#0689FF" }} />
          </Box>
        </GuideBox>

        <GuideBox>
          <img src={sellIcon} alt="buyIcon" />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Tracker
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
              Track Gains and Disbursements
            </Typography>
            <ArrowRightAltIcon style={{ color: "#0689FF" }} />
          </Box>
        </GuideBox>
      </GuidesBox>
      <div
        style={{
          width: "5%",
          height: "1px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></div>
    </Box>
  );
}

export default Guide;