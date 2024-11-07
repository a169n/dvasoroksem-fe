import React, { createContext, useContext, useState } from "react";

interface HeaderContextValue {
  isCaseDetailPage: boolean;
  currentCaseId: string | null;
  setCaseDetailPageData: (isDetailPage: boolean, caseId: string | null) => void;
}

const HeaderContext = createContext<HeaderContextValue>({
  isCaseDetailPage: false,
  currentCaseId: null,
  setCaseDetailPageData: () => {},
});

export const useHeaderContext = () => useContext(HeaderContext);

export const HeaderProvider = ({ children }) => {
  const [isCaseDetailPage, setIsCaseDetailPage] = useState(false);
  const [currentCaseId, setCurrentCaseId] = useState<string | null>(null);

  const setCaseDetailPageData = (isDetailPage, caseId) => {
    setIsCaseDetailPage(isDetailPage);
    setCurrentCaseId(caseId);
  };

  return (
    <HeaderContext.Provider
      value={{
        isCaseDetailPage,
        currentCaseId,
        setCaseDetailPageData,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};