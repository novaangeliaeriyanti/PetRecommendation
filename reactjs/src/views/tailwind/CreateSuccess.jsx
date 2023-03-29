import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";

export default function CreateSuccess(props) {
  let navigate = useNavigate();

  // console.log("Ini adalah hasil props : ", props.result_data[1].pet_url_image);
  // console.log("Ini adalah hasil props : ", props.result_data[1].pet_name);
  return (
    <div>
      <Transition appear show={true} as={Fragment}>
        <Dialog as="div" static className="fixed inset-0" onClose={() => null}>
          <div className="mt-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="flex justify-center mt-0 items-center w-full h-screen p-2 overflow-hidden align-middle transition-all transform bg-white-300 backdrop-brightness-50 bg-white/10 shadow-lg">
                <div className="flex z-50 p-5 bg-white justify-center items-center flex-col w-3/5 h-3/5 rounded-2xl shadow-2xl">
                  
                  <Dialog.Title
                    as="h3"
                    className="flex justify-center text-lg font-medium leading-6 text-gray-900"
                  >
                    Hello, {props.result_data[0]}
                  </Dialog.Title>

                  <div className="flex justify-center text-lg">
                    Your pet recommendation is
                  </div>

                  <div className="my-2 ml-2 mr-2  duration-300 ease-in-out flex items-center justify-center peer-checked:bg-emerald-400">
                    <img
                      className=" w-28 h-28 border border-gray-400 rounded-full"
                      src={`/storages/${props.result_data[1].pet_url_image}`}
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center font-bold">
                    {props.result_data[1].pet_name}
                  </div>

                  <div className="flex space-x-52 mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-lg w-28 py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-slate-900 bg-white border-slate-800 hover:bg-red-200 focus:outline-none"
                      // onClick={() => navigate("/detail")}
                      onClick={props.closeModal}
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
