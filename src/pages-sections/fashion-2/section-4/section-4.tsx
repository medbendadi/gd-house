import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// GLOBAL CUSTOM COMPONENTS
import { Carousel } from "components/carousel";
import ProductCard8 from "components/product-cards/product-card-8";
// API FUNCTIONS
import api from "utils/__api__/fashion-2";

export default async function Section4() {
  const products = await api.getProducts();

  const responsive = [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 650, settings: { slidesToShow: 2 } },
    { breakpoint: 426, settings: { slidesToShow: 1 } }
  ];

  return (
    <Container className="mt-4">
      <Typography variant="h2" sx={{position: 'relative', mb: "2rem", textAlign: "center" }}>
        PRODUITS DU DERNIER LIVE
        <div style={{position: 'absolute', width: '60px', height: '3px', background: 'black', left: '50%', transform: 'translateX(-50%)'}}></div>
      </Typography>

      <Carousel
        slidesToShow={4}
        responsive={responsive}
        arrowStyles={{ backgroundColor: "dark.main", top: "37%" }}>
        {products.map((product) => (
          <ProductCard8 key={product.id} product={product} />
        ))}
      </Carousel>
    </Container>
  );
}
