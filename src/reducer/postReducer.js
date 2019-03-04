const postReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_POST':
            return state.concat([action.data]);
        case 'DELETE_POST':
            return state.filter((post)=>post.id !==action.id);
            // Here we use Array.prototype.filter to remove the post with the id that matches action.id.
        case 'EDIT_POST':
            return state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post)
        case 'UPDATE':
            return state.map((post)=>{
             if(post.id === action.id){   
                return{
                    ...post,
                    title:action.data.newTitle,
                    message:action.data.newMessage,
                    editing: !post.editing
                }
            } else return post;
        })
            default:
            return state;
    }
}
export default postReducer;


//Now what is happening here is that we are using a ‘switch statement’ and we are switching based on the value of action.type.
// If the value is ‘ADD_POST’ we are returning a new array containing action.data.
// Basically whenever the ‘ADD_POST’ event happens we want to push some data into the state array.
//Now what is action.data? Well it’s nothing but an object with our individual post title and the post message. 
//One thing to note here is that the reducer function expects a default value for the state.
// Here we are using ES6 default-parameter syntax to add that.
// The default value for the state here is an empty array.
// One other thing to note is that a reducer must always have the default clause inside the switch statement. 
//In the default clause we simply return the state. T
//his is done so that in case none of the action.type value matches any of the cases we simply return the state



//Edit
//Here we are using Array.prototype.map to loop over each item and then 
//check the id of the post with the id that was passed in the action. 
//If there is a match then return a new object but change the value of
// editing to true if it was false or vice-versa. 
//If there is no match then just return the object as it is.

//update
//In here all we are doing is using Array.prototype.map and 
// looping over each posts and the post whose id matches the one with the
//  id that was passed in the action we are returning a new object but 
//  with the updated values for title and message.
// Finally we are setting editing to false.