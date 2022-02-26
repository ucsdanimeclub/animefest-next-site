# Introduction

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the pages by modifying the pages in the `pages` folder. Pages auto-update as you save the file ("hot reloading").

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

# animefest.ucsd.moe

## BasePath

## Packages

## Files Guide

### **Pages**

### _app.js

This "page" overrides the default App component that initializes pages. Recommended to use for page layouts that are used in all pages (eg. the `components/layout.js` component that contains the Navbar and footer is always present in all pages, so it is called here).

This project also contains the HTML `<head>` tag in this file.

### index.js

This page is the default page that loads when visiting [animefest.ucsd.moe](https://animefest.ucsd.moe).

### **Components**

### layout.js

This component contains the Navbar as well as footer tags. It is called in `pages/_app.js`.

### myimage.js

This component is a substitute for the <image> or <Image> tag. It is a workaround to the basePath issue that Next.js has with GitHub Pages, so please use this component instead of the regular image tags.

### sponsor.js

This component reads `data/sponsors.json` and formats it into a grid. This component is called in the `layout.js` footer, so that they are displayed a the bottom of every page.

Sponsor logos are placed on a white background for visibility.

### index/background.js

This component is only used in `pages/index.js`. It places the Animefest landing image within the first Container in the page.

### index/programscarousel.js

This component is only used in `pages/index.js`. This component reads `data/programs.json` and returns a Carousel.

### index/social.js

This component is only used in `pages/index.js`. This component reads `data/socials.json` and returns a horizontal ListGroup of the social media icons.

### **Data**

### programs.json

This JSON file contains the name, image source, and descriptions of Animefest programs. Each program should correspond to each page (except `pages/index.js`).

### socials.json

This JSON file contains the name, social media icon source, and URL for each social media page we want to share.

Please download icons from the social media's official Branding page.

### sponsors.json

This JSON file contains the name, logo image source, and URL for each sponsor we have for the year.

Please ask your sponsor to provide the logo image, or download it from the sponsor's official Branding or Media/Press Kit page.

### **Images**

Images are contained in the `public/images` folder. The FavIcon is in `public` folder.

Since we do not have a server, it is recommended to use .SVG or .JPEG files for fast loading times.

### **Styles**

### globals.css


## Credits

Designed and programmed by Kaitlyn Chan.
