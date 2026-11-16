import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type Props = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
};

const SectionHeader = ({ index, eyebrow, title, subtitle }: Props) => (
  <Reveal className="mb-12 md:mb-16 max-w-2xl">
    <p className="font-mono text-sm mb-4">
      <span className="text-primary">{index}</span>
      <span className="text-muted-foreground"> // {eyebrow}</span>
    </p>
    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
      {title}
    </h2>
    {subtitle && <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">{subtitle}</p>}
  </Reveal>
);

export default SectionHeader;
