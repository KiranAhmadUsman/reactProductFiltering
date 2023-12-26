import { useState } from "react";
import SearchBar from "../layouts/searchBar";
import ProductTable from "../layouts/productTable";

const FilterableProductTable = ({ products }) => {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div>
            <SearchBar
                filterText={ filterText }
                inStockOnly={ inStockOnly }
                onFilterTextChange={ setFilterText }
                onInStockOnlyChange={ setInStockOnly } />
            <ProductTable
                products={ products }
                filterText={ filterText }
                inStockOnly={ inStockOnly } />
        </div>
    );
}
export default FilterableProductTable;