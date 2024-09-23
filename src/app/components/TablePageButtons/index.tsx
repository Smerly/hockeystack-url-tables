import { TablePageButtonsProps } from "@/app/interfaces";


export default function TablePageButtons({ tablePage, setTablePage, pageLength }: TablePageButtonsProps) {

    // Util variables

    const hasRemainderPage = pageLength % 10 !== 0
    const highestPage = pageLength / 10 + (hasRemainderPage ? 1 : 0)

    // Functions

    const decrementTablePage = () => {
        // To prevent edge case of going to zero or below
        if (tablePage > 1) {
            setTablePage((tablePage) => tablePage - 1)
        }
    }

    const incrementTablePage = () => {
        // To prevent ability to navigate to an unreachable page
        if (tablePage < highestPage ) {
            setTablePage((tablePage) => tablePage + 1)
        }
    }
    return (
        <div className="flex flex-row ml-auto mr-5 w-40 h-40 border justify-center items-center">
            {tablePage > 1 && (
                <button onClick={decrementTablePage} className="mx-3">
                    -
                </button>
            )}
            <header className="font-bold text-lg">{tablePage}</header>
            {tablePage < highestPage && (
                <button onClick={incrementTablePage} className="mx-3">
                    +
                </button>
            )} 
        </div>
    )
}