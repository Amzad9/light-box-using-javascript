const modal = document.querySelector('.modal');
const preview = document.querySelectorAll('.gallary-container img');
const original = document.querySelector('.full-image');
const imgText = document.querySelector('.caption-text');

preview.forEach(preview => {
   preview.addEventListener('click', () =>{
       modal.classList.add('open');
       original.classList.add("open");
       const originalSrc = preview.getAttribute("data-original");
       original.src = `./images/${originalSrc}`;
       const captext = preview.getAttribute('alt');
       imgText.innerHTML = captext;
   })
})

modal.addEventListener('click', (e) => {
   if(e.target.classList.contains('modal')){
       modal.classList.remove('open');
       original.classList.remove("open");
   }
})