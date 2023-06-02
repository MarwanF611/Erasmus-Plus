import Section1 from "./section-components/section1";
import Section2 from "./section-components/section2";
import Section3 from "./section-components/section3";
import Section4 from "./section-components/section4";

export default function Section() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Kickstart your marketing
          </h2>

          <p className="mt-4 text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fugit consequuntur saepe laborum.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </section>
  );
}
