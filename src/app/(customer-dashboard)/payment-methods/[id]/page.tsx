import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PaymentDetailsPageView } from "pages-sections/customer-dashboard/payment-methods/page-view";
// API FUNCTIONS
import api from "utils/__api__/payments";
// TYPES
import { IdParams } from "models/Common";

export const metadata: Metadata = {
  title: "Payment Details - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};

export default async function PaymentMethodDetails({ params }: IdParams) {
  const payment = await api.getPayment(params.id);

  if (!payment) notFound();

  return <PaymentDetailsPageView payment={payment} />;
}
