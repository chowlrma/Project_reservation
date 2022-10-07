import SearchBar from './SearchBar';
import './App.css';
 
export default function App() {
  let subject = 'LOGO';
  const searchItems = []

  return (    
    <div className="App">
      <div>
      {subject}
      </div>

      <div className="aaa">
        <SearchBar searchItems={searchItems}/>
      </div>
      <div>
        
      </div>
    </div>

    
  );
}