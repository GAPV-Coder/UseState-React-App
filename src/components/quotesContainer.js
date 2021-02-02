import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Quotes from "./quotes";

export const QuotesContainer = ({
	getQuotes,
	getAuthors,
	onQuoteChange,
	randomColor,
}) => {
	return (
		<div className="quoteContainer">
			<Quotes showQuotes={getQuotes} showAuthors={getAuthors} />
			<div className="btns">
				<a
					className="btn tweet"
					href={`https://twitter.com/intent/tweet?text=${getQuotes}-${getAuthors}`}
					target="-blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faTwitter} />
				</a>
				<button
					className="btn"
					onClick={() => {
						onQuoteChange();
						randomColor();
					}}
				>
					New Quote
				</button>
			</div>
		</div>
	);
};
