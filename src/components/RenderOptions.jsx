import React from "react";
import { question } from "./data/questions";

const RenderOptions = () => {
	return (
		<>
			<div>
				{question.map((items) =>
					items.answers.map((answer, index) => (
						<button
							className="bg-white text-[#222] font-medium w-full border-[1px] border-[#222] p-2.5 my-2.5 mx-0 text-left rounded-sm cursor-pointer hover:bg-[#222] hover:text-white transition-all duration-300"
							key={index}
						>
							{answer.text}
						</button>
					))
				)}
			</div>
		</>
	);
};

export default RenderOptions;
