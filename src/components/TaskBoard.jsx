import { useState } from "react"
import Search from "./Tasks/Search"
import TaskAction from "./Tasks/TaskAction"
import TaskList from "./Tasks/TaskList"


const TaskBoard = () => {

	let taskDefultData = {
		id : crypto.randomUUID(),
		title: "Integration API",
		description: "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
		tags: ['Web', 'Python', 'API'] ,
		priority : "High",
		isFavorite : "false"
	}

	let [tasks, setTasks] = useState([taskDefultData]);

  return (
    <>
      <section className="mb-20 flex flex-col justify-center items-center" id="tasks">
		
		<div className="container">
		
		<div className="p-2 flex justify-end">
			<Search/>
		</div>
		
			<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
				<TaskAction/>
				<TaskList tasks={tasks}/>
			</div>
		</div>
	</section>
    </>
  )
}

export default TaskBoard
