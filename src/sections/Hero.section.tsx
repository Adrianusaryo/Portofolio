import Section from "../components/Section.component";

const HeroSection = () => {
  return (
    <Section id="home" className="pt-[100px] pb-10">
      <div className="flex flex-col-reverse md:flex-row items-center w-full gap-10">
        <div className="w-full md:w-1/2 ">
          <h1 className="text-3xl md:w-5xl font-bold text-center md:text-left leading-tight mb-4">
            Hi, Saya Adrianus
          </h1>
          <p className="text-gray-300 font-medium text-sm mb-6">
            Selamat datang di website portofolio saya. Melalui halaman ini, Anda
            dapat melihat berbagai kemampuan, proyek yang telah saya kerjakan,
            serta informasi mengenai diri saya. Jangan ragu untuk menghubungi
            saya melalui bagian kontak yang tersedia.
          </p>
          <div className="flex flex-row gap-4 justify-center md:justify-start items-center">
            <a
              href="/cv/CV-Aryo.pdf"
              download
              className="bg-slate-600 hover:bg-slate-700 px-4 py-2 rounded-lg font-medium"
            >
              Donwload CV <i className="fa-solid fa-download"></i>
            </a>
            <a
              href="#about"
              className="bg-slate-600 hover:bg-slate-700 px-4 py-2 rounded-lg font-medium"
            >
              Mulai Menjelajah <i className="fa-solid fa-arrow-down"></i>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="lg:w-[300px] lg:h-[400px] rounded-3xl overflow-hidden bg-white shadow-xl md:w-[300px] md:h-[400px] w-[250px] h-[350px]">
            <img
              src="/image/hero_profile.png"
              className="w-full h-full  object-cover"
              alt="Foto Profil"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
