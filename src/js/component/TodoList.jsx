import React, { useState, useEffect } from "react";
import styles from "./TodoList.module.css"

function TodoList() {
    const [input, setInput] = useState("");
    const [addInput, setAddInput] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [isAlertVisible, setIsAlertVisible] = useState(false);


    const addComment = () => {
        if (input.trim() === "") {
            setIsAlertVisible(true);
            return
        } else {
            setAddInput([...addInput, input]);
            setInput("");
            return
        }
    };
    // para cargar el codigo cada vez que se ingrese un input
    useEffect(() =>{
        if (input.trim() === "") {
            setIsAlertVisible(false);
    }},[input]);

    const addCommentEnter = (e) => {
        if (e.key === "Enter" && input.trim() != "") {
            return addComment()
        }
    };

    function removeComment(index) {
        const newAddInput = [];
        for (let i = 0; i < addInput.length; i++) {
            if (i !== index) {
                newAddInput.push(addInput[i]);
            }
        }
        setAddInput(newAddInput);
    };

    const numberElement = () => {
        return addInput.length;
    };

    return (
        <div className={styles.container}>
            <div className="card w-100 mb-3">
                <div className="card-body">
                    <h1 className="card-title">To Do List</h1>

                    <input type="text" value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={addCommentEnter}
                        placeholder="¿Que necesitas hacer?" className={styles.input}>
                    </input>
                     
                     <button onClick={addComment} type="button" className="btn btn-primary position-relative">
                        agregar
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            N° {numberElement()}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </button>

                </div>
            </div>
            <div className="container">
                <div className="card bg-danger">
                                    
                {isAlertVisible && (
                <div className="alert alert-warning" role="alert">
                    No se puede agregar texto vacío.
                </div>)}


                    <ul className="list-group list-group-flush rounded">
                        {addInput.map((addInput, index) => {
                            return (
                                <div className={styles.liList}>
                                    <div className="col-11">
                                        <li key={index} className="list-group-item rounded" id="liList" onMouseOver={() => { setIsVisible(!isVisible) }}>
                                            {addInput}
                                        </li>
                                    </div>
                                    <div className="col">
                                        {isVisible && (<button type="button" class="btn-close" aria-label="Close" onClick={() => removeComment(index)}></button>)}
                                    </div>
                                </div>)
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TodoList
