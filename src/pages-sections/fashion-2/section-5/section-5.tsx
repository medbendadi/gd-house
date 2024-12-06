import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
// LOCAL CUSTOM COMPONENT
import BannerCard1 from "./banner-card-1";
import BannerCard2 from "./banner-card-2";

export default function Section5() {
  return (
    <Container className="mt-4">
      <Grid container spacing={3}>
        {/* FOR MEN'S BANNER CARD */}
        <Grid size={{ md: 4, xs: 12 }}>
          <BannerCard2
            url="#"
            title="PORTFEUILLE"
            contentPosition="left"
            subTitle="A partir de $299"
            img="/assets/images/banners/PORTFEUILLE.png"
          />
        </Grid>

        {/* SALES BANNER CARD */}
        <Grid size={{ md: 4, xs: 12 }}>
          <BannerCard2
            url="#"
            uptext="30%"
            title="BLACK FRIDAY"
            subTitle="Sale"
            img="/assets/images/banners/blackfriday.png"
          />
        </Grid>

        {/* FOR WOMEN'S BANNER CARD */}
        <Grid size={{ md: 4, xs: 12 }}>
        <BannerCard2
            url="#"
            title="CHALE"
            contentPosition="left"
            subTitle="A partir de $299"
            img="/assets/images/banners/chale.png"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
