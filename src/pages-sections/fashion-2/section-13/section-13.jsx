import { Container, Typography } from "@mui/material";
import Image from "next/image";
import { FeaturedItem } from "./styles";

export default async function Section11() {
    return(
        <Container className="mt-5">
            <FeaturedItem>
                <div>
                    <Image width={60} height={60} src="/assets/images/features/Frame.svg"/>
                    <Typography variant="h3" sx={{color: '#595959' }}
                    style={{
                        fontFamily: "'__VIOLA_bb2b49', '__VIOLA_Fallback_bb2b49'",
                        fontWeight: "300"}}>
                    PROCESSUS <br/>D'AUTHENTICITE
                </Typography>
                </div>
                <div>
                    <Image width={60} height={60} src="/assets/images/features/Frame-1.svg"/>
                    <Typography variant="h3" sx={{color: '#595959' }}
                    style={{
                        fontFamily: "'__VIOLA_bb2b49', '__VIOLA_Fallback_bb2b49'",
                        fontWeight: "300"}}>
                    EXPERIENCE DE ANNE <br/>20 ANS EN MAISON DE LUXE
                </Typography>
                </div>
                <div>
                    <Image width={60} height={60} src="/assets/images/features/Frame-2.svg"/>
                    <Typography variant="h3" sx={{color: '#595959' }}
                    style={{
                        fontFamily: "'__VIOLA_bb2b49', '__VIOLA_Fallback_bb2b49'",
                        fontWeight: "300"}}>
                    SOUECING EXCLUSIVEMENT <br/>EN PROVENANCE DU JAPON
                </Typography>
                </div>
                <div>
                    <Image width={60} height={60} src="/assets/images/features/Frame-3.svg"/>
                    <Typography variant="h3" sx={{color: '#595959' }}
                    style={{
                        fontFamily: "'__VIOLA_bb2b49', '__VIOLA_Fallback_bb2b49'",
                        fontWeight: "300"}}>
                    ECONOMIE <br/>CIRCULAIRE
                </Typography>
                </div>
            </FeaturedItem>
        </Container>
    )
}