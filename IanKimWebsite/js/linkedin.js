const linkedinimg = document.querySelector('.linkedin-img');
linkedinimg.classList.remove('linkedin-img-transition');

const linkedinimgobserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      linkedinimg.classList.add('linkedin-img-transition');
      return;
    }

    linkedinimg.classList.remove('linkedin-img-transition');
  });
});

linkedinimgobserver.observe(document.querySelector('.linkedin-inner'));

const linkedintext = document.querySelector('.linkedin-text');
linkedintext.classList.remove('linkedin-text-transition');

const linkedintextobserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      linkedintext.classList.add('linkedin-text-transition');
      return;
    }

    linkedintext.classList.remove('linkedin-text-transition');
  });
});

linkedintextobserver.observe(document.querySelector('.linkedin-inner'));

const linkedintext2 = document.querySelector('.linkedin-text2');
linkedintext2.classList.remove('linkedin-text2-transition');

const linkedintext2observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      linkedintext2.classList.add('linkedin-text2-transition');
      return;
    }

    linkedintext2.classList.remove('linkedin-text2-transition');
  });
});

linkedintext2observer.observe(document.querySelector('.linkedin-inner'));