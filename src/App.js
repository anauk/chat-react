import React from 'react';
import './App.css'
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar";
import Profile from './components/Profile/Profile'
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
      <Route path='/dialogs'
             render={() => <DialogsContainer
               store={props.store}
               // dialogsPage={props.state.dialogsPage}
               // dispatch={props.dispatch}
               // addMessage={props.addMessage}
               // updateNewMessage={props.updateNewMessage}
             />} />
      <Route path='/profile'
             render={() => <Profile
               store={props.store}
               // profilePage={props.state.profilePage}
               // dispatch={props.dispatch}
               // addPost={props.addPost}
               // updateNewPostText={props.updateNewPostText}
             />}
      />
        {/* or
        <Route path='/profile'*/}
               {/*render={() => <Profile*/}
                 {/*posts={props.state.profilePage.posts}/>} />*/}
      <Route path='/news' render={() => <News />}/>
        <Route path='/users' render={() => <UsersContainer />}/>
      <Route path='/music' render={() => <Music />}/>
      <Route path='/settings' component={() => <Settings />}/>
      </div>
    </div>
  );
}

export default App;
