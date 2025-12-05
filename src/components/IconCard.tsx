import { Icon } from 'lucide-react';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { toast } from 'sonner';

interface IconCardProps {
  name: string;
  iconNode: Parameters<typeof Icon>[0]['iconNode'];
  index: number;
  onSelect: (name: string) => void;
}

export const IconCard = ({ name, iconNode, index, onSelect }: IconCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const importCode = `import { ${name} } from '@lucide/lab';`;
    await navigator.clipboard.writeText(importCode);
    setCopied(true);
    onSelect(name);
    toast.success('Copied to clipboard', {
      description: importCode,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="icon-card group opacity-0 animate-fade-in"
      style={{ animationDelay: `${Math.min(index * 20, 500)}ms` }}
      onClick={handleCopy}
      title={`Click to copy import for ${name}`}
    >
      <div className="relative w-10 h-10 flex items-center justify-center">
        <Icon iconNode={iconNode} className="w-6 h-6 text-icon-stroke transition-colors duration-200" />
      </div>
      <span className="text-xs font-mono text-muted-foreground truncate max-w-full px-1 group-hover:text-foreground transition-colors">
        {name}
      </span>
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {copied ? (
          <Check className="w-3.5 h-3.5 text-primary" />
        ) : (
          <Copy className="w-3.5 h-3.5 text-muted-foreground" />
        )}
      </div>
    </div>
  );
};
