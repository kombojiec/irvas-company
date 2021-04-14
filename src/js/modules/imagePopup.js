
const imagePopup = () => {

  const imageContainer = document.querySelector('.works');
  const imagePopup = document.createElement('figure');
  const image = document.createElement('img');
  imagePopup.classList.add('popup');

  imagePopup.style.justifyContent = 'center';
  imagePopup.style.alignItems = 'center';
  image.style.width = '60%';

  document.body.append(imagePopup);
  imagePopup.append(image);

  imageContainer.addEventListener('click', event => {
    event.preventDefault();
    if(event.target.classList.contains('preview')){
      const src = event.target.getAttribute('src');
      const alt = event.target.getAttribute('alt');
      image.setAttribute('src', src);
      image.setAttribute('alt', alt);
      imagePopup.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  })

  imagePopup.addEventListener('click', event => {
    if(event.target == event.currentTarget){
      imagePopup.style.display = 'none';
      document.body.style.overflow = '';
    }
  })

}

export default imagePopup;