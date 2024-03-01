import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button"; // Import Avatar
import { FC, useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_NOTIFICATION } from "../../gql/notifications";
import { Typography } from "@mui/material";
import { Spinner } from '../Spinner/internal';

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

export const Notification: FC<any> = ({ notifications }) => {
  const [loading, setLoading] = useState(false);
  const [deleteNotificationMutation] = useMutation(DELETE_NOTIFICATION, {
    refetchQueries: ["GetCustomNotifications"],
  });
  const handleDelete = (id: number) => {
    setLoading(true);
    deleteNotificationMutation({
      variables: {
        id: id,
      },
      onCompleted: (data: any) => {
        if (data?.deleteNotification?.isSuccess) {
          console.log("Notification deleted");
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

  return (
    <Box sx={{ mt: 5, width: "100%" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Message</StyledTableCell>
              <StyledTableCell>Sent On</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notifications?.map((notification: any) => (
              <StyledTableRow key={notification.id}>
                <StyledTableCell>{notification.message}</StyledTableCell>
                <StyledTableCell>{notification.sentDate}</StyledTableCell>
                <StyledTableCell>
                  {/* Add a delete button here */}
                  <Button
                    variant="text"
                    onClick={() => handleDelete(notification.id)}
                    sx={{
                      color: '#4F0336',
                    }}
                  >
                    {loading ? (
                      <Spinner color="white" />
                    ) : (
                      <Typography
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
    </Box>
  );
};
