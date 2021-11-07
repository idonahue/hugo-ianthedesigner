# hugo-ianthedesigner

## Install Hugo
If you are on macOS and using Homebrew, you can install Hugo with the following one-liner:
```brew install hugo```

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
Site is hosted on Netlify.com. Commit changes to `Production` branch and Netlify will fetch the changes and automatically build the site to https://ianthedesigner.com . No need for complex deployment. It is automatic. 
