function AddInventory () {

    return (

        <div className="add-inventory">
            <h2 className="add-inventory__header">Add To Inventory</h2>
            <form className="add-inventory__form">
                <input id="addName" className="add-inventory__form-name" name="addName" type="text" />
                <label for="addName">Name
                </label>
                <input id="addCode" className="add-inventory__form-code" name="addCode" type="text" />
                <label for="addCode">Code
                </label>
                <input id="addType" className="add-inventory__form-type" name="addType" type="text" />
                <label for="addType">Type
                </label>
                <input id="addBrand" className="add-inventory__form-brand" name="addBrand" type="text" />
                <label for="addBrand">Brand
                </label>
                <input id="addVendor" className="add-inventory__form-vendor" name="addVendor" type="text" />
                <label for="addVendor">Vendor
                </label>
                <input id="addFDA" className="add-inventory__form-fda" name="addFDA" type="text" />
                <label for="addFDA">FDA status
                </label>
                <input id="addCase" className="add-inventory__form-case" name="addCase" type="number" />
                <label for="addCase">Case Count per Pallet
                </label>
                <input id="addLb" className="add-inventory__form-lb" name="addLb" type="number"/>
                <label for="addLb">lb per Case
                </label>
                <input id="addCost" className="add-inventory__form-cost" name="addCost" type="number" />
                <label for="addCost">Cost per lb
                </label>
                <input id="addWeight" className="add-inventory__form-weight" name="addWeight" type="number" />
                <label for="addWeight">Total Weight per Pallet
                </label>
                <input id="addTotal" className="add-inventory__form-total" name="addTotal" type="number" />
                <label for="addTotal">Total Cost per Pallet
                </label>
                <input id="addLocation" className="add-inventory__form-location" name="addLocation" type="number" />
                <label for="addLocation">Pallet Location
                </label>
                <input id="addPurchaser" className="add-inventory__form-purchaser" name="addPurchaser" type="text" />
                <label for="addPurchaser">Purchaser
                </label>
                <input id="addPDate" className="add-inventory__form-pdate" name="addPDate" type="date" />
                <label for="addPDate">Purchase date
                </label>
                <input id="addEDate" className="add-inventory__form-edate" name="addEDate" type="date" />
                <label for="addEDate">Entry date
                </label>
                <input id="addXDate" className="add-inventory__form-xdate" name="addXDate" type="date" />
                <label for="addXDate">Expiration date
                </label>
                <input className="add-inventory__form-reset-button" type="button" value="Reset" />
                <input className="add-inventory__form-submit-button" type="submit" value="Submit" />
            </form>
        </div>

    )

}

export default AddInventory