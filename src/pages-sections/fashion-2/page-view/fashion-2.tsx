// GLOBAL CUSTOM COMPONENTS
import Setting from "components/settings";
import Newsletter from "components/newsletter";
// LOCAL CUSTOM COMPONENTS
import Section1 from "../section-1";
import Section2 from "../section-2";
import Section3 from "../section-3";
import Section4 from "../section-4";
import Section5 from "../section-5";
import Section6 from "../section-6";
import Section7 from "../section-7";
import Section8 from "../section-8";
import Section9 from "../section-9";
import Section10 from "../section-10";
import Section11 from "../section-11/";
import Section12 from "../section-12";
import Section13 from "../section-13";
import Section14 from "../section-14";

export default function FashionTwoPageView() {
  return (
    <div className="bg-white">
      {/* HERO SECTION CAROUSEL */}
      <Section1 />

      {/* SERVICE CARDS */}
      {/* <Section2 /> */}

      {/* BEST SELLING CATEGORIES */}
      {/* <Section3 /> */}


      {/* FEATURED PRODUCTS */}
      <Section6 />

      {/* BEST SELLING PRODUCTS */}
      {/* <Section4 /> */}

      {/* BRAND LIST CAROUSEL AREA */}
      <Section9 />

      {/* OFFER BANNERS */}
      <Section5 />

      {/* FEATURED PRODUCTS */}
      {/* <Section6 /> */}

      {/* CALENDAR  */}
      <Section11 />

      {/* SUMMER SALE OFFER AREA */}
      <Section7 />

      {/* HESTIORE */}
      <Section12 />

      {/* BLOG LIST AREA */}
      <Section8 />
      {/* Features */}
      <Section13 />


      {/* BRAND LIST CAROUSEL AREA */}
      {/* <Section9 /> */}

      {/* PRODUCT LIST COLUMN */}
      {/* <Section10 /> */}

      {/* POPUP NEWSLETTER FORM */}
      <Section14/>
      {/* <Newsletter /> */}

      {/* SETTINGS IS USED ONLY FOR DEMO, YOU CAN REMOVE THIS */}
      {/* <Setting /> */}
    </div>
  );
}
