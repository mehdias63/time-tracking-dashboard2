import React from 'react'

export default function Card({ color, icon, title, text, time }) {
	return (
		<div className="relative mb-20 md:mb-20 lg:mb-40 md:mr-1">
			<div
				style={{ backgroundColor: color }}
				className="w-[20rem] h-[6rem] md:w-[12.5rem] rounded-xl"
			>
				<img src={icon} className="ml-auto mr-4" />
			</div>
			<div className="text-[#FFF] bg-dark-blue w-[20rem] h-[8rem] md:w-[12.5rem] lg:h-[12.5rem] rounded-xl p-4 flex flex-col justify-center gap-6 absolute top-10 hover:bg-blue-hover cursor-pointer">
				<div className="flex justify-between items-center">
					<p className="text-xl">{title}</p>
					<img src="images/icon-ellipsis.svg" />
				</div>
				<div className="flex md:flex-col justify-between items-center md:items-start lg:gap-2">
					<h2 className="text-[2rem]">{time}</h2>
					<p className="text-blue-sky text-[0.9375rem]">{text}</p>
				</div>
			</div>
		</div>
	)
}
