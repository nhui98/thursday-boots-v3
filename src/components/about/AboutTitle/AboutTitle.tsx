export default function AboutTitle({ title, description }: HeaderProps) {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center gap-y-8 px-4 py-20  leading-8 lg:px-20 xl:px-60">
      <h2 className="text-center text-2xl font-semibold">{title}</h2>
      <p className="text-center">{description}</p>
    </section>
  );
}

export interface HeaderProps {
  title: string;
  description: string;
}
