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
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 ">
        <a
          onClick={openModal}
          style={{ cursor: "pointer" }}
          className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 "
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
          Wat maakt mij anders dan de andere?
          </h2>

          <p className="mt-1 text-sm text-gray-300">
            Waarom ben ik de perfecte 
            match voor Erasmus+ 2024?
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
                    Wat maakt mij anders dan de andere?
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-300">
                    De vraag is nu waarom specifiek ik, Waarom ben ik anders. 
                    Ik ben iemand die al op een jonge leeftijd veel verantwoordelijkheid 
                    heeft moeten nemen voor verschillende dingen. 
                    Zo heb ik al een route van 8 uur lang moeten uitstippen die
                    door 3 landen ging. Ik heb ook al vakanties moeten boeken voor 
                     ons hele gezin en ervoor zorgen dat we op tijd op de luchthaven 
                     zijn, op tijd inchecken en op tijd boarden. 
                     En dan spreek ik nog niet over het vervoer van en 
                     naar de luchthaven. Een leuk anekdote die recent nog is 
                     gebeurd geeft weer hoe goed ik werkelijk kan plannen, 
                     Wij waren namelijk onderweg naar een familielid in Sint-Niklaas maar de E17 was afgesloten tussen Sint-Niklaas en Antwerpen. Ik had al een route uitgestippeld voor mijn vader maar de GPS stuurde ons door een tunnel die uitkwam in het LEZ (Lage emissiezone) van Antwerpen. Onze auto mag daar niet binnen en we konden een boete riskeren die 350euro ging kosten (iets wat niemand wilt). Op het laatste moment heb ik ervoor gezorgd dat mijn vader kon afslagen  en zo op de singel terecht kon komen. Verderop ter hoogte van Zwijndrecht zagen we dat er file was op de E17 die onze rit met 3 uur kon vertragen. Ik heb ervoor gezorgd dat die 3 uur verkort werd naar 1 uur door de binnenwegen van Zwijndrecht en Beveren te gebruiken en zo nog op tijd te komen bij onze familie. Kortom ben ik iemand die goed kan plannen en een oplossing kan vinden als het eens niet goed uitkomt.
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
