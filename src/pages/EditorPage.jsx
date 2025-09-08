import EditTemplate from "../EditorPageComponents/editTemplate";
import EditorSideBar from "../EditorPageComponents/editorSidebar";
import PrevieCard from "../EditorPageComponents/previeCard";

function EditorPage() {
  return (
    <div style={{widh:"100vw", height:"80vh",border:"1px solid red", position:"absolute",top:"9%"}}>
      <EditorSideBar id="sidebarcomponent" className="mt-4" />
      <div className="container">
        <div className="row">
          <div className="col-6">
        
            <EditTemplate />
          </div>
          <div className="col-6">
            <PrevieCard />
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditorPage;
