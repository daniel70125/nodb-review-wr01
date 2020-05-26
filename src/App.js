import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Display from './components/Display'
import Nav from './components/Nav'
import Header from './components/Header'
import Input from './components/Input'
import Footer from './components/Footer'

class App extends Component {
  constructor(){
    super();

    this.state = {
      items: [],
    }
    this.postItem = this.postItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount(){
    axios.get('/api/items')
    .then(res => this.setState({items: res.data}))
    .catch(err => console.log(err));
  }
  postItem(img, title, price){
    const body = {img,title, price}
    axios.post(`/api/items/`, body)
    .then(res => this.setState({
      items: res.data
    }))
  }
  updateItem(id, title, price){
    const body = {title, price}
    axios.put(`/api/items/${id}`, body)
    .then(res => this.setState({
      items: res.data
    })) 
  }
  deleteItem(id){
    axios.delete(`/api/items/${id}`)
    .then(res => this.setState({
      items: res.data
    }))
  }
  
  render(){
    return (
      <div>
      <Nav />
      <Header />
      <Input post={this.postItem} />
      <Display delete={this.deleteItem} update={this.updateItem} items={this.state.items} />
      <Footer />
      </div>
    )
  }
}

export default App;
