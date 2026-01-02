import { FaPlus } from "react-icons/fa";
import s from "./monthItem.module.css";
import GoalItem from "../GoalItem/GoalItem.jsx";

const MonthItem = ({ name, data, setModal, handleDeleteGoal, id, handleDoneGoal }) => {
	return <li className={s.item}>
		<h3 className={s.name}>{name}</h3>
		<ul className={s.goals}>
			{data.length ? data.map(({ goal_id, goal_txt, goal_status }, idx) =>
				<GoalItem month_id={id} goal_id={goal_id} key={goal_id} goal_txt={goal_txt} goal_status={goal_status} idx={idx} handleDeleteGoal={handleDeleteGoal} handleDoneGoal={handleDoneGoal} />
			) : <></>}
		</ul>
		<button className={s.add} type="button" onClick={() => setModal(true)}><FaPlus /></button>
	</li>
}

export default MonthItem;