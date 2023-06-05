(() => {
  const refs = {
    // two buttons one window
    openBuynowModalBtn: document.querySelector('[data-buynow-modal-open-first]'),
    openBuynowModalBtnSecond: document.querySelector('[data-buynow-modal-open-second]'),
    closeBuynowModalBtn: document.querySelector('[data-buynow-modal-close]'),
    modalBuynow: document.querySelector('[data-buynow-modal]'),
    // review modal
    openReviewModalBtn: document.querySelector('[data-review-modal-open]'),
    closeReviewModalBtn: document.querySelector('[data-review-modal-close]'),
    modalReview: document.querySelector('[data-review-modal]'),
    // subscribe modal
    openSubscribeModalBtn: document.querySelector('[data-subscribe-modal-open]'),
    closeSubscribeModalBtn: document.querySelector('[data-subscribe-modal-close]'),
    modalSubscribe: document.querySelector('[data-subscribe-modal]'),
  };
  refs.openBuynowModalBtn.addEventListener('click', toggleModal);
  refs.openBuynowModalBtnSecond.addEventListener('click', toggleModal);
  refs.closeBuynowModalBtn.addEventListener('click', toggleModal);
  refs.openReviewModalBtn.addEventListener('click', toggleReviewModal);
  refs.closeReviewModalBtn.addEventListener('click', toggleReviewModal);
  refs.openSubscribeModalBtn.addEventListener('click', toggleSubscribeModal);
  refs.closeSubscribeModalBtn.addEventListener('click', toggleSubscribeModal);
  function toggleModal() {
    refs.modalBuynow.classList.toggle('is-hidden');
  }
  function toggleReviewModal() {
    refs.modalReview.classList.toggle('is-hidden');
  }
   function toggleSubscribeModal() {
     refs.modalSubscribe.classList.toggle('is-hidden');
   }
})();