import path from "path";

const buildEslintCommand = (filenames) =>
  `eslint --fix --format=stylish ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" ")}`;

const buildPrettierCommand = (filenames) =>
  `prettier --write ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" ")}`;

const buildTypeCheckCommand = (filenames) => {
  // Only run TypeScript check if there are TypeScript files
  const tsFiles = filenames.filter(f => f.endsWith('.ts') || f.endsWith('.tsx'));
  if (tsFiles.length === 0) return null;
  
  // Run TypeScript check on the entire project to catch all type errors
  return 'npx tsc --noEmit';
};

const lintStagedConfig = {
  "*.{js,jsx,ts,tsx}": [
    buildEslintCommand, 
    buildPrettierCommand
  ],
  // Run TypeScript check separately to ensure it always runs
  "*.{ts,tsx}": [buildTypeCheckCommand].filter(Boolean),
};

export default lintStagedConfig;
