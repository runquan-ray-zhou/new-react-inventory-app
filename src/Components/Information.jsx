function Information () {

    return (

        <section className="information">
            <h2 className="information__header">Inventory Product Information</h2>
            <div className="information__table">
                <button className="information__table-values">Image</button>
                <button id="1.nameButton" className="information__table-values">Name</button>
                <button id="2.codeButton" className="information__table-values">Code</button>
                <button id="3.typeButton" className="information__table-values">Type</button>
                <button id="4.brandButton" className="information__table-values">Brand</button>
                <button id="5.vendorButton" className="information__table-values">Vendor</button>
                <button id="6.fdaButton" className="information__table-values">FDA</button>
                <button id="7.caseButton" className="information__table-values">Case</button>
                <button id="8.lbButton" className="information__table-values">lb</button>
                <button id="9.costButton" className="information__table-values">Cost</button>
                <button id="10.weightButton" className="information__table-values">Weight</button>
                <button id="11.totalButton" className="information__table-values">Total</button>
                <button id="12.rackButton" className="information__table-values">Rack</button>
                <button id="13.buyerButton" className="information__table-values">Buyer</button>
                <button id="14.pDateButton" className="information__table-values">PDate</button>
                <button id="15.eDateButton" className="information__table-values">EDate</button>
                <button id="16.xDateButton" className="information__table-values">XDate</button>
                <button className="information__table-values">Option</button>
                <ul className="information__list">
                    <li id="U15HON-WS-USA-30" className="information__list-item"><span><img className="information__list-image" src="src/assets/fiveStarBrand.png" alt="fiveStarBrandShrimp" /></span><span>Wild Shrimp U15</span><span>U15HON-WS-USA-30</span><span>Frozen Shrimp</span><span>Five Star</span><span>Star Foods Products</span><span>Released</span><span>49</span><span>30lb</span><span>7.00</span><span>1470lb</span><span>10290</span><span>A1A</span><span>Ray</span><span>2024-03-19</span><span>2024-03-20</span><span>2026-02-28</span><div className="information__option"><input className="information__select-button" type="button" value="Select" /><input className="information__remove-button" type="button" value="Remove" /></div></li>

                    <li id="16/20-FS-ECU-24" className="information__list-item"><span><img className="information__list-image" src="src/assets/champmarBrand.png" alt="champmarBrandShrimp" /></span><span>Farm Shrimp 16/20</span><span>16/20-FS-ECU-24</span><span>Frozen Shrimp</span><span>Champmar</span><span>Songa</span><span>Released</span><span>70</span><span>24lb</span><span>3.50</span><span>1680lb</span><span>5880</span><span>A2A</span><span>Ray</span><span>2024-03-19</span><span>2024-03-20</span><span>2026-01-23</span><div className="information__option"><input className="information__select-button" type="button" value="Select" /><input className="information__remove-button" type="button" value="Remove" /></div></li>

                    <li id="21/25-FS-IND-24" className="information__list-item"><span><img className="information__list-image" src="src/assets/kanniBrand.png" alt="kanniBrandShrimp" /></span><span>Farm Shrimp 21/25</span><span>21/25-FS-IND-24</span><span>Frozen Shrimp</span><span>Kanni</span><span>Diamond Sea Food Exports</span><span>Released</span><span>70</span><span>24lb</span><span>3.00</span><span>1680lb</span><span>5040</span><span>A3A</span><span>Ray</span><span>2024-03-19</span><span>2024-03-20</span><span>2025-06-16</span><div className="information__option"><input className="information__select-button" type="button" value="Select" /><input className="information__remove-button" type="button" value="Remove" /></div></li>
                </ul>
            </div>
        </section>

    )
}

export default Information