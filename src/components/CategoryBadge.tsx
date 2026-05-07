import { categoryIcons, categoryStyles } from "@/lib/icons";
import type { CraftCategory } from "@/types/craft";

type CategoryBadgeProps = {
  category: CraftCategory;
  className?: string;
};

export function CategoryBadge({ category, className }: CategoryBadgeProps) {
  const Icon = categoryIcons[category];
  const style = categoryStyles[category];
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs uppercase tracking-wide text-neutral-500 ${
        className ?? ""
      }`}
    >
      <Icon
        aria-hidden
        className={`h-3.5 w-3.5 ${style.iconText}`}
        strokeWidth={1.8}
      />
      {category}
    </span>
  );
}
