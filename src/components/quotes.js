import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Quotes = ({ showQuotes, showAuthors }) => {
	return (
		<blockquote>
			<FontAwesomeIcon icon={faQuoteLeft} />
			<h1 className="quotes">{showQuotes}</h1>
			<FontAwesomeIcon icon={faQuoteRight} />
			<h3 className="authors">~ {showAuthors}</h3>
		</blockquote>
	);
};
export default Quotes;
