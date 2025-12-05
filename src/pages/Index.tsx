import { useState, useMemo } from 'react';
import { labIconsList } from '@/data/labIcons';
import { Header } from '@/components/Header';
import { SearchBar } from '@/components/SearchBar';
import { IconGrid } from '@/components/IconGrid';
import { UsageExample } from '@/components/UsageExample';

const Index = () => {
  const [search, setSearch] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('coconut');

  const filteredIcons = useMemo(() => {
    if (!search.trim()) return labIconsList;
    
    const searchLower = search.toLowerCase();
    return labIconsList.filter((icon) =>
      icon.name.toLowerCase().includes(searchLower)
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Header />
        
        <UsageExample selectedIcon={selectedIcon} />
        
        <div className="mb-8">
          <SearchBar
            value={search}
            onChange={setSearch}
            totalCount={labIconsList.length}
            filteredCount={filteredIcons.length}
          />
        </div>
        
        <IconGrid icons={filteredIcons} onIconSelect={setSelectedIcon} />
        
        <footer className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Built with{' '}
            <a 
              href="https://lucide.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Lucide
            </a>
            {' '}and{' '}
            <a 
              href="https://lovable.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Lovable
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
