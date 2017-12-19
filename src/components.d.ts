/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/router';

import {
  ImgData,
} from './cnst/images';

import {
  AppFooter as AppFooter
} from './components/app-footer/app-footer';

declare global {
  interface HTMLAppFooterElement extends AppFooter, HTMLElement {
  }
  var HTMLAppFooterElement: {
    prototype: HTMLAppFooterElement;
    new (): HTMLAppFooterElement;
  };
  interface HTMLElementTagNameMap {
    "app-footer": HTMLAppFooterElement;
  }
  interface ElementTagNameMap {
    "app-footer": HTMLAppFooterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-footer": JSXElements.AppFooterAttributes;
    }
  }
  namespace JSXElements {
    export interface AppFooterAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  AppHeader as AppHeader
} from './components/app-header/app-header';

declare global {
  interface HTMLAppHeaderElement extends AppHeader, HTMLElement {
  }
  var HTMLAppHeaderElement: {
    prototype: HTMLAppHeaderElement;
    new (): HTMLAppHeaderElement;
  };
  interface HTMLElementTagNameMap {
    "app-header": HTMLAppHeaderElement;
  }
  interface ElementTagNameMap {
    "app-header": HTMLAppHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-header": JSXElements.AppHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHeaderAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  AppImage as AppImage
} from './components/app-image/app-image';

declare global {
  interface HTMLAppImageElement extends AppImage, HTMLElement {
  }
  var HTMLAppImageElement: {
    prototype: HTMLAppImageElement;
    new (): HTMLAppImageElement;
  };
  interface HTMLElementTagNameMap {
    "app-image": HTMLAppImageElement;
  }
  interface ElementTagNameMap {
    "app-image": HTMLAppImageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-image": JSXElements.AppImageAttributes;
    }
  }
  namespace JSXElements {
    export interface AppImageAttributes extends HTMLAttributes {
      
        imgData?: ImgData
    }
  }
}


import {
  AppImages as AppImages
} from './components/app-images/app-images';

declare global {
  interface HTMLAppImagesElement extends AppImages, HTMLElement {
  }
  var HTMLAppImagesElement: {
    prototype: HTMLAppImagesElement;
    new (): HTMLAppImagesElement;
  };
  interface HTMLElementTagNameMap {
    "app-images": HTMLAppImagesElement;
  }
  interface ElementTagNameMap {
    "app-images": HTMLAppImagesElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-images": JSXElements.AppImagesAttributes;
    }
  }
  namespace JSXElements {
    export interface AppImagesAttributes extends HTMLAttributes {
      
        imgs?: ImgData[],
        maxHeight?: number
    }
  }
}


import {
  AppRoot as AppRoot
} from './components/app-root/app-root';

declare global {
  interface HTMLAppRootElement extends AppRoot, HTMLElement {
  }
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };
  interface HTMLElementTagNameMap {
    "app-root": HTMLAppRootElement;
  }
  interface ElementTagNameMap {
    "app-root": HTMLAppRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-root": JSXElements.AppRootAttributes;
    }
  }
  namespace JSXElements {
    export interface AppRootAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  ContactPage as ContactPage
} from './components/contact-page/contact-page';

declare global {
  interface HTMLContactPageElement extends ContactPage, HTMLElement {
  }
  var HTMLContactPageElement: {
    prototype: HTMLContactPageElement;
    new (): HTMLContactPageElement;
  };
  interface HTMLElementTagNameMap {
    "contact-page": HTMLContactPageElement;
  }
  interface ElementTagNameMap {
    "contact-page": HTMLContactPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "contact-page": JSXElements.ContactPageAttributes;
    }
  }
  namespace JSXElements {
    export interface ContactPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  MyName as HomePage
} from './components/home-page/home-page';

declare global {
  interface HTMLHomePageElement extends HomePage, HTMLElement {
  }
  var HTMLHomePageElement: {
    prototype: HTMLHomePageElement;
    new (): HTMLHomePageElement;
  };
  interface HTMLElementTagNameMap {
    "home-page": HTMLHomePageElement;
  }
  interface ElementTagNameMap {
    "home-page": HTMLHomePageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "home-page": JSXElements.HomePageAttributes;
    }
  }
  namespace JSXElements {
    export interface HomePageAttributes extends HTMLAttributes {
      
        segment?: string
    }
  }
}

