module.exports = {
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  '**/*.+(js|ts|tsx)': ['eslint "**/*.{js,ts,tsx}"', 'prettier --write "**/*.{js,ts,tsx}"'],
}
