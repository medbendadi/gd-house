"use client";

import Card from "@mui/material/Card";
import MenuItem from "@mui/material/MenuItem";
// MUI ICON COMPONENTS
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
// GLOBAL CUSTOM COMPONENTS
import { NavLink } from "components/nav-link";
import FlexBox from "components/flex-box/flex-box";
// LOCAL CUSTOM COMPONENTS
import MegaMenu from "./mega-menu";
import NavItemChild from "./nav-item-child";
import CategoryBasedMenu from "./category-based-menu";
// STYLED COMPONENTS
import { NAV_LINK_STYLES, ChildNavListWrapper } from "../styles";
// DATA TYPES
import { Menu, MenuItemWithChild } from "models/Navigation.model";
import { Header } from "components/header";
import { CategoryList } from "components/categories";
import CategoryListItem from "components/categories/components/category-list-item";
import styled from "@mui/material/styles/styled";
import { Wrapper } from "./mega-menu/styles";

// ==============================================================
type Props = { navigation: Menu[] };
// ==============================================================

interface Position {
  position?: "absolute" | "relative";
}

// STYLED COMPONENT
export const StyledRoot = styled("div", {
  shouldForwardProp: (prop) => prop !== "position"
})<Position>(({ theme, position }) => ({
  left: 0,
  zIndex: 98,
  right: "auto",
  borderRadius: 8,
  padding: "0.5rem 0px",
  transformOrigin: "top",
  boxShadow: theme.shadows[5],
  position: position || "unset",
  fontWeight: 'lighter',
  backgroundColor: theme.palette.background.paper,
  top: position === "absolute" ? "calc(100% + 0rem)" : "0rem"
}));


export default function NavigationList({ navigation }: Props) {
  const renderNestLevel = (children: MenuItemWithChild[]) => {
    return children.map((nav) => {
      if (nav.child) {
        return (
          <NavItemChild nav={nav} key={nav.title}>
            {renderNestLevel(nav.child)}
          </NavItemChild>
        );
      }

      return (
        <NavLink href={nav.url} key={nav.title}>
          <MenuItem>{nav.title}</MenuItem>
        </NavLink>
      );
    });
  };

  const renderRootLevel = (list: Menu[]) => {
    return list.map((nav) => {
      // SHOW GRID MEGA MENU
      if (nav.megaMenu) {
        return <MegaMenu key={nav.title} title={nav.title} menuList={nav.child} />;
      }

      // SHOW CATEGORY BASED MEGA MENU WITH SUB ITEMS
      if (nav.megaMenuWithSub) {
        return <CategoryBasedMenu key={nav.title} title={nav.title} menuList={nav.child} />;
      }

      // SHOW ONE ITEM MENU
      if (nav.title === 'Nouveautes') {
        console.log(nav);
        return (
                    <FlexBox
            key={nav.title}
            alignItems="center"
            position="relative"
            flexDirection="column"
            sx={{
              "&:hover": {
                "& > .child-nav-item": {
                  display: "block", // Show child-nav-item on hover
                },
              },
            }}
          >
              
            <div className="menu-title" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
              {nav.title}
              <KeyboardArrowDown className="icon" />
            </div>
            
            {/* Add a wrapper for child-nav-items */}
            <StyledRoot className="child-nav-item" position={"absolute"} sx={{ display: "none", "&:hover": {display: "block"}}}>
              {nav.child.map((item) => {
                const { href, title, icon } = item;
                
                return (
                  // <div className="" key={title} style={{ display: "none" }}>
                    <CategoryListItem caret={false} key={title} href={href} icon={icon} title={title} />
                  // </div>
                );
              })}
            </StyledRoot>
          </FlexBox>

        );
      }
      // SHOW LIST MENU WITH CHILD
      if (nav.title !== 'Mega' && nav.child && nav.megaMenu === false && nav.megaMenuWithSub === false) {
        return (
          <FlexBox
            key={nav.title}
            alignItems="center"
            position="relative"
            flexDirection="column"
            sx={{ "&:hover": { "& > .child-nav-item": { display: "block" } } }}>
            <FlexBox alignItems="flex-end" gap={0.3} sx={NAV_LINK_STYLES}>
              {nav.title} <KeyboardArrowDown sx={{ color: "grey.500", fontSize: "1.1rem" }} />
            </FlexBox>

            <ChildNavListWrapper className="child-nav-item">
              <Card elevation={5} sx={{ mt: 2.5, py: 1, minWidth: 100, overflow: "unset" }}>
                {renderNestLevel(nav.child)}
              </Card>
            </ChildNavListWrapper>
          </FlexBox>
        );
      }
      // SHOW ONE ITEM MENU
      if (nav.title === 'Home') {
        return(
          <FlexBox
          key={nav.title}
          alignItems="center"
          position="relative"
          flexDirection="column"
          sx={{ "&:hover": { "& > .child-nav-item": { display: "block" } } }}>
            <FlexBox alignItems="flex-end" gap={0.3} >
            <NavLink href='/' key={nav.title} style={{color: 'initial'}}>
              {nav.title}
        </NavLink>
            </FlexBox>
        </FlexBox>

        )
      }
      
    });
  };

  return <FlexBox gap={4}>{renderRootLevel(navigation)}</FlexBox>;
}
