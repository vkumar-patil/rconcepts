import "./App.css";
import Greeting from "./componant/Greeting";
import Usercard from "./Usercard";
import Count from "./componant/Count";
import Togglebtn from "./Togglebtn";
import Timer from "./Timer";
import FechAPI from "./FechAPI";

function App() {
  return (
    <div>
      <Greeting Name={"Vijaykumar"} />
      <Usercard
        user={{
          Name: "vijay",
          email: "vij@7219",
          Number: "7219066",
          img: "https://designsprintkit.withgoogle.com/relay2021/assets/img/contributors/Steve_Hassard.jpg",
        }}
      />
      <hr />
      <Count />
      <hr />
      <Togglebtn />
      <hr />
      <Timer />
      <hr/>
      <FechAPI/>
    </div>
  );
}

export default App;
