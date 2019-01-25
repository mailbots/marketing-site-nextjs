# marketing-site

www.mailbots.com

## Development

```sh
$ npm run dev
```

## Building for production

```sh
$ npm run build
```

After running the `build` script, you can publish the generated `/out` folder to any webserver.

It's advisable to set cache headers for the generated js/css/image files to never expire the files - see https://immutablewebapps.org/ - NOTE: don't add non-expiring cache headers to html files.

This way, the resources will be cached for an indeterminate amount of time. Yet, new releases/builds will change the file names with different hashes, so they will be fetched again by the browser.
