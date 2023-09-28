import { Button, styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import homeIllustration from "/src/assets/images/illustration.png";
import CustomButton from "/src/components/Custom/CustomButton";

const GetStarted = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#E6F0FF",
    height: "416px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3, 3, 0, 3),
      width: "90%",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0, 10, 0),
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  }));

  return (
    <CustomBox>
      <CustomContainer>
        <Box>
          <Typography
            sx={{ fontSize: "35px", color: "#17275F", fontWeight: "700" }}
          >
            Updating Features
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "#17275F", fontWeight: "500", my: 3 }}
          >
            Everything you need to know your home!
          </Typography>

          <CustomButton
            backgroundColor="#0F1B4C"
            color="#fff"
            buttonText="Get Started Now"
            getStartedBtn={true}
          />
        </Box>

        <img
          src={homeIllustration}
          alt="illustration"
          style={{ maxWidth: "100%" }}
        />
      </CustomContainer>
    </CustomBox>
  );
}

export default GetStarted