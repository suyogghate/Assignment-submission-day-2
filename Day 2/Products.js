import './Products.css';

const Products = () => {

    const list=["Mobile","Computer","Car","Washing Machine","Fridge"];
    
    return(
        <div className="container">
            <h1>The products are :</h1>

           
                {
                    list.map((product, index) => (
                            
                                <p key={index}>{product}</p>
                        
                        )
                    
                    )

                }
            
        </div>
    )
}

export default Products;