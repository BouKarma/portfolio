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