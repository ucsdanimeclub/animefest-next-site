# Introduction

This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). You will need to have [Node.js](https://nodejs.org/en/) installed on your computer.

## Getting Started

First, clone the repository to your device.
Then, change directory into the project root and run `npm install`.

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the pages by modifying the pages in the `pages` folder. Pages auto-update as you save the file ("hot reloading").

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!

# animefest.ucsd.moe

## Pushing code

The default branch is ```main```; when your changes are ready you can update the ````production```` branch (what
actually goes to [animefest.ucsd.moe](https://animefest.ucsd.moe)) with the command `git push origin main:production`.
The site will be successfully updated if the build completes in the GitHub Actions tab.

Before pushing code, run `git pull` to avoid merge conflicts.

## BasePath

During development, the project was served on the
subdomain [ucsdanimeclub.github.io/animefest-next-site/](https://ucsdanimeclub.github.io/animefest-next-site/). By
default Next.js is not meant to be deployed on the sub-path of a domain, so `next.config.js` is edited to resolve this
issue by applying path prefixes when necessary. The `<MyImage>` tag is also created to resolve the issue when loading
image sources, so please use it instead of `<img>` or `<Image>` tags.

## Escape characters

If you would like to display the following characters, they will need to be replaced by the corresponding XML escape character:
* `"` : \&quot;
* `'` : \&apos;
* `&` : \&amp;
* `<` : \&lt;
* `>` : \&gt;

Failure to do so will cause the Actions build to fail, and your website update will not be published!

The only exception is JSON files, in which case you do not use escape characters.

## Libraries

### React-Bootstrap

This library contains helpful components that you can use to build the site.

Many components (eg. Carousel, ListGroup, Navbar) are from
the [React-Bootstrap](https://react-bootstrap.github.io/components/alerts/) library.

Use the React-Bootstrap `<Container>` tag instead of the regular Bootstrap container (`<div class="container">`).

## Files Guide

### Pages

#### _app.js

This "page" overrides the default App component that initializes pages. Recommended to use for page layouts that are
used in all pages (eg. the `components/navigation/layout.js` component that contains the Navbar and footer is always
present in all pages, so it is called here).

This project also contains the HTML `<head>` tag in this file.

#### index.js

This page is the default page that loads when visiting [animefest.ucsd.moe](https://animefest.ucsd.moe).

### Components

#### myimage.js

This component is a substitute for the `<img>` or `<Image>` tag. It is a workaround to the basePath issue that Next.js
has with GitHub Pages, so please use this component instead of the regular image tags.

#### eventtable.js

This component reads data in the format of `data/panels.json` and returns a table with columns for each entry's
start-end times and topic.

#### programscarousel.js

This component reads data in the format of `data/programs.json` and returns a Carousel.

#### navigation/layout.js

This component contains the Navbar as well as footer tags. It is called in `pages/_app.js`.

#### navigation/sponsor.js

This component uses the data from `data/sponsors.json` and formats it into a grid. This component is called in
the `layout.js` footer, so that they are displayed at the bottom of every page.

Sponsor logos are placed on a white background for visibility.

#### index/background.js

This component is seen in `pages/index.js`. It is used to place the Animefest landing image within the first Container
in the page.

#### index/social.js

This component is seen in `pages/index.js`. This component uses the data from `data/socials.json` and returns a
horizontal ListGroup of the social media icons.

#### exhibitor/exhibitortable.js

This component is seen in `pages/exhibitor.js` It can read `data/artists.json` or `data/vendors.json` and returns a
Table.

#### prizes/prizedisplay.js

This component receives data in the format of `data/prizes.json` and a list of relevant locations to display. It returns
a tab-separated list (flexbox) of prize images using the `prizes/prizeimages.js` component.

#### prizes/prizeimages.js

This component receives a list of prize image sources and returns a list (flexbox) of prize images. Use this instead
of `prizes/prizedisplay.js` if you don't need tabs.

### Data

Data is read from JSON files so we can change content without changing structure. Components like carousels and lists
benefit from this practice as entries can be numerous or change with each year.

#### programs.json

This JSON file contains the name, image source, and descriptions of Animefest programs. Each program should correspond
to each page (except `pages/index.js`).

#### socials.json

This JSON file contains the name, social media icon source, and URL for each social media page we want to share.

Please download icons from the social media's official Branding page.

#### sponsors.json

This JSON file contains the name, logo image source, and URL for each sponsor we have for the year.

Please ask your sponsor to provide the logo image, or download it from the sponsor's official Branding or Media/Press
Kit page.

#### panels.json

This JSON file contains the start and end time, panel topic, panelist display name, and description for each panel, by
the room that they are hosted in.

#### prizes.json

This JSON file contains all of the prizes given out at Animefest. Each prize has an image source and the prize pool it
belongs to.

#### artists.json

This JSON file contains the display names and links of each artist we have for the year.

#### vendors.json

This JSON file contains the organization names and links of each vendor we have for the year.

### Images

Images are contained in the `public/images` folder. The FavIcon is in the `public` folder.

Since we do not have a server, it is recommended to use .SVG or .JPEG files for fast loading times.

### Styles

#### globals.css

The CSS file for pages and components to use. To use a style in Next.js, you must use the `className` prop in the
desired tag instead of `class`.

#### fonts.css

This file is located in the `public` folder. It contains the imports for the site's fonts. This file is loaded
in `pages/_app.js`.

#### theme.scss

This file is only used to overwrite Bootstrap's default styling. It does this by defining the custom styles before
importing Bootstrap.

### next.config.js

Mainly used to adjust the basePath when the website is served on a subdomain (
i.e. [ucsdanimeclub.github.io/animefest-next-site/](https://ucsdanimeclub.github.io/animefest-next-site/)) instead
of [animefest.ucsd.moe](https://animefest.ucsd.moe).

### CNAME

A record that contains the domain name. GitHub Actions copies this file into its output when building the project.

## Credits

Original 2021-2022 website designed and programmed by Kaitlyn Chan.
