import React from "react";
import { DefaultContext } from "../../Context";
import { Button } from "@mui/material";
import { useContext } from "react";
const Mode = () => {
    const { handleTheme } = useContext(DefaultContext);
    return(
        <div className="mode">
            <Button 
            variant="contained"
            onClick={handleTheme}
            >
                Change theme
            </Button>
        </div>
    )
}
export default Mode