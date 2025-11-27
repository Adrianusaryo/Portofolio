import Section from "../components/Section.component";
import { PROJECTS } from "../constants/project";

const ProjectSection = () => {
  return (
    <Section>
      <h2 className="text-xl font-extrabold py-4 text-left ">
        Project yang dikerjakan
      </h2>
      <p className="max-w-lg mb-8 text-left font-medium text-sm text-gray-300">
        Beberapa project yang pernah saya kerjakan, mencakup pengembangan
        aplikasi web dan berbagai solusi digital.
      </p>
      <div className="grid grid-cols-12">
        {PROJECTS.map((items, index) => (
          <div
            className="col-span-12 mx-auto  mb-10 md:col-span-6 lg:col-span-4"
            key={index}
          >
            <div className="card lg:w-[350px] w-[330px]  h-full border-2 border-slate-500 ">
              <figure className="mx-4 mt-4">
                <img
                  src={items.image}
                  alt={items.name}
                  className="object-cover w-full h-40"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title text-white font-bold text-lg">
                  {items.name}
                </h2>

                <p className="text-slate-400 text-sm mb-3">
                  {items.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {items.tools.map((item, idx) => (
                    <div
                      key={idx}
                      className="badge badge-outline text-slate-300 border-slate-600"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href={items.path}
                  target="_blank"
                  className="btn bg-slate-600 hover:bg-slate-700 rounded-lg text-white w-full font-medium mt-2"
                >
                  Lihat Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProjectSection;
