(() => {
  const refs = {
    openModalBtn1: document.querySelector("[data-modal-open-3]"),
    closeModalBtn1: document.querySelector("[data-modal-close-3]"),
    modal1: document.querySelector("[data-modal-3]"),
	};

  refs.openModalBtn1.addEventListener("click", toggleModal);
  refs.closeModalBtn1.addEventListener("click", toggleModal);
  
  function toggleModal() {
    refs.modal1.classList.toggle("is-hidden");
  }
})();