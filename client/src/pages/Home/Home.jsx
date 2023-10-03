import React from 'react';
import Search from '/src/components/Home/Search';
import { Box, styled, IconButton, alpha } from "@mui/material";
import { Container } from "@mui/system";

import CategoryGrid from "/src/components/Custom/CategoryGrid";
import ListCalendar from '/src/components/Home/ListCalendar';

const Home = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(2),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "white", minHeight: "80vh" }}>
      <Container>
      <CustomBox
          display= "flex"
          alignItems= "center"
          borderRadius="9px"
          gap="10px"
        >
      <Search />
      </CustomBox>
      <CustomBox>
        <Box>
          <CategoryGrid />
        </Box>
        {/* <Box sx={{ flex: "1" }}>
          <ListCalendar />
        </Box> */}
      </CustomBox>
      </Container>
    </Box>
  )
}

export default Home