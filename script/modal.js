(() => {
    const refs = {
      openModalBtn: document.querySelector('.openModal__button'),
      closeModalBtn: document.querySelector('.closeModal__button'),
      modal: document.querySelector('.backdrop'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();

  