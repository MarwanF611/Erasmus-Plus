import { Dots } from "./Dots";



export default function Banner() {
  return (
    <section
      className="bg-gray-900 text-white"
      style={{
        position: "relative"
      }}
    >
      <Dots className="text-gray-700" style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%"
      }} />
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Het Erasmus+ project.

          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Beste Jury, ik ben Marwan Fikri. Hieronder vind je meer uitleg over mezelf
            en waarom ik een goede keuze ben als ambassadeur voor het Erasmus+ project
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">



          </div>
        </div>
      </div>
      <Dots className="text-gray-700" style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        height: "100%"
      }} />
    </section>
  );
}
