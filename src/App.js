import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container-fluid" style={{ border: "1px red" }}>
      <div className="row">
        <div className="col-2">A</div>
        <div className="col-10">
          <div className="container-fluid" style={{ height: "500px" }}>
            <div className="row gap-2 h-100 p-0">
              <div className="col-lg-3 p-0" style={{backgroundColor: 'red'}}>Picture 1</div>
              <div className="col-lg-5 p-0" style={{backgroundColor: 'cyan'}}>Picture 2</div>
              <div className="col-lg-3 p-0 overflow-hidden">
                <p className="mb-1 h-50" style={{backgroundColor: 'green'}}>test</p>
                <p className="mt-1 h-50" style={{backgroundColor: 'yellow'}}>Test</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
