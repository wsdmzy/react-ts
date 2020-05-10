import React from 'react';
import Button , { ButtonType, ButtonSize } from './components/Button/button'
import Alert, { AlertType } from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex='0' onSelect={(index) => alert(index)} mode="vertical" defaultOpenSubMenus={['2']}> 
          <MenuItem >
            haha
          </MenuItem>
          <MenuItem  disabled>
            oo
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>
              1
            </MenuItem>
            <MenuItem>
              2
            </MenuItem>
          </SubMenu>
           <MenuItem >
            pp
          </MenuItem>
        </Menu>
        <Button className="aa"  onClick={e => alert(123)}>Hello</Button>
        <Button disabled>Hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Hello</Button>
        <Button disabled btnType={ButtonType.Link} href="http://www.baidu.com" >Baidu</Button>
        <Button  btnType={ButtonType.Link} href="http://www.baidu.com" target="_balnk">Baidu</Button>
        <Alert 
          title="哈哈"
          altType={AlertType.Success}
          />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header>
    </div>
  );
}

export default App;
