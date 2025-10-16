import { useContext } from "react";
import EditTemplate from "../EditorPageComponents/editTemplate";
import EditorSideBar from "../EditorPageComponents/editorSidebar";
import PrevieCard from "../EditorPageComponents/previeCard";
import { bgContext } from "../context/bgcontext";
import useScreenshot from "../hooks/usescreenshot";

function EditorPage() {
  const {bgImg}=useContext(bgContext)
  const {imageUrl, takeScreenshot, isCapturing}=useScreenshot()
  const handleScreenshot=async()=>{
    const url=await takeScreenshot("editorDiv")
  }
  return (
    <div className="container mx-auto mt-5" style={{ width: "100vw", height: "100vh" }}>
      <EditorSideBar id="sidebarcomponent" className="mt-4" />
      <button className="border" onClick={handleScreenshot}>save url</button>
      <div className="container-fluid mt-5 px-1">
        <div className="row ms-5" style={{ border: "1px solid red", marginTop: "69px" }}>
          <div className="col-lg-6 col-md-12 col-sm-12 border"
          id="editorDiv"
          style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}>
            <EditTemplate  
              
            />
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
