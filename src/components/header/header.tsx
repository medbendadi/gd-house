"use client";

import Link from "next/link";
import { PropsWithChildren, ReactNode } from "react";
import clsx from "clsx";
// GLOBAL CUSTOM COMPONENTS
import LazyImage from "components/LazyImage";
import FlexBox from "components/flex-box/flex-box";
// LOCAL CUSTOM COMPONENT
import HeaderCategoryDropdown from "./header-category-dropdown";
// STYLED COMPONENTS
import { HeaderWrapper, StyledContainer } from "./styles";

// ==============================================================

interface Props {
  className?: string;
  children?: ReactNode;
  mobileHeader: ReactNode;
}

// Define the type for the subcomponents (Logo, Left, CategoryDropdown, etc.)
interface HeaderComponent extends React.FC<Props> {
  Left: React.FC<PropsWithChildren>;
  Logo: React.FC<{ url: string }>;
  CategoryDropdown: React.FC<PropsWithChildren>;
  Mid: React.FC<PropsWithChildren>;
  Right: React.FC<PropsWithChildren>;
}

// Main Header component with React.FC type
const Header: HeaderComponent = ({ className, children, mobileHeader }) => {
  return (
    <HeaderWrapper className={clsx(className)}>
      <StyledContainer>
        <div className="main-header">{children}</div>
        <div className="mobile-header">{mobileHeader}</div>
      </StyledContainer>
    </HeaderWrapper>
  );
};

// Add displayName for Header component
Header.displayName = "Header";

// Header Left Subcomponent
const HeaderLeft: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <FlexBox minWidth={100} alignItems="center">
      {children}
    </FlexBox>
  );
};

// Add displayName for HeaderLeft subcomponent
HeaderLeft.displayName = "Header.Left";

// Header Logo Subcomponent
Header.Logo = ({ url }: { url: string }) => {
  return (
    <HeaderLeft>
      <Link href="/">
        <LazyImage src={url} alt="logo" width={105} height={50} />
      </Link>
    </HeaderLeft>
  );
};

// Add displayName for Logo subcomponent
Header.Logo.displayName = "Header.Logo";

// Header CategoryDropdown Subcomponent
Header.CategoryDropdown = ({ children }: PropsWithChildren) => {
  return (
    <HeaderLeft>
      <HeaderCategoryDropdown>{children}</HeaderCategoryDropdown>
    </HeaderLeft>
  );
};

// Add displayName for CategoryDropdown subcomponent
Header.CategoryDropdown.displayName = "Header.CategoryDropdown";

// Header Mid Subcomponent
Header.Mid = ({ children }: PropsWithChildren) => {
  return children;
};

// Add displayName for Mid subcomponent
Header.Mid.displayName = "Header.Mid";

// Header Right Subcomponent
Header.Right = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

// Add displayName for Right subcomponent
Header.Right.displayName = "Header.Right";

// Attach the HeaderLeft subcomponent to the Header component
Header.Left = HeaderLeft;

export default Header;
