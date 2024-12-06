import Link from "next/link";
import Image from "next/image";
// MUI
import Divider from "@mui/material/Divider";
import { BoxProps } from "@mui/material/Box";
// STYLED COMPONENTS
import { CardWrapper, CardContent, CardLink } from "./styles";

// ========================================================
interface Props extends BoxProps {
  img: string;
  url: string;
  title: string;
  subTitle: string;
  uptext?: string;
  contentPosition?: "left" | "right";
}
// ========================================================

export default function BannerCard2({
  img,
  url,
  title,
  subTitle,
  uptext='',
  contentPosition = "left",
  ...props
}: Props) {
  return (
    <CardWrapper {...props}>
      <Image fill alt="category" src={img} sizes="(100vw, 260px)" />

      <CardContent contentAlign={contentPosition} className="content">
        {uptext && <p>{uptext}</p>}
        <h2 className="title" style={{fontFamily: "'__VIOLA_bb2b49', '__VIOLA_Fallback_bb2b49'", fontWeight: "300"}}>{title}</h2>
        <p>{subTitle}</p>
        <Divider className="divider" />

        <Link href={url}>
          <CardLink>Shop Now</CardLink>
        </Link>
      </CardContent>
    </CardWrapper>
  );
}
