import Section from "../components/Section.component";
import { CONTACTFIELDS } from "../constants/contactFields";
import { SOCIAL_LINKS } from "../constants/socialLinks";

const ContactSection = () => {
  return (
    <Section id="contact" className="scroll-mt-20">
      <div className="flex flex-col lg:flex-row items-center justify-center mt-16 gap-10">
        {/* LEFT CONTENT */}
        <div className="w-full max-w-lg space-y-4">
          <h2 className="text-4xl font-semibold text-white leading-snug">
            Jadwalkan Pertemuan untuk Membahas Kebutuhan Anda
          </h2>

          <p className="text-gray-300 text-sm max-w-md font-medium mb-8">
            Hubungi saya hari ini untuk mendiskusikan bagaimana saya dapat
            membantu Anda mencapai tujuan serta memberikan solusi yang sesuai
            dengan kebutuhan Anda.
          </p>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-mobile-screen  text-xl"></i>
              <span className="text-gray-200 text-sm">081281683694</span>
            </div>

            <div className="flex items-center gap-3">
              <i className="fa-solid fa-envelope  text-xl"></i>
              <span className="text-gray-200 text-sm">
                adrianusaryo710@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-3">
              <i className="fa-solid fa-thumbtack  text-xl"></i>
              <span className="text-gray-200 text-sm">Jakarta, Indonesias</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex gap-4 pt-2">
            {SOCIAL_LINKS.map((item, index) => (
              <a
                href={item.path}
                key={index}
                target="_blank"
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white"
              >
                <i className={item.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full max-w-md backdrop:blur-xl rounded-2xl shadow p-10 border-slate-500 border-2">
          <form action="" className="space-y-2">
            {CONTACTFIELDS.map((item, index) => (
              <fieldset className="fieldset" key={index}>
                <legend className="fieldset-legend mb-1 font-bold text-sm">
                  {item.label}
                </legend>

                {item.type === "textarea" ? (
                  <textarea
                    id={item.id}
                    placeholder={item.placeholder}
                    rows={item.rows || 4}
                    className="
                w-full px-4 py-3 rounded-lg
                bg-gray-800/60 border-2 border-slate-500
                text-gray-200 placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-slate-500 
                focus:border-slate-500 transition
              "
                  ></textarea>
                ) : (
                  <input
                    type={item.type}
                    id={item.id}
                    placeholder={item.placeholder}
                    className="
                w-full px-4 py-3 rounded-lg
                bg-gray-800/60 border-2 border-slate-500
                text-gray-200 placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-slate-500 
                focus:border-slate-500 transition
              "
                  />
                )}
              </fieldset>
            ))}

            <button
              type="submit"
              className="
          w-full py-2 mt-4 rounded-lg 
          bg-slate-600 hover:bg-slate-700 
          text-white font-semibold text-sm 
          transition shadow-md 
        "
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
