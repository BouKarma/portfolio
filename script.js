const tabs = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('.text');
const radio_btn = document.querySelectorAll('.radio_btn');

radio_btn.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(tab => { tab.checked = false; });
        tab.checked = true;

        all_content.forEach(content => { content.classList.remove('active'); });
        all_content[index].classList.add('active');
    });
});

const categorys = document.querySelectorAll('.category');
const category_radio = document.querySelectorAll('.category_radio');
const category_content = document.querySelectorAll('.card');


category_radio.forEach((category, index) => {
  category.addEventListener('click', (e) => {
      category_radio.forEach(content => { content.checked = false; });
      category_radio[index].checked = true;

      categorys.forEach(content => { content.classList.remove('checked'); });
      categorys[index].classList.add('checked');
      
      if (categorys[index].id === 'all') {
        category_content.forEach(content => {
          content.classList.add('active');
        });
      } else {
        category_content.forEach(content => {
          content.classList.remove('active');
        });
        const id = categorys[index].id;
        
        category_content.forEach(content => {
          if (content.classList.contains(categorys[index].id)) {
            content.classList.add('active')
          }
        });
      }
      
  });
});