import './App.css';
import Paths from './Components/Routes';


function App() {
  return (
    <div 
      className="App desktop:font-main bg-slate-100 min-h-screen desktop:text-2xl m-0 p-0 box-border antialiased 
      leading-loose tracking-wide scroll-smooth snap-y w-screen overflow-clip mobile:text-md mobile:font-mobile
      tablet:font-main laptop:font-main"> 
      <Paths />
    </div>
  );
}

export default App;
