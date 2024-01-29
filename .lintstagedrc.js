const path = require('path');

const formatCommand = 'prettier --write  --ignore-unknown';

const eslintCommand = (filenames) =>
  `next lint --quiet --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [formatCommand, eslintCommand],
  '!*.{js,jsx,ts,tsx}': [formatCommand],
};
