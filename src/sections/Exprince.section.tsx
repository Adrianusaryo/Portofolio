import Section from "../components/Section.component";

const ExperienceEducationSection = () => {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-10 w-full text-white">
        <div>
          <h2 className="text-xl font-extrabold">Pengalaman Kerja</h2>
          <div className="rounded-2xl mt-3 ">
            <div>
              <span className="inline-block bg-[#1e2840] py-1 rounded-full text-sm text-gray-300 mb-3">
                Feb 2024 - Feb 2025
              </span>

              <div className="flex items-start gap-4">
                <div>
                  <h3 className="font-bold text-lg">
                    Frontend Web Developer (Magang)
                  </h3>
                  <p className="text-gray-300 text-sm font-medium py-1">
                    PDSI – Kementerian Perdagangan Republik Indonesia
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    <p className="text-gray-400 text-sm mt-1">
                      Membantu pengembangan frontend website PMSE menggunakan
                      Bootstrap dan CodeIgniter, melakukan manual testing,
                      memberikan demonstrasi aplikasi kepada pegawai PDSI, serta
                      mempelajari dasar backend seperti struktur serta relasi
                      database, integrasi API, dan komunikasi data antara
                      frontend dan backend.
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-extrabold">Riwayat Pendidikan</h2>

          <div className="rounded-2xl mt-3">
            <div>
              <span className="inline-block bg-[#1e2840] py-1 rounded-full text-sm text-gray-300 mb-3">
                Sep 2021 - Dec 2025
              </span>

              <div className="flex items-start gap-4">
                <div>
                  <h3 className="font-semibold text-lg">Bina Nusantara</h3>
                  <p className="text-gray-300 text-sm font-medium py-1">
                    Computer Science
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Mempelajari konsep inti ilmu komputer yang meliputi
                    algoritma, struktur data, pemrograman berorientasi objek
                    (OOP), basis data, serta pengembangan aplikasi web. Selain
                    itu, turut menyelesaikan tugas akhir berupa pengembangan
                    sistem e-library MBK berbasis website sebagai penerapan dari
                    seluruh kompetensi yang telah dipelajari.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ExperienceEducationSection;
