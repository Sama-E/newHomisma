import { Box, styled, IconButton, alpha } from "@mui/material";
import { Container } from "@mui/system";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {

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
    <>
      <Search>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      <SearchButton>         
        <SearchIcon />
      </SearchButton>
    </>

  );
}

export default Search