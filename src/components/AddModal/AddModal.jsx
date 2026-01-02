import s from "./addModal.module.css"

const AddModal = ({handleSubmitAdd}) => {
	return <div className={s.box}>
		<h3 className={s.title}>Add new goal</h3>
		<form onSubmit={handleSubmitAdd} className={s.form}>
			<textarea
				className={s.input}
				name="txt"
				placeholder="new goal"
			/>
			<button type="submit" className={s.btn}>
				Add
			</button>
		</form>
	</div>
}

export default AddModal;