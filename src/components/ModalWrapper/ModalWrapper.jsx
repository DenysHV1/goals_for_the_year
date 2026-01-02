import clsx from 'clsx';
import s from './modalWrapper.module.css';
import { IoClose } from "react-icons/io5";

const ModalWrapper = ({ children, setModal, modal }) => {
	return <div className={clsx(s.wrapper, !modal && s.is_close)}>
		<div className={s.modal_inner}>
			<button className={s.close} type='button' onClick={() => setModal(false)}><IoClose /></button>
			{children}
		</div>
	</div>
}

export default ModalWrapper;