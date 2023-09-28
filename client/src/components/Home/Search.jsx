import { Box, styled, IconButton, alpha } from "@mui/material";
import { Container } from "@mui/system";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import CustomButton from "/src/components/Custom/CustomButton";


import CategoryGrid from "../Custom/CategoryGrid";

const Search = () => {
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


  const Search = styled('div')(({ theme }) => ({
    border: "1px solid lightgray",
    borderRadius: "3px",
    backgroundColor: "#F9FCFE",
    '&:hover': {
      backgroundColor: "white",  
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: 'auto',
  }));


  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    cursor:"pointer",
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  const SearchButton = styled(Box)(({ theme }) => ({
    cursor:"pointer",
    border:"1px solid lightgray",
    borderRadius:"10%",
    padding: "6px 7px 1px 8px",
    backgroundColor:"#F9FCFE",
    '&:hover': {
      backgroundColor: "white",  
    }
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
          <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <SearchButton>         
            <SearchIcon />
          </SearchButton>
        </CustomBox>
        <CustomBox>
          <Box>
            <CategoryGrid />
          </Box>
          <Box sx={{ flex: "1" }}>

          </Box>

        </CustomBox>
      </Container>
    </Box>
  );
}

export default Search