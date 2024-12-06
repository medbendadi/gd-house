// GLOBAL CUSTOM COMPONENT
import FlexBox from "components/flex-box/flex-box";
import IconComponent from "components/IconComponent";
// STYLED COMPONENTS
import { StyledIconButton } from "./styles";
import { TopbarLanguageSelector } from "components/topbar";
import LayoutModel from "models/Layout.model";
import { PropsWithChildren, useEffect, useState } from "react";
import api from "utils/__api__/layout";

// ==============================================================
type Variant = "light" | "dark";

interface Props {
  variant?: Variant;
  links: {
    google?: string;
    twitter?: string;
    youtube?: string;
    facebook?: string;
    instagram?: string;
  };
}

// ==============================================================

export default function FooterSocialLinks({ variant = "light", links }: Props) {
  const { twitter, facebook, instagram, youtube, google } = links;
  const [data, setData] = useState(null);
  // const data = 

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.getLayoutData();
      setData(result);
    };

    fetchData();
  }, []);


  return (
    <FlexBox className="flex" mx={-0.625}>
      {twitter ? <LinkItem variant={variant} icon="Twitter" url={twitter} /> : null}
      {facebook ? <LinkItem variant={variant} icon="Facebook" url={facebook} /> : null}
      {instagram ? <LinkItem variant={variant} icon="Instagram" url={instagram} /> : null}
      {youtube ? <LinkItem variant={variant} icon="Tiktok" url={youtube} /> : null}
      {google ? <LinkItem variant={variant} icon="Google" url={google} /> : null}
      {
        data && (<TopbarLanguageSelector languages={data.topbar.languageOptions} />)
      }

    </FlexBox>
  );
}

function LinkItem({ url, icon, variant }: { url: string; variant: Variant; icon: string }) {
  return (
    <a href={url} target="_blank" rel="noreferrer noopenner">
      <StyledIconButton variant={variant}>
        <IconComponent icon={icon} fontSize="inherit" className="icon" />
      </StyledIconButton>
    </a>
  );
}
