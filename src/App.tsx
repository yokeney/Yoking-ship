import React from 'react';
import logo from './logo.svg';
import Button,{ButtonType,ButtonSize} from './components/button/button'
function App() {
  return (
    <div className="App">
      <Button onClick={(e)=>{console.log(e)}} btnType={ButtonType.Default} size={ButtonSize.Small}>btn</Button>
      <Button btnType={ButtonType.Link} size={ButtonSize.Small} href="http://www.baidu.com">baidu</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>btn</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>btn</Button>
    </div>
  );
}

export default App;
