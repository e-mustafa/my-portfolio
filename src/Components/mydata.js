import templateCarousel2Img from "../imgs/Projects/template-w-carouse-full.jpg";
import watchProducts2Img from "../imgs/Projects/watch-products-full.jpg";
import caraShoping2Img from "../imgs/Projects/cara-shoping-full.jpg";
import lusionShopping2Img from "../imgs/Projects/react-lusion-full.jpg";
import coffeeKing2Img from "../imgs/Projects/Tamplate-103-CoffeeKing-Bootstrap-full.jpg";
import Tamplate102Rocher2Img from "../imgs/Projects/Tamplate-102-Rocher-Furniture-full.jpg";
import Tamplate101Design2Img from "../imgs/Projects/Tamplate-101-full.jpg";
import simpleMoviesRedux2Img from "../imgs/Projects/simple-movies-redux-full.jpg";
import simpleMovies2Img from "../imgs/Projects/Simple Movies-full.jpg";
import devitaWatchs2Img from "../imgs/Projects/devita-watchs-full.jpg";


import basicCalculatorImg from "../imgs/Projects/basic-calculator.jpg";
import currencyExchangeImg from "../imgs/Projects/currency-exchange.jpg";
import portfolioImg from "../imgs/Projects/mustafa-portfolio.jpg";

import templateCarouselImg from "../imgs/Projects/template-w-carousel.jpg";
import watchProductsImg from "../imgs/Projects/watch-products.jpg";
import caraShopingImg from "../imgs/Projects/cara-shoping.jpg";
import lusionShoppingImg from "../imgs/Projects/react-lusion-app.jpg";
import coffeeKingImg from "../imgs/Projects/Tamplate-103-CoffeeKing-Bootstrap.jpg";
import Tamplate102RocherImg from "../imgs/Projects/Tamplate-102-Rocher-Furniture.jpg";
import Tamplate101DesignImg from "../imgs/Projects/Tamplate-101.jpg";
import simpleMoviesReduxImg from "../imgs/Projects/simple-movies-redux.jpg";
import simpleMoviesImg from "../imgs/Projects/simple-movies.jpg";
import devitaWatchsImg from "../imgs/Projects/devita-watchs.jpg";
// ----------------------------------------------------------------------------


export const navLinks = [
	{ title: "Home", link: "home" },
	{ title: "Skills", link: "skills" },
	{ title: "Projects", link: "projects" },
	// { title: "contact", link: "contact" },
];



