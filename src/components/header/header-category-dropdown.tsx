"use client";

import { PropsWithChildren } from "react";
import Button from "@mui/material/Button";
// MUI ICON COMPONENT
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
// import SegmentIcon from '@mui/icons-material/Segment';
// import SubjectIcon from '@mui/icons-material/Subject';
// CUSTOM ICON COMPONENTS
import Category from "icons/Category";
// GLOBAL CUSTOM COMPONENTS
import FlexBox from "components/flex-box/flex-box";
import { CategoryMenu } from "components/categories";

export default function HeaderCategoryDropdown({ children }: PropsWithChildren) {
  return (
    <CategoryMenu
      render={(handler) => (
        <FlexBox color="grey.600" alignItems="center" marginInlineStart={2}>
          <Button color="inherit" onClick={(e) => handler(e)}>
            <Category fontSize="small" color="inherit" />
            <span>Categories</span>
            <KeyboardArrowDown  fontSize="small" color="inherit" />
          </Button>
        </FlexBox>
      )}>
      {children}
    </CategoryMenu>
  );
}
