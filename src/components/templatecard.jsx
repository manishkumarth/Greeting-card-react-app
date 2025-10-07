import { useContext } from 'react';
import { TemplateContext } from '../context/templateContext';
import { UseModalHook } from '../hooks/modals';
import { Modal } from 'bootstrap';
import Template from './template';
import { bgContext } from '../context/bgcontext';

function TemplateCard({ templateName, templateBgImage }) {
  const [showLoader, hideLoader] = UseModalHook();
  const { setTemplateName } = useContext(TemplateContext);
  const {setBgImg}=useContext(bgContext)

  const selecteTempalte = (e) => {
    console.log('selected template');
    setTemplateName({ name: e.target.innerText, bgimg: templateBgImage });
    setBgImg(templateBgImage)
    showLoader('Loader');
    setTimeout(() => {
      hideLoader('Loader');
    }, 700);
    setTimeout(() => {
      showLoader('popUpModal');
    }, 650);
  };
  return (
    <div
      onClick={selecteTempalte}
      style={{
        backgroundImage: `url(${templateBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '300px',
        height: '200px',
        borderRadius: '8px',
        margin: '10px',
        cursor: 'pointer',
      }}
    >
      <p
        style={{
          color: '#fff',
          textAlign: 'center',
          background: 'rgba(0,0,0,0.5)',
        }}
      >
        {templateName}
      </p>
    </div>
  );
}

export default TemplateCard;
