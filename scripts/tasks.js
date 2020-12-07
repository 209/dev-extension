require('shelljs/global');

exports.copyAssets = (type) => {
  const env = type === 'build' ? 'prod' : type;
  rm('-rf', type);
  mkdir(type);
  cp(`chrome/manifest.${env}.json`, `${type}/manifest.json`);
  cp('-R', 'browser/assets/*', type);
  exec(`pug -O "{ env: '${env}' }" -o ${type} chrome/views/`);
};

exports.copyTinymceSkins = (type) => {
  mkdir(`${type}/css/`);
  mkdir(`${type}/css/tinymce/`);
  mkdir(`${type}/css/tinymce/skins`);
  cp('-R', 'node_modules/tinymce/skins/', `${type}/css/tinymce/`);
};
