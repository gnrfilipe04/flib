import React, { createContext, ReactNode, useContext, useState } from "react";

interface DateTimePickerProviderProps {
    children: ReactNode;
}

interface DateTimePickerContext {
    dateSelected: Date;
    setDateSelected: React.Dispatch<React.SetStateAction<Date>>
}

const DateTimePickerContext = createContext({} as DateTimePickerContext)

export function DateTimePickerProvider({ children }: DateTimePickerProviderProps){

    const [dateSelected, setDateSelected] = useState<Date>(new Date())

    return (
        <DateTimePickerContext.Provider
            value={{
                dateSelected,
                setDateSelected
            }}
        >
            {children}
        </DateTimePickerContext.Provider>
    )
}

export const useDateTimePicker = () => useContext(DateTimePickerContext)