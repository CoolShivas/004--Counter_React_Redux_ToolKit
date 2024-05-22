import PrivacyMsg from "./components/PrivacyMsg";
import Modal from "./components/Modal";
import Buttons from "./components/Buttons";
import DisplayValue from "./components/DisplayValue";
import Header from "./components/Header";
import { useSelector } from "react-redux";

const App = () => {

  const privacyToggler = useSelector((store) => store.privacy);

  return (

    <div className="px-4 py-5 my-5 text-center">
      <Modal>
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          {privacyToggler ? <PrivacyMsg></PrivacyMsg> : <DisplayValue></DisplayValue>}

          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Buttons></Buttons>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default App;