import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {

	// btex valor actual y función de actualizar el estado setbtex, inicializa con un valor vacío "".
			const [btex,setbtex]=useState("")

	//listadetareas y función de actualizar el estado setListadetareas, inicializa con un array vacío [].		
			const[listadetareas,setListadetareas]=useState([])
			
	//e.preventDefault() para evitar que se recargue la página cuando se envía el formulario. Si no se 
	//pierde el valor escrito en el formulario		
			const tareas = (e)=>{e.preventDefault();
	
	//setbtex("") inicializa el valor en un string vacio
			setListadetareas([...listadetareas,btex]); setbtex("")
			}

	//borra: función que recibe un parámetro indexItem, que indica el índice del elemento que se desea eliminar 
	//del array listadetareas.
			const borra =(indexItem)=>{
				// setListadetareas actualiza el estado de listadetareas. La función setListadetareas toma 
				// como argumento una función que recibe el estado anterior prevState.
			
			setListadetareas((prevState)=>
			// filter recorre cada elemento del array anterior y devuelve un nuevo array que incluye solo 
			// el elemento actual (!==) no sea igual al valor del parámetro indexItem.
			prevState.filter((elemento,indice)=>indice!==indexItem))
		}

	return (
			<div className="text-center">
				<form type="submit"  onSubmit={tareas}>
				<h1 className="text-center mt-5">Tareas</h1>
				<input type="text"  className="text-center" placeholder="ingrese la tarea" onChange={e=>setbtex(e.target.value)}  value={btex}/>
				</form>
				{/* renderiza lista de tareas <ul><ul/>*/}
				{/* map() de JavaScript. Para cada elemento del array, se crea un elemento li que contiene el 
				texto de la tarea y un botón para borrar la tarea.  */}
				<ul>{listadetareas.map((elemento,indice)=>{
					// El botón tiene un evento onClick que llama a la función borra con el índice del elemento 
					//como parámetro, lo que permite eliminar la tarea correspondiente cuando se hace clic en el botón.
					return (<li key={indice}>{elemento}<button onClick={()=>borra(indice)}>🗑️</button></li>)
				})}

				</ul>
				
			</div>
		);
	};

	export default Home;