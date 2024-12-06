import Image from "next/image";
// MUI
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
// GLOBAL CUSTOM COMPONENTS
import { Carousel } from "components/carousel";
import FlexRowCenter from "components/flex-box/flex-row-center";
// API FUNCTIONS
import api from "utils/__api__/fashion-2";

export default async function Section9() {
  const brands = await api.getBrands();

  const responsive = [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 650, settings: { slidesToShow: 2 } },
    { breakpoint: 426, settings: { slidesToShow: 1 } }
  ];

  return (
    <Container className="mt-4">
      <Divider sx={{ mb: 4, borderColor: "grey.200" }} />

      <Carousel autoplay arrows={false} slidesToShow={5} responsive={responsive}>
        {brands.map(({ id, image }) => (
          <FlexRowCenter position="relative" key={id} height={40} margin="auto" width={110}>
            <Image
              fill
              alt="brand"
              src={image}
              style={{ filter: "grayscale(1%)", objectFit: "contain" }}
            />
            {/* <div style={{position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1}}></div> */}
          </FlexRowCenter>
        ))}
      </Carousel>

      <Divider sx={{ mt: 4, borderColor: "grey.200" }} />
    </Container>
  );
}
