import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Section1() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:py-7 sm:px-6 lg:py-9 lg:px-8 ">
        <a
          onClick={openModal}
          style={{ cursor: "pointer" }}
          className="block rounded-xl border-[3px] border-gray-800 p-8 transition hover:border-green-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-green-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>

          <h2 className="mt-4 text-xl font-bold text-white">
            Waarom kies ik voor Erasmus+?
          </h2>

          <p className="mt-1 text-sm text-gray-300">
            Waarom wil ik zo graag ambassadeur worden?
          </p>
        </a>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-900 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white"
                  >
                    Waarom kies ik voor Erasmus+?
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-300">
                      Ik zit al sinds het eerste middelbaar op onze school en aangezien het volgend jaar mijn laatste jaar is, Zou ik graag mijn carriere op onze school op een mooie manier afsluiten. Dat kan niet beter dan één van de ambassadeurs te worden van Erasmus+. Ik zie dit als een kans om mezelf te verbeteren en mijn vaardigheden toe te passen. Het is de perfecte manier om mezelf voor te berieden voor de echte wereld, Een kans om te zien hoe goed ik eigenlijk echt bent. Zeker op het vlak van zelfstandigheid en verantwoordelijkheid. Het is ook het perfecte moment om mezelf sterker te maken op vlak van communicatie en taal aangezien dit niet altijd mijn sterkste punt is. Tijdens mijn stage is het altijd leuk om nieuwe culturen te leren kennen. Niet alleen de cultuur van één van de bestemmingen, maar ook de cultuur van mijn mede ambassadeurs.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
}
