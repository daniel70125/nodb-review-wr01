import React, { Component } from 'react';

    class Input extends Component{
        constructor(){
            super();

            this.state = {
                img: "",
                title: "",
                price: ""
            }
            this.postItem = this.postItem.bind(this);
        }

        updateImg(e){
            this.setState({
                img: e
            })
        }
        updateTitle(e){
            this.setState({
                title: e
            })
        }
        updatePrice(e){
            this.setState({
                price: e
            })
        }
        postItem(){
            const {img, title, price} = this.state;
            if (this.state.img === "") {
               return alert("Image src is REQUIRED")
            }
            this.props.post(img, title, price)
            
            this.refs.Img.value="";
            this.refs.title.value="";
            this.refs.price.value="";
        }
        
        
        render(){
            
            return (
                  
                <div id="input-box">
                    <input ref="Img" placeholder="Image Src" onChange={(e) => this.updateImg(e.target.value)}/>
                    <input ref="title" placeholder="Title" onChange={(e) => this.updateTitle(e.target.value)}/>
                    <input ref="price" placeholder="Price"onChange={(e) => this.updatePrice(e.target.value)}/>
                    <button onClick={this.postItem}>Add Item</button>
                </div>
                )
        }
    }

export default Input