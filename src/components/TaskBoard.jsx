import Search from "./Tasks/Search"
import TaskAction from "./Tasks/TaskAction"
import TaskList from "./Tasks/TaskList"


const TaskBoard = () => {
  return (
    <>
      <section class="mb-20 flex flex-col justify-center items-center" id="tasks">
		
		<div class="container">
		
		<div class="p-2 flex justify-end">
			<Search/>
		</div>
		
			<div class="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
				<TaskAction/>
				<TaskList/>
			</div>
		</div>
	</section>
    </>
  )
}

export default TaskBoard
