import background from "../assets/circle-scatter-haikei.svg";


export default function Banner() {
  return (
    <section
      className="bg-gray-900 text-white"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
    </section>
  );
}
