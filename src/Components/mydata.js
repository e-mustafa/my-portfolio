import templateCarouselImg from "../imgs/template-w-carousel.png";
import watchProductsImg from "../imgs/watch-products.png";
import basicCalculatorImg from "../imgs/basic-calculator.png";
import currencyExchangeImg from "../imgs/currency-exchange.jpg";
import caraShopingImg from "../imgs/cara-shoping.png";
import lusionShoppingImg from "../imgs/react-lusion-app.jpg";
import coffeeKingImg from "../imgs/Tamplate-103-CoffeeKing-Bootstrap.jpg";
import Tamplate102RocherImg from "../imgs/Tamplate-102-Rocher-Furniture.jpg";
import Tamplate101DesignImg from "../imgs/Tamplate-101.jpg";
import simpleMoviesReduxImg from "../imgs/simple-movies-redux.jpg";
import simpleMoviesImg from "../imgs/simple-movies.jpg";
import portfolioImg from "../imgs/mustafa-portfolio.png";



export const navLinks = [
	{ title: "Home", link: "home" },
	{ title: "Skills", link: "skills" },
	{ title: "Projects", link: "projects" },
	// { title: "contact", link: "contact" },
];



export const mySkils = [
	{ name: "HTML", value: 95 },
	{ name: "CSS", value: 90 },
	{ name: "JavaScript", value: 87 },
	{ name: "Bootstrap", value: 92 },
	{ name: "Matiral UI", value: 75 },
	{ name: "React", value: 84 },
];

export const myPersonalInfo = [
	{
		id: 201,
		title: "Name: ",
		info: "Mustafa Abutabl",
	},
	{
		id: 204,
		title: "Nationality: ",
		info: "Egyption",
	},
	{
		id: 205,
		title: "Military Service: ",
		info: " Finshed",
	},
	{
		id: 206,
		title: "Langages: ",
		info: "Arabic, English",
	},
	{
		id: 208,
		title: "Phone: ",
		info: "+20 111 970 6667",
		link: "tel:+201119706667",
	},
	{
		id: 207,
		title: "Email: ",
		info: "eng.mustafa@hotmail.com",
		link: "mailto:eng.mustafax@gmail.com",
	},
	{ id: 209, title: "Freelance: ", info: "Available", color: "#01ef92" },
];

export const myProjects = [
	{
		id: 112,
		title: "Coffee shop template",
		img: coffeeKingImg,
		link: "https://e-mustafa.github.io/Tamplate-103-CoffeeKing-Bootstrap",
		githubLink:
			"https://github.com/e-mustafa/Tamplate-103-CoffeeKing-Bootstrap",
		Language: ["HTML", "CSS", "Bootstrap", "Javascript"],
		description:
			"Coffee shop template with edit bootstrap default colors and JavaScript shopping cart, favorite list, register and sign in with validate. With notifications toast. You need to register and sign in to checkout and add items to favorite list.",
	},
	{
		id: 111,
		title: "Rocher-Furniture Tamplate",
		img: Tamplate102RocherImg,
		link: "https://e-mustafa.github.io/Tamplate-102-Rocher-Furniture",
		githubLink: "https://github.com/e-mustafa/Tamplate-102-Rocher-Furniture",
		Language: ["HTML5", "CSS3"],
		description: "Rocher-Furniture Tamplate html and some css3.",
	},
	{
		id: 110,
		title: "Architectural Design Template",
		img: Tamplate101DesignImg,
		link: "https://e-mustafa.github.io/Tamplate-101/",
		githubLink: "https://github.com/e-mustafa/Tamplate-101",
		Language: ["HTML", "CSS"],
		description: "Architectur Design template html & css only.",
	},
	{
		id: 109,
		title: "My Portfolio",
		img: portfolioImg,
		link: "https://e-mustafa.github.io/portfolio/",
		githubLink: "https://github.com/e-mustafa/portfolio",
		Language: ["HTML", "CSS", "Material Ui", "Javascript", "React"],
		description:
			"my portfolio website! Crafted with the latest technologies, including React and Material UI, my portfolio showcases a seamless fusion of stunning design and cutting-edge functionality.",
	},
	{
		id: 108,
		title: "Simple Movies with Redux",
		img: simpleMoviesReduxImg,
		link: "https://simplemovies-redux.netlify.app",
		githubLink: "https://github.com/e-mustafa/moviesApp-redux",
		Language: ["HTML", "CSS", "Material Ui", "Javascript", "React", "Redux"],
		description:
			"Simple movies website to discover popular movies, and add to favorite list, with using Redux.",
	},
	{
		id: 107,
		title: "Simple Movies",
		img: simpleMoviesImg,
		link: "https://simplemovies-app.netlify.app",
		githubLink: "https://github.com/e-mustafa/sempleMoviesApp",
		Language: ["HTML", "CSS", "Material Ui", "Javascript", "React"],
		description:
			"Simple movies website to discover popular movies, and add to favorite list.",
	},
	{
		id: 106,
		title: "Lusion Shopping",
		img: lusionShoppingImg,
		link: "https://react-lusion-app.netlify.app",
		githubLink: "https://github.com/e-mustafa/React-Lusion-App",
		Language: ["HTML", "CSS", "Bootstrap", "Javascript", "React"],
		description:
			"Lustion ecommerce web responsive with many pages and form validation.",
	},
	{
		id: 105,
		title: "Cara Shoping",
		img: caraShopingImg,
		link: "https://cara-shoping.vercel.app",
		githubLink: "https://github.com/e-mustafa/Cara-Shoping",
		Language: ["HTML", "CSS", "Bootstrap", "Javascript"],
		description:
			"responsive ecommerce website main page, sign up and sign in made with js.",
	},
	{
		id: 104,
		title: "Currency Exchange",
		img: currencyExchangeImg,
		link: "https://currency-exchange-mu.vercel.app",
		githubLink: "https://github.com/e-mustafa/currencyExchange",
		Language: ["HTML", "CSS", "Bootstrap", "Javascript"],
		description:
			'This is a simple Currency Converter application, I took help from this website, "exchangerate-api" to create an API connection.',
	},
	{
		id: 103,
		title: "Basic Calculator",
		img: basicCalculatorImg,
		link: "https://basic-calculator-self.vercel.app",
		githubLink: "https://github.com/e-mustafa/basic-Calculator",
		Language: ["HTML", "CSS", "Bootstrap", "Javascript"],
		description:
			"Basic Calculator for doing simple mathematical operations: addition, subtraction, multiplication and division.",
	},
	{
		id: 102,
		title: "Watch Products",
		img: watchProductsImg,
		link: "https://watch-products.vercel.app",
		githubLink: "https://github.com/e-mustafa/Watch-Products",
		Language: ["HTML", "CSS", "Bootstrap"],
		description: "single page responsive website.",
	},
	{
		id: 101,
		title: "Template W Carousel",
		img: templateCarouselImg,
		link: "https://template-w-carousel.vercel.app",
		githubLink: "https://github.com/e-mustafa/template-w-carousel",
		Language: ["HTML", "CSS", "Bootstrap"],
		description: "single page responsive website.",
	},
];
