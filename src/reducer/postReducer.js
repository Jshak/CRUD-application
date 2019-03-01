const postReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_POST':
            return state.concat([action.data]);
        case 'DELETE_POST':
            return state.filter((post)=>post.id !==action.id);
            // Here we use Array.prototype.filter to remove the post with the id that matches action.id.
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