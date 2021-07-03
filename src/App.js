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
    }
    else {
        initTodo = JSON.parse(localStorage.getItem("itemList"))
    }

    const onDelete = (todos) => {
        setState(itemList.filter((event) => {
            return event !== todos
        }))

        localStorage.setItem("itemList", JSON.stringify(itemList))

        headingValue();
    }

    const Addtodovalue = (newTitle, task) => {
        let addNewItem = {
            title: newTitle,
            task: task
        }
        setState([...itemList, addNewItem]);
        headingValue();
    }

    // Here we take any function name just like 'setState'
    // etc. 'setCount'

    const [itemList, setState] = useState(initTodo)
            
    useEffect(()=> {
        localStorage.setItem("itemList", JSON.stringify(itemList));
    }, [itemList])

    const headingValue = (todos) => {
        // console.log(todos.length)
        if(todos === 0){
            return 'Your list will be display here:'
        }
        else {
            return 'Here is your task list:'
        }
    }

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
                                <Todo todoHeading={headingValue(itemList)} onDelete={onDelete} itemList={itemList} />
                            </>
                        )}}>
                        
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
