import MonthItem from "../MonthItem/MonthItem.jsx";
import s from "./monthList.module.css"


const MonthList = ({ month, setModal, handleDeleteGoal, handleDoneGoal }) => {


	return <ul className={s.list}>
		{month.map(({ id, name, data }) => <MonthItem key={id} name={name} id={id} data={data} setModal={setModal} handleDeleteGoal={handleDeleteGoal} handleDoneGoal={handleDoneGoal} />)}
	</ul>
}

export default MonthList;