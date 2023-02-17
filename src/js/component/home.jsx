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
			const tareas =(e)=>{e.preventDefault();
			setListadetareas([...listadetareas,e.target[0].value])
			}

			
			const borra =(indexItem)=>{
			setListadetareas((prevState)=>
			prevState.filter((elemento,indice)=>indice!==indexItem))
		}

	return (
			<div className="text-center">
				<form type="submit"  onSubmit={tareas}>
				<h1 className="text-center mt-5">Tareas</h1>
				<input type="text"  placeholder="¿¿ Que tareas te falta ??" />
				</form>
				<ul>{listadetareas.map((elemento,indice)=>{
					return (<li key={indice}>{elemento}<button onClick={()=>borra(indice)}>🗑️</button></li>)
				})}

				</ul>
				
			</div>
		);
	};

	export default Home;