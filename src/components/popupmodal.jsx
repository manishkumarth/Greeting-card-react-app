import { useContext } from 'react';
import { TemplateContext } from '../context/templateContext';
import { useNavigate } from 'react-router-dom';
import { UseModalHook } from '../hooks/modals';

function PopUpModal() {
  const { templateName } = useContext(TemplateContext);
  const [showLoader,hideLoader] = UseModalHook()
  const navigate = useNavigate()
  const openEditor = () => {
    console.log('editor page redirect');
   
    console.log("result is: ")

      hideLoader('popUpModal')
      showLoader("Loader")
      setTimeout(()=>{
        navigate("/editPage", { state: { userId: 123 } });
        hideLoader("Loader")
      },1000)

  };
  return (
    <>
      <div
        className="modal fade"
        id="popUpModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {templateName.name}
              </h1>
            </div>
            <div className="modal-body">
              <img width="100%" src={templateName.bgimg} alt="bg-template-img" />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Change
              </button>
              <button
                onClick={openEditor}
                type="button"
                className="btn btn-primary"
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
