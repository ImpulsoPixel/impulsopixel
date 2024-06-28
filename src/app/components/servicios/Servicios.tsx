import Image from "next/image";
import styles from "./Servicios.module.css";

const Servicios = () => {
	return (
		<div
			className={`${styles.Servicios} flex flex-col items-center justify-center text-center h-screen`}
		>
			<div className="flex flex-col items-center">
				<h1
					className={`${styles.Servicios} text-4xl font-bold text-black mb-2`}
				>
					Servicios
				</h1>
				<div className={`${styles.containertitle} flex flex-col items-center justify-center text-center`}>
					<p className={styles.subtitle}>Desarrollo web</p>
					<p className={styles.psubtitle}>
						Una Landing Page es una pagina web de de una sola vista que tiene
						como objetivo que el visitante realice una acción en específico o
						encuentre una información determinada. Es un mostrador de
						información en línea como un portafolio o una pagina principal de un
						negocio.
					</p>
				</div>
			</div>
			<div className="flex flex-wrap justify-center">
				<div className="w-1/3 p-4">
					<div className={`${styles.card} ${styles.planBasico}`}>
						<h2 className={styles.planName}>Plan Basico</h2>
						<div className={styles.card2}>
							<p className={styles.price}> 160US$ </p>
							<p className={styles.price2}> 200US$</p>
							<ul className={styles.features}>
								<li>Landing page</li>
								<li>Formulario de Contácto</li>
								<li>Dominio y hosting</li>
								<li>Correos corporativos</li>
								<li>Conexión a redes sociales</li>
							</ul>
							<button className={styles.button}>QUIERO ESTE SERVICIO</button>
						</div>
					</div>
					<h2 className={styles.buttontittle}>* Mantenimiento Por separado</h2>
				</div>
				<div className="w-1/3 p-4">
					<h2 className={styles.titlecard}>Plan más vendido</h2>
					<div className={`${styles.card} ${styles.planPlus}`}>
						<h2 className={styles.planName1}>Plan Plus</h2>
						<div className={styles.card2}>
							<p className={styles.price}> 160US$ </p>
							<p className={styles.price2}> 200US$</p>
							<ul className={styles.features}>
								<li>Landing page</li>
								<li>Formulario de Contácto</li>
								<li>Dominio y hosting</li>
								<li>Correos corporativos</li>
								<li>Conexión a redes sociales</li>
							</ul>
							<button className={styles.button}>QUIERO ESTE SERVICIO</button>
						</div>
					</div>
				</div>
				<div className="w-1/3 p-4">
					<div className={`${styles.card} ${styles.planCompleto}`}>
						<h2 className={styles.planName}>Plan Completo</h2>
						<div className={styles.card2}>
							<p className={styles.price}> 160US$ </p>
							<p className={styles.price2}> 200US$</p>
							<ul className={styles.features}>
								<li>Landing page</li>
								<li>Formulario de Contácto</li>
								<li>Dominio y hosting</li>
								<li>Correos corporativos</li>
								<li>Conexión a redes sociales</li>
							</ul>
							<button className={styles.button}>QUIERO ESTE SERVICIO</button>
						</div>
					</div>
				</div>
			</div>
			<div className={`${styles.cardcontainer} flex flex-col items-center justify-center text-center`}>
					<div className={`${styles.CardAPP}`}>
						<h2 className={styles.planName1}>Desarrollo APP</h2>
						<div className={styles.card2}>
							<p className={styles.textcard}>En Impulso Pixel nuestros proyectos de desarrollo de aplicaciones, como sistemas de ventas, gestión de bodegas u otros sistemas personalizados, se diseñan completamente a medida y se adaptan a las necesidades específicas de tu negocio. Si tienes una idea en mente o necesitas un sistema personalizado, no dudes en ponerte en contacto con nosotros. Estamos aquí para escucharte y convertir tus ideas en realidad.</p>
							<button className={styles.button}>Cuéntanos tu idea</button>
						</div>
					</div>
				</div>
				<div className={`${styles.cardcontainer} flex flex-col items-center justify-center text-center`}>
					<div className={`${styles.CardAPP2}`}>
						<h2 className={styles.planName1}>Desarrollo APP Móvil</h2>
						<div className={styles.card2}>
							<p className={styles.textcard}>En Impulso Pixel, creamos la aplicación móvil que tú y tu negocio necesitan. Con nuestra experiencia en desarrollo de aplicaciones, diseñaremos y desarrollaremos una app móvil personalizada que se adapte perfectamente a tus necesidades y objetivos. Ya sea para mejorar la experiencia del usuario, aumentar la eficiencia operativa o expandir tu alcance, estamos aquí para ayudarte a llevar tu negocio al siguiente nivel con una solución móvil innovadora y de alta calidad. ¡Contáctanos hoy mismo para empezar a convertir tu visión en realidad!</p>
							<button className={styles.button}>Cuéntanos tu idea</button>
						</div>
					</div>
				</div>
		</div>
		
	);
};

export default Servicios;
