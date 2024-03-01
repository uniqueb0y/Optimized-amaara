import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import Avatar from "@mui/material/Avatar"; // Import Avatar
import { FC, useState } from "react";
import {
  dialogActionsStyles,
  dialogContentStyles,
  dialogHeaderStyles,
} from "../../styles/dialog";
import { useMutation } from "@apollo/client";
import { DELETE_RAFFLE } from "../../gql/raffle";
import { Typography } from "@mui/material";
import { Spinner } from "../Spinner";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#4F0336",
    color: "#F2EEE5",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const RaffleWinner: FC<any> = ({ winnerRows }) => {
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [deleteRaffleMutation] = useMutation(DELETE_RAFFLE, {
    refetchQueries: ["GetRaffle"],
  });

  const handleDelete = (id: number) => {
    setLoading(true);
    deleteRaffleMutation({
      variables: {
        id: id,
      },
      onCompleted: (data: any) => {
        if (data?.deleteRaffle?.isSuccess) {
          console.log("Raffle deleted");
          setLoading(false);
        }
      },
      onError: (error: any) => {
        console.log(error);
        setLoading(false);
        alert(
          "Error while processing this request, please try again after sometime."
        );
      },
    });
  };

  const handleAvatarClick = (image: string) => {
    setSelectedImage(image);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box sx={{ mt: 5, width: "100%" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Month</StyledTableCell>
              <StyledTableCell>Year</StyledTableCell>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell>Link</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {winnerRows.map((winner: any) => (
              <StyledTableRow key={winner.id}>
                <StyledTableCell>{winner.winnerName || "NA"}</StyledTableCell>
                <StyledTableCell>{winner.month || "NA"}</StyledTableCell>
                <StyledTableCell>{winner.year || "NA"}</StyledTableCell>
                <StyledTableCell>
                  {/* Use Avatar for displaying image */}
                  <Avatar
                    src={winner.image}
                    alt={winner.name}
                    onClick={() => handleAvatarClick(winner.image)}
                  />
                </StyledTableCell>
                <StyledTableCell>{winner.link || "NA"}</StyledTableCell>
                <StyledTableCell>
                  {/* Add a delete button here */}
                  <Button
                    variant="text"
                    size="small"
                    onClick={() => handleDelete(winner.id)}
                    sx={{
                      color: '#4F0336',
                    }}
                  >
                    {loading ? (
                      <Spinner color="white" />
                    ) : (
                      <Typography
                        component="span"
                        textTransform={"none"}
                        fontSize={14}
                      >
                        Delete
                      </Typography>
                    )}
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for displaying full-size image */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {winnerRows.find((winner: any) => winner.image === selectedImage)
            ?.name || "Full Size Image"}
        </DialogTitle>
        <DialogContent>
          <img
            src={selectedImage}
            alt="Full Size"
            style={{ width: "100%", height: "auto" }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
