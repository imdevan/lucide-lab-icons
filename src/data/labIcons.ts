import * as labIcons from '@lucide/lab';

// Get all icon exports from @lucide/lab
// Filter to only get actual icon data (arrays) not utility functions
export const getAllLabIcons = () => {
  const icons: { name: string; iconNode: typeof labIcons.coconut }[] = [];
  
  for (const [key, value] of Object.entries(labIcons)) {
    // Icon nodes are arrays, skip non-icon exports
    if (Array.isArray(value)) {
      icons.push({
        name: key,
        iconNode: value as typeof labIcons.coconut,
      });
    }
  }
  
  return icons.sort((a, b) => a.name.localeCompare(b.name));
};

export const labIconsList = getAllLabIcons();
