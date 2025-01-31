import React from 'react';
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Provider} from "react-redux";
import store from "./redux/redux-store";


const App = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
    <div className="app-wrapper">
      <HeaderContainer />
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
      <Route path='/profile/:id?'
             render={() => <ProfileContainer
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
        <Route path='/login' component={() => <Login />}/>
      </div>
    </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
