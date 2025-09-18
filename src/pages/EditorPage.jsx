import EditTemplate from "../EditorPageComponents/editTemplate";
import EditorSideBar from "../EditorPageComponents/editorSidebar";
import PrevieCard from "../EditorPageComponents/previeCard";

function EditorPage() {
  return (
    <div className="container mx-auto mt-5" style={{ widh: "100vw", height: "100vh" }}>
      <EditorSideBar id="sidebarcomponent" className="mt-4" />
      <div className="container-fluid mt-5 px-1">
        <div className="row ms-5" style={{ border: "1px solid red", marginTop: "69px" }}>
          <div className="col-lg-6 col-md-12 col-sm-12 border" style={{ height: "80vh" }}>
            <EditTemplate />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 border" style={{ height: "80vh" }}>
            <PrevieCard />
          </div>
        </div>
      </div>

    </div>
  );
}
export default EditorPage;
