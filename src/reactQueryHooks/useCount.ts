import { create } from 'zustand';

type Store = {
  count: number;
  AddToCard: () => void;
  Reset: () => void;
};

const useCount = create<Store>((set) => ({
  count: 0,
  AddToCard: () => set((state) => ({ count: state.count + 1 })),
  Reset: () => set((state) => ({ count: 0 }))

}));

export default useCount;