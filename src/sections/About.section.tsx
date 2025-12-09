import Section from "../components/Section.component";
import { TOOLS } from "../constants/tools";

const AboutSection = () => {
  return (
    <Section id="about" className="scroll-mt-20">
      <h2 className="text-center text-2xl font-extrabold mb-8">
        Profil Singkat
      </h2>
      <div className="p-5 mx-auto max-w-3xl bg-gray-800 border-2 border-slate-500 shadow-xl rounded-2xl mb-10">
        <p className="font-medium leading-relaxed text-justify text-xs md:text-sm  text-gray-300">
          Saya Adrianus Aryo, seorang Fresh Graduate jurusan Computer Science
          Universitas Bina Nusantara. Full Stack Web Developer dengan pengalaman
          magang selama 1 tahun di Kementerian Perdagangan. Saya terbiasa
          mengembangkan aplikasi web responsif, mengintegrasikan API untuk
          pengolahan data, serta menggunakan version control (Git) dalam setiap
          alur kerja. Saya berkomitmen untuk terus mengembangkan kemampuan
          teknis dan menciptakan solusi digital yang efektif serta mudah
          digunakan.
        </p>
      </div>
      <h2 className="text-xl font-extrabold py-4 md:text-left text-center">
        Tools yang digunakan
      </h2>
      <p className="max-w-lg mb-8 md:text-left text-center  font-medium text-sm text-gray-300">
        Berbagai teknologi yang saya gunakan dalam pengembangan aplikasi, mulai
        dari pembuatan antarmuka hingga pengelolaan backend, untuk menciptakan
        solusi yang efektif dan responsif.
      </p>
      <div className="grid grid-cols-12">
        {TOOLS.map((item, index) => (
          <div
            key={index}
            className="col-span-12 mb-5 md:col-span-4 lg:col-span-3 mx-5 flex flex-row items-center gap-4 p-4 border-2 border-slate-500 shadow rounded-xl"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-10 h-10 object-contain"
            />
            <div className="flex flex-col">
              <h1 className="font-semibold text-sm">{item.name}</h1>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default AboutSection;
