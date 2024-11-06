
import React, { createContext, useContext, useState } from "react";

interface HeaderContextValue {
  isCaseDetailPage: boolean;
  setIsCaseDetailPage: (value: boolean) => void;
}

const HeaderContext = createContext<HeaderContextValue>({
  isCaseDetailPage: false,
  setIsCaseDetailPage: () => {},
});

export const useHeaderContext = () => useContext(HeaderContext);

export const HeaderProvider = ({ children }) => {
  const [isCaseDetailPage, setIsCaseDetailPage] = useState(false);

  return (
    <HeaderContext.Provider value={{ isCaseDetailPage, setIsCaseDetailPage }}>
      {children}
    </HeaderContext.Provider>
  );
};