import React from "react"

const ToggleShowContext = React.createContext({
    isShowRemoveButtons: true,
    toggleShowRemoveButtons: () => {}
});

export default ToggleShowContext;