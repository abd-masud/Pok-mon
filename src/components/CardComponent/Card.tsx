import { CardImage } from "@/components/CardComponent/CardImage";
import { CardDetails } from "@/components/CardComponent/CardDetails";
import Link from "next/link";
import React, { FormEvent } from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import useCart from "@/reactQueryHooks/useCart";
import { CardNameEdit } from "../SVGComponent/CardNameEditSVG";
import { editName } from "@/pokemonAPI/pokemonAPI";
import { useEditName } from "@/reactQueryHooks/useMutation";
import { CardModal } from "../ModalComponent/CardModal";
import { CardModalInfo } from "../ModalComponent/CardModalInfo";
import { NameEdit } from "../NameComponent/NameEdit";

export const Card = (props: any) => {
  return (
    <main>
      <div className="transition hover:scale-[1.02] 2xl:mx-12 xl:mx-4 md:mx-12 mb-16 bg-white border px-10 py-8 h-[400px] w-[400px] border-gray-300 rounded-2xl shadow-lg shadow-black/50">
        <Link href={`/cardRouter/viewSet/${props.data.id}`}>
          <div className="h-[230px] w-[320px] p-20 pt-28 mb-5 m-auto flex justify-center items-center bg-gray-100 hover:bg-gray-200 border-[1px] border-gray-300 transition rounded-md">
            <CardImage images={props.data.images.logo}></CardImage>
          </div>
        </Link>
        <div className="flex relative">
          <NameEdit id={props.data.id} name={props.data.name}></NameEdit>
        </div>
        <div>
          <CardModal
            id={props.data.id}
            images={props.data.images.logo}
            name={props.data.name}
            printedTotal={props.data.printedTotal}
            ptcgoCode={props.data.ptcgoCode}
            series={props.data.series}
            total={props.data.total}
            releaseDate={props.data.releaseDate}
            updatedAt={props.data.updatedAt}
          ></CardModal>
        </div>
      </div>
    </main>
  );
};
