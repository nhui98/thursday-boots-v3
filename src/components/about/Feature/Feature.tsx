export default function Feature({
  img,
  title,
  description,
  alt,
}: FeatureProps) {
  return (
    <figure className="mt-4 flex flex-col gap-x-4 lg:m-4 lg:flex-row lg:even:flex-row-reverse">
      <div className="w-full lg:w-1/2">
        <img src={img} alt={alt} className="h-full w-full object-cover" />
      </div>
      <figcaption className="flex w-full flex-col items-center justify-center gap-y-4 bg-offwhite px-4 py-8 text-center sm:px-12 lg:w-1/2">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="leading-8">{description}</p>
      </figcaption>
    </figure>
  );
}

export interface FeatureProps {
  id: number;
  img: string;
  alt: string;
  title: string;
  description: string;
}
