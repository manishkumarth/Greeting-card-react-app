import { useContext } from 'react';
import { TemplateContext } from '../context/templateContext';

function PopUpModal() {
  const { templateName } = useContext(TemplateContext);
  const openEditor = () => {
    console.log('');
  };
  return (
    <>
      <div
        class="modal fade"
        id="popUpModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                {templateName.name}
              </h1>
            </div>
            <div class="modal-body">
              <img src={templateName.bgimg} alt="bg-template-img" />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Change
              </button>
              <button
                onClick={openEditor}
                type="button"
                class="btn btn-primary"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PopUpModal;
