import Container from '../Container/Container.jsx';
import s from './successAnimation.module.css';
import animationGif from '../../assets/succes.gif';

const SuccessAnimation = () => {
  return (
    <div className={s.overlay}>
      <Container>
        <div className={s.content}>
          <img
            src={animationGif}
            alt="Success animation"
            className={s.image}
          />
        </div>
      </Container>
    </div>
  );
};

export default SuccessAnimation;
