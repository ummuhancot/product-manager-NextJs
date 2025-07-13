import Image from "next/image";
import React from "react";
import iwatch from "../../../../public/images/iwatch.png";
import { PageHeader } from "@/components/PageHeader";

export const metadata = {
  title: "Login",
  description: "Login to your account",
};

const Page = () => {
  //throw new Error("Login Error");
  return (
    <div>
      <PageHeader title="Login Page" />
      <Image
        src="/images/landscape.jpg"
        width={500}
        height={333}
        alt="landscape"
      />
      <Image src={iwatch} alt="iwatch" />
      <Image src="/images/nature.jpg" width={960} height={641} alt="nature" />
      <Image
        src="https://images.unsplash.com/photo-1547955922-85912e223015?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={340}
        height={515}
        alt="cat"
      />
      <div style={{ position: "relative", height: "500px" }}>
        <Image
          src="https://images.pexels.com/photos/4587960/pexels-photo-4587960.jpeg"
          alt="funny cat"
          style={{
            objectFit: "contain",
          }}
          fill
        />
      </div>
    </div>
  );
};

export default Page;
