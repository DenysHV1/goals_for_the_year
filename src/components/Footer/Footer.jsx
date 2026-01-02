import Container from '../Container/Container.jsx';
import s from './footer.module.css';
import logo from '../../assets/logo.webp';
import { IoLogoGithub } from 'react-icons/io';
import { FaBriefcase } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io5';

const Footer = () => {
	return (
		<footer className={s.footer}>
			<Container>
				<div className={s.content}>
					<a href='/' className={s.left}>
						<img src={logo} alt="2026 logo" className={s.logo} />
					</a>

					<div className={s.right}>
						<a href="https://github.com/DenysHV1" className={s.link} target='_black' aria-label="GitHub">
							<IoLogoGithub />
						</a>
						<a href="https://denyshv1.github.io/DENYS_HV-PORTFOLIO/" className={s.link} target='_black' aria-label="Portfolio">
							<FaBriefcase />
						</a>
						<a href="https://www.instagram.com/denvik_i/" className={s.link} target='_black' aria-label="Instagram">
							<FaInstagram />
						</a>
						<a href="https://www.linkedin.com/in/denys-harkusha/" className={s.link} target='_black' aria-label="LinkedIn">
							<IoLogoLinkedin />
						</a>
					</div>
				</div>

				<div className={s.copyright}>
					© 2026 Task Board. All rights reserved.
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
