import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext({});

const initialState = {
    cart: false,
    userProfile: false,
}

export const ContextProvider = ({ children }: any) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)

    const handleClick = (clicked: any) => setIsClicked({...initialState, [clicked]: true}) 
    const [screenSize, setScreenSize] = useState(undefined)

    return (
        <StateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)