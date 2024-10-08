import { Dispatch, SetStateAction } from "react";

// Obj Types


export interface Page {
    url: string;
    totalCount: number;
    totalVisitorCount: number;
    bounceCount: number;
    startsWithCount: number;
    endsWithCount: number;
    avgScrollPercentage: number;
    totalPageviewCount: number;
}

// Props

export interface PageRowProps {
    pageData: Page | 'header'
    highestScore: number;
    lowestScore: number;
    sort: string
    setSort: Dispatch<SetStateAction<string>>;
}

export interface TablePageButtonsProps {
    tablePage: number;
    setTablePage: Dispatch<SetStateAction<number>>;
    highestPage: number;
}