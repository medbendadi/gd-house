import { Container, Typography } from "@mui/material";
import { Content } from "./styles";

export default async function Section11() {
    return(
        <Container className="mt-5 mb-5">
            <Content>
                <Typography variant="h1" sx={{position: 'relative', textAlign: "center", color: 'black' }}
                    style={{
                        fontFamily: "'__VIOLA_bb2b49', '__VIOLA_Fallback_bb2b49'",
                        fontWeight: "300"}}>
                    ABONNEZ-VOUS À NOTRE NEWLETTER
                </Typography>
                <Typography sx={{textAlign: "center", fontSize: '17px', color: '#8a8a8a', maxWidth: '800px' }}>
                        Abonnez-vous à notre newsletter et recevez en avant-première les drenières nouvelles, offeres  exclusives et conseils précieux directement dans votre boîte de rèception
                </Typography>
                <div className="inputContainer">
                    <input type="email" placeholder="VOTRE EMAIL" />
                    <button type="submit">ABONNER</button>
                </div>
                <Typography sx={{textAlign: "center", fontWeight: '500',color: '#8a8a8a', maxWidth: '500px' }}>
                        En cliquant sur le boutton S'ABONNER, vous acceptez notre <span>Politique de confidentialité et de cookies</span>
                </Typography>
            </Content>
        </Container>
    )
}