export default function ProductBanner({
  description,
  img,
  imgSmall,
  title,
}: ProductBanner) {
  return (
    <figure className="relative flex flex-col lg:m-4">
      <img src={img} alt={title} className="hidden lg:block" />
      <img src={imgSmall} alt={title} className="block lg:hidden" />
      <div className="px-4 py-8 md:absolute md:top-0 md:flex md:h-full md:w-full md:items-center md:justify-center md:px-20 lg:w-2/3 xl:w-1/2">
        <div className="flex flex-col gap-y-4 text-center md:bg-offwhite/90 md:py-10 md:px-10">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </figure>
  );
}

interface ProductBanner {
  img: string;
  imgSmall: string;
  description: string;
  title: string;
}
