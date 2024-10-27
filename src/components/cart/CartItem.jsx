/* import React from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { setDecreaseItemQTY, setIncreaseItemQTY, setRemoveItemFromCart } from "../../app/CartSlice.js";

const CartItem = ({ item: { id, title, text, img, color, shadow, price, cartQuantity } }) => {
  const dispatch = useDispatch();

  const onRemoveItem = () => {
    dispatch(setRemoveItemFromCart({ id, title, text, img, color, shadow, price, cartQuantity }))
  }

  const onIncreaseItemQTY = () => {
    dispatch(setIncreaseItemQTY({ id, title, text, img, color, shadow, price, cartQuantity }))
  }
  const onDecreaseItemQTY = () => {
    dispatch(setDecreaseItemQTY({ id, title, text, img, color, shadow, price, cartQuantity }))
  }

  return (
    <>
      <div className="flex items-center justify-between w-full px-5">
        <div className="flex items-center gap-5">
          <div className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}>
            <img src={img} alt={`img/cart-item/${id}`} className="w-36 h-auto object-fill lg:w-28" />
            <div className='absolute right-1 top-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded'>${price}</div>
          </div>
          <div className="grid items-center gap-4">
            <div className="grid items-center leading-none">
              <h1 className="font-medium text-lg text-slate-900 lg:text-sm">{title}</h1>
              <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
            </div>
            <div className="flex items-center justify-around w-full">
              <button type="button" onClick={onDecreaseItemQTY} className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90">
                <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
              <div className="bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center">{cartQuantity}</div>
              <button type="button" onClick={onIncreaseItemQTY} className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90">
                <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-5">
          <div className="grid items-center justify-center">
            <h1 className="text-lg lg:text-base text-slate-900 font-medium">${price * cartQuantity}</h1>
          </div>
          <div className="grid items-center justify-center">
            <button type="button" className="bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-items-center cursor-pointer" onClick={onRemoveItem}>
              <TrashIcon className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
 */

import React from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { setDecreaseItemQTY, setIncreaseItemQTY, setRemoveItemFromCart } from "../../app/CartSlice.js";

const CartItem = ({ item: { id, title, text, img, color, shadow, price, cartQuantity } }) => {
  const dispatch = useDispatch();

 /*  const updateCartOnServer = async (updatedItem) => {
    try {
      const response = await fetch("http://localhost:5000/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedItem)
      });
  
      if (!response.ok) {
        throw new Error("Failed to update cart on server");
      }
  
      const result = await response.json();
      console.log("Cart updated on server:", result);
    } catch (error) {
      console.error("Error updating cart on server:", error);
    }
  }; */
  const updateCartOnServer = async (updatedItem) => {
    const userId = parseInt(localStorage.getItem('userId'), 10); // Get the user ID from localStorage
    const cartItems = [{ proizvod_id: updatedItem.id, kolicina: updatedItem.cartQuantity }]; // Format for database

    try {
        const response = await fetch("http://localhost:5000/api/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userId, cartItems }) // Include userId and cartItems
        });

        if (!response.ok) {
            throw new Error("Failed to update cart on server");
        }

        const result = await response.json();
        console.log("Cart updated on server:", result);
    } catch (error) {
        console.error("Error updating cart on server:", error);
    }
};

  

  const onRemoveItem = () => {
    const updatedItem = { id, title, text, img, price, cartQuantity: 0 };
    dispatch(setRemoveItemFromCart(updatedItem));
    updateCartOnServer(updatedItem);  // Send updated cart to the server
  };

  const onIncreaseItemQTY = () => {
    const updatedItem = { id, title, text, img, price, cartQuantity: cartQuantity + 1 };
    dispatch(setIncreaseItemQTY(updatedItem));
    updateCartOnServer(updatedItem);  // Send updated cart to the server
  };

  const onDecreaseItemQTY = () => {
    if (cartQuantity > 1) {
      const updatedItem = { id, title, text, img, price, cartQuantity: cartQuantity - 1 };
      dispatch(setDecreaseItemQTY(updatedItem));
      updateCartOnServer(updatedItem);  // Send updated cart to the server
    }
  };

  return (
    <>
      <div className="flex items-center justify-between w-full px-5">
        <div className="flex items-center gap-5">
          <div className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}>
            <img src={img} alt={`img/cart-item/${id}`} className="w-36 h-auto object-fill lg:w-28" />
            <div className='absolute right-1 top-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded'>${price}</div>
          </div>
          <div className="grid items-center gap-4">
            <div className="grid items-center leading-none">
              <h1 className="font-medium text-lg text-slate-900 lg:text-sm">{title}</h1>
              <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
            </div>
            <div className="flex items-center justify-around w-full">
              <button type="button" onClick={onDecreaseItemQTY} className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90">
                <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
              <div className="bg-theme-cart rounded text-white font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center">{cartQuantity}</div>
              <button type="button" onClick={onIncreaseItemQTY} className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90">
                <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-5">
          <div className="grid items-center justify-center">
            <h1 className="text-lg lg:text-base text-slate-900 font-medium">${price * cartQuantity}</h1>
          </div>
          <div className="grid items-center justify-center">
            <button type="button" className="bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-items-center cursor-pointer" onClick={onRemoveItem}>
              <TrashIcon className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
