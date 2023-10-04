import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, styled } from "@mui/material";
import { Container } from "@mui/system";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import house from '/src/assets/images/house1.jpg';
import beachHouse from '/src/assets/images/sunnyHome.jpg';

const Dashboard = () => {
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
      >
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color="black" variant="h5">
              Houses
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              display= "flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems= "center"
              gap="50px"
            >
              <Card sx={{ maxWidth: 245 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={house}
                  title="Primary Resident"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Primary Resident
                  </Typography>
                  <Typography variant="h7" color="text.secondary">
                    <p>1600 Imagine Avenue</p>
                    <p>Fairfax, VA 22222-2222</p>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Dashboard</Button>
                </CardActions>
              </Card>

              <Card sx={{ maxWidth: 245 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={beachHouse}
                  title="Beach House"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Beach Resident
                  </Typography>
                  <Typography variant="h7" color="text.secondary">
                    <p>1600 Castro Blvd.</p>
                    <p>Havana, Cuba 1VHE23</p>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Dashboard</Button>
                </CardActions>
              </Card>
            </Box>
          </AccordionDetails>
        </Accordion>
      </CustomBox>
      <CustomBox>
          <p>hi</p>
          <p>hi</p>
      </CustomBox>
    </Container>
  </Box>
  )
}

export default Dashboard;