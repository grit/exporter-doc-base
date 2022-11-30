export default function gallery() {
  const gallery = document.querySelectorAll('.uig-gallery');

  if(gallery.length > 0) {
    [].slice.call(gallery).forEach((gl) => {
      const thumbnails = gl.querySelectorAll('.uig-gallery__thumb > a');
      const images = gl.querySelectorAll('.uig-gallery__image');

      [].slice.call(images).forEach((img, index) => {
        const image = img.querySelector('img');
        if(image) {
          const imageClone = image.cloneNode();
          thumbnails[index].appendChild(imageClone);
        }else {
          thumbnails[index].prepend(index + 1);
        }
      });
    });
  }
}
