"use client"

import { useState } from "react";
import { pages } from "./pages.json";
import PageRow from "./components/PageRow";
import TablePageButtons from "./components/TablePageButtons";

export default function Home() {

	// State Vars

	// Refers to each set of 10 displayed pages
	const [tablePage, setTablePage] = useState(1)
	const [filter, setFilter] = useState('')
	
	// Functions

	const sortedPages = pages

	const calculatedTableSlice = sortedPages.slice(tablePage*10-10+1, tablePage*10)

	return (
		<div className="flex flex-col items-center justify-items-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">

			<TablePageButtons tablePage={tablePage} setTablePage={setTablePage} pageLength={sortedPages.length} />
			<div className="grid grid-cols-table gap-y-4 m-auto">
				<PageRow pageData={'header'} />
			</div>

			<div className="grid grid-cols-table gap-y-4 p-5 w-96">
        		{/* All Rendered Page Rows */}
				{calculatedTableSlice.map((page) => {
					// The page object has no id, but url should be unique
					return <PageRow pageData={page} key={page.url} />
				})}
			</div>
		</div>
	);
}
