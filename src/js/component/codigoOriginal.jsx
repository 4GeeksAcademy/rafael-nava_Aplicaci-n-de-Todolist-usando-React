// import React, { useState } from "react";
// import styles from "./TodoList.module.css"

// function TodoList() {
//     const [input, setInput] = useState("");
//     const [addInput, setAddInput] = useState([]);

//     const addComment = () => {
//         if (input === "") {
//             alert("No hay nada que agregar")
//         } else {
//             setAddInput([...addInput, input]);
//             setInput("");
//             return
//         }
//     };

//     function removeComment(index) {
//         const newAddInput = [];
//         for (let i = 0; i < addInput.length; i++) {
//             if (i !== index) {
//                 newAddInput.push(addInput[i]);
//             }
//         }
//         setAddInput(newAddInput);
//     }



//     return (
//         <div className={styles.container}>

//             <h1>Todo List</h1>
//             <div className="row">
//                 <div className="col-10">
//                     <input type="text" value={input}
//                         onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => {
//                             if (e.key === "Enter") { addComment() }
//                         }} placeholder="¿Que necesitas hacer?" className={styles.input}>
//                     </input>
//                 </div>
//                 <div className="col">
//                     <button className={styles.input} onClick={addComment}><i className="far fa-plus-square"></i></button>
//                 </div>
//             </div>
//             <div className="container">
//                 <ul>
//                     {addInput.map((addInput, index) => {
//                         return (
//                             <div className="row">
//                                 <div className="col">
//                                     <li key={index}>{addInput}</li>
//                                 </div>
//                                 <div className="col-2 align-self-end">
//                                     <button><i className="fas fa-trash-alt" onClick={() => removeComment(index)}></i></button>
//                                 </div>
//                             </div>)
//                     })}
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default TodoList
