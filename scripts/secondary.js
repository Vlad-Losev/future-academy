// Аккордеон
document.addEventListener("DOMContentLoaded", function() {
  const accordionItems = document.querySelectorAll(".accordion-1__item");

  accordionItems.forEach(item => {
    const accordionHeader = item.querySelector(".accordion-1__header");
    const accordionContent = item.querySelector(".accordion-1__content");
    const accordionContent2 = item.querySelector(".accordion-2__content");

    accordionHeader.addEventListener("click", function() {
      // Закрываем все вкладки, кроме текущей
      accordionItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
          const otherContent = otherItem.querySelector(".accordion-1__content");
          otherContent.style.maxHeight = null;
        }
      });

      if (item.classList.contains("active")) {
        item.classList.remove("active");
        accordionContent.style.maxHeight = null;
      } else {
        item.classList.add("active");
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px" + accordionContent2.scrollHeight + "px";
      }
    });
  });
  
  // Закрываем вкладки при клике за пределы аккордеона
  document.addEventListener("click", function(event) {
    const isOutsideAccordion = !event.target.closest(".accordion-1");
    if (isOutsideAccordion) {
      accordionItems.forEach(item => {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
          const content = item.querySelector(".accordion-1__content");
          content.style.maxHeight = null;
        }
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const accordionItems = document.querySelectorAll(".accordion-2__item");

  accordionItems.forEach(item => {
    const accordionHeader = item.querySelector(".accordion-2__header");
    const accordionContent = item.querySelector(".accordion-2__content");

    accordionHeader.addEventListener("click", function() {
      // Закрываем все вкладки, кроме текущей
      accordionItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
          const otherContent = otherItem.querySelector(".accordion-2__content");
          otherContent.style.maxHeight = null;
        }
      });

      if (item.classList.contains("active")) {
        item.classList.remove("active");
        accordionContent.style.maxHeight = null;
      } else {
        item.classList.add("active");
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      }
    });
  });
  
  // Закрываем вкладки при клике за пределы аккордеона
  document.addEventListener("click", function(event) {
    const isOutsideAccordion = !event.target.closest(".accordion-2");
    if (isOutsideAccordion) {
      accordionItems.forEach(item => {
        if (item.classList.contains("active")) {
          item.classList.remove("active");
          const content = item.querySelector(".accordion-2__content");
          content.style.maxHeight = null;
        }
      });
    }
  });
});

// Модальное окно
const modalController = ({modal, btnOpen, btnClose, time = 300}) => {
  const buttonElems = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);

  // Открытие модального окна
  modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity ${time}ms easy-in-out;
  `;

  // Закрытие модального окна
  const closeModal = event => {
    const target = event.target;

    if (target === modalElem || 
      (btnClose && target.closest(btnClose)) ||
      event.code === 'Escape'
      ) {
      modalElem.style.opacity = 0;

      setTimeout(() => {
        modalElem.style.visibility = 'hidden'; 
      }, time);

      window.removeEventListener('keydown', closeModal);
    }
  }

  // Открытие модального окна
  const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
    window.addEventListener('keydown', closeModal)
  };

  buttonElems.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  modalElem.addEventListener('click', closeModal);
}

modalController({
  modal: '.modal-1',
  btnOpen: '.modal-btn-1',
  btnClose: '.modal__close',
});

// Бургер жи есть
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function() {
      document.querySelector(".header").classList.toggle("open")
  });
})
// Закрыть меню при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.querySelector(".header").classList.remove("open")
  }
});

// Закрыть меню при клике вне его
document.getElementById("menu").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
  if (event._isClickWithInMenu) return;
  document.querySelector(".header").classList.remove("open")
});

// Табы
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}