import React, {Component} from 'react';
import { connect } from 'react-redux';

class PostForm extends Component{
// The handleSubmit function takes one argument which is the event.
// Calling e.preventDefault() will prevent the page from refreshing.
// Next we grab the value of the title and the message from the inputs using refs and
// then put them inside an object called data.
// We also have an id property whose value is set to whatever new Date() returns. 
//We will use this id property to perform update and delete operations.

   
        handleSubmit = (e) => {
            e.preventDefault();
            const title = this.getTitle.value;
            const message = this.getMessage.value;
            const data = {
                id: new Date(),
                title,
                message,
                editing:false
            }
            //use console.log(data) to check if data is being logged on clicking submit.
            this.props.dispatch({
                type:'ADD_POST',
                data})
                this.getTitle.value = '';
                this.getMessage.value = '';
        }

        render(){
        return(
          <div>
            <h1>Create Post</h1>
            {/* So in here the form element now accepts an onSubmit event */}
            {/* Whenever this event takes place the handleSubmit function will execute */}
            <form onSubmit={this.handleSubmit}>
                <input required type="text" ref={(input)=>this.getTitle = input} placeholder="Enter Post Title" /><br /><br />
                <textarea required rows="5" cols="28" ref={(input)=>this.getMessage = input} placeholder="Enter Post" /><br /><br />
                <button>Post</button>
            </form>
        </div>  
        );
    }
} 
//connect() returns a function which takes in your current component as an argument and returns a new component with dispatch method as it’s prop.
//The main idea to remember is that connect will ultimately return a new component which has the dispatch method as a prop.
export default connect()(PostForm);
