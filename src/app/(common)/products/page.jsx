import { PageHeader } from "@/components/PageHeader";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Products",
  description: "Explore our range of products",
};

const Page = () => {
  return (
    <div>
      <PageHeader title="Products" />
      {[...new Array(50)].map((_, i) => (
        <p key={i}>
          {i} Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Doloribus, numquam quaerat ipsum rem hic nulla laborum voluptate
          minima eum, quis sit quibusdam cumque similique laboriosam? Quo harum
          voluptate cum neque?
        </p>
      ))}

      <Link href="/dashboard" scroll={false}>
        Elmaya git
      </Link>
    </div>
  );
};

export default Page;
