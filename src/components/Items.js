import React, {Component} from 'react'

class Items extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: [this.props.data],
            isEdit: false,
            price: "",
            title: ""
        }
        this.editItem = this.editItem.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggle = this.toggle.bind(this);
        this.delete = this.delete.bind(this);
    }
    editItem(){
        const {data} = this.props;

        this.props.update(data.id, this.state.title, this.state.price);
        
        this.setState({
            isEdit: false
        })
    }
    delete(){
        const {data} = this.props;

        this.props.delete(data.id)
    }
    toggleEdit(){
        this.setState({
            isEdit: !this.isEdit
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
    toggle(){
        this.setState({
            isEdit: false
        })
    }
    
    render(){
        console.log(this.state)
        return (
            <>
                {/* {elms} */}
                <div className="item-list-box">
            <img alt={this.props.data.title} className="itemImg" src={this.props.data.img} /> <br />

            {this.state.isEdit ? <div className="editModule">
                    <input ref="title" placeholder="Title" onChange={(e) => this.updateTitle(e.target.value)}/>
                    <input ref="price" placeholder="Price"onChange={(e) => this.updatePrice(e.target.value)}/> <br />
                    <button onClick={this.editItem}>Save Changes</button>
                    <button onClick={this.toggle}>Cancel</button>
            </div> : <div>
                <span>{this.props.data.title}</span>
            <h5>Price:</h5><span>${this.props.data.price}</span> <br />
            <button onClick={this.toggleEdit} className="editBtn">Edit Item</button>
            <button onClick={this.delete} className="deleteBtn">Delete Item</button> </div> }
                
        </div>
            </>
        )
    }
}

export default Items