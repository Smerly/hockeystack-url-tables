import { Page } from "../interfaces"

export const calculateScore = (pageData: Page) => {
    const { totalVisitorCount, totalPageviewCount, bounceCount, avgScrollPercentage, startsWithCount, endsWithCount } = pageData
    const score = (totalVisitorCount * 0.4) + 
        (totalPageviewCount * 0.3) + 
        ((100 - bounceCount) * 0.2) + 
        (avgScrollPercentage * 0.3) +
        ((startsWithCount + endsWithCount) * 0.1)
    return Math.floor(score)
}