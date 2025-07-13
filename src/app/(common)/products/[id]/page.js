import { PageHeader } from "@/components/PageHeader";
import { notFound } from "next/navigation";
import React from "react";

//dinamik metadata
export const generateMetadata = async ({ params }) => {
  //data fetchleme islemi burada yapilabilir
  //server side rendering oldugu icin useEffect kullanilmasina gerek yok.

  //returnde title olarak ornegin urun ismi girilebilir.
  return {
    title: `Product ${params.id}`,
    description: `Details of product ${params.id}`,
  };
};

const Page = async ({ params }) => {
  const { id } = await params;
  if (id >= "100") notFound();
  return (
    <div>
      <PageHeader title={`Product ${id}`} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        numquam quaerat ipsum rem hic nulla laborum voluptate minima eum, quis
        sit quibusdam cumque similique laboriosam? Quo harum voluptate cum
        neque?
      </p>
    </div>
  );
};

export default Page;
