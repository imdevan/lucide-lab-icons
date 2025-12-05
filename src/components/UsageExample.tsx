import { Code } from 'lucide-react';

export const UsageExample = () => {
  const codeExample = `import { Icon } from 'lucide-react';
import { coconut } from '@lucide/lab';

const App = () => (
  <Icon iconNode={coconut} />
);`;

  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-4">
        <Code className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold">How to use</h2>
      </div>
      
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-4 py-2 bg-muted/50 border-b border-border">
          <span className="text-xs font-mono text-muted-foreground">example.tsx</span>
        </div>
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm font-mono text-foreground/90">{codeExample}</code>
        </pre>
      </div>
    </section>
  );
};
