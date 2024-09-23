"use client"

import { useEffect, useState } from "react";
import { PageRowProps } from "@/app/interfaces";
import { calculateScore } from "@/app/utils/calculateScore";

export default function PageRow({ pageData, lowestScore, highestScore }: PageRowProps) {

	// State Variables

	const [score, setScore] = useState(0)

	// Functions

	const getColorForScore = (): string => {
		const middleScore = (highestScore + lowestScore) / 2;
	
		if (score >= middleScore) {
		// Green for scores closer to the highest score
		const greenIntensity = Math.floor((255 * (score - middleScore)) / (highestScore - middleScore));
		return `rgb(100, 255, ${greenIntensity + 25})`;
		} else {
		// Red for scores closer to the lowest score
		const redIntensity = Math.floor((255 * (middleScore - score)) / (middleScore - lowestScore));
		return `rgb(255, ${redIntensity + 25}, 100)`;
		}
	};

	// Effect Handling

	useEffect(() => {
		if (typeof pageData === 'object') {
			setScore(calculateScore(pageData))
		}
	}, [pageData])

	// Row Contents

	const headerContent = () => {
		return (
			<>
				<div className="flex flex-row bg-gray-800 p-2">Url</div>

				<button className="flex flex-row justify-center bg-gray-800 p-2">Score</button>
				<button className="flex flex-row justify-center bg-gray-800 p-2">Scroll</button>
				<button className="flex flex-row justify-center bg-gray-800 p-2">Time</button>
				<button className="flex flex-row justify-center bg-gray-800 p-2">Bounce</button>
				<button className="flex flex-row justify-center bg-gray-800 p-2">Enters</button>
				<button className="flex flex-row justify-center bg-gray-800 p-2">Exits</button>
				<button className="flex flex-row justify-center bg-gray-800 p-2">Page Views</button>
				<button className="flex flex-row justify-center bg-gray-800 p-2">Visitors</button>
			</>
		)
	}
	
	const pageContent = () => {
		if (typeof pageData === 'object') return (
			<>
				{/* Urls are long without the ability to wrap. On overflow, the remaining content can be scrolled through */}
				<div className="flex flex-row max-w-96 max-h-6 whitespace-nowrap overflow-x-scroll overflow-y-scroll mt-1">{pageData.url}</div>

				<div className='flex flex-row justify-center p-2' style={{ color: getColorForScore()}}>{score}</div>
				<div className="flex flex-row justify-center p-2">{pageData.avgScrollPercentage}%</div>
				<div className="flex flex-row justify-center">{}</div>
				<div className="flex flex-row justify-center">{pageData.bounceCount}</div>
				<div className="flex flex-row justify-center">{pageData.startsWithCount}</div>
				<div className="flex flex-row justify-center">{pageData.endsWithCount}</div>
				<div className="flex flex-row justify-center">{pageData.totalPageviewCount}</div>
				<div className="flex flex-row justify-center">{pageData.totalVisitorCount}</div>
			</>
		)
		return <header> Loading... </header>
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
