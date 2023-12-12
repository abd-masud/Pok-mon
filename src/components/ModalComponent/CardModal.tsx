import useCart from "@/reactQueryHooks/useCart";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import React, { Fragment } from "react";
import { CardImage } from "../CardComponent/CardImage";
import { CardModalInfo } from "@/components/ModalComponent/CardModalInfo";

export const CardModal = (props: any) => {
  const { AddToCart, pushId } = useCart();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <button
        className="px-2 py-1 mt-5 rounded bg-blue-700 hover:bg-blue-600 active:bg-blue-700 text-white transition"
        onClick={handleOpen}
      >
        Quick View
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-5" onClose={setOpen} open={open}>
          <Transition.Child
            as={Fragment}
            enter="duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-700/50 backdrop-blur-md transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center bottom-20 p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="duration-300"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-[500px] sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-center">
                      <div className="mt-3  sm:ml-4 sm:mt-0 text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-center font-semibold text-gray-900"
                        >
                          Add to cart
                        </Dialog.Title>
                        <div className="mt-2">
                          <Link href={`/cardRouter/viewSet/${props.id}`}>
                            <div className="h-[230px] p-28 pt-36 mb-5 m-auto flex justify-center items-center bg-gray-100 hover:bg-gray-200 border-[1px] border-gray-300 transition rounded-md">
                              <CardImage
                                images={props.images}
                              ></CardImage>
                            </div>
                          </Link>
                          <CardModalInfo
                            name={props.name}
                            printedTotal={props.printedTotal}
                            ptcgoCode={props.ptcgoCode}
                            series={props.series}
                            total={props.total}
                            releaseDate={props.releaseDate}
                            updatedAt={props.updatedAt}
                          ></CardModalInfo>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 pb-10">
                    <div className="m-auto">
                      <div className="px-10 grid grid-cols-2">
                        <div className="flex justify-start">
                          <button
                            className="form-button submit w-28"
                            type="button"
                            onClick={() => {
                              AddToCart(); pushId(props.id); localStorage.setItem("Cart", props.id);
                            }}
                          >
                            Add to Cart
                          </button>
                        </div>
                        <div className="flex justify-end">
                          <button
                            type="button"
                            className="form-button clear w-28"
                            onClick={() => setOpen(false)}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
