// Navbar control
import navbar from "./bundle/navbar";
navbar();

// Gallery
import gallery from "./bundle/gallery";
gallery();

// Luminous(Lightbox) plugin
import LuminousGallery from "./bundle/luminous/LuminousGallery";
import Luminous from "./bundle/luminous/Luminous";
const luminousTrigger = document.querySelectorAll('.popup-img');
const luminousOptions = {
  caption: function (trigger) {
    return trigger.querySelector('img').getAttribute('alt');
  },
}
if( luminousTrigger !== null ) {
  if(luminousTrigger.length > 1) {
    new LuminousGallery(luminousTrigger,{}, luminousOptions);
  }else {
    new Luminous(luminousTrigger[0], luminousOptions);
  }
}

// Do/Don't
import doDont from "./bundle/doDont";
doDont();