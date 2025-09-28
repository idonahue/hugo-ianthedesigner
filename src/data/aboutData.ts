export interface ExperienceItem {
  logo: string;
  title: string;
  company: string;
  companySite?: string;
  caseStudy: boolean;
  caseStudyUrl: string;
  duration: string;
  descriptionShort: string;
  descriptionLong: string;
}

export const aboutData = {
  title: "About",
  description: "About",
  authorImage: "/images/about/author.jpg",
  authorSignature: "/images/about/signature.png",
  
  content: `I am an interdisciplinary designer with +10 years of designing digital products that call the web their home. My professional experience has covered all stages of product design - including research, strategy, design, development & delivery.

### Product Designer
I'm a Product Designer who grew up on the web. I'm not a web designer as much as I think of myself as a Designer who builds products that live on the web. Most recently, I've been a Product lead at Dave and unicorn Designer UberMedia. I enjoy solving complex problems with research and elegant UX designs.

### Front-End Developer
The question that creeps its head up way too often is, "should designers also code?" And the discussion around this has been beaten to death. I love talking about CSS, CSS frameworks, HTML templating, and web-optimization more than reliving my past travels. SASS is awesome, ReactJS is dope (though I do have some qualms with inline styling) and I get excited developing my CSS frameworks for projects.

### Photographer
I'm not like a lot of other designers who take photos. I ONLY take photos of dogs. No food, no architecture, no travel photography, no portrait work... well dog portraits, but that's the only kind of portrait I'll take. 🐕`,

  cvExperience: {
    enable: true,
    title: "Experience",
    items: [
      {
        logo: "/images/experience/icon-1.png",
        title: "Lead Product Designer",
        company: "GitButler",
        companySite: "https://gitbutler.com",
        caseStudy: false,
        caseStudyUrl: "../gitbutler/",
        duration: "March 2023 - Present",
        descriptionShort: "",
        descriptionLong: "Working with a small team to help change the way developers work with Git."
      },
      {
        logo: "/images/experience/icon-1.png",
        title: "Senior Product Designer",
        company: "Shopify",
        companySite: "https://apps.shopify.com/shopify-forms",
        caseStudy: true,
        caseStudyUrl: "../shopify/",
        duration: "July 2022 - February 2023",
        descriptionShort: "",
        descriptionLong: "Oversaw all aspects of design. Directed a small team of designer to improver our implement a global Design System, Design Ops, Marketing Ops, and as well as individually contributed to as a Product Designer. Released numerous products to push the company to a fully digitalized post sales experience."
      },
      {
        logo: "/images/experience/icon-1.png",
        title: "Director of Design",
        company: "Qunomedical",
        companySite: "https://qunomedical.com",
        caseStudy: true,
        caseStudyUrl: "../design-systems/",
        duration: "Sept 2020 - June 2022",
        descriptionShort: "",
        descriptionLong: "Oversaw all aspects of design. Directed a small team of designer to improver our implement a global Design System, Design Ops, Marketing Ops, and as well as individually contributed to as a Product Designer. Released numerous products to push the company to a fully digitalized post sales experience."
      },
      {
        logo: "/images/experience/icon-1.png",
        title: "Senior Product Designer",
        company: "Dave",
        companySite: "https://dave.com",
        caseStudy: true,
        caseStudyUrl: "../dave-customer-success-workspace/",
        duration: "Dec 2018 — Jan 2020",
        descriptionShort: "",
        descriptionLong: "Join Dave as the first product designer outside of Dave's CPO. Lead Designer on the Customer Support workspace and helped prepare it for the rollout. Design a scalable workspace, designed UX paradigms with usability as the focus. Established the internal tools design system."
      },
      {
        logo: "/images/experience/icon-2.png",
        title: "Lead Product Designer",
        company: "UberMedia",
        companySite: "https://compucom.com",
        caseStudy: true,
        caseStudyUrl: "../ubermedia-vista-measurement/",
        duration: "Dec 2017 — Jan 2020",
        descriptionShort: "",
        descriptionLong: "Cintric join UberMedia in 2017. Supported the company as the sole Product designer, which allowed for working on +10 projects. Primarily focused on 'Vista by UberMedia,' which launched UberMedia into a product-focused company. Additionally, was the product manager on Vista Measurement and established the design system for all of the products within 'Vista by UberMedia.'"
      },
      {
        logo: "/images/experience/icon-1.png",
        title: "Co-founder & VP, User Experience",
        company: "Cintric",
        companySite: "https://cintric.com",
        caseStudy: false,
        caseStudyUrl: "",
        duration: "Jan 2015 — Apr 2017",
        descriptionShort: "",
        descriptionLong: "Co-founded a Location Data Analysis company in San Francisco bay. Cintric turns existing mobile user-bases into location and consumer intelligence. Cross-disciplinary roles included working product, marketing, front-end development, and business strategy. Product-specific responsibilities included building and maintaining a design system, UI Engineering, HTML/CSS frameworks, prototyping, and usability testing."
      },
      {
        logo: "/images/experience/icon-1.png",
        title: "Co-founder & Designer",
        company: "Venn",
        companySite: "",
        caseStudy: false,
        caseStudyUrl: "/meetloaf/",
        duration: "Jan 2014 — Jan 2015",
        descriptionShort: "",
        descriptionLong: "Venn is an API solution for connecting users in the real world safely. With use cases in p2p commerce, dating, and networking, Venn converts online interactions into convenient and safe offline connections for products, people, and professionals."
      },
      {
        logo: "/images/experience/icon-1.png",
        title: "Product Designer",
        company: "CompuCom",
        companySite: "https://compucom.com",
        caseStudy: false,
        caseStudyUrl: "#",
        duration: "Mar 2013 — Feb 2015",
        descriptionShort: "",
        descriptionLong: "Venn is an API solution for connecting users in the real world safely. With use cases in p2p commerce, dating, and networking, Venn converts online interactions into convenient and safe offline connections for products, people, and professionals."
      }
    ]
  }
};
