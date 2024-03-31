function SearchInventory () {

    return (

        <div className="search-inventory">
            <h2 className="search-inventory__header">Search Inventory</h2>
            <form className="search-inventory__form">
            <input id="searchName" className="search-inventory__form-name" name="searchName" type="text"/>
            <label for="searchName">Product Name
            </label>
            <input id="searchCode" className="search-inventory__form-code" name="searchCode" type="number"/>
            <label for="searchCode">Product Code
            </label>
            <input id="searchType" className="search-inventory__form-type" name="searchType" type="text"/>
            <label for="searchType">Product Type
            </label>
            <input id="searchBrand" className="search-inventory__form-brand" name="searchBrand" type="text"/>
            <label for="searchBrand">Product Brand
            </label>
            <input className="search-inventory__form-reset-button" type="button" value="Reset" />
            <input className="search-inventory__form-submit-button" type="submit" value="Submit" />
            <input className="search-inventory__form-hideAll-button" type="button" value="Hide All" />
            <input className="search-inventory__form-showAll-button" type="button" value="Show All" />
            </form>
        </div>

    )


}
export default SearchInventory