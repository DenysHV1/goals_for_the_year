import clsx from "clsx";
import s from "./goalItem.module.css"
import { IoClose } from "react-icons/io5";

const GoalItem = ({ goal_status, goal_txt, idx, handleDeleteGoal, month_id, goal_id, handleDoneGoal }) => {
	return <li className={clsx(goal_status && s.goal_item_done, s.goal_item)}>
		<p className={s.num}>{idx + 1}.</p>
		<input className={s.check} checked={goal_status} onChange={() =>  handleDoneGoal(month_id, goal_id, goal_status) } type="checkbox" />
		<div className={s.txt_box}>
			<p className={clsx(s.goal_txt, goal_status && s.goal_txt_done)}>{goal_txt}</p>
		</div>
		<button type="button" className={s.btn} onClick={() => handleDeleteGoal(month_id, goal_id)}><IoClose /></button>
	</li>
}

export default GoalItem;