/* import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
  setGetTotals
} from "../app/CartSlice.js";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);
  
  // console.log(cartItems)

  useEffect(() => {
    dispatch(setGetTotals())
  },[cartItems, dispatch])
  
  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  const onClearCartItems = () => {
    dispatch(setClearCartItems())
  }
  
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] ${
          ifCartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}
      >
        <div
          className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 ${
            ifCartState
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible translate-x-8"
          }`}
        >
          <CartCount totalQTY={totalQTY} onCartToggle={onCartToggle} onClearCartItems={onClearCartItems} />
          {cartItems?.length === 0 ? <CartEmpty onCartToggle={onCartToggle} /> : <div>
            <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
              {cartItems?.map((item, i) => (
                <CartItem key={i} item={item} />
              ))}
            </div>

            <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
              <div className="flex items-center justify-between">
                <h1 className="text-base font-semibold uppercase">SubTotal</h1>
                <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">${totalAmount}</h1>
              </div>
              <div className="grid items-center gap-2">
                <p className="text-sm font-medium text-center">Taxes and Shipping Will Calculate At Shipping</p>
                <button type="button" className="button-theme bg-theme-cart text-white">Check Out</button> 
                <button type="button" className="button-theme bg-theme-cart text-white">send to basa</button>
              </div>
            </div>

          </div>}
        </div>
      </div>
    </>
  );
};

export default Cart;
 */
/* 

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
  setGetTotals
} from "../app/CartSlice.js";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import { zavrsiKupovinu } from "./zavrsiKupovinu.js";

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);
  
  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);
  
  const onCartToggle = () => {
    dispatch(setCloseCart({ cartState: false }));
  };

  const onClearCartItems = () => {
    dispatch(setClearCartItems());
  };



const handlePurchase = async () => {
  const korisnikId = parseInt(localStorage.getItem('userId'), 10); 
  console.log("Korisnik ID:", korisnikId);
  
  // Map cartItems to include necessary data
  const purchaseItems = cartItems.map(item => ({
    proizvod_id: item.id, // Match with your database field
    kolicina: item.cartQuantity || 1 // Use cartQuantity to get the correct amount
  }));
  
  console.log("Purchase Items:", purchaseItems);
  
  if (korisnikId && purchaseItems.length > 0) {
    try {
      const response = await fetch("http://localhost:5000/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: korisnikId,
          items: purchaseItems
        })
      });

      if (!response.ok) {
        throw new Error("Failed to save cart data");
      }

      const result = await response.json();
      console.log("Cart saved to database:", result);

      // Clear the cart in Redux
      dispatch(setClearCartItems()); 
    } catch (error) {
      console.error("Error saving cart:", error);
    }
  } else {
    console.log("Error: User not logged in or cart is empty.");
  }
};



  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] ${
        ifCartState
          ? "opacity-100 visible translate-x-0"
          : "opacity-0 invisible translate-x-8"
      }`}
    >
      <div
        className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 ${
          ifCartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}
      >
        <CartCount totalQTY={totalQTY} onCartToggle={onCartToggle} onClearCartItems={onClearCartItems} />
        
        {cartItems?.length === 0 ? (
          <CartEmpty onCartToggle={onCartToggle} />
        ) : (
          <div>
            <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
              {cartItems?.map((item, i) => (
                <CartItem key={i} item={item} />
              ))}
            </div>

            <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
              <div className="flex items-center justify-between">
                <h1 className="text-base font-semibold uppercase">SubTotal</h1>
                <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">${totalAmount}</h1>
              </div>
              <div className="grid items-center gap-2">
                <p className="text-sm font-medium text-center">Taxes and Shipping Will Calculate At Shipping</p>
                <button type="button" className="button-theme bg-theme-cart text-white">Check Out</button> 
                <button type="button" onClick={handlePurchase} className="button-theme bg-theme-cart text-white">Send to baza</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
  */
