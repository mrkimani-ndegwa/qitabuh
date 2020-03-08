import ReactDOM from "react-dom";

// Main Wrapper Component
import Wrapper from "./BookStore/Wrapper";

const mountPoint = document.getElementById("qitabuh");
mountPoint ? ReactDOM.render(<Wrapper/>, mountPoint): false;