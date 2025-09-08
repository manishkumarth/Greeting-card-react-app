import { Modal } from 'bootstrap';

export const UseModalHook = () => {
  function showLoader(ele) {
    const element = document.getElementById(ele);
    let loaderModal = Modal.getInstance(element);

    if (!loaderModal) {
      loaderModal = new Modal(element); // create if not exists
    }

    loaderModal.show();
  }

  function hideLoader(ele) {
    const element = document.getElementById(ele);
    const loaderModal = Modal.getInstance(element);

    if (loaderModal) {
      loaderModal.hide();
    }
  }

  return [showLoader, hideLoader];
};
