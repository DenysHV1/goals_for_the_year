import { useEffect, useRef, useState } from "react";
import s from "./updateModal.module.css"
import clsx from "clsx";

const UpdateModal = ({ handleUpdateSubmit, savedGoalTXT }) => {
	const [copy, setCopy] = useState(false);
	const timer = useRef(null);


	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(savedGoalTXT);
			setCopy(true)
		} catch (e) {
			console.error('Copy failed', e);
			setCopy(false)
		}
	};

	useEffect(() => {
		if (!copy) {
			clearTimeout(timer.current)
			return
		}
		timer.current = setTimeout(() => {
			setCopy(false)
		}, 2000)

		return () => {
			clearTimeout(timer.current)
		}
	}, [copy])

	return (
		<div className={s.box}>
			<h3 className={s.title}>Update</h3>

			<div className={s.last_txt_box}>
				<div>
					<h4>Old goal:</h4>
					<button type="button" onClick={handleCopy} className={clsx(s.copy, copy && s.is_copied)}>
						{copy ? "Copied" : "Copy"}
					</button>
				</div>

				<p>{savedGoalTXT}</p>

			</div>

			<form onSubmit={handleUpdateSubmit} className={s.form}>
				<textarea
					className={s.input}
					name="txt"
					placeholder="new goal"
				/>
				<button type="submit" className={s.btn}>
					Replace
				</button>
			</form>
		</div>
	);
};


export default UpdateModal;