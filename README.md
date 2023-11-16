# hugo-ianthedesigner

## Install Homebrew
If you don't have homebrew, install that. 
https://docs.brew.sh/Installation
```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"```

## Install Hugo
If you are on macOS and using Homebrew, you can install Hugo with the following one-liner:
```brew install hugo```

## Install SASS
If you are macOS, you will need to install SASS to run the compiling of the SASS
```brew install sass/sass/sass```
This doesn't require npm, just Homebrew


## Running the local developing

### Running Hugo
To run locally, go to the Hugo root directory. Run command `hugo server` which will output some files and give you a port to view the develpment. When a change is made, Hugo will automatically rebuild and update the browser.

Local port: `http://localhost:1313/`

### Running SASS watch and compile
To compile the SASS files, you will need to go to the theme SCSS file:
```cd themes/ianthedesigner-hugo/assets/css/scss```

Run: 
```sass --watch .:../```

## The hugo Command
The most common usage is probably to run `hugo` with your current directory being the input directory.

This generates your website to the `public/` directory by default, although you can customize the output directory in your site configuration by changing the publishDir field.

The command hugo renders your site into `public/` dir and is ready to be deployed to your web server:

```
hugo
0 draft content
0 future content
99 pages created
0 paginator pages created
16 tags created
0 groups created
in 90 ms
```


## Deployment
Site is hosted on Netlify.com. Commit changes to `master` branch and Netlify will fetch the changes and automatically build the site to https://ianthedesigner.com . No need for complex deployment. It is automatic.


## LiveReload
Hugo comes with LiveReload built in. There are no additional packages to install. A common way to use Hugo while developing a site is to have Hugo run a server with the `hugo server` command and watch for changes:

```
hugo server
0 draft content
0 future content
99 pages created
0 paginator pages created
16 tags created
0 groups created
in 120 ms
```

Watching for changes in ``/Users/yourname/sites/yourhugosite/{data,content,layouts,static}``
Serving pages from ``/Users/yourname/sites/yourhugosite/public`
Web Server is available at http://localhost:1313/
Press `Ctrl+C` to stop
This will run a fully functioning web server while simultaneously watching your file system for additions, deletions, or changes within the following areas of your project organization:

```
/static/*
/content/*
/data/*
/i18n/*
/layouts/*
/themes/<CURRENT-THEME>/*
config
```

Whenever you make changes, Hugo will simultaneously rebuild the site and continue to serve content. As soon as the build is finished, LiveReload tells the browser to silently reload the page.

Most Hugo builds are so fast that you may not notice the change unless looking directly at the site in your browser. This means that keeping the site open on a second monitor (or another half of your current monitor) allows you to see the most up-to-date version of your website without the need to leave your text editor.


## Compiling SCSS/SASS
Install SASS
`brew install sass/sass/sass`

Go to the SCSS/ Folder and run `sass --watch .:..` to have the SCSS compile to CSS in the parent director.

Navigate to: `hugo-ianthedesigner/themes/ianthedesigner-hugo/assets/css/scss/style.scss`
