module.exports = toolbox => {
  async function copyFiles(name) {
    const {
      filesystem: { copy, dir, },
      template: { generate },
    } = toolbox;

    await dir(name);

    const files = [
      'package.json.ejs',
      'README.md.ejs',
    ];

    const configFiles = files.reduce((acc, file) => {
      const template = `/${file}`;
      const target = `${name}/${file.replace('.ejs', '')}`;
      const props = { name };
      const gen = generate({ template, target, props });
      return acc.concat([gen]);
    }, []);

    await Promise.all(configFiles);

    return copy('../templates/source', `${name}/`, {
      overwrite: true,
    });
  }

  toolbox.copyFiles = copyFiles;
}