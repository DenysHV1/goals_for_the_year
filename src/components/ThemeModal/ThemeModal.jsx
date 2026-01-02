import clsx from 'clsx';
import s from './themeModal.module.css';

const ThemeModal = ({ theme, handleChangeTheme }) => {
  return (
    <div className={s.box}>
      {theme?.map(({ bg, status, id }) => (
        <button
          key={id}
          type="button"
          onClick={() => handleChangeTheme(id)}
          className={clsx(status ? s.active_bg : s.bg)}
          style={{ backgroundImage: `url(${bg})` }}
        ></button>
      ))}
    </div>
  );
};

export default ThemeModal;
