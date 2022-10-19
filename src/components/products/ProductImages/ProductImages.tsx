import { useEffect, useState } from "react";

export default function ProductImages({ images, slug }: ProductImagesProps) {
  const [mainImg, setMainImg] = useState<string>();

  useEffect(() => {
    setMainImg(images[0]);
  }, [images]);

  return (
    <section className="flex flex-col-reverse items-start gap-4 md:flex-row">
      <div className="flex flex-row flex-wrap justify-center gap-2 md:flex-col  ">
        {images.map((image) => (
          <button
            key={image}
            className={`cursor-pointer border-[1px] border-black/10 transition-colors ${
              mainImg === image ? "border-black/50" : "hover:border-black/20"
            }`}
            onClick={() => setMainImg(image)}
          >
            <img src={image} alt={slug} className="w-20 md:w-24" />
          </button>
        ))}
      </div>
      <div className="">
        <img src={mainImg} alt={slug} />
      </div>
    </section>
  );
}

interface ProductImagesProps {
  images: string[];
  slug: string;
}
