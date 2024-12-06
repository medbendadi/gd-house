import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { VIOLA } from "app/layout";
// GLOBAL CUSTOM COMPONENTS
import { Carousel } from "components/carousel";
import ProductCard8 from "components/product-cards/product-card-8";
// API FUNCTIONS
import api from "utils/__api__/fashion-2";

export default async function Section6() {
  const products = await api.getFeatureProducts();

  const responsive = [
    { breakpoint: 1200, settings: { slidesToShow: 4 } },
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 650, settings: { slidesToShow: 2 } },
    { breakpoint: 426, settings: { slidesToShow: 1 } }
  ];

  return (
    <Container className={`mt-4`}>
      <Typography variant="h2" style={{fontFamily: "'__VIOLA_bb2b49', '__VIOLA_Fallback_bb2b49'", fontWeight: "300", color: 'rgb(74 74 74)'}} className={VIOLA.className} sx={{ textAlign: "center", mb: "2rem" }}>
      PRODUITS DU DERNIER LIVE
        <div style={{position: 'absolute', width: '60px', height: '3px', background: 'black', left: '50%', transform: 'translateX(-50%)'}}></div>

      </Typography>

      <Carousel
        slidesToShow={5}
        responsive={responsive}
        arrowStyles={{ backgroundColor: "dark.main", top: "34%" }}>
        {products.map((product) => (
          <ProductCard8 key={product.id} product={product} />
        ))}
      </Carousel>
    </Container>
  );
}
