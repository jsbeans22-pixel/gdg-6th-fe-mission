import { create } from "zustand";

const useCartStore = create((set) => ({
  cartItems: [],

  addCartItem: (item) =>
    set((state) => ({
      cartItems: [...state.cartItems, item],
    })),

  isInCart: (id) => {
    return useCartStore.getState().cartItems.some((item) => item.id === id);
  },
}));

export default useCartStore;