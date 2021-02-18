import React from 'react';
import logo from './logo.svg';
import Button,{ButtonType,ButtonSize} from './components/button/button'
import Menu from './components/Memu/menu'
import MenuItem from './components/Memu/menuItem'
function App() {
  return (
    <div className="App">
      <Menu defaultIndex={0}>
        <MenuItem index={0} >
          cook1
        </MenuItem>
        <MenuItem index={1} disabled>
          cook2
        </MenuItem>
        <MenuItem index={2}>
          cook3
        </MenuItem>
      </Menu>
      <Button onClick={(e)=>{console.log(e)}} btnType={ButtonType.Default} size={ButtonSize.Small}>btn</Button>
      <Button btnType={ButtonType.Link} size={ButtonSize.Small} href="http://www.baidu.com">baidu</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>btn</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>btn</Button>
    </div>
  );
}

export default App;
