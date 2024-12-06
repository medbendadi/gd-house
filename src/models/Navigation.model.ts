export interface MenuItemWithChild {
  title: string;
  url?: string;
  child?: MenuItemWithChild[];
}

export interface CategoryMenuItemWithChild {
  title: string;
  url?: string;
  img?: string;
  icon?: string;
  child?: CategoryMenuItemWithChild[];
}

export interface MegaMenuItemWithChild {
  title: string;
  url?: string;
  child?: MegaMenuItemWithChild[];
}

export interface CategoryMenuItem {
  title: string;
  child: CategoryMenuItemWithChild[];
}

export interface MegaMenuItem {
  title: string;
  child: MegaMenuItemWithChild[];
}

// -------------------------------------------------------------

export interface MenuWithMegaMenu {
  title: string;
  megaMenu: true;
  megaMenuWithSub: false;
  child: MegaMenuItem[][];
}

export interface MenuWithCategoryMenu {
  title: string;
  megaMenu: false;
  megaMenuWithSub: true;
  child: CategoryMenuItem[];
}

export interface MenuItem {
  title: string;
  megaMenu: false;
  megaMenuWithSub: false;
  child: MenuItemWithChild[];
}

export interface CateMenuItem {
  href: string;
  title: string;
  icon?: string;
  children?: CategoryMenuItem[];
  component?: "Grid" | "List";
}

export interface NouvMenuItem {
  title: string;
  megaMenu: false;
  megaMenuWithSub: false;
  child: CateMenuItem[];
}

export type Menu = MenuWithMegaMenu | MenuWithCategoryMenu | MenuItem | NouvMenuItem;
