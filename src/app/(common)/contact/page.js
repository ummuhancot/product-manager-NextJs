import { PageHeader } from "@/components/PageHeader";
import React from "react";

export const metadata = {
  title: {
    absolute: "Contact Us", // Template i eziyoruz
  },
  description: "Get in touch with us",
};

const Page = () => {
  return (
    <>
      <PageHeader title="Contact Us" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rem
        libero reiciendis et quis. Obcaecati blanditiis qui, quod beatae facere
        delectus libero eaque dolor at nisi aspernatur ipsam doloremque dolores
        laboriosam nulla quis dignissimos mollitia nam minima! A corrupti,
        facilis reprehenderit tempore iste, inventore nostrum velit blanditiis
        iure amet consectetur?
      </p>
    </>
  );
};

export default Page;
