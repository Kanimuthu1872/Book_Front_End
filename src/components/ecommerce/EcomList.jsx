import { useState } from "react";

function EcomList() {
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);
  
  let allProducts = [
    {
      prodId: 501,
      prodName: "Laptop",
      prodCost: 40000,
      prodImage:
        "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww",
    },
    {
      prodId: 502,
      prodName: "Mobile",
      prodCost: 30000,
      prodImage:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8fHww",
    },
    {
      prodId: 503,
      prodName: "Tablet",
      prodCost: 20000,
      prodImage:
        "https://plus.unsplash.com/premium_photo-1673968280716-ca0c00af8a39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGV0fGVufDB8fDB8fHww",
    },
    {
      prodId: 504,
      prodName: "Watch",
      prodCost: 30000,
      prodImage:
        "https://media.istockphoto.com/id/1189984324/photo/smart-watch-for-branding-and-mock-up-3d-render-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=obd89zfN8JUq7fiQdLoI7KCl-_N3CwpvLur3D5s-zZs=",
    },
    {
      prodId: 505,
      prodName: "Desktop",
      prodCost: 25000,
      prodImage:
        "https://plus.unsplash.com/premium_photo-1683326528070-4ebec9188ae1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVza3RvcHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];



  function addToCart(prodId) {
    const fetchedProduct = allProducts.find(
      (eachProduct) => eachProduct.prodId === prodId
    );
    const newId = cart.length === 0 ? 1 : cart[cart.length - 1].cartId + 1;
    setCart([...cart, { ...fetchedProduct, cartId: newId }]);
  }

  function addToWish(prodId) {
    const wishProduct = allProducts.find(
      (eachProduct) => eachProduct.prodId === prodId
    );
    const isInWish = wish.some((eachWishItem) => eachWishItem.prodId === prodId);
    if (isInWish) {
        setNotification(`${wishProduct.prodName} is already in your wishlist!`);
        return;
    }
    const newId = wish.length === 0 ? 1 : wish[wish.length - 1].wishId + 1;
    setWish([...wish, { ...wishProduct, wishId: newId }]);
  }

  function deleteCartItem(cartId) {
    const filteredCart = cart.filter(
      (eachCartItem) => eachCartItem.cartId !== cartId
    );
    setCart(filteredCart);
  }

  function deleteWishItem(wishId) {
    const filteredWish = wish.filter(
      (eachWishItem) => eachWishItem.wishId !== wishId
    );
    setWish(filteredWish);
  }

  const mappedCart = cart.map((eachCartItem) => (
    <tr key={eachCartItem.cartId}>
      <td>{eachCartItem.cartId}</td>
      <td>{eachCartItem.prodId}</td>
      <td>{eachCartItem.prodName}</td>
      <td>Rs.{eachCartItem.prodCost}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => deleteCartItem(eachCartItem.cartId)}
        >
          🗑️
        </button>
      </td>
    </tr>
  ));

  const mappedWish = wish.map((eachWishItem) => (
    <tr key={eachWishItem.wishId}>
        <td>{eachWishItem.wishId}</td>
      <td>{eachWishItem.prodId}</td>
      <td>{eachWishItem.prodName}</td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => deleteWishItem(eachWishItem.wishId)}
        >
          🗑️
        </button>
      </td>
    </tr>
  ));

  const mappedAllProducts = allProducts.map((eachProduct) => (
    <div className="col-sm-12 col-md-6 col-lg-6" key={eachProduct.prodId}>
      <div className="card m-1">
        <img src={eachProduct.prodImage} className="card-img-top" alt={eachProduct.prodName} />
        <div className="card-body">
          <h5 className="card-title">{eachProduct.prodName}</h5>
          <p className="card-text">Product ID: {eachProduct.prodId}</p>
          <p className="card-text">Product Price: Rs.{eachProduct.prodCost}</p>
          <button
            className="btn btn-warning"
            onClick={() => addToCart(eachProduct.prodId)} style={{ marginRight: '10px' }}
          >
            ➕
          </button>
          <button
            className="btn btn-success"
            onClick={() => addToWish(eachProduct.prodId)}  
          >
            WishList
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container m-3">
      <div className="row">
        <div className="col-9">
          <h3>LIST OF GADGETS</h3>
          <div className="row">{mappedAllProducts}</div>
        </div>
        <div className="col-3">
          <h6>CART ITEMS</h6>
          {cart.length === 0 ? (
            <p>CART IS EMPTY!</p>
          ) : (
            <div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>PRODID</th>
                    <th>NAME</th>
                    <th>COST</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{mappedCart}</tbody>
              </table>
              <p>Total Items: {cart.length}</p>
              <p>
                Total Cost: Rs.
                {cart.reduce(
                  (sum, eachCartItem) => sum + eachCartItem.prodCost,
                  0
                )}
              </p>
            </div>
          )}
          <h6>WISHLIST ITEMS</h6>
          {wish.length === 0 ? (
            <p>WISHLIST IS EMPTY!</p>
          ) : (
            <table className="table table-striped">
              <thead>
                <tr>
                    <th>ID</th>
                  <th>PROD-ID</th>
                  <th>NAME</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{mappedWish}</tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default EcomList;
