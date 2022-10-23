import { MATERIAL_LIST } from "@constants/about/materials.data";

export default function Materials() {
  return (
    <section className="container mx-auto my-20 flex flex-col items-center justify-center gap-y-20">
      <div className="flex flex-col gap-y-3 px-4 text-center">
        <h2 className="text-2xl font-semibold">{MATERIAL_LIST.title}</h2>
        <p>{MATERIAL_LIST.description}</p>
      </div>
      <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-4">
        {MATERIAL_LIST.materials.map(({ about, alt, id, img, material }) => (
          <figure
            key={id}
            className="flex flex-col items-center justify-center gap-y-6 border-[1px] bg-offwhite px-4 py-12 text-center"
          >
            <div>
              <img src={img} alt={alt} />
            </div>
            <h3 className="text-lg">{material}</h3>
            <p>{about}</p>
          </figure>
        ))}
      </div>
    </section>
  );
}
