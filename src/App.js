import { Header } from "./Components/Header";
import Todo from "./Components/Todo";
import { Addtodo } from "./Components/addTodo";
import { Footer } from "./Components/Footer";
import React, {useState} from 'react';

function App() {

    const onDelete = (todos) => {
        console.log("Delete function work properlly", todos);

        let index = itemList.indexOf(todos);
        console.log(index)

        setState(itemList.filter((event) => {
            return event !== todos
        }))

    }
    const addTodo = (newTitle, task) => {
        console.log(newTitle, task)

        let addNewItem = {
            title: newTitle,
            task: task
        }
        setState([...itemList, addNewItem]);
    }

    // Here we take any function name just like 'setState'
    // etc. 'setCount'
    const [itemList, setState] = useState([
            {
                title: 'How to take a task',
                task: 'Take it'
            },
            {
                title: 'How to finish task',
                task: 'Finish it'
            },
            {
                title: 'How to submit task',
                task: 'Submit it'
            },
        ]
    )

    return (
        <div className="todo">
            <Header Heading="Your task list here:"/>
            <Addtodo addTodo={addTodo} />
            <Todo todoHeading="Todo list start here: " onDelete={onDelete} itemList={itemList} />
            <Footer />
        </div>
    );
}

export default App;
