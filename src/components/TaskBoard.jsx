import { useState } from "react"
import Search from "./Tasks/Search"
import TaskAction from "./Tasks/TaskAction"
import TaskList from "./Tasks/TaskList"
import AddModal from "./Tasks/AddModal"
import TaskNotFound from "./Tasks/TaskNotFound"


const TaskBoard = () => {

	let taskDefultData = {
		id : crypto.randomUUID(),
		title: "Integration API",
		description: "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
		tags: ['Web', 'Python', 'API'] ,
		priority : "High",
		isFavorite : false,
	}

	let [tasks, setTasks] = useState([taskDefultData]);
	let [addTaskShow, setAddTaskShow] = useState(false)
	let [taskEditData, setTaskEditData] = useState(null)

	let hanndleAddValueCatch = (newTaskData, addMin)=>{
		if(addMin){
			setTasks([...tasks, newTaskData])
		}else{
			setTasks(
				tasks.map((task)=>{
					if (task.id === newTaskData.id){
						return newTaskData
					}
					return task;
				})
			)
		}
		setAddTaskShow(false)
		setTaskEditData(null)
	}

	let hanndleAddTask = ()=> {
		setAddTaskShow(true)
	}

	let handleTaskEdit = (tasakEditDataCatch)=>{
		setTaskEditData(tasakEditDataCatch)
		setAddTaskShow(true)
	}

	const handleDeleteSingle = (deletId)=>{
		let DeleteItem = tasks.filter((item)=> item.id !== deletId)
		setTasks(DeleteItem)
	}

	const handleAllDelete = ()=>{
		tasks.length = 0;		
		setTasks([...tasks])
	}
	
	const handleFavoriteTask = (task)=>{
		let taskIndex = tasks.findIndex((item)=> item.id === task.id)
		let copyTask = [...tasks];
		copyTask[taskIndex].isFavorite = !copyTask[taskIndex].isFavorite
		setTasks(copyTask)
	}


	const handleSearchingTask = (searchVal)=>{		
		let searchTask = tasks.filter((item)=>item.title.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase()))
		setTasks([...searchTask])
	}

  return (
    <>
      <section className="mb-20 flex flex-col justify-center items-center" id="tasks">
			
		{addTaskShow && <AddModal onSendData={hanndleAddValueCatch} onEditTask={taskEditData}/> }
		<div className="container">
		
		<div className="p-2 flex justify-end">
			<Search onSearch={handleSearchingTask}/>
		</div>
		
			<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
				<TaskAction onAddTask = {hanndleAddTask} onAllDelete={handleAllDelete}/>
				{tasks.length > 0 ?
				(<TaskList tasks={tasks} onEdit={handleTaskEdit} onSingleDelete={handleDeleteSingle} onFave={handleFavoriteTask}/>)
			:
			(<TaskNotFound/>)}
				
			</div>
		</div>
	</section>
    </>
  )
}

export default TaskBoard
