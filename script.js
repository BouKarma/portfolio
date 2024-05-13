const optionAbout = document.getElementById('about');
const optionResume = document.getElementById('resume');
const optionWorks = document.getElementById('works');
const optionBlogs = document.getElementById('blogs');
const optionContact = document.getElementById('contact');

const aboutContent = document.getElementById('about-content');
const resumeContent = document.getElementById('resume-content');
const worksContent = document.getElementById('works-content');
const blogsContent = document.getElementById('blogs-content');
const contactContent = document.getElementById('contact-content');

optionAbout.addEventListener('change', () => {
  if (optionAbout.checked) {
    aboutContent.classList.add('active');
    resumeContent.classList.remove('active');
    worksContent.classList.remove('active');
    blogsContent.classList.remove('active');
    contactContent.classList.remove('active');
  }
});

optionResume.addEventListener('change', () => {
  if (optionResume.checked) {
    aboutContent.classList.remove('active');
    resumeContent.classList.add('active');
    worksContent.classList.remove('active');
    blogsContent.classList.remove('active');
    contactContent.classList.remove('active');
  }
});

optionWorks.addEventListener('change', () => {
  if (optionWorks.checked) {
    aboutContent.classList.remove('active');
    resumeContent.classList.remove('active');
    worksContent.classList.add('active');
    blogsContent.classList.remove('active');
    contactContent.classList.remove('active');
  }
});

optionBlogs.addEventListener('change', () => {
  if (optionBlogs.checked) {
    aboutContent.classList.remove('active');
    resumeContent.classList.remove('active');
    worksContent.classList.remove('active');
    blogsContent.classList.add('active');
    contactContent.classList.remove('active');
  }
});

optionContact.addEventListener('change', () => {
  if (optionContact.checked) {
    aboutContent.classList.remove('active');
    resumeContent.classList.remove('active');
    worksContent.classList.remove('active');
    blogsContent.classList.remove('active');
    contactContent.classList.add('active');
  }
});

const categoryAll = document.querySelector("#all-radio");
const categoryMockup = document.querySelector("#mockup-radio");
const categoryGraphic = document.querySelector("#graphic-design-radio");
const categoryLogo = document.querySelector("#logo-radio");

const allClass = document.querySelector("#all");
const mockupClass = document.querySelector("#mockup");
const graphicClass = document.querySelector("#graphic-design");
const logoClass = document.querySelector("#logo");

categoryAll.addEventListener('change', () => {
  if (categoryAll.checked) {
    allClass.classList.add('checked');
    mockupClass.classList.remove('checked');
    graphicClass.classList.remove('checked');
    logoClass.classList.remove('checked');
  }
});

categoryMockup.addEventListener('change', () => {
  if (categoryMockup.checked) {
    allClass.classList.remove('checked');
    mockupClass.classList.add('checked');
    graphicClass.classList.remove('checked');
    logoClass.classList.remove('checked');
  }
});

categoryGraphic.addEventListener('change', () => {
  if (categoryGraphic.checked) {
    allClass.classList.remove('checked');
    mockupClass.classList.remove('checked');
    graphicClass.classList.add('checked');
    logoClass.classList.remove('checked');
  }
});

categoryLogo.addEventListener('change', () => {
  if (categoryLogo.checked) {
    allClass.classList.remove('checked');
    mockupClass.classList.remove('checked');
    graphicClass.classList.remove('checked');
    logoClass.classList.add('checked');
  }
});