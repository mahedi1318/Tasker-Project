import { FaStar } from "react-icons/fa";

export default function TaskList({ tasks, onEdit, onSingleDelete, onFave}) {
	
  return (
    <div>
      <div className="overflow-auto">
			<table className="table-fixed overflow-auto xl:w-full">
				<thead>
							<tr>
								<th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
								<th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]"> Title </th>
								<th className="p-4 pb-8 text-sm font-semibold capitalize w-full"> Description </th>
								<th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]"> Tags </th>
								<th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Priority </th>
								<th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Options </th>
							</tr>
				</thead>
				<tbody>
					{tasks.map((item)=>(
					<tr key={item.id} className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
								<td>
									<button onClick={ ()=> onFave(item)}>
										{item.isFavorite ? 
										(<FaStar className="text-lg text-yellow-500"/>)
										:
										(<FaStar className="text-lg text-gray-500"/>)
									}
										
									</button>
								</td>
								<td>{item.title}</td>
								<td>
									<div>
										{item.description}
									</div>
								</td>
								<td>
									<ul className="flex justify-center gap-1.5 flex-wrap">
										{item.tags.map((tag)=>(
										<li key={tag}>
											<span
												className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">{tag}</span>
										</li>										
										))}
									</ul>
								</td>
								<td className="text-center">{item.priority}</td>
								<td>
									<div className="flex items-center justify-center space-x-3">
										<button onClick={ ()=> onSingleDelete(item.id) } className="text-red-500">Delete</button>
										<button onClick={()=>onEdit(item)} className="text-blue-500">Edit</button>
									</div>
								</td>
					</tr>							
					))}
				</tbody>
			</table>
		</div>
    </div>
  )
}
