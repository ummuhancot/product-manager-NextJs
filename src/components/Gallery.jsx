import Image from "next/image";
import React from "react";

export const Gallery = () => {
  return (
    <div>
      <Image
        src="/images/iwatch.png"
        width={650}
        height={450}
        alt="Apple "
        className="img-fluid"
      />
    </div>
  );
};
