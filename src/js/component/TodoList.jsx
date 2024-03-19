import React, { useState } from "react";
import styles from "./TodoList.module.css"

function TodoList() {
    const [input, setInput] = useState("");
    const [addInput, setAddInput] = useState([]);

    const [isVisible, setIsVisible] = useState(false);


    const addComment = () => {
        if (input === "") {
            alert("No hay nada que agregar")
        } else {
            setAddInput([...addInput, input]);
            setInput("");
            return
        }
    };

    const addCommentEnter = (e) =>{
        if (e.key === "Enter" && input != " "){ 
            return addComment() }
    }

    function removeComment(index) {
        const newAddInput = [];
        for (let i = 0; i < addInput.length; i++) {
            if (i !== index) {
                newAddInput.push(addInput[i]);
            }
        }
        setAddInput(newAddInput);
    }

    const numberElement = () => {
        return addInput.length;
    }

    return (
        <div className={styles.container}>
            <div class="card w-100 mb-3">
                <div class="card-body">
                    <h1 class="card-title">Todo List</h1>

                    <input type="text" value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={addCommentEnter}
                        placeholder="¿Que necesitas hacer?" className={styles.input}>
                    </input>
                    <button onClick={addComment} type="button" class="btn btn-primary position-relative">
                        agregar
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            N° {numberElement()}
                            <span class="visually-hidden">unread messages</span>
                        </span>
                    </button>
                </div>
            </div>

            <div className="container">
                <div className="card">
                    <ul className="list-group list-group-flush">
                        {addInput.map((addInput, index) => {
                            return (
                                <div>
                                    <li key={index} className="list-group-item" onMouseOver={() => { setIsVisible(!isVisible) }}>
                                        {addInput}
                                    </li>
                                    {isVisible && (<button type="button" class="btn-close" aria-label="Close" onClick={() => removeComment(index)}></button>)}
                                </div>)
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TodoList
