import React, { FormEvent, Fragment, useState } from "react";
import { CardNameEdit } from "../SVGComponent/CardNameEditSVG";
import { useEditName } from "@/reactQueryHooks/useMutation";
import { Dialog, Transition } from "@headlessui/react";

export const NameEdit = (props: any) => {
  const { mutate: updateName } = useEditName();
  const [editOpen, setEditOpen] = React.useState(false);
  const [editedName, setEditedName] = useState("");
  const handleEditOpen = () => setEditOpen(!editOpen);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedName(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEditedName("");
  };
  console.log(props.id);
  return (
    <>
      <button
        className="absolute right-0 bg-rose-700 h-5 w-5 rounded flex justify-center items-center"
        onClick={handleEditOpen}
      >
        <CardNameEdit />
      </button>
      <Transition.Root show={editOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-5"
          onClose={setEditOpen}
          open={editOpen}
        >
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
            <div className="flex min-h-full justify-center p-4 text-center items-center">
              <Transition.Child
                as={Fragment}
                enter="duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="duration-300"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all flex justify-center my-8">
                  <form className="grid" onSubmit={handleSubmit}>
                    <div className="bg-white px-4 pb-4 pt-5 p-6">
                      <div className="mt-3 mx-5">
                        <Dialog.Title
                          as="h3"
                          className="text-center font-semibold text-gray-900"
                        >
                          Edit Name
                        </Dialog.Title>
                        <div className="mt-2">
                          <input
                            className="outline-1 focus:outline-rose-500 border-2 border-gray-500 rounded p-2 w-full"
                            type="text"
                            autoComplete="off"
                            placeholder="Edit Name"
                            value={editedName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 pb-10">
                      <div className="m-auto">
                        <div className="px-10 grid grid-cols-2 w-96">
                          <div className="flex justify-start">
                            <button
                              type="submit"
                              className="form-button submit w-28"
                              onClick={() => {
                                setEditOpen(false);
                                updateName({
                                  setId: props.id!,
                                  setName: editedName,
                                });
                              }}
                            >
                              Submit
                            </button>
                          </div>
                          <div className="flex justify-end">
                            <button
                              type="button"
                              className="form-button clear w-28"
                              onClick={() => setEditOpen(false)}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
