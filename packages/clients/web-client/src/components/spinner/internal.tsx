import { CircularProgress } from "@mui/material"

export const Spinner = () => {
    return (
        <CircularProgress
                            sx={{ color: "white" }}
                            style={{ width: 14, height: 14 }}
                          />
    )
}