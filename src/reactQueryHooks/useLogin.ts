import { create } from 'zustand';

type Store = {
  login: any;
  username: string;
  exLogin: () => void;
  exUsername: () => void;
};

const useLogin = create<Store>((set) => ({
  login: "Login",
  username: "",
  exLogin: () => set((login) => ({ login: "LogOut" })),
  exUsername: () => set((username) => ({ username: "codecamp" }))

}));

export default useLogin;