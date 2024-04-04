import { createContext, useState } from "react";

export const DataUser = createContext(null);

const UsersDataProvider = ({ children }) => {

    const [users, setUsers] = useState(null);

    return (
        <DataUser.Provider value={{ users, setUsers }}>
            {children}
        </DataUser.Provider>
    )
}

export default UsersDataProvider;