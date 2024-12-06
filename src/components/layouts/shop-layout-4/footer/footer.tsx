import Link from "next/link";
import Divider from "@mui/material/Divider";
// STYLED COMPONENT
import { StyledRoot } from "./styles";

// ==============================================================
type Props = { links: { title: string; url: string }[] };
// ==============================================================

export default function Footer({ links }: Props) {
  return (
    <StyledRoot>
      <Divider />

      <div className="links">
        {links.map((link) => (
          <Link key={link.url} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>

      <p>© Copyright {new Date().getFullYear()} By UI LIB.</p>
    </StyledRoot>
  );
}
