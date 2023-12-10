import { create } from 'zustand';

type Store = {
  count: number;
  AddToCart: () => void;
  Remove: () => void;
  CartStore: Array<string>;
  pushId: (id: string) => void;
  removeId: (id: string) => void;
};

const useCart = create<Store>((set) => ({
  count: 0,
  CartStore: [],
  AddToCart: () => set((state) => ({ count: state.count + 1 })),
  Remove: () => set((state) => ({ count: state.count - 1 })),
  pushId: (id) => set((state) => ({ CartStore: [...state.CartStore, id] })),
  removeId: (id) => set((state) => {
    state.CartStore.splice(state.CartStore.indexOf(id), 1);
    return {
      CartStore: [...state.CartStore],
    };
  }),
}));

export default useCart;