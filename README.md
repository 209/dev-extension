## DEV

```bash
# build files to './dev'
# static files: (ex.: injects)
$ yarn dev-s
# dinamyc files
$ yarn dev-r
```

## Build (PRE PROD)

```bash
# build files to './build'
$ yarn build
```

## Compress (PROD)

```bash
# compress build folder to {manifest.name}.zip and crx
$ yarn build
$ yarn compress -- [options]
```

#### Compress Options

If you want to build `crx` file (auto update), please provide options, and add `update.xml` file url in [manifest.json](https://developer.chrome.com/extensions/autoupdate#update_url manifest.json).

* --app-id: your extension id (can be get it when you first release extension)
* --key: your private key path (default: './key.pem')  
  you can use `npm run compress-keygen` to generate private key `./key.pem`
* --codebase: your `crx` file url
