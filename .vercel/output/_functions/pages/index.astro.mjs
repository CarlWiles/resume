/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderHead, e as renderComponent, f as renderSlot, u as unescapeHTML } from '../chunks/astro/server_DLOe7z_7.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Download = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Download;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a download class="text-slate-400 hover:text-slate-500 dark:text-slate-600"${addAttribute(href, "href")} rel="noopener noreferrer"> <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path> </svg> </a>`;
}, "/Users/songdongwei/Documents/CV/tools/resume/src/components/Download.astro", undefined);

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
const $$Astro = createAstro();
const $$Minimalist = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Minimalist;
  const { PDF_VIEW, FORCE_THEME = "" } = Object.assign(__vite_import_meta_env__, {});
  const { title, pdfLink, noIndex, description } = Astro2.props.frontmatter;
  const initials = title.split(" ").map(([initial]) => initial.toUpperCase()).slice(0, 2);
  return renderTemplate`<html lang="en"${addAttribute(FORCE_THEME, "class")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description || title, "content")}>${noIndex && renderTemplate`<meta name="robots" content="noindex">`}<title>${title}</title>${renderHead()}</head> <body${addAttribute(!PDF_VIEW ? "bg-indigo-50 dark:bg-slate-900 sm:my-14" : "", "class")}> <div class="container mx-auto flex justify-center"> <article class="minimalist relative"> <div class="absolute top-4 rounded-sm bg-indigo-400 px-4 py-1 sm:left-8 sm:top-12"> <div class="flex h-fit select-none flex-col items-center text-sm font-bold"> ${initials.map((initial) => renderTemplate`<span>${initial}</span>`)} </div> </div> ${!PDF_VIEW && renderTemplate`<div class="not-prose absolute right-4 top-4"> ${renderComponent($$result, "Download", $$Download, { "href": pdfLink })} </div>`} ${renderSlot($$result, $$slots["default"])} </article> </div>  </body> </html>`;
}, "/Users/songdongwei/Documents/CV/tools/resume/src/layouts/Minimalist.astro", undefined);

