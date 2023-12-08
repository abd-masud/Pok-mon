import { create } from 'zustand';

type Store = {
  login: string;
  logout: () => void;
};

const useLogin = create<Store>((set) => ({
  login: "Login",
  logout: () => set((login) => ({ login: "LogOut" })),

}));

export default useLogin;