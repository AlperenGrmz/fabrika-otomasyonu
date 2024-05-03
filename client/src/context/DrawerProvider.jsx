import { createContext, useState } from 'react'

const DrawerContext = createContext(false);

const DrawerProvider = ({children}) => {
    const [submited, setSubmited] = useState(false)
    const [forEdit, setForEdit] = useState(false)
    const [createButton, setCreateButton] = useState(false)
  return (
    <DrawerContext.Provider value={{
        submited: submited,
        toggleSubmit: () => setSubmited((prev) => !prev),
        createButtonClicked: createButton,
        toggleCreateButton: () => setCreateButton((prev) => !prev),
        forEdit: forEdit,
        setForEdit,
    }}>
        {children}
    </DrawerContext.Provider>
  )
}

export {DrawerContext, DrawerProvider}