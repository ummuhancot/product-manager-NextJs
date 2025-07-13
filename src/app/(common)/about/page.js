import { Gallery } from "@/components/Gallery";
import { PageHeader } from "@/components/PageHeader";
import { wait } from "@/helpers/functions";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "About Us",
  description: "Learn more about Cosmo Shop",
};

const Page = async () => {
  await wait(3000);
  return (
    <div>
      <PageHeader title="About Us" />

      <Gallery />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
        mollitia. Provident quo dicta saepe ut aliquid, debitis suscipit nobis.
        Minima eligendi atque cumque nihil dolore. Quis fuga nam ut assumenda.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
        mollitia. Provident quo dicta saepe ut aliquid, debitis suscipit nobis.
        Minima eligendi atque cumque nihil dolore. Quis fuga nam ut assumenda.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
        mollitia. Provident quo dicta saepe ut aliquid, debitis suscipit nobis.
        Minima eligendi atque cumque nihil dolore. Quis fuga nam ut assumenda.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
        mollitia. Provident quo dicta saepe ut aliquid, debitis suscipit nobis.
        Minima eligendi atque cumque nihil dolore. Quis fuga nam ut assumenda.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
        mollitia. Provident quo dicta saepe ut aliquid, debitis suscipit nobis.
        Minima eligendi atque cumque nihil dolore. Quis fuga nam ut assumenda.
      </p>
    </div>
  );
};
export default Page;
