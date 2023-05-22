const faqContainer = document.querySelector(".faq-container");
const faqTitle = document.querySelector(".faq-title");
const faqContent = document.querySelector(".faq-content");
const faqIcon = document.querySelector(".faq-icon");

// faqTitle.onclick = () => {
//   faqContent.classList.toggle("show");
//   faqIcon.classList.toggle("rotate-45");
// };

// faqTitle.addEventListener('click', ()=>{
//   faqContent.classList.toggle("show");
//   faqIcon.classList.toggle("rotate-45");
// })

faqContainer.addEventListener('click', () => {
  // console.log(faqContainer.querySelector('.faq-title'));
  // console.log( event.target.closet('article').querySelector('.faq-content));
  
  //event.target=element that we click

  const clickedArticle = event.target.closest('article')
  const clickedFaqContent= clickedArticle.querySelector('.faq-content')
  const clickedFaqIcon= clickedArticle.querySelector('.faq-icon')

  clickedFaqContent.classList.toggle('show')
  clickedFaqIcon.classList.toggle('rotate-45')

})
