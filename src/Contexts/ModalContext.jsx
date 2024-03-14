import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  
  const [popupVisibility, setPopupVisibility] = useState(false);
  const showPopup = () => {
    setPopupVisibility(true);
  };
  const hidePopup = () => {
    setPopupVisibility(false);
  };

  return (
    <ModalContext.Provider value={{ popupVisibility, setPopupVisibility,showPopup,hidePopup }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
