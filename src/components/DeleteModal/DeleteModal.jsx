import s from "./deleteModal.module.css"

const DeleteModal = ({ handleDeleteGoalYes, handleDeleteGoalNo }) => {
	return <div className={s.box}>
		<p className={s.txt}>Delete?</p>
		<div className={s.btn_box}>
			<button type="button" className={s.btn} onClick={handleDeleteGoalYes}>Yes</button>
			<button type="button" className={s.btn} onClick={handleDeleteGoalNo}>No</button>
		</div>
	</div>
}

export default DeleteModal;