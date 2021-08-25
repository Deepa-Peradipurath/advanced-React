import React,{ useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid'; 

const App = () => {
    console.log("App...");
    const [user,setUser] = useState([
        {id : 'a',
        name :'deepa'},
        {id : 'b',
        name :'Deeptha'}
    ]);
    const [text,setText] = useState("");

    const handleUsers = (e) => {
        setText(e.target.value);
    };
    const addUser = () => {
        setUser(user.concat({id:uuidv4(),name:text}));
    }
    const remove = useCallback( (id) => {
        console.log("remove",id);
        setUser(user.filter((c,i)=> c.id !== id ));
    },[ user ]); 


    return(
        <div>
            <input type = "text" value = {text} onChange={ handleUsers }/>
            <button onClick={addUser}>Add User</button>

                <List list={ user } action={ remove }/>

        </div>
    )
}

const List = React.memo(({list,action}) =>{
    console.log("List...");
    return(
        <ul>
            {
                list.map((item,i) => <ListItem key={item.id} listItem={item} action={ action }/>)
            }
        </ul>
        
    );
});

const ListItem = React.memo(({listItem,action}) => {
    console.log("List Item...");
    return(<li>{listItem.name} <button onClick={ () => action(listItem.id) }>Remove</button></li>);
}) 




export default App;
