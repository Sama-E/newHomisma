import { Box, styled, Typography, Stack} from "@mui/material";

import carpet from "/src/assets/images/png/carpet.png";
import electrical from "/src/assets/images/png/electrical.png";
import fences from "/src/assets/images/png/fences.png";
import household from "/src/assets/images/png/household.png";
import hvac from "/src/assets/images/png/hvac.png";
import man from "/src/assets/images/png/man.png";
import paint from "/src/assets/images/png/paint.png";
import plumbing from "/src/assets/images/png/plumbing.png";
import roof from "/src/assets/images/png/roof.png";
import siding from "/src/assets/images/png/siding.png";

const CategoryGrid = () => {

  const CategoryButton = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    color: "gray",
    backgroundColor: "white",
    border: "2px solid lightgray",
    borderRadius: "8px",
    width: "90px",
    height: "90px",
    "&:hover": {
      backgroundColor: "#F9FCFE",
      color: "gray",
      borderColor: "white",
      cursor:"pointer"
    }
  }));

  return (
    <Box sx={{ width: 400 }}>
      <Stack 
        spacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
        direction="row"
        alignItems="center"
        justifyContent="space-evenly"
        useFlexGap 
        flexWrap="wrap"
        marginTop= "50px"
        padding="30px"
      >
        <CategoryButton>
          <img 
            src={electrical}
            style={{ maxWidth: "35%" }} 
          />
          <Typography sx={{ fontSize: 14 }}> Electrical </Typography>
        </CategoryButton>
        <CategoryButton>
          <img 
            src={fences}
            style={{ maxWidth: "35%" }} 
          />
          <Typography sx={{ fontSize: 14 }}> Landscaping </Typography>
        </CategoryButton>
        <CategoryButton>
          <img 
            src={household}
            style={{ maxWidth: "35%" }} 
          />
          <Typography sx={{ fontSize: 14 }}> Cleaning </Typography>
        </CategoryButton>
        <CategoryButton>
          <img 
            src={hvac}
            style={{ maxWidth: "35%" }} 
          />
          <Typography sx={{ fontSize: 14 }}> HVAC </Typography>
        </CategoryButton>
        <CategoryButton>
          <img 
            src={man}
            style={{ maxWidth: "35%" }} 
          />
          <Typography sx={{ fontSize: 14 }}> Handyman </Typography>
        </CategoryButton>
        <CategoryButton>
          <img 
            src={paint}
            style={{ maxWidth: "35%" }} 
          />
          <Typography sx={{ fontSize: 14 }}> Painting </Typography>
        </CategoryButton>
        <CategoryButton>
          <img 
            src={plumbing}
            style={{ maxWidth: "35%" }} 
          />
          <Typography sx={{ fontSize: 14 }}> Plumbing </Typography>
        </CategoryButton>
        <CategoryButton>
          <img 
            src={roof}
            style={{ maxWidth: "35%" }} 
          />
          <Typography sx={{ fontSize: 14 }}> Roofing </Typography>
        </CategoryButton>
        <CategoryButton>
          <img 
            src={siding}
            style={{ maxWidth: "35%" }} 
          />
          <Typography sx={{ fontSize: 12 }}> Siding </Typography>
        </CategoryButton>
      </Stack>
    </Box>
  )
}

export default CategoryGrid;