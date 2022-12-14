import "../styles/globals.css";
import { ThemeProvider, useTheme } from "next-themes";
import { AnimatePresence } from "framer-motion";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import Image from "next/image";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps, router }) {
	const [hideNav, setHide] = useState(false);
	useDarkMode();
	const [intro, setIntro] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setIntro(false);
			window.document.documentElement.style.overflowY = "hidden";
			setTimeout(() => {
				window.document.documentElement.style.overflowY = "scroll";
			}, 2100);
		}, 3200);
	}, []);

	return (
		<div className="">
			<AnimatePresence mode="wait">
				{intro && (
					<motion.div className="flex items-center justify-center min-h-[100vh]">
						<motion.div
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{
								opacity: 1,
								scale: 1,
								transition: {
									duration: 1,
									type: "spring",
									damping: 20,
									stiffness: 30,
								},
							}}
							exit={{
								opacity: 0,
								scale: 0.5,
								transition: {
									opacity: { duration: 0.5 },
									scale: { duration: 1 },
								},
							}}
							className="w-[150px] relative h-[150px] "
						>
							<Image src={"/binary1.gif"} layout="fill" alt="" />
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence mode="wait">
				{!intro && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{
							opacity: 1,
							y: 0,
							transition: { duration: 1, delay: 0.8 },
						}}
						className="app"
					>
						<Nav hideNav={hideNav} setHide={setHide} />
						<AnimatePresence
							mode="wait"
							initial={false}
							onExitComplete={() => window.scrollTo(0, 0)}
						>
							<Component
								router={router}
								hide={hideNav}
								setHide={setHide}
								{...pageProps}
								key={router.route}
							/>
						</AnimatePresence>
						<AnimatePresence>
							<Footer key={router.route} />
						</AnimatePresence>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default MyApp;
