import AppFilter from "../app-filter/app-filter"
import AppInfo from "../app.info/app-info"
import SearchPanel from "../search-panel/search-panel"

const App = () =>{
 return (
  <div>
   <div>
    <AppInfo/>
   </div>
   <div>
    <SearchPanel/>
    <AppFilter/>
   </div>
  </div>
 )
}

export default App