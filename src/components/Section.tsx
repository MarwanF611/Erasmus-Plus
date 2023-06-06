import SectionBtn from "./section-components/sectionBtn";
import sections from "../data/sections.json";

export default function Section() {
  return (
    <section className="bg-gray-900 text-white" id="scrollTarget">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Meer uitleg</h2>

          <p className="mt-4 text-gray-300">
            Hieronder vind je 4 secties. Je kan op een sectie klikken om meer te
            weten te komen over mij.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-0">
        {sections.map((section) => (
          <SectionBtn
            title={section.title}
            caption={section.caption}
            text={section.text}
          />
        ))}
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <p className="mt-4 text-gray-300">
            Ik hoop dat ik jullie bij deze heb overtuigd om mij mee te kiezen
            als Ambassadeur voor het Erasmus+ project in 2024. Het zou een grote
            eer zijn om hieraan mee te doen en om die stijlvolle blauwe trui met
            trots aan te doen.
          </p>
        </div>
      </div>
    </section>
  );
}
