import Image from "next/image";

export const CardImage = (props: any) => {
  return (
    <div className="mb-10">
      <Image
        width={300}
        height={200}
        src={props.images}
        alt="Card Image"
        priority
      />
    </div>
  );
};
