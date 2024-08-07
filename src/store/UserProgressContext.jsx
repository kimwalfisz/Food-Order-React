import { createContext, useState } from "react";

export const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
  showSummary: () => {},
  hideSummary: () => {}
});

export default function UserProgressContextProvider({ children }) {
  const [progress, setProgress] = useState("");

  function showCart() {
    setProgress("cart");
  }
  function hideCart() {
    setProgress("");
  }
  function showCheckout() {
    setProgress("checkout");
  }
  function hideCheckout() {
    setProgress("");
  }
  function showSummary() {
    setProgress("summary")
  }
  function hideSummary() {
    setProgress('');
  }

  const ctxValue = {
    progress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
    showSummary,
    hideSummary
  };
  return (
    <UserProgressContext.Provider value={ctxValue}>
      {children}
    </UserProgressContext.Provider>
  );
}
