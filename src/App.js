import Body from "./Component/Body";
import { Provider } from "react-redux";
import Appstore from "./Utils/Appstore";

function App() {
  return (
    <div className="bg-black">
      <Provider  store={Appstore}>
      <Body/>
      </Provider>
    </div>
  );
}

export default App;
