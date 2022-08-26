import * as React from 'react';

type DataContextType = {};

export const DataContext = React.createContext<DataContextType | null>(null);

type MainContextProvider = {
    children: React.ReactNode;
};

function DataProvider({ children }: MainContextProvider) {
    const foo = React.useMemo(() => ({}), []);
    return <DataContext.Provider value={foo}>{children}</DataContext.Provider>;
}

export default DataProvider;
