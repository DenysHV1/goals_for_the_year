import MonthItem from "../MonthItem/MonthItem.jsx";
import s from "./monthList.module.css"


const MonthList = ({ month, theme, setMonth, handleAddGoal, handleDeleteGoal, handleDoneGoal, onOpenUpdate }) => {

	const bgImg = theme.filter(({ status }) => status);

	return <main>
		<ul className={s.list} style={{ backgroundImage: `url(${bgImg[0].bg})` }}>
			{month.map(({ id, name, data }) =>
				<MonthItem
					key={id}
					name={name}
					month_id={id}
					data={data}
					setMonth={setMonth}
					handleAddGoal={handleAddGoal}
					handleDeleteGoal={handleDeleteGoal}
					handleDoneGoal={handleDoneGoal}
					onOpenUpdate={onOpenUpdate}
				/>)}
		</ul>
	</main>
}

export default MonthList;