import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { getAllCard, getOneCard } from "@/pokemonAPI/pokemonAPI";
import { useRouter } from "next/router";
import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllSets } from "pokemon-tcg-sdk-typescript/dist/sdk";
import Link from "next/link";

export const getStaticPaths: GetStaticPaths = async (qry) => {
  const data = await getAllSets();
  const tempPaths = data.map((x) => x.id);
  let tempParams: { params: { cardmodal: any } }[] = [];
  tempPaths.forEach((x) => {
    tempParams.push({ params: { cardmodal: x } });
  });
  return {
    paths: tempParams.splice(0, 5),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  let card = {};
  try {
    card = await getOneCard(context.params?.cardmodal as string);
  } catch (e) {
    return {
      props: {},
      revalidate: 120,
    };
  }

  return {
    props: { card },
    revalidate: 120,
  };
};

const SetComponent = ({ card }: { card: PokemonTCG.Set }) => {
  const router = useRouter();
  const setId = router.query?.cardmodal as string | undefined;
  const [singleCard, setSingleCard] = useState<PokemonTCG.Set>(card);
  useEffect(() => {
    //   if (router.query?.setid) {
    //     _getData(router.query?.setid as string).then((tempState) => {
    //       setSingleCard(tempState);
    //     });
    setSingleCard(card);
    //   }
  }, [card]);
  if (router.isFallback) {
    return (
      <div className="h-[860px] bg-gray-300 flex justify-center items-center">
        <h1 className="text-[35px] px-[320px] py-[140px]">Loading...</h1>
      </div>
    );
  }
  if (!card) {
    return (
      <main className="h-[860px] flex justify-center items-center overflow-y-hidden bg-gray-300">
        <h3 className="text-center text-[60px]">No items found :(</h3>
      </main>
    );
  }

  const Example = () => {
    const [open, setOpen] = useState(true);

    const cancelButtonRef = useRef(null);

    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-700/40 backdrop-blur-md transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Wishlist
                        </Dialog.Title>
                        <div className="mt-2">
                          <div className="h-[860px] flex justify-center items-center bg-gray-500 overflow-hidden">
                            {singleCard !== undefined ? (
                              <>
                                <div className="bg-gray-300 md:flex py-20 rounded-xl shadow-lg">
                                  <Link href={`${singleCard?.id}`}>
                                    <div className="p-20 w-[400px] h-[300px] flex justify-center items-center md:border-r-2 border-black">
                                      <Image
                                        width={300}
                                        height={300}
                                        priority
                                        src={singleCard?.images.logo}
                                        alt="Card Image"
                                      />
                                    </div>
                                  </Link>
                                  <div className=" p-20">
                                    <h1>
                                      <strong>Name : </strong>
                                      {singleCard?.name}
                                    </h1>
                                    <h1>
                                      <strong>Printed Total : </strong>
                                      {singleCard?.printedTotal}
                                    </h1>
                                    <h1>
                                      <strong>PTCGO Code : </strong>
                                      {singleCard?.ptcgoCode}
                                    </h1>
                                    <h1>
                                      <strong>Series : </strong>
                                      {singleCard?.series}
                                    </h1>
                                    <h1>
                                      <strong>Total : </strong>
                                      {singleCard?.total}
                                    </h1>
                                    <h1>
                                      <strong>Release Date : </strong>
                                      {singleCard?.releaseDate}
                                    </h1>
                                    <h1>
                                      <strong>Updated At : </strong>
                                      {singleCard?.updatedAt}
                                    </h1>
                                  </div>
                                </div>
                              </>
                            ) : (
                              <div className="bg-gray-300 md:flex py-20 rounded-xl shadow-lg">
                                <h1 className="text-[35px] px-[320px] py-[140px]">
                                  Loading...
                                </h1>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 flex flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="mt-3 outline-none inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 mr-5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >
                      Add to cart
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    );
  };
};
export default SetComponent;
