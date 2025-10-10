import React from "react";
import { question } from "./data/questions";

const RenderQuestions = () => {
	return (
		<>
			<h2 className="text-[18px] text-[#001e4d] font-semibold">
				{question.map((items) => {
					return items.question;
				})}
			</h2>
		</>
	);
};
export default RenderQuestions;
