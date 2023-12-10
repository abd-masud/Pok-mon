import { create } from 'zustand';

type Store = {
  login: any;
  username: string;
  updateLogin: (value: any) => void,
  updateUsername: (value: any) => void,
  exUsername: () => void;
};

const useLogin = create<Store>((set) => ({
  login: "Login",
  username: "",
  updateLogin: (value: any) => set((state) => ({ login: value })),
  updateUsername: (value: any) => set((state) => ({ username: value })),
  exUsername: () => set((username) => ({ username: "CodeCamp" })),
}));

export default useLogin;
