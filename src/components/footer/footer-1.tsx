import { ReactNode } from "react";
// MUI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";

// ==============================================================

interface ChildrenProps {
  children: ReactNode;
}

// Define the type for the Footer1 component and its subcomponents
interface Footer1Component extends React.FC<ChildrenProps> {
  Brand: React.FC<ChildrenProps>;
  Widget1: React.FC<ChildrenProps>;
  Widget2: React.FC<ChildrenProps>;
  Contact: React.FC<ChildrenProps>;
}

// Main Footer1 component
const Footer1: Footer1Component = ({ children }) => {
  return (
    <Box component="footer" bgcolor="#212121" mb={{ sm: 0, xs: 7 }}>
      <Container sx={{ color: "white", overflow: "hidden", py: { sm: 10, xs: 4 } }}>
        <Grid container spacing={3}>
          {children}
        </Grid>
      </Container>
    </Box>
  );
};

// Add displayName for Footer1 component
Footer1.displayName = "Footer1";

// Footer1.Brand Subcomponent
Footer1.Brand = function ({ children }: ChildrenProps) {
  return <Grid size={{ lg: 4, sm: 6, xs: 12 }}>{children}</Grid>;
};

// Add displayName for Brand subcomponent
Footer1.Brand.displayName = "Footer1.Brand";

// Footer1.Widget1 Subcomponent
Footer1.Widget1 = function ({ children }: ChildrenProps) {
  return <Grid size={{ lg: 2, sm: 6, xs: 12 }}>{children}</Grid>;
};

// Add displayName for Widget1 subcomponent
Footer1.Widget1.displayName = "Footer1.Widget1";

// Footer1.Widget2 Subcomponent
Footer1.Widget2 = function ({ children }: ChildrenProps) {
  return <Grid size={{ lg: 3, sm: 6, xs: 12 }}>{children}</Grid>;
};

// Add displayName for Widget2 subcomponent
Footer1.Widget2.displayName = "Footer1.Widget2";

// Footer1.Contact Subcomponent
Footer1.Contact = function ({ children }: ChildrenProps) {
  return <Grid size={{ lg: 3, sm: 6, xs: 12 }}>{children}</Grid>;
};

// Add displayName for Contact subcomponent
Footer1.Contact.displayName = "Footer1.Contact";

export default Footer1;
