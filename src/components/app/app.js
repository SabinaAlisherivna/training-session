import './app.css'

import AppFilter from "../app-filter/app-filter"
import AppInfo from "../app.info/app-info"
import SearchPanel from "../search-panel/search-panel"

const App = () =>{
 return (
  <div className="app">
   <div className="content">
    <AppInfo/>
   
   <div>
    <SearchPanel/>
    <AppFilter/>
   </div>
   </div>
  </div>
 )
}

export default App