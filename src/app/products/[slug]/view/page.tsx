import { redirect } from "next/navigation";
// CUSTOM DATA MODEL
import { SlugParams } from "models/Common";

export default async function ProductQuickView({ params }: SlugParams) {
  redirect(`/products/${params.slug}`);
}
