import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<div
			className={`${styles.footer}  items-center justify-center text-center py-4`}
		>
			<nav className="container mx-auto flex justify-between items-center">
				<div className="flex flex-col items-center">
					<Image
						src="/images/LogoFooter.png"
						alt="Impulso Pixel Logo"
						width={250}
						height={20}
						className="mb-2"
					/>
				</div>
				<div className="flex space-x-4">
					<a href="/hero" className={`${styles.button} ${styles.Footertext}`}>
						Blog
					</a>
					<div className="flex flex-col items-center">
						<a
							href="https://www.instagram.com/impulsopixel"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src="/images/instagram.png"
								alt="Impulso Pixel Logo"
								width={40}
								height={0}
								className="mb-2"
							/>
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Footer;
