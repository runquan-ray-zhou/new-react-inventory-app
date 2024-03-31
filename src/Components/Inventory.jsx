import AddInventory from "./AddInventory"
import DisplayProductInfo from "./DisplayProductInfo"
import SearchInventory from "./SearchInventory"

function Inventory () {

    return (
        <section className="inventory">
            <SearchInventory />
            <DisplayProductInfo />
            <AddInventory />
        </section>
    )

}

export default Inventory