import Image from "next/image";
import cover from "@/Image/cover.png";

export const CardImage = ({ images }: { images: any }) => {
  return (
    <>
      <Image
        src={images.logo}
        alt={"images"}
        width={200}
        height={200}
        priority
      />
    </>
  );
};
