import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  totalCount: number;
  filteredCount: number;
}

export const SearchBar = ({ value, onChange, totalCount, filteredCount }: SearchBarProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <input
        type="text"
        placeholder="Search icons..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input pl-12 pr-24"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-20 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-md transition-colors"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>
      )}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-mono">
        {filteredCount}/{totalCount}
      </div>
    </div>
  );
};
