import React, {useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Input, Card} from 'antd';
import Nav from './components/Nav';
import Header from './components/Header';
import utils from './utils/localeData.json';

function App() {
  const data= utils.data
  const [list, setList] = useState(data);
  const links={
    'Про проект' : "google.com",
    'Поиск':'#',
    'Создатели':'#text',
    'Контакты':'#'
  }
  function searchItem(val){
    const tempArr= data.filter(i => {
      let tempName = i.name.toLowerCase();
      return tempName.includes(val)
    });
    setList(tempArr);
  }
  return (
    <div>
      <Nav links={links}/>
      <Header />
      <Input placeholder="type something" onChange={e => searchItem(e.target.value)}/>
      { list.map((item) => (
        <Card style={{width: 300}} title={item.name}>
          <img style={{width: 100}} src={item.img} alt=""/>
          {item.autor}</Card>
      ))}
      
    </div>
  );
}

export default App;
