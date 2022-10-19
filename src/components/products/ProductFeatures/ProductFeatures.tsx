export default function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <section className="container mx-auto px-4 sm:px-8">
      <h2 className="border-b-[1px] py-3 text-xl font-bold">
        Product Features
      </h2>
      <ul className="py-3 px-4">
        {features.map((feature) => (
          <li key={feature} className="list-outside list-disc py-2">
            {feature}
          </li>
        ))}
      </ul>
    </section>
  );
}

interface ProductFeaturesProps {
  features: string[];
}