const html = () => "<h1 id=\"carl\">Carl</h1>\n<p><strong>Web3 Full Stack Developer</strong></p>\n<p>ShenZhen, China | <a href=\"mailto:silverwingsdw@gmail.com\">silverwingsdw@gmail.com</a></p>\n<p>Web3 developer with extensive experience in blockchain technologies, smart contract development, and full-stack engineering. Skilled in designing secure and efficient DeFi protocols, as well as integrating scalable web applications with blockchain systems. Adept at solving complex challenges and delivering robust solutions.</p>\n<h2 id=\"work-experience\">Work Experience</h2>\n<h3 id=\"rho-markets\"><a href=\"https://rhomarkets.xyz/\">Rho Markets</a></h3>\n<h4 id=\"web3-full-stack-developer--may-2024---present\">Web3 Full Stack Developer | May 2024 - Present</h4>\n<ul>\n<li>Designed and developed core modules, including market management, lending mechanisms, and liquidation logic, ensuring secure and efficient protocol operations.</li>\n<li>Implemented and optimized smart contracts using <strong>Solidity</strong>, enhancing system stability and resistance to attacks.</li>\n<li>Integrated frontend with smart contracts using <strong>React</strong> and <strong>Web3.js</strong>, creating user-friendly lending interfaces.</li>\n<li>Developed multi-asset interest rate calculation logic to maximize user profitability.</li>\n<li>Managed off-chain data storage with <strong>PostgreSQL</strong> and <strong>Redis</strong>, enabling efficient processing and access to large-scale data.</li>\n<li>Conducted smart contract security audits, identifying and resolving vulnerabilities to strengthen overall system security.</li>\n</ul>\n<h3 id=\"agilely\">Agilely</h3>\n<h4 id=\"web3-full-stack-developer--nov-2023---mar-2024\">Web3 Full Stack Developer | Nov 2023 - Mar 2024</h4>\n<ul>\n<li>Refactored and optimized <strong>Liquity</strong> smart contracts, enhancing decentralized lending and stablecoin generation mechanisms for better security and scalability.</li>\n<li>Developed efficient liquidity pool management logic, enabling seamless asset deposits, withdrawals, and automated liquidations.</li>\n<li>Improved stablecoin stability by optimizing minting mechanisms and designing a dynamic minting fee model.</li>\n<li>Built responsive user interfaces with <strong>React</strong> and <strong>Web3.js</strong>, facilitating effective interaction with smart contracts.</li>\n</ul>\n<h3 id=\"worldfirst\">WorldFirst</h3>\n<h4 id=\"react-developer--apr-2021---oct-2023\">React Developer | Apr 2021 - Oct 2023</h4>\n<ul>\n<li>Contributed to the development of the WorldFirst platform frontend, ensuring a responsive design and enhanced user experience across devices.</li>\n<li>Delivered key features, including the developer payment account management interface, simplifying payment detail management for users.</li>\n<li>Optimized frontend performance through code splitting and lazy loading, reducing page load times and improving responsiveness.</li>\n<li>Supported platform internationalization, expanding accessibility to a global audience and increasing international competitiveness.</li>\n<li>Collaborated with backend teams via RESTful APIs, ensuring data consistency and reliability.</li>\n</ul>\n<h3 id=\"rimedata\">RimeData</h3>\n<h4 id=\"full-stack-developer--mar-2020---mar-2021\">Full Stack Developer | Mar 2020 - Mar 2021</h4>\n<ul>\n<li>Developed data analysis services with <strong>Golang</strong>, addressing large-scale data processing requirements.</li>\n<li>Contributed to the feature development and refactoring of Web, App, and Mini Program WebView platforms, enhancing usability and functionality.</li>\n</ul>\n<h2 id=\"projects\">Projects</h2>\n<ul>\n<li><a href=\"https://www.rhomarkets.xyz/\">Rho Markets</a></li>\n<li><a href=\"https://agilely.io/\">Agilely</a></li>\n<li><a href=\"https://www.worldfirst.com/\">WorldFirst</a></li>\n<li><a href=\"https://rimedata.com/\">RimeData</a></li>\n</ul>\n<h2 id=\"skills\">Skills</h2>\n<ul>\n<li><strong>Programming Languages:</strong> Proficient in <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>Rust</strong>, <strong>Golang</strong>, and <strong>Node.js</strong>.</li>\n<li><strong>Blockchain Expertise:</strong> Deep understanding of <strong>Solidity</strong>, <strong>Solana</strong>, <strong>EVM</strong>, and <strong>SVM</strong> mechanisms.</li>\n<li><strong>Frameworks:</strong> Experienced with <strong>Hardhat</strong>, <strong>Foundry</strong>, and <strong>Anchor Framework</strong>.</li>\n<li><strong>Tools &#x26; Libraries:</strong> Skilled in <strong>Web3.js</strong>, <strong>ethers.js</strong>, <strong>wagmi</strong>, <strong>solana-web3.js</strong>.</li>\n<li><strong>Security:</strong> Knowledgeable about common vulnerabilities (e.g., reentrancy, integer overflow) and capable of implementing robust security measures.</li>\n</ul>\n<h2 id=\"education\">Education</h2>\n<h3 id=\"shenzhen-university\">Shenzhen University</h3>\n<h4 id=\"bachelor-of-computer-science--jun-2012---jan-2016\">Bachelor of Computer Science | Jun 2012 - Jan 2016</h4>\n<hr>\n<p>Thank you for reviewing this resume. Excited about the possibility of contributing to your team’s success!</p>\n<p><a href=\"Carl_Resume.pdf\">Download PDF</a></p>";

				const frontmatter = {"title":"Carl - Resume","description":"Resume about Carl, a Web3 Full Stack Developer.","layout":"../layouts/Minimalist.astro","pdfLink":"Carl_Resume.pdf"};
				const file = "/Users/songdongwei/Documents/CV/tools/resume/src/pages/index.md";
				const url = "";
				function rawContent() {
					return "   \n                    \n                                                            \n                                   \n                        \n   \n\n# Carl\n\n**Web3 Full Stack Developer**\n\nShenZhen, China | silverwingsdw@gmail.com \n \nWeb3 developer with extensive experience in blockchain technologies, smart contract development, and full-stack engineering. Skilled in designing secure and efficient DeFi protocols, as well as integrating scalable web applications with blockchain systems. Adept at solving complex challenges and delivering robust solutions.\n\n## Work Experience\n\n### [Rho Markets](https://rhomarkets.xyz/)\n\n#### Web3 Full Stack Developer | May 2024 - Present\n\n- Designed and developed core modules, including market management, lending mechanisms, and liquidation logic, ensuring secure and efficient protocol operations.\n- Implemented and optimized smart contracts using **Solidity**, enhancing system stability and resistance to attacks.\n- Integrated frontend with smart contracts using **React** and **Web3.js**, creating user-friendly lending interfaces.\n- Developed multi-asset interest rate calculation logic to maximize user profitability.\n- Managed off-chain data storage with **PostgreSQL** and **Redis**, enabling efficient processing and access to large-scale data.\n- Conducted smart contract security audits, identifying and resolving vulnerabilities to strengthen overall system security.\n\n### Agilely\n\n#### Web3 Full Stack Developer | Nov 2023 - Mar 2024\n\n- Refactored and optimized **Liquity** smart contracts, enhancing decentralized lending and stablecoin generation mechanisms for better security and scalability.\n- Developed efficient liquidity pool management logic, enabling seamless asset deposits, withdrawals, and automated liquidations.\n- Improved stablecoin stability by optimizing minting mechanisms and designing a dynamic minting fee model.\n- Built responsive user interfaces with **React** and **Web3.js**, facilitating effective interaction with smart contracts.\n\n### WorldFirst\n\n#### React Developer | Apr 2021 - Oct 2023\n\n- Contributed to the development of the WorldFirst platform frontend, ensuring a responsive design and enhanced user experience across devices.\n- Delivered key features, including the developer payment account management interface, simplifying payment detail management for users.\n- Optimized frontend performance through code splitting and lazy loading, reducing page load times and improving responsiveness.\n- Supported platform internationalization, expanding accessibility to a global audience and increasing international competitiveness.\n- Collaborated with backend teams via RESTful APIs, ensuring data consistency and reliability.\n\n### RimeData\n\n#### Full Stack Developer | Mar 2020 - Mar 2021\n\n- Developed data analysis services with **Golang**, addressing large-scale data processing requirements.\n- Contributed to the feature development and refactoring of Web, App, and Mini Program WebView platforms, enhancing usability and functionality.\n\n## Projects\n\n- [Rho Markets](https://www.rhomarkets.xyz/)\n- [Agilely](https://agilely.io/)\n- [WorldFirst](https://www.worldfirst.com/)\n- [RimeData](https://rimedata.com/)\n\n## Skills\n\n- **Programming Languages:** Proficient in **JavaScript**, **TypeScript**, **Rust**, **Golang**, and **Node.js**.\n- **Blockchain Expertise:** Deep understanding of **Solidity**, **Solana**, **EVM**, and **SVM** mechanisms.\n- **Frameworks:** Experienced with **Hardhat**, **Foundry**, and **Anchor Framework**.\n- **Tools & Libraries:** Skilled in **Web3.js**, **ethers.js**, **wagmi**, **solana-web3.js**.\n- **Security:** Knowledgeable about common vulnerabilities (e.g., reentrancy, integer overflow) and capable of implementing robust security measures.\n\n## Education\n\n### Shenzhen University\n\n#### Bachelor of Computer Science | Jun 2012 - Jan 2016\n \n---\n\nThank you for reviewing this resume. Excited about the possibility of contributing to your team’s success!\n\n[Download PDF](Carl_Resume.pdf)\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"carl","text":"Carl"},{"depth":2,"slug":"work-experience","text":"Work Experience"},{"depth":3,"slug":"rho-markets","text":"Rho Markets"},{"depth":4,"slug":"web3-full-stack-developer--may-2024---present","text":"Web3 Full Stack Developer | May 2024 - Present"},{"depth":3,"slug":"agilely","text":"Agilely"},{"depth":4,"slug":"web3-full-stack-developer--nov-2023---mar-2024","text":"Web3 Full Stack Developer | Nov 2023 - Mar 2024"},{"depth":3,"slug":"worldfirst","text":"WorldFirst"},{"depth":4,"slug":"react-developer--apr-2021---oct-2023","text":"React Developer | Apr 2021 - Oct 2023"},{"depth":3,"slug":"rimedata","text":"RimeData"},{"depth":4,"slug":"full-stack-developer--mar-2020---mar-2021","text":"Full Stack Developer | Mar 2020 - Mar 2021"},{"depth":2,"slug":"projects","text":"Projects"},{"depth":2,"slug":"skills","text":"Skills"},{"depth":2,"slug":"education","text":"Education"},{"depth":3,"slug":"shenzhen-university","text":"Shenzhen University"},{"depth":4,"slug":"bachelor-of-computer-science--jun-2012---jan-2016","text":"Bachelor of Computer Science | Jun 2012 - Jan 2016"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Minimalist, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
