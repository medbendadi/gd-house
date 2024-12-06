"use client";

import Button from "@mui/material/Button";
// LOCAL CUSTOM COMPONENT
import { RootStyle } from "./styles";

export default function Section7() {
  return (
    <RootStyle>
      <p className="subtitle">
        30% Remise
      </p>

      <h1 className="title" style={{fontFamily: "'__VIOLA_bb2b49', '__VIOLA_Fallback_bb2b49'", fontWeight: "300"}}>BLACK FRIDAY</h1>
      <p className="description">Sur tout nos produits</p>

      <Button variant="contained" size="large" color="dark">
        Decouvrir nos produits
      </Button>
    </RootStyle>
  );
}
