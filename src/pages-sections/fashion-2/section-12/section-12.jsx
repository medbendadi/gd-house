import { Container, Grid, Typography } from "@mui/material";
import { ImageContainer } from "./styles";
import Image from "next/image";

export default async function Section11() {
    return(
        <Container className="mt-4">
      <Typography variant="h2" sx={{position: 'relative', mb: "2rem", textAlign: "center", color: 'black' }}
                  style={{
                    fontFamily: "'__VIOLA_bb2b49', '__VIOLA_Fallback_bb2b49'",
                    fontWeight: "300"}}>
        NOTRE HISTIORE
        <div style={{position: 'absolute', width: '60px', height: '3px', background: 'black', left: '50%', transform: 'translateX(-50%)'}}></div>
      </Typography>

      <Grid container style={{gap: '25px'}}>
            <Grid item xs={12} lg={6}>
            <ImageContainer>
                <Image src={"/assets/images/History/history image.png"} fill sizes="(100%, 340px)"/>
            </ImageContainer>
            </Grid>
            <Grid item xs={12} lg={5.5}>
                <Typography sx={{position: 'relative', textAlign: "center", fontSize: '17.1px', color: '#404040' }}>
                    La famille GD, c'est une histiore de famille et de transmission enter des parents entrepreneurs, Anne et Dany, et leurs enfants Lisa et Noa.<br/>
                    En tant que manager dans le luxe pour des maisons comme CHANEL (8 ans), Louis Vuitton (5 ans), Ralph Lauren et FENDI pendant 2 ans j'ai toujours essayé de conjuguer mon amour métier et ma passion pour le vintage et la seconde main.<br/>
                    Nous avons voulu transmettre à nos enfants notre passion pour l'entreprenariat. pout le patrimoine fracais à travers la richesse de nos métiers d'art et d'artisanat ainsi que la possibilité de valriser l'économie circulaire er la seconde main.<br/>
                    C'est pourquoi il m'est apparu évident de créer cette nouvelle entreprise avec ma fille Lisa, car son regard neuf, son sens du style et son approche multi culturelle vont nous permettre d'être plus créatives.<br/>
                    Nous allons vous faire partager notre quotidien au travers de nos voyages pour le sourcing au Japon et, le plus possible, nous mettrons notre expertise au service de vos besoins.<br/>
                    @Ann.GD pour la GD House
                </Typography>
                <Container style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{padding: '0 30px'}}>
                        <Image width={200} height={100} src='/assets/images/History/AnneSig.svg'/>
                        <Typography variant="h2" sx={{position: 'relative', textAlign: "center", color: 'black' }}
                            style={{
                                fontFamily: "'__VIOLA_bb2b49', '__VIOLA_Fallback_bb2b49'",
                                fontWeight: "300"}}>
                            ANNE
                        </Typography>
                        <Typography sx={{position: 'relative', textAlign: "center", fontSize: '17.1px', color: '#404040' }}>
                                        Co-founder
                        </Typography>
                    </div>
                    <div style={{padding: '0 30px'}}>
                        <Image width={200} height={100} src='/assets/images/History/AnneSig.svg'/>
                        <Typography variant="h2" sx={{position: 'relative', textAlign: "center", color: 'black' }}
                            style={{
                                fontFamily: "'__VIOLA_bb2b49', '__VIOLA_Fallback_bb2b49'",
                                fontWeight: "300"}}>
                            LISA
                        </Typography>
                        <Typography sx={{position: 'relative', textAlign: "center", fontSize: '17.1px', color: '#404040' }}>
                                        Co-founder
                        </Typography>
                    </div>
                </Container>
            </Grid>

      </Grid>

    </Container>
    )

}