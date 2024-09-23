"use client"

import { PageRowProps } from "@/app/interfaces";

export default function PageRow({ pageData }: PageRowProps) {

	// Row Contents

	const headerContent = () => {
		return (
			<>
				<div className="border border-gray-400 bg-gray-800">Url</div>
				<div className="border border-gray-400 bg-gray-800">Scroll</div>

				<div className="border border-gray-400 bg-gray-800">Time</div>
				<div className="border border-gray-400 bg-gray-800">Bounce</div>
				<div className="border border-gray-400 bg-gray-800">Enters</div>
				<div className="border border-gray-400 bg-gray-800">Exits</div>
				<div className="border border-gray-400 bg-gray-800">Page Views</div>
				<div className="border border-gray-400 bg-gray-800">Visitors</div>
			</>
		)
	}
	
	const pageContent = () => {
		if (typeof pageData === 'object') return (
			<>
				<div className="">{pageData.url}</div>
				<div className="">{pageData.avgScrollPercentage}%</div>

				<div className="">{}</div>
				<div className="">{pageData.bounceCount}</div>
				<div className="">{pageData.startsWithCount}</div>
				<div className="">{pageData.endsWithCount}</div>
				<div className="">{pageData.totalPageviewCount}</div>
				<div className="">{pageData.totalVisitorCount}</div>
			</>
		)
	}

	// component renderer
	const renderRowContent = () => {
		switch(pageData) {
			case 'header':
				return headerContent()
			default:
				return pageContent()
		}
	}

	// Return conditional JSX

	return renderRowContent()
}