/* 
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  setClearCartItems,
  setGetTotals,
} from "../app/CartSlice.js";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import Kupovina from "./Kupovina"; // Uvezi komponentu Kupovina

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  const onClearCartItems = () => {
    dispatch(setClearCartItems());
  };

  return (
    <>
      <div>
        {cartItems.length > 0 ? (
          <Kupovina korpa={cartItems} setKorpa={onClearCartItems} />
        ) : (
          <CartEmpty />
        )}
      </div>
    </>
  );
};

export default Cart;
 */

/* 
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
  setGetTotals
} from "../app/CartSlice.js";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate for redirection
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  const onCartToggle = () => {
    dispatch(setCloseCart({ cartState: false }));
  };

  const onClearCartItems = () => {
    dispatch(setClearCartItems());
  };

 
  const handlePurchase = async () => {
    const korisnikId = parseInt(localStorage.getItem('userId'), 10);
    console.log("Korisnik ID:", korisnikId);
  
    const purchaseItems = cartItems.map(item => ({
      proizvod_id: item.id,
      kolicina: item.cartQuantity || 1
    }));
  
    if (korisnikId && purchaseItems.length > 0) {
      try {
        const response = await fetch("http://localhost:5000/api/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            user_id: korisnikId,
            items: purchaseItems
          })
        });
  
        if (!response.ok) {
          throw new Error("Failed to save cart data");
        }
  
        const result = await response.json();
        console.log("Cart saved to database:", result);
  
        // Clear the cart in Redux and wait until it's complete
        await dispatch(setClearCartItems());
  
        // Navigate to the "Details" page
        navigate("/details");
      } catch (error) {
        console.error("Error saving cart:", error);
      }
    } else {
      console.log("Error: User not logged in or cart is empty.");
    }
  };
  
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] ${
        ifCartState
          ? "opacity-100 visible translate-x-0"
          : "opacity-0 invisible translate-x-8"
      }`}
    >
      <div
        className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 ${
          ifCartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}
      >
        <CartCount totalQTY={totalQTY} onCartToggle={onCartToggle} onClearCartItems={onClearCartItems} />

        {cartItems?.length === 0 ? (
          <CartEmpty onCartToggle={onCartToggle} />
        ) : (
          <div>
            <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
              {cartItems?.map((item, i) => (
                <CartItem key={i} item={item} />
              ))}
            </div>

            <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
              <div className="flex items-center justify-between">
                <h1 className="text-base font-semibold uppercase">SubTotal</h1>
                <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">${totalAmount}</h1>
              </div>
              <div className="grid items-center gap-2">
                <p className="text-sm font-medium text-center">Taxes and Shipping Will Calculate At Shipping</p>
                <button type="button" className="button-theme bg-theme-cart text-white">Clean cart</button> 
                <button type="button" onClick={handlePurchase} className="button-theme bg-theme-cart text-white">
                   <Link className='text-red-500 ' to="/pay">Send to baza</Link>
                  </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
 */
