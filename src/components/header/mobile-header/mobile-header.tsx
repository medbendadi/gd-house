"use client";

import Link from "next/link";
import Image from "next/image";
import { PropsWithChildren } from "react";
import Box from "@mui/material/Box";
// GLOBAL CUSTOM COMPONENTS
import { FlexBetween, FlexBox } from "components/flex-box";

// Define MobileHeader with displayName support
const MobileHeader = ({ children }: PropsWithChildren) => {
  return <FlexBetween width="100%">{children}</FlexBetween>;
};

// Assign displayName for the main component
MobileHeader.displayName = "MobileHeader";

// Subcomponents

const Left = ({ children }: PropsWithChildren) => {
  return <Box flex={1}>{children}</Box>;
};

// Assign displayName for Left sub-component
Left.displayName = "MobileHeader.Left";

// Define Logo component
const Logo = ({ logoUrl }: { logoUrl: string }) => {
  return (
    <Link href="/">
      <Image width={60} height={44} src={logoUrl} alt="logo" />
    </Link>
  );
};

// Assign displayName for Logo sub-component
Logo.displayName = "MobileHeader.Logo";

// Define Right component
const Right = ({ children }: PropsWithChildren) => {
  return (
    <FlexBox justifyContent="end" flex={1}>
      {children}
    </FlexBox>
  );
};

// Assign displayName for Right sub-component
Right.displayName = "MobileHeader.Right";

// Attach subcomponents to MobileHeader
MobileHeader.Left = Left;
MobileHeader.Logo = Logo;
MobileHeader.Right = Right;

export default MobileHeader;
