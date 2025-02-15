import { useContext } from "react";
import { ContextProvider } from "../store/contextaapi";

const SortingItems = () => {
    const { items, setItems } = useContext(ContextProvider);

    const handleSorting = (type) => {
        let sortedItems = [...items];

        if (type === "ascending") {
            sortedItems.sort((item, b) => item.item.localeCompare(b.item));
        } else if (type === "descending") {
            sortedItems.sort((item, b) => b.item.localeCompare(item.item));
        } else if (type === "asc_date") {
            sortedItems.sort((a, b) => new Date(a.date) - new Date(b.date));
        } else if (type === "desc_date") {
            sortedItems.sort((a, b) => new Date(b.date) - new Date(a.date));
        }

        setItems(sortedItems);
    };

    return (
        <div className="p-20px mt-[30px] ml-[00px]">
            <select
                className="border-[1px] w-[150px] bg-amber-100 p-2 rounded"
                onChange={(event) => handleSorting(event.target.value)}
            >
                <option value="">Sorting items</option>
                <option value="ascending">Sort by Ascending Alphabet</option>
                <option value="descending">Sort by Descending Alphabet</option>
                <option value="asc_date">Sort by Ascending Date</option>
                <option value="desc_date">Sort by Descending Date</option>
            </select>
        </div>
    );
};

export default SortingItems;
