function Display () {

    return (
        <section className="display">
                <div className="display__product">
                    <h2 className="display__product-header">Product Image</h2>
                    <div className="display__product-img-container">
                        <img id="display__product-image" src="src/assets/Screenshot 2024-03-29 at 9.05.25 PM.png" alt="product__img" />
                    </div>
                </div>
                <div className="display__warehouse-info">
                    <h2 className="display__warehouse-info__header">Warehouse Information</h2>
                    <label for="">Current Temp:</label>
                    <span></span>
                    <br />
                    <label for="">Capacity</label>
                    <span></span>
                    <br />
                    <label for="">Rack Space Left</label>
                    <span></span>
                </div>
        </section>

        
    )


}

export default Display