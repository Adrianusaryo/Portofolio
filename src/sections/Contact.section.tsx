import Section from "../components/Section.component";
import { CONTACTFIELDS } from "../constants/contactFields";

const ContactSection = () => {
  return (
    <Section>
      <h2 className="text-xl font-extrabold py-4 text-left">Kontak Saya</h2>
      <p className="max-w-lg mb-8 text-left  font-medium text-sm text-gray-300">
        Silakan tinggalkan pesan melalui formulir di bawah ini untuk keperluan
        kerja sama atau pertanyaan lainnya.
      </p>
      <div className="flex lg:justify-center gap-10 flex-col lg:flex-row ">
        <div className=" w-full max-w-md  mx-2  backdrop:blur-xl rounded-2xl shadow p-10 border-slate-500 border-2">
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
        <div className="w-full flex items-center justify-center">
          <div className="hover-3d mx-auto relative">
            {/* content */}
            <figure className="max-w-3xl rounded-2xl overflow-hidden">
              <img
                src="https://img.daisyui.com/images/stock/creditcard.webp"
                alt="3D card"
                className="rounded-2xl"
              />
            </figure>

            {/* 8 empty divs for 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