/* 
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
  setGetTotals
} from "../app/CartSlice.js";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate for redirection
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  const onCartToggle = () => {
    dispatch(setCloseCart({ cartState: false }));
  };

  const onClearCartItems = () => {
    dispatch(setClearCartItems());
  };

  const handlePurchase = async () => {
    const korisnikId = parseInt(localStorage.getItem('userId'), 10);
    console.log("Korisnik ID:", korisnikId);
  
    const purchaseItems = cartItems.map(item => ({
      proizvod_id: item.id,
      kolicina: item.cartQuantity || 1
    }));
  
    if (korisnikId && purchaseItems.length > 0) {
      try {
        const response = await fetch("http://localhost:5000/api/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            user_id: korisnikId,
            items: purchaseItems
          })
        });
  
        if (!response.ok) {
          throw new Error("Failed to save cart data");
        }
  
        const result = await response.json();
        console.log("Cart saved to database:", result);
  
        // Clear the cart in Redux
        onClearCartItems(); // Call to clear the cart
        // Navigate to the "Details" page
        navigate("/details");
      } catch (error) {
        console.error("Error saving cart:", error);
      }
    } else {
      console.log("Error: User not logged in or cart is empty.");
    }
  };

  const handleButtonClick = () => {
    handlePurchase(); // Druga funkcija
    onClearCartItems(); // Prva funkcija
    onCartToggle();
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] ${
        ifCartState
          ? "opacity-100 visible translate-x-0"
          : "opacity-0 invisible translate-x-8"
      }`}
    >
      <div
        className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 ${
          ifCartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}
      >
        <CartCount totalQTY={totalQTY} onCartToggle={onCartToggle} onClearCartItems={onClearCartItems} />

        {cartItems?.length === 0 ? (
          <CartEmpty onCartToggle={onCartToggle} />
        ) : (
          <div>
            <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
              {cartItems?.map((item, i) => (
                <CartItem key={i} item={item} />
              ))}
            </div>

            <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
              <div className="flex items-center justify-between">
                <h1 className="text-base font-semibold uppercase">SubTotal</h1>
                <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">${totalAmount}</h1>
              </div>
              <div className="grid items-center gap-2">
                <p className="text-sm font-medium text-center">Taxes and Shipping Will Calculate At Shipping</p>
                <button type="button" onClick={onClearCartItems} className="button-theme bg-theme-cart text-white">Clean cart</button> 
               
                  <button type="button" onClick={handleButtonClick}  className="button-theme bg-theme-cart text-white">
                   <Link className='text-red-500 ' to="/pay">Send to baza</Link>
                  </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
 */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
  setGetTotals
} from "../app/CartSlice.js";
import { useNavigate, Link } from "react-router-dom"; // Import Link
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount); // Total amount from the cart
  const totalQTY = useSelector(selectTotalQTY);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  const onCartToggle = () => {
    dispatch(setCloseCart({ cartState: false }));
  };

  const onClearCartItems = () => {
    dispatch(setClearCartItems());
  };

  const handlePurchase = async () => {
    const korisnikId = parseInt(localStorage.getItem('userId'), 10);
    const purchaseItems = cartItems.map(item => ({
      proizvod_id: item.id,
      kolicina: item.cartQuantity || 1
    }));

    if (korisnikId && purchaseItems.length > 0) {
      try {
        const response = await fetch("http://localhost:5000/api/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            user_id: korisnikId,
            items: purchaseItems
          })
        });

        if (!response.ok) {
          throw new Error("Failed to save cart data");
        }

        const result = await response.json();
        console.log("Cart saved to database:", result);
        onClearCartItems();
        navigate("/details");
      } catch (error) {
        console.error("Error saving cart:", error);
      }
    } else {
      console.log("Error: User not logged in or cart is empty.");
    }
  };

  const handleButtonClick = () => {
    handlePurchase();
    onClearCartItems();
    onCartToggle();
  };

  return (
    <div className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] ${ifCartState ? "opacity-100 visible translate-x-0" : "opacity-0 invisible translate-x-8"}`}>
      <div className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 ${ifCartState ? "opacity-100 visible translate-x-0" : "opacity-0 invisible translate-x-8"}`}>
        <CartCount totalQTY={totalQTY} onCartToggle={onCartToggle} onClearCartItems={onClearCartItems} />

        {cartItems?.length === 0 ? (
          <CartEmpty onCartToggle={onCartToggle} />
        ) : (
          <div>
            <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
              {cartItems?.map((item, i) => (
                <CartItem key={i} item={item} />
              ))}
            </div>

            <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
              <div className="flex items-center justify-between">
                <h1 className="text-base font-semibold uppercase">SubTotal</h1>
                <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">${totalAmount}</h1>
              </div>
              <div className="grid items-center gap-2">
                <p className="text-sm font-medium text-center">Taxes and Shipping Will Calculate At Shipping</p>
                <button type="button" onClick={onClearCartItems} className="button-theme bg-theme-cart text-white">Clean cart</button>
                {/* Use Link to pass the totalAmount to CheckoutPage */}

               
                <button type="button" onClick={handleButtonClick}  className="button-theme bg-theme-cart text-white">
                  {/*  <Link className='text-red-500 ' to="/pay">Send to baza</Link> */}
                  <Link to={`/pay?amount=${totalAmount}`} className="button-theme bg-theme-cart text-white">
                  Send to baza
                </Link>
                  </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
