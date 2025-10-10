import React from "react";
import { question } from "./data/questions";
import RenderOptions from "./RenderOptions";
import RenderQuestions from "./RenderQuestions";

const QuizPage = () => {
	return (
		<div className="bg-white w-[90%] max-w-[600px] mt-[100px] mx-auto mb-0 border-rounded rounded-[10px] py-5 px-8 font-bold">
			<h1 className="text-[25px] font-semibold text-[#001e4d] border-b-[1px] border-[#333] py-4.5 ">
				MiniQuiz
			</h1>
			<div className="px-0 py-5 quiz">
				<RenderQuestions />
				<div id="answer-buttons">
					<RenderOptions />
				</div>
				<button
					id="next-btn"
					className="bg-[#001e4d] text-white font-medium w-40 p-2.5 rounded-sm mt-5 mx-auto mb-0 cursor-pointer hover:bg-[#222] transition-all duration-300 hidden "
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default QuizPage;
