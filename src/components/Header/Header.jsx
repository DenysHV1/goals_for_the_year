import Container from '../Container/Container.jsx';
import s from './header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.content}>
          <p className={s.quote}>
            “A goal without a plan is just a wish.”
          </p>
        </div>
      </Container>
    </header>
  );
};

export default Header;
