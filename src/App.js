import React, { useState, useEffect } from "react";
import objectDB from "./quotes.json";
import { QuotesContainer } from "./components/quotesContainer";

function App() {
	const [isQuotes, setIsQuotes] = useState("");
	const [isAuthor, setIsAuthor] = useState("");
	const [colors, setColors] = useState("#161d6f");

	useEffect(() => {
		getCites();
	}, []);

	const getCites = () => {
		let data = objectDB.quotes;
		let randomData = Math.floor(Math.random() * data.length);

		let NumRandom = data[randomData];
		setIsQuotes(NumRandom.quote);
		setIsAuthor(NumRandom.author);
	};
	const getColor = () => {
		var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
		setColors(randomColor);
	};

	return (
		<div className="App" style={{ backgroundColor: colors }}>
			<QuotesContainer
				randomColor={getColor}
				getQuotes={isQuotes}
				getAuthors={isAuthor}
				onQuoteChange={getCites}
			/>
		</div>
	);
}

export default App;
