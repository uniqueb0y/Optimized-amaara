export const dialogHeaderStyles = {
    background: '#4F0336',
    textAlign: 'center',
    color: 'white',
};

export const dialogContentStyles = {
    textAlign: 'center',
    padding: '24px !important',
};

export const dialogActionsStyles = {
    color: '#4F0336',
    paddingBottom: 0,
    paddingRight: 0,
};

export const dialogCancelActionStyles = {
    color: "#4F0336", border: '1px solid #4F0336', textTransform: 'none', cursor: 'pointer'
}

export const dialogSubmitActionStyles = {
    color: "white", border: '1px solid #4F0336', textTransform: 'none', backgroundColor: '#4F0336', cursor: 'pointer',
    '&:hover': { background: '#6F0454', cursor: 'pointer' },
    "&.Mui-disabled": {
        background: "#cccccc",
        border: '1px solid #cccccc',
    },
}