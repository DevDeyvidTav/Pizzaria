import { useContext, createContext } from "react";

const MenuContext = createContext<any>({});

export function MenuProvider({ children, value }:any) {
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export function useMenuValue() {
  return useContext(MenuContext);
}