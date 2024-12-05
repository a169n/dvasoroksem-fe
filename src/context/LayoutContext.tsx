import React, { createContext, useContext, useState, useRef, ReactNode } from 'react';

type RefsType = Record<string, React.RefObject<HTMLDivElement>>;

interface LayoutContextProps {
  mode: string;
  refs: RefsType;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}

interface LayoutProviderProps {
  children: ReactNode;
}

const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<string>('default');
  const aboutRef = useRef<HTMLDivElement>(null);
  const casesRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  const refs: RefsType = {
    about: aboutRef,
    cases: casesRef,
    reviews: reviewsRef,
    contacts: contactsRef,
  };

  return (
    <LayoutContext.Provider value={{ mode, refs, setMode }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayoutContext must be used within a LayoutProvider');
  }
  return context;
};