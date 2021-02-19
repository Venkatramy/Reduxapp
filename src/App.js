import React,{Component} from 'react';
import AddBookmark from './container/AddBookmark';
import BookmarksList from './container/BookmarksList';
class App extends Component{
  render(){
    return(
      <div>
        <AddBookmark/>
        <BookmarksList/>
      </div>
    );
  }
}
export default App;