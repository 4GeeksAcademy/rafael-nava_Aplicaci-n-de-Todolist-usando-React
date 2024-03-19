import React from "react";

//include images into your bundle
import TodoList from "./TodoList.jsx";
import styles from "./TodoList.module.css";

//create your first component
const Home = () => {
	return (
		<div className={styles.centrar}>
		<TodoList/>
		</div>
	);
};

export default Home;
