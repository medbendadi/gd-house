import { forwardRef, memo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
// CUSTOM GLOBAL COMPONENTS
import IconComponent from "components/IconComponent";
// STYLED COMPONENTS
import { CategoryBoxWrapper, StyledChip, StyledRoot } from "./styles";
// CATEGORY INTERFACE MODEL
import Category from "models/Category.model";

// ============================================================== 
type Props = { categories: Category[] };
// ==============================================================

const CategoryList = forwardRef<HTMLDivElement, Props>(({ categories }, ref) => {
  const params = useParams<{ slug: string }>();

  return (
    <StyledRoot ref={ref}>
      {categories.map((item) => {
        const selectedItem = item.slug === params.slug;
        return (
          <Link key={item.slug} href={`/sales-1/${item.slug}`}>
            <CategoryBoxWrapper selected={selectedItem}>
              <IconComponent icon={item.icon} className="icon" />
              <p className="title">{item.name}</p>

              <StyledChip
                size="small"
                color="primary"
                label="Upto 40% off"
                selected={selectedItem}
              />
            </CategoryBoxWrapper>
          </Link>
        );
      })}
    </StyledRoot>
  );
});

// Adding displayName to the forwardRef component
CategoryList.displayName = "CategoryList";

export default memo(CategoryList);
