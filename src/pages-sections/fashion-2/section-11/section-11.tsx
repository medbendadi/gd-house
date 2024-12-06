
import Image from "next/image";
// MUI
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { Carousel } from "components/carousel";
import FlexRowCenter from "components/flex-box/flex-row-center";
// API FUNCTIONS
import api from "utils/__api__/fashion-2";
import Calendar from "components/calendar";
import { Button, Grid, Typography } from "@mui/material";
import { ContentContainer } from "./styles";
export default async function Section11() {



  return (
    <Container className="mt-4">
      <Grid container style={{gap: '25px'}} >
        <Calendar/>
        <Grid item md={3} xs={12}>
          <ContentContainer>
            <div className="demandeContainer">
              <Typography
              variant="h2"
              style={{
                fontFamily: "'__VIOLA_bb2b49', '__VIOLA_Fallback_bb2b49'",
                fontWeight: "300",
                color: 'white',
                textAlign: "center"
              }}>
                DEMANDE DE SOURCING
              </Typography>
              <Typography
              variant="body1"
              >
                Vous rêvez d'un article ? la GD House met à votre disposition son système de sourcing personnalisé. pour nous formuler une demande. veuillez remplir le formulaire suivent:
              </Typography>
              <Button>REMLIR DE FORMULAIRE</Button>
            </div>
            <div className="liveContainer">
            <Typography
              variant="h2"
              style={{
                fontFamily: "'__VIOLA_bb2b49', '__VIOLA_Fallback_bb2b49'",
                fontWeight: "300",
                color: 'white',
                textAlign: "center"
              }}>
                LIVE
              </Typography>
              <Typography
              variant="body1"
              >
                Avec GD House découvrez les derniers produits en direct
              </Typography>
              <Button>REGARDER LE LIVE</Button>
            </div>
          </ContentContainer>
        </Grid>
      </Grid>
    </Container>
  );
}
