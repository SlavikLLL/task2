import Title from "./components/Title";
import Text from "./components/Text";

function App(){
  return(
    <div className="card">
      <div className="card-body">
       <div className="card-title"> <Title title ="FirstTitle" /></div>
        <div className="card-text"><Text text ="TextTitle" /> </div>
      </div>
    </div>
  )
}
export default App;
