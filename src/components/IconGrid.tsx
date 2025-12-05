import { IconCard } from './IconCard';

interface IconGridProps {
  icons: { name: string; iconNode: any }[];
}

export const IconGrid = ({ icons }: IconGridProps) => {
  if (icons.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
          <span className="text-2xl">🔍</span>
        </div>
        <p className="text-muted-foreground text-lg">No icons found</p>
        <p className="text-muted-foreground/70 text-sm mt-1">Try a different search term</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
      {icons.map((icon, index) => (
        <IconCard key={icon.name} name={icon.name} iconNode={icon.iconNode} index={index} />
      ))}
    </div>
  );
};
