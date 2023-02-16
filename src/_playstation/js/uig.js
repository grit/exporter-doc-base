// Navbar control
import navbar from "./bundle/navbar";
navbar();

// Gallery
import gallery from "./bundle/gallery";
gallery();

// Luminous(Lightbox) plugin
import LuminousGallery from "./bundle/luminous/LuminousGallery";
const luminousTrigger = document.querySelectorAll('.popup-img');
const luminousOptions = {
  caption: function (trigger) {
    return trigger.querySelector('img').getAttribute('alt');
  },
}
if( luminousTrigger !== null ) {
  new LuminousGallery(luminousTrigger,{},luminousOptions);
}