import React from 'react';
import Header from './Header';
import './assets/css/main.scss';
import './assets/css/_responsive.scss';
import './assets/bootstrap/css/bootstrap.min.css';
import Contianer from './Blog/Contianer';
import posts from './posts.json';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginForm from './Forms/Login';
import Footer from './Footer';
import RegisterForm from './Forms/Register';
import PostForm from './Forms/Post';

function App() {
  return (
    <Router>
      <Header AuthorName="ahoora"/>
      <Switch>
        <Route path='/blog'>
        {posts.posts.map(post => {
          return <Contianer title={post.title} description={post.desc} AuthorName={post.author} />
        })}
        </Route>
        <Route path="/register">
          <RegisterForm />
        </Route>
        <Route path="/post">
          <PostForm />
        </Route>
        <Route path='/'>
          <LoginForm />
        </Route>
        
      </Switch>
      <Footer author="ahoora alipoor"/>
    </Router>
  );
}

export default App;
