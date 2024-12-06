import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LazyImage from "components/LazyImage";
// GLOBAL CUSTOM COMPONENTS
import { Carousel } from "components/carousel";
import CarouselCard1 from "components/carousel-cards/carousel-card-1";
import Image from "next/image";
// API FUNCTIONS
import api from "utils/__api__/fashion-2";

// import awesomeVideo from '/videos/83861-584870632_small.mp4';

export default async function Section1() {
  const carouselData = await api.getMainCarouselData();

  return (
    <Box bgcolor="grey.100" mb={7.5}>
      <Container className="" style={{paddingInline: '0px', height: "600px"}}>

      <div style={{ position: "relative", width: "100%", height: "600px" }}>
        <h2 style={{position: 'absolute', zIndex: '99',top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '7rem', width: '100%', textAlign: 'center'}}>Wlecom Home</h2> 
        <div style={{position: 'absolute', top: '0', bottom: '0', right: '0', left: '0', background: 'rgba(0,0,0,0.43'}}></div>
  <video loop muted autoPlay style={{width: "100%", height: "600px", objectFit: "cover"}}>
    <source sizes="(max-width: 768px) 100%, 100%" src="/assets/videos/3626-172488383_small.mp4"/>
  </video>
</div>
        {/* <Carousel dots spaceBetween={0} slidesToShow={1} arrows={false}>
          {carouselData.map((item, ind) => (
            <CarouselCard1
              key={ind}
              buttonColor="dark"
              title={item.title}
              imgUrl={item.imgUrl}
              buttonLink={item.buttonLik}
              buttonText={item.buttonText}
              description={item.description}
            />
          ))}
        </Carousel> */}
      </Container>
    </Box>
  );
}
