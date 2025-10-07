import React from "react";

const QuizPage = () => {
	return (
		<div className="bg-white w-[90%] max-w-[600px] mt-[100px] mx-auto mb-0 border-rounded rounded-[10px] py-5 px-8 font-bold">
			<h1 className="text-[25px] font-semibold text-[#001e4d] border-b-[1px] border-[#333] pb-7.5">
				MiniQuiz
			</h1>
			<div className="px-0 py-5 quiz">
				{/* <h2>${question}</h2> */}
				<h2
					id="question"
					className="text-[18px] text-[#001e4d] font-semibold"
				>
					Question goes here
				</h2>
				<div id="answer-buttons">
					<button className="bg-white text-[#222] font-medium w-full border-[1px] border-[#222] p-2.5 my-2.5 mx-0 text-left rounded-sm cursor-pointer hover:bg-[#222] hover:text-white transition-all duration-300">
						Answer 1
					</button>
					<button className="bg-white text-[#222] font-medium w-full border-[1px] border-[#222] p-2.5 my-2.5 mx-0 text-left rounded-sm cursor-pointer hover:bg-[#222] hover:text-white transition-all duration-300">
						Answer 2
					</button>
					<button className="bg-white text-[#222] font-medium w-full border-[1px] border-[#222] p-2.5 my-2.5 mx-0 text-left rounded-sm cursor-pointer hover:bg-[#222] hover:text-white transition-all duration-300">
						Answer 3
					</button>
					<button className="bg-white text-[#222] font-medium w-full border-[1px] border-[#222] p-2.5 my-2.5 mx-0 text-left rounded-sm cursor-pointer hover:bg-[#222] hover:text-white transition-all duration-300">
						Answer 4
					</button>
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
