"use client";

import { ReactNode, useState } from "react";
// MUI
import IconButton from "@mui/material/IconButton";
// TRANSLATION
import { useTranslation } from "react-i18next";
// MUI ICON COMPONENTS
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
// STYLED COMPONENTS
import { LeftContent, StyledChip, StyledContainer, StyledRoot } from "./styles";

// ===========================================

interface Props {
  title: string;
  label: string;
  bgColor?: string;
  children: ReactNode;
}

// Define the type for Topbar and its subcomponents
interface TopbarComponent extends React.FC<Props> {
  Right: React.FC<{ children: ReactNode }>;
}

const Topbar: TopbarComponent = ({ title, label, bgColor, children }: Props) => {
  const { t } = useTranslation();
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <StyledRoot bgColor={bgColor} expand={expand}>
      <StyledContainer>
        <LeftContent>
          <div className="tag">
            <StyledChip label={t(label)} size="small" />
            <span className="title">{t(title)}</span>
          </div>

          <IconButton disableRipple className="expand" onClick={() => setExpand((state) => !state)}>
            {expand ? <Remove /> : <Add />}
          </IconButton>
        </LeftContent>

        {children}
      </StyledContainer>
    </StyledRoot>
  );
};

// Adding displayName for the main Topbar component
Topbar.displayName = "Topbar";

// Adding displayName for Topbar.Right subcomponent
Topbar.Right = ({ children }: { children: ReactNode }) => {
  return <div className="topbarRight">{children}</div>;
};

Topbar.Right.displayName = "Topbar.Right";

export default Topbar;
