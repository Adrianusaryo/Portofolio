export interface INavbar {
  menu: string;
  href: string;
}

export const Menu: INavbar[] = [
  { menu: "Home", href: "#home" },
  {
    menu: "About",
    href: "#about",
  },
  {
    menu: "Project",
    href: "#project",
  },
  {
    menu: "Contact",
    href: "#contact",
  },
];
