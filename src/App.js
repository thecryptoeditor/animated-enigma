import { Header } from "./Components/Header";
import Todo from "./Components/Todo";
import { Addtodo } from "./Components/addTodo";
import { Footer } from "./Components/Footer";
import React, {useState, useEffect} from 'react';
import {About} from "./Components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

    let initTodo;

    if(localStorage.getItem("itemList") === null) {
        initTodo = [];
        console.log("test1")
    }
    else {
        initTodo = JSON.parse(localStorage.getItem("itemList"))
        console.log("test2")
    }

    const onDelete = (todos) => {
        console.log("Delete function work properlly", todos);

        let index = itemList.indexOf(todos);
        console.log(index)

        setState(itemList.filter((event) => {
            return event !== todos
        }))

        localStorage.setItem("itemList", JSON.stringify(itemList))

    }
    const Addtodovalue   = (newTitle, task) => {
        console.log(newTitle, task)

        let addNewItem = {
            title: newTitle,
            task: task
        }
        setState([...itemList, addNewItem]);

    }

    // Here we take any function name just like 'setState'
    // etc. 'setCount'

    const [itemList, setState] = useState(initTodo)
            
    useEffect(()=> {
        localStorage.setItem("itemList", JSON.stringify(itemList));
    }, [itemList])
        
    return (
        <Router>
            <div className="todo">
                <Header Heading="Your task list here:"/>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route exact path="/home" render = {() => {
                        return (
                            <>    
                                <Addtodo Addtodovalue={Addtodovalue} />
                                <Todo todoHeading="Todo list start here: " onDelete={onDelete} itemList={itemList} />
                                <Footer />
                            </>
                        )}}>
                        
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
