import { useState } from 'react';
import { Code, Check, Copy } from 'lucide-react';
import { toast } from 'sonner';

interface UsageExampleProps {
  selectedIcon: string;
}

export const UsageExample = ({ selectedIcon }: UsageExampleProps) => {
  const [copied, setCopied] = useState(false);

  const codeExample = `import { Icon } from 'lucide-react';
import { ${selectedIcon} } from '@lucide/lab';

const App = () => (
  <Icon iconNode={${selectedIcon}} />
);`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeExample);
    setCopied(true);
    toast.success('Code copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-4">
        <Code className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold">How to use</h2>
      </div>
      
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-4 py-2 bg-muted/50 border-b border-border flex items-center justify-between">
          <span className="text-xs font-mono text-muted-foreground">example.tsx</span>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-muted transition-colors"
            title="Copy code"
          >
            {copied ? (
              <Check className="w-4 h-4 text-primary" />
            ) : (
              <Copy className="w-4 h-4 text-muted-foreground" />
            )}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm font-mono text-foreground/90">{codeExample}</code>
        </pre>
      </div>
    </section>
  );
};
