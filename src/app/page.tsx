"use client"

import { useState } from "react";
import { pages } from "./pages.json";
import PageRow from "./components/PageRow";
import TablePageButtons from "./components/TablePageButtons";
import { calculateScore } from "./utils/calculateScore";

export default function Home() {

	// State Vars

	// Refers to each set of 10 displayed pages
	const [tablePage, setTablePage] = useState(1)
	const [sort, setSort] = useState('')
	
	// Functions

	const sortedPages = pages.toSorted((a, b) => {
		switch(sort) {
			case 'Score':
				return calculateScore(b) - calculateScore(a)
			case 'Scroll':
				return b.avgScrollPercentage - a.avgScrollPercentage
			case 'Time':
				return 0
			case 'Bounce':
				return b.bounceCount - a.bounceCount
			case 'Enters':
				return b.startsWithCount - a.startsWithCount
			case 'Exits':
				return b.endsWithCount - a.endsWithCount
			case 'Page Views':
				return b.totalPageviewCount - a.totalPageviewCount
			case 'Visitors':
				return b.totalVisitorCount - a.totalVisitorCount
			default:
				return 0
		}
	})

	// Util Variables

	const hasRemainderPage = pages.length % 10 !== 0
	const highestPage = Math.floor(pages.length / 10) + (hasRemainderPage ? 1 : 0)

	const allScores = pages.map((page) => calculateScore(page))
	const highestScore = Math.max(...allScores)
	const lowestScore = Math.min(...allScores)


	// Calculate start and end indices
	const startIndex = (tablePage - 1) * 10;
	const endIndex = highestPage !== tablePage ? tablePage * 10 : pages.length;

	// Slice the pages array
	const calculatedTableSlice = sortedPages.slice(startIndex, endIndex);

	return (
		<div className="flex flex-col items-center justify-items-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">

			{/* Page Navigator */}

			<TablePageButtons tablePage={tablePage} setTablePage={setTablePage} highestPage={highestPage} />

			{/* Table Header */}

			<div className="grid grid-cols-table gap-y-4 justify-center items-center">
				<PageRow pageData={'header'} highestScore={highestScore} lowestScore={lowestScore} sort={sort} setSort={setSort}  />
			</div>

			{/* Rendered Page Rows */}

			<div className="grid grid-cols-table gap-y-4 p-5 justify-center items-center">
				{calculatedTableSlice.map((page) => {
					// The page object has no id, but url should be unique
					return <PageRow pageData={page} key={page.url} highestScore={highestScore} lowestScore={lowestScore} sort={sort} setSort={setSort}  />
				})}
			</div>
		</div>
	);
}
