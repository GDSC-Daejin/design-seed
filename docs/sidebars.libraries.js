// eslint-disable-next-line @typescript-eslint/no-var-requires

const path = require('path');

const globby = require('globby');
const pnpapi = require('pnpapi');

const groups = {};

(async function () {
  const BASE_PATH = path.resolve(__dirname, '../packages');
  const paths = globby
    .sync('**/*.md', {
      cwd: BASE_PATH,
    })
    .filter(
      (x) =>
        !x.endsWith('/CHANGELOG.md') ||
        !x.endsWith('index.ts.docs.md') ||
        !x.endsWith('styled.ts.docs.md'),
    )
    .sort();


  console.log(globby
      .sync('**/*.md', {
        cwd: BASE_PATH,
      }).filter(
          (x) =>
              !x.includes('/CHANGELOG.md') ||
              !x.includes('index.ts.docs.md') ||
              !x.includes('styled.ts.docs.md'),
      ))



  for (const p of paths) {
    const { name } = pnpapi.findPackageLocator(`${BASE_PATH}/${p}`);

    if (groups[name] == null) {
      groups[name] = [];
    }

    const isIndex = p.endsWith('README.md');

    const id = p.replace(new RegExp(`^${BASE_PATH}`), '').replace(/\.md$/, '');

    if (isIndex) {
      groups[name].unshift(id);
    } else {
      groups[name].push(id);
    }
  }
})();

module.exports = {
  librariesSidebar: groups,
};
