import { ComponentProps, forwardRef } from "react";
import { SxProps, Theme } from "@mui/material/styles";
// MUI ICON COMPONENTS
import ChevronRight from "@mui/icons-material/ChevronRight";
// STYLED COMPONENT
import { RootContainer } from "./styles";

// =================================================================
interface Props extends ComponentProps<"div"> {
  open?: boolean;
  showIcon?: boolean;
  sx?: SxProps<Theme>;
}
// =================================================================

const AccordionHeader = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { showIcon = true, open, children, sx, ...others } = props;

  return (
    <RootContainer ref={ref} open={open} sx={sx} {...others}>
      {children}
      {showIcon && <ChevronRight className="caret" fontSize="small" />}
    </RootContainer>
  );
});

// Explicitly set the displayName
AccordionHeader.displayName = "AccordionHeader";

export default AccordionHeader;
