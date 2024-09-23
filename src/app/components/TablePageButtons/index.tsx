import { TablePageButtonsProps } from "@/app/interfaces";


export default function TablePageButtons({ tablePage, setTablePage, highestPage }: TablePageButtonsProps) {

    // Functions

    const decrementTablePage = () => {
        // To prevent edge case of going to zero or below
        if (tablePage > 1) {
            setTablePage((tablePage) => tablePage - 1)
        }
    }

    const incrementTablePage = () => {
        // To prevent ability to navigate to an unreachable page
        if (tablePage < highestPage) {
            setTablePage((tablePage) => tablePage + 1)
        }
    }
    return (
        <div className="flex flex-row ml-auto mr-5 w-40 h-40 justify-center items-center">
            <div className="mr-5 w-5 h-5">
                {tablePage > 1 && (
                    <button onClick={decrementTablePage} className="mx-3 text-lg">
                        -
                    </button>
                )}
            </div>

            <header className="font-bold text-lg mx-auto mt-2">{tablePage}</header>

            <div className="mr-5 w-5 h-5">
                {tablePage < highestPage && (
                    <button onClick={incrementTablePage} className="mx-3 text-lg">
                        +
                    </button>
                )} 
            </div>
        </div>
    )
}