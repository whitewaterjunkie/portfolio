import Link from "next/link";
import DarkMode from "./DarkMode";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";

export default function Nav() {
	const nav = [
		{ label: "Home", path: "/" },
		// { label: "Experience", path: "/experience" },
		{ label: "Projects", path: "/projects" },
		{ label: "Contact", path: "/contact" },
	];
	const scaleUp = {
		initial: {
			scale: 0,
			opacity: 0.8,
		},
		animate: {
			scale: 1,
			opacity: 1,
		},
	};
	const router = useRouter();
	const [navOpen, setNavOpen] = useState(false);
	const [innerWidth, setInnerWidth] = useState();
	const [scrollY, setScrollY] = useState();
	const [hideNav, setHide] = useState();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		const hello = () => {
			setInnerWidth(window.innerWidth);
		};
		window.addEventListener("resize", hello);
		if (window.innerWidth > 767) {
			setNavOpen(false);
		}
		const asd = () => {
			if (window.scrollY > 1) {
				document.querySelector("nav").classList.add("shadow-lg");
				document.querySelector("nav").classList.remove("py-7");
				document.querySelector("nav").classList.add("py-5");
				if (window.scrollY > scrollY && innerWidth > 767) {
					setHide(true);
				} else {
					setHide(false);
				}
			} else {
				document.querySelector("nav").classList.remove("shadow-lg");
				document.querySelector("nav").classList.add("py-7");
				document.querySelector("nav").classList.remove("py-4");
			}
			setScrollY(window.scrollY);
		};
		window.addEventListener("scroll", asd);
		return () => window.removeEventListener("resize", hello);
	});
	return (
		<nav
			className={`z-50 fixed left-0 ${
				hideNav ? "-translate-y-[100px]" : ""
			} right-0  transition-all duration-500 px-[2rem] bg-white py-7 flex items-center justify-between dark:bg-[#111] dark:border-[#1f2020]`}
		>
			<Link href={"/"}>
				<p className="text-xl font-semibold text-[#3c3c3c] transition duration-500 cursor-pointer dark:text-white sm:block">
					RS
				</p>
			</Link>

			<div className="flex">
				<div
					className={`fixed overflow-hidden md:overflow-visible transition-[bottom] duration-500 left-0 right-0 flex flex-col items-center  shadow-lg bg-[#ffffff] md:gap-1 md:flex-row top-[-10px] mt-20 md:static leading-[5rem] md:leading-none md:shadow-none md:mt-0  ${
						navOpen ? "bottom-[0%]" : "bottom-[100%]"
					} dark:bg-[#111] md:bg-transparent md:dark:bg-transparent`}
				>
					{nav.map((e, i) => {
						return (
							<Link key={i} href={e.path} scroll={false}>
								<div
									onClick={() => setNavOpen(false)}
									className={`relative z-10 flex justify-center px-3 py-2 cursor-pointer ${
										router.route !== e.path ? "hover:opacity-80" : ""
									}`}
								>
									<p
										className={`transition-colors duration-500 ${
											router.route === e.path
												? "md:text-white text-purple-800 dark:text-purple-500 md:dark:text-black"
												: ""
										} dark:text-white`}
									>
										{e.label}
									</p>
									{router.route === e.path && (
										<motion.div
											layoutId={"bg"}
											className="hidden md:block w-full h-full absolute top-0 rounded-md bg-gradient-to-r from-[#7243a4]  to-[#060606] dark:from-slate-300 dark:to-slate-100 z-[-5] "
										></motion.div>
									)}
								</div>
							</Link>
						);
					})}
					<a
						onClick={() => setNavOpen(false)}
						className={`flex items-center justify-start gap-3 px-4 py-2 mx-3 transition-all duration-500 ease-in-out rounded-md ${
							innerWidth > 767
								? " shadow-[0px_0px_0px_1px_#333] hover:shadow-[3px_3px_10px_0px_#33333318]"
								: "hover:opacity-80"
						}  dark:border-white dark:text-white w-max  dark:shadow-[0px_0px_0px_1px_#d0d0d0] dark:hover:shadow-[0px_0px_0px_2px_#d0d0d0] `}
						href="/reynaldsampelo_resume.pdf"
						target={"_blank"}
					>
						Resume
					</a>
				</div>
				<div className="mx-4 md:mx-8 md:block md:translate-y-[2px]">
					<DarkMode />
				</div>
				<motion.div
					initial="initial"
					animate="animate"
					onClick={() => setNavOpen(!navOpen)}
					className="text-2xl transition-opacity duration-300 cursor-pointer md:hidden hover:opacity-70 dark:text-white"
				>
					{navOpen && (
						<motion.div variants={scaleUp} className="">
							<MdClose />
						</motion.div>
					)}
					{!navOpen && (
						<motion.div variants={scaleUp} className="">
							<HiMenu />
						</motion.div>
					)}
				</motion.div>
			</div>
		</nav>
	);
}
