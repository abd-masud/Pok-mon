import { CardImage } from "@/components/CardComponent/CardImage";
import { CardDetails } from "@/components/CardComponent/CardDetails";
import Link from "next/link";

export const Card = (props: any) => {
  return (
    <main>
      <div className="transition hover:scale-[1.02] 2xl:mx-12 xl:mx-4 md:mx-12 mb-16 bg-white border px-10 py-8 h-[400px] w-[400px] border-gray-300 rounded-2xl shadow-lg shadow-black/50">
        <div className="h-[250px] w-[200px] m-auto flex justify-center items-center">
          <Link href={`/cardRouter/viewSet/${props.data.id}`}>
            <CardImage images={props.data.images.logo}></CardImage>
          </Link>
        </div>
        <CardDetails name={props.data.name}></CardDetails>
        <Link href={`/cardRouter/modalSet/${props.data.id}`}>
          <button className="px-2 py-1 mt-5 rounded bg-blue-700 hover:bg-blue-600 text-white transition">
            Quick View
          </button>
        </Link>
      </div>
    </main>
  );
};
