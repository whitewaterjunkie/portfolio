import DarkMode from "../components/DarkMode";
import useDarkMode from "../hooks/useDarkMode";
import { AnimatePresence, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Head from "next/head";
import SocialLinks from "../components/SocialLinks";
import { BsArrowBarRight, BsDownload, BsMoon } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { tech_stack } from "../utils/tech_stack";
import StackCard from "../components/StackCard";
import Image from "next/image";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Link from "next/link";
import { useRouter } from "next/router";

/* eslint-disable react/no-unescaped-entities */
export const slideDown = {
	initial: {
		y: 50,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.2,
			type: "spring",
			damping: 20,
			stiffness: 100,
		},
	},
	exit: {
		y: -50,
		opacity: 0,
		transition: {
			duration: 0.3,
		},
	},
};
export default function Home({ setHide, hide }) {
	const [isLoading, setLoading] = useState(true);
	const router = useRouter();
	return (
		<motion.div className="min-h-screen ease-in-out dark:text-white page">
			<Head>
				<title>Reynald Sampelo - Frontend Engineer </title>
				<meta
					name="description"
					content="	An Information Technology student who is passionate and has innate
					curiosity about Software Development. Aspiring
					to be a full-stack developer who can adapt quickly and easily grasp
					emerging technologies."
				/>
				<link rel="apple-touch-icon" href="binary-code.png" />
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>

			{/* <div className="flex flex-col items-center justify-center h-screen">
				<div className="flex text-7xl md:text-9xl">
					<h1 className="mb-5 md:mb-10 ">Building</h1>
					<Typewriter
						options={{
							autoStart: true,
							strings: ["..."],
							deleteSpeed: 150,
							cursor: "",
							loop: true,
						}}
					/>
				</div>
				<h3 className="md:text-xl">
					Still working on my website <span className="mx-2">😄</span>
				</h3>
			</div> */}
			{/* <AnimatePresence>
				{isLoading && (
					<motion.div>
						<ClipLoader />
					</motion.div>
				)}
			</AnimatePresence> */}

			{/* {!isLoading && ( */}
			<motion.div
				initial="initial"
				animate="animate"
				exit="exit"
				transition="transition"
				variants={slideDown}
				className=""
			>
				<div className="flex flex-col items-center justify-between gap-10 lg:items-end lg:flex-row">
					{/* <div className="relative lg:hidden w-[15rem] h-[15rem] lg:w-[22rem] lg:h-[22rem]">
						<motion.div className="absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
							<ClipLoader
								cssOverride={{ borderWidth: "3px" }}
								loading={isLoading}
								color="#52594A"
								size={80}
							></ClipLoader>
						</motion.div>
						<div
							className={`relative lg:hidden w-[15rem] h-[15rem] overflow-hidden rounded-full   lg:w-[22rem] lg:h-[22rem] ease-in-out duration-[.5s] ${
								isLoading
									? "blur-md scale-110 opacity-70 "
									: "blur-0 opacity-100 scale-100"
							}`}
						>
							<Image
								src={"/bo.webp"}
								layout="fill"
								objectFit="contain"
								alt=""
								className={``}
								onLoadingComplete={() => setLoading(false)}
							/>
						</div>
					</div> */}

					<div className="flex flex-col items-start min-h-[60vh] mb-[10rem] justify-center lg:items-start lg:text-start">
						<p className="text-2xl asd  md:text-4xl  text-black transition after:translate-x-1.5 translate-y-3 dark:text-white">
							Hello! I am
						</p>
						<span className="text-transparent font-bold mb-2 transition text-7xl md:text-8xl bg-gradient-to-r from-[#191654] to-[#43c6ac] dark:from-[#7069f4] dark:to-[#abedf3] bg-clip-text ">
							Reynald Sampelo
						</span>{" "}
						<motion.h2 className="text-3xl font-semibold md:text-5xl  text-[#0000008d] dark:text-[#ebebeb]  ">
							Frontend Engineer
						</motion.h2>
						<p className="my-10 text-xl text-[#868686]">
							I like to build stuff
						</p>
						<div className="">
							<SocialLinks />
						</div>
					</div>
					{/* <div className="hidden w-[15rem] h-[15rem]  lg:block relative lg:w-[22rem] lg:h-[22rem]">
						<motion.div className="absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
							<ClipLoader
								cssOverride={{ borderWidth: "3px" }}
								loading={isLoading}
								color="#52594A"
								size={80}
							></ClipLoader>
						</motion.div>
						<div
							className={`hidden w-[15rem] h-[15rem] overflow-hidden rounded-full  lg:block relative lg:w-[22rem] lg:h-[22rem] ease-in-out duration-[.5s] ${
								isLoading
									? "blur-md scale-110 opacity-70 "
									: "blur-0 opacity-100 scale-100"
							}`}
						>
							<Image
								src={"/bo.webp"}
								layout="fill"
								objectFit="contain"
								alt=""
								className={``}
								onLoadingComplete={() => setLoading(false)}
							/>
						</div>
					</div> */}
				</div>
				{/* <div className="flex gap-1 text-xl font-semibold">
					<Typewriter
						options={{
							strings: ["PHP", "JavaScript", "React", "NextJS"],
							autoStart: true,
							loop: true,
							pauseFor: 1500,
							deleteSpeed: 100,
						}}
					/>
				</div> */}
				<h2 className="header2">About</h2>

				<div className="flex flex-col items-center justify-between gap-20 xl:items-start xl:flex-row">
					<div className="flex flex-col xl:w-[60%]">
						<motion.p className="paragraph">
							My name is Reynald Sampelo and I am an Information Technology
							student who is passionate and has innate curiosity about{" "}
							<span className="highlight "> Software Development. </span>I
							aspire to be a full-stack developer who can adapt quickly and
							easily grasp emerging technologies.
						</motion.p>
						<p className="paragraph">
							I am interested in learning more about Web and Mobile Application
							Development. I am comfortable on working with{" "}
							<span className=" highlight">ReactJS</span> and{" "}
							<span className=" highlight">NextJS</span> on my projects. I am
							also yet to learn about <span className="highlight">BaaS</span>{" "}
							such as <span className=" highlight">Firebase </span> &{" "}
							<span className="highlight">Supabase</span> to integrate on my
							projects. I also ought to start learning{" "}
							<span className="highlight">React Native </span> as my main Mobile
							App Tech Stack.
						</p>
						<p className="paragraph">
							Other than coding, I spend my time to practice{" "}
							<span className="font-semibold">Yaw-Yan</span> (a Filipino martial
							art), <span className="font-semibold">Surfskating</span>,{" "}
							<span className="font-semibold">Freediving</span>,{" "}
							<span className="font-semibold">Photography</span>,{" "}
							<span className="font-semibold">Videography</span>, and playing{" "}
							<span className="font-semibold">musical instruments</span> in my
							free time.
						</p>
					</div>
					<div className="relative group ">
						<div className="absolute items-center flex gap-1 font-['Nanum_Pen_Script'] text-lg rotate-[14deg] right-[-50px] top-[-3rem] z-50">
							hover me in{" "}
							{
								<div className="text-sm -translate-y-0.5 ml-0.5">
									<BsMoon />
								</div>
							}{" "}
							mode!
						</div>
						<motion.div className="absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
							<ClipLoader
								cssOverride={{ borderWidth: "3px" }}
								loading={isLoading}
								color="#52594A"
								size={80}
							></ClipLoader>
						</motion.div>

						<div
							className={`relative group-hover:-translate-y-0.5 group-hover:-translate-x-0.5  dark:group-hover:-translate-x-5 dark:group-hover:-translate-y-5  saturate-0 group-hover:saturate-100   group-hover:shadow-[5px_5px_10px_#00000038]   outline-4 rounded-md    w-[22rem] h-[24rem] ease-in-out duration-[.4s] ${
								isLoading
									? "blur-md scale-110 opacity-70 "
									: "blur-0 opacity-100 scale-100"
							}`}
						>
							<Image
								src={"/bo.jpg"}
								layout="fill"
								objectFit="cover"
								alt=""
								className={`rounded-[4px] z-50`}
								onLoadingComplete={() => setLoading(false)}
							/>{" "}
							<div className="hidden w-full h-full duration-500 dark:block -z-10 asdd group-hover:translate-x-5 group-hover:translate-y-5 before:border-[3px]  before:border-white  before:border-solid"></div>
							<div className="absolute top-0 hidden w-full h-full duration-500 delay-50 dark:block -z-10 asdd group-hover:translate-x-10 group-hover:translate-y-10  before:border-[3px]  before:border-solid  before:border-[#ffffff46]"></div>
							<div className="absolute top-0 hidden w-full h-full duration-500 delay-50 dark:block -z-10 asdd group-hover:translate-x-[3.75rem] group-hover:translate-y-[3.75rem]  before:border-[3px]  before:border-solid  before:border-[#ffffff13]"></div>
							<div className="absolute top-0 hidden w-full h-full duration-500 delay-50 dark:block -z-10 asdd group-hover:translate-x-[5rem] group-hover:translate-y-[5rem]  before:border-[3px]  before:border-solid  before:border-[#ffffff05]"></div>
						</div>
					</div>
				</div>

				<h2 className="header2">Stack</h2>
				<div className="grid w-full grid-cols-3 gap-6 my-10 mb-24 md:flex md:flex-wrap">
					{tech_stack.map((e) => {
						return <StackCard key={e.name} e={e} />;
					})}
				</div>
				<div className="flex flex-col items-center justify-center  mt-[12rem] mb-[5rem] ">
					<p className="text-[4.5rem] text-[#292929] dark:text-white">
						next up
					</p>

					<motion.p
						onClick={() => {
							router.push("/projects", undefined, { scroll: false });
							setHide(false);
						}}
						whileHover={{ x: 10 }}
						transition={{ duration: 0.2 }}
						className="flex gap-2 items-center text-[3rem] font-thin cursor-pointer"
					>
						Projects -{">"}
					</motion.p>
				</div>
			</motion.div>
			{/* )} */}
		</motion.div>
	);
}
