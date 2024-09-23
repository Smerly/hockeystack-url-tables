This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Hockey Stack URL data visualization tables

Data visualization driven tables, built for tracking analytics or other metrics from HockeyStack domains

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Reflections on the Project

I had lots of fun building the table visualizing this page data from Hockey Stack. In the time span of 2-3 hours, I had tradeoffs due to the limitations of time constraints. I was successfully able to build the full application with all of the features. I was able to save time while handling edge case like url row remainders (say there were 51 url rows, you need 6 pages to allow for the last url row to render) by handling the pages (by 10) by handling it with state rather than separate routes. The components in the project are built to be resuable for tables with different columns and data. 

The one feature left off was ascendingly sorted data. The app currently allows for only descending. With the amount of time I had left, I was able to allow for only descending or only ascending, because with both ascending and descending features, I have to handle state for double clicks and rendering an icon that shows the user which it is sorted by. With this time, I chose to sort descending data because it displayed more important data for the purposes of analytics. 

## What I would do with more time

1. Dynamically render the row elements in PageRow for cleaner code, and memoize elements that takes lots of memory, but stay relatively static

2. Finish sort filter feature to allow for ascending

3. Transfer certain operations and state to a global scope, like with Redux or Zustand to prevent prop drilling and general clean code in future implementations

4. Fully implement designs, such as a chevron with animations for up and down

5. Make the application more responsive on changes
