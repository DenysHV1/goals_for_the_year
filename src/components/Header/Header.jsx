import Container from '../Container/Container.jsx';
import s from './header.module.css';

const Header = ({setModalTheme}) => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.content}>
          <p className={s.quote}>
            “A goal without a plan is just a wish.”
          </p>
          <div className={s.theme_btn_box}>
            <button onClick={() => setModalTheme(true)} className={s.btn}>Theme</button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
