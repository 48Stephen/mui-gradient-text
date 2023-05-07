
import TextGradient from './components/TextGradient';

const App = () => {

  let options = {
    firstColor: "#4c82ed", //first color 
    secondColor: "#FF6767", //second color
    direction: "left", //top, bottom, left, right, degrees
    variant: 'h4' //body1, body2, 'body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2'
  }

  return (
      
    <TextGradient options={options}>
      Whereas disregard and contempt for human rights have resulted
    </TextGradient>
     
  );
}

export default App;
