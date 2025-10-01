import { useState } from "react";
import "./App.css";
import QuizPage from "./components/QuizPage";

function App() {
	const [count, setCount] = useState(0);

	return (
		<body className="bg-[#001e4d]">
			<QuizPage />
		</body>
	);
}

export default App;
