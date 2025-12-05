import { FlaskConical, Github, ExternalLink } from 'lucide-react';

export const Header = () => {
  return (
    <header className="text-center mb-12">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
        <FlaskConical className="w-4 h-4" />
        Experimental Icons
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
        Lucide Lab Icons
      </h1>
      
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
        A collection of experimental icons from the Lucide community. 
        Click any icon to copy its import statement.
      </p>
      
      <div className="flex items-center justify-center gap-4">
        <a
          href="https://github.com/lucide-icons/lucide-lab"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          <Github className="w-4 h-4" />
          View on GitHub
        </a>
        <a
          href="https://lucide.dev/guide/packages/lucide-react#with-lucide-lab-or-custom-icons"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
        >
          Documentation
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
};
