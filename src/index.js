// `Element.getBoundingClientRect().top` returns the number of pixels
// from the top of the viewport to the top of this element along the Y axis.

// `Element.scrollTo()` has an `options` parameter which is a JavaScript Object
// with a `top` key that specifies the number of pixels to scroll
// from the top of this element along the Y axis.

const logging = false;

const btnOneToSection = 'five';

document.getElementById('btn-one').onclick = function () {
  const topSection = document.getElementById('one');
  const topSectionPos = topSection.getBoundingClientRect();
  logging && console.log(topSectionPos.top);

  const scrollToSection = document.getElementById(btnOneToSection);
  const scrollToSectionPos = scrollToSection.getBoundingClientRect();
  logging && console.log(scrollToSectionPos.top);

  const sections = document.querySelector('.sections');
  sections.scrollTo({
    left: 0,
    top: scrollToSectionPos.top + (0 - topSectionPos.top),
    behavior: 'smooth',
  });
};

const btnTwoToSection = 'one';

document.getElementById('btn-two').onclick = function () {
  const topSection = document.getElementById('one');
  const topSectionPos = topSection.getBoundingClientRect();
  logging && console.log(topSectionPos.top);

  const scrollToSection = document.getElementById(btnTwoToSection);
  const scrollToSectionPos = scrollToSection.getBoundingClientRect();
  logging && console.log(scrollToSectionPos.top);

  const sections = document.querySelector('.sections');
  sections.scrollTo({
    left: 0,
    top: scrollToSectionPos.top + (0 - topSectionPos.top),
    behavior: 'smooth',
  });
};
