import { useContext, createContext, useState, useEffect } from "react";

const CartContext = createContext({});

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const updateLocalStorage = async (products) => {
    await localStorage.setItem("devburger:cartInfo", JSON.stringify(products));
  };

  const clearCart = async () => {
    await localStorage.removeItem("devburger:cartInfo");
    setCartProducts([]);
  };

  const putProductInCart = async (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

    let newCartProducts = [];
    if (cartIndex >= 0) {
      newCartProducts = cartProducts;

      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1;

      setCartProducts(newCartProducts);
    } else {
      product.quantity = 1;
      newCartProducts = [...cartProducts, product];
      setCartProducts(newCartProducts);
    }

    updateLocalStorage(newCartProducts);
  };
  const increaseQuantity = async (productId) => {
    const newCart = cartProducts.map((product) => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product;
    });

    setCartProducts(newCart);
    updateLocalStorage(newCart);
  };

  const deleteProduct = async (productId) => {
    const newCart = cartProducts.filter((pd) => pd.id !== productId);
    setCartProducts(newCart);
    updateLocalStorage(newCart);
  };

  const decreaseQuantity = async (productId) => {
    const indexProduct = cartProducts.findIndex((pd) => pd.id === productId);
    if (cartProducts[indexProduct].quantity > 1) {
      const newCart = cartProducts.map((product) => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product;
      });

      setCartProducts(newCart);
      updateLocalStorage(newCart);
    } else {
      deleteProduct(productId);
    }
  };

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem("devburger:cartInfo");

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData));
      }
    };

    loadUserData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        putProductInCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("Error");
  }

  return context;
};