export const mySkills = [
	{ name: "HTML", value: 95 },
	{ name: "CSS", value: 90 },
	{ name: "JavaScript", value: 87 },
	{ name: "Bootstrap", value: 92 },
	{ name: "Material UI", value: 75 },
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
		id: 113,
		title: "Devita Watchs",
		img: [devitaWatchsImg, devitaWatchs2Img],
		link: "https://devita-watchs.vercel.app/",
		githubLink: "https://github.com/e-mustafa/devita-watchs",
		Language: ["HTML", "CSS", "Material Ui", "Javascript", "React", "Next"],
		description:
			"Online store for selling wristwatches, Developed using Next js 13 app dirctory, static & dynamic metadata, shopping cart, favorite list, With notifications toast.",
	},
	{
		id: 112,
		title: "Coffee shop template",
		img: [coffeeKingImg, coffeeKing2Img],
		link: "https://e-mustafa.github.io/Tamplate-103-CoffeeKing-Bootstrap",
		githubLink: "https://github.com/e-mustafa/Tamplate-103-CoffeeKing-Bootstrap",
		Language: ["HTML", "CSS", "Bootstrap", "Javascript"],
		description:
			"Coffee shop template with edit bootstrap default colors and JavaScript shopping cart, favorite list, register and sign in with validate. With notifications toast. You need to register and sign in to checkout and add items to favorite list.",
	},
	{
		id: 111,
		title: "Rocher-Furniture Tamplate",
		img: [Tamplate102RocherImg, Tamplate102Rocher2Img],
		link: "https://e-mustafa.github.io/Tamplate-102-Rocher-Furniture",
		githubLink: "https://github.com/e-mustafa/Tamplate-102-Rocher-Furniture",
		Language: ["HTML5", "CSS3"],
		description: "Rocher-Furniture Tamplate html and some css3.",
	},
	{
		id: 110,
		title: "Architectural Design Template",
		img: [Tamplate101DesignImg, Tamplate101Design2Img],
		link: "https://e-mustafa.github.io/Tamplate-101/",
		githubLink: "https://github.com/e-mustafa/Tamplate-101",
		Language: ["HTML", "CSS"],
		description: "Architectur Design template html & css only.",
	},
	{
		id: 109,
		title: "My Portfolio",
		img: [portfolioImg],
		link: "https://e-mustafa.github.io/portfolio/",
		githubLink: "https://github.com/e-mustafa/portfolio",
		Language: ["HTML", "CSS", "Material Ui", "Javascript", "React"],
		description:
			"my portfolio website! Crafted with the latest technologies, including React and Material UI, my portfolio showcases a seamless fusion of stunning design and cutting-edge functionality.",
	},
	{
		id: 108,
		title: "Simple Movies with Redux",
		img: [simpleMoviesReduxImg, simpleMoviesRedux2Img],
		link: "https://simplemovies-redux.netlify.app",
		githubLink: "https://github.com/e-mustafa/moviesApp-redux",
		Language: ["HTML", "CSS", "Material Ui", "Javascript", "React", "Redux"],
		description:
			"Simple movies website to discover popular movies, and add to favorite list, with using Redux.",
	},
	{
		id: 107,
		title: "Simple Movies",
		img: [simpleMoviesImg, simpleMovies2Img],
		link: "https://simplemovies-app.netlify.app",
		githubLink: "https://github.com/e-mustafa/sempleMoviesApp",
		Language: ["HTML", "CSS", "Material Ui", "Javascript", "React"],
		description: "Simple movies website to discover popular movies, and add to favorite list.",
	},
	{
		id: 106,
		title: "Lusion Shopping",
		img: [lusionShoppingImg, lusionShopping2Img],
		link: "https://react-lusion-app.netlify.app",
		githubLink: "https://github.com/e-mustafa/React-Lusion-App",
		Language: ["HTML", "CSS", "Bootstrap", "Javascript", "React"],
		description: "Lustion ecommerce web responsive with many pages and form validation.",
	},
	{
		id: 105,
		title: "Cara Shoping",
		img: [caraShopingImg, caraShoping2Img],
		link: "https://cara-shoping.vercel.app",
		githubLink: "https://github.com/e-mustafa/Cara-Shoping",
		Language: ["HTML", "CSS", "Bootstrap", "Javascript"],
		description: "responsive ecommerce website main page, sign up and sign in made with js.",
	},
	{
		id: 104,
		title: "Currency Exchange",
		img: [currencyExchangeImg],
		link: "https://currency-exchange-mu.vercel.app",
		githubLink: "https://github.com/e-mustafa/currencyExchange",
		Language: ["HTML", "CSS", "Bootstrap", "Javascript"],
		description:
			'This is a simple Currency Converter application, I took help from this website, "exchangerate-api" to create an API connection.',
	},
	{
		id: 103,
		title: "Basic Calculator",
		img: [basicCalculatorImg],
		link: "https://basic-calculator-self.vercel.app",
		githubLink: "https://github.com/e-mustafa/basic-Calculator",
		Language: ["HTML", "CSS", "Bootstrap", "Javascript"],
		description:
			"Basic Calculator for doing simple mathematical operations: addition, subtraction, multiplication and division.",
	},
	{
		id: 102,
		title: "Watch Products",
		img: [watchProductsImg, watchProducts2Img],
		link: "https://watch-products.vercel.app",
		githubLink: "https://github.com/e-mustafa/Watch-Products",
		Language: ["HTML", "CSS", "Bootstrap"],
		description: "single page responsive website.",
	},
	{
		id: 101,
		title: "Template W Carousel",
		img: [templateCarouselImg, templateCarousel2Img],
		link: "https://template-w-carousel.vercel.app",
		githubLink: "https://github.com/e-mustafa/template-w-carousel",
		Language: ["HTML", "CSS", "Bootstrap"],
		description: "single page responsive website.",
	},
];
