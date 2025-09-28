export interface PortfolioItem {
  title: string;
  image: string;
  projectUrl: string;
  categories: string[];
}

export const portfolioData: PortfolioItem[] = [
  {
    title: "Portfolio Item",
    image: "/images/portfolio/item-1.png",
    projectUrl: "http://examplesite.com",
    categories: ["design", "development"]
  },
  {
    title: "Portfolio Item",
    image: "/images/portfolio/item-2.png",
    projectUrl: "#",
    categories: ["branding"]
  },
  {
    title: "Portfolio Item",
    image: "/images/portfolio/item-3.png",
    projectUrl: "http://examplesite.com",
    categories: ["illustration"]
  },
  {
    title: "Portfolio Item",
    image: "/images/portfolio/item-5.png",
    projectUrl: "#",
    categories: ["design"]
  },
  {
    title: "Portfolio Item",
    image: "/images/portfolio/item-8.png",
    projectUrl: "http://examplesite.com",
    categories: ["illustration", "development"]
  },
  {
    title: "Portfolio Item",
    image: "/images/portfolio/item-6.png",
    projectUrl: "#",
    categories: ["design"]
  },
  {
    title: "Portfolio Item",
    image: "/images/portfolio/item-1.png",
    projectUrl: "http://examplesite.com",
    categories: ["branding"]
  },
  {
    title: "Portfolio Item",
    image: "/images/portfolio/item-3.png",
    projectUrl: "#",
    categories: ["illustration", "development"]
  },
  {
    title: "Portfolio Item",
    image: "/images/portfolio/item-7.png",
    projectUrl: "http://examplesite.com",
    categories: ["branding"]
  }
];
