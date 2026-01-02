import MonthItem from "../MonthItem/MonthItem.jsx";
import s from "./monthList.module.css"


const MonthList = ({ month, handleAddGoal, handleDeleteGoal, handleDoneGoal, onOpenUpdate }) => {


	return <main>
		<ul className={s.list}>
			{month.map(({ id, name, data }) => <MonthItem key={id} name={name} id={id} data={data} handleAddGoal={handleAddGoal} handleDeleteGoal={handleDeleteGoal} handleDoneGoal={handleDoneGoal} onOpenUpdate={onOpenUpdate} />)}
		</ul>
	</main>
}

export default MonthList;