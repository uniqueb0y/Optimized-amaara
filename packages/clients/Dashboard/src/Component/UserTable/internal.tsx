import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
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
import { FC } from "react";
import {
  dialogActionsStyles,
  dialogCancelActionStyles,
  dialogContentStyles,
  dialogHeaderStyles,
  dialogSubmitActionStyles,
} from "../../styles/dialog";
import { Typography } from "@mui/material";

interface User {
  id: number;
  phoneNo: string;
  referenceNo: string;
  firstName: string;
  lastName: string;
  dob: string;
  address: string;
  isKycDone: boolean;
  role: string;
  blocked: boolean;
}

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

const userRows: User[] = [
  {
    id: 1,
    phoneNo: "1234567890",
    referenceNo: "REF123",
    firstName: "John",
    lastName: "Doe",
    dob: "1990-01-01",
    address: "123 Main St",
    isKycDone: true,
    role: "Admin",
    blocked: false,
  },
  {
    id: 2,
    phoneNo: "9876543210",
    referenceNo: "REF456",
    firstName: "Jane",
    lastName: "Smith",
    dob: "1985-05-15",
    address: "456 Oak St",
    isKycDone: false,
    role: "User",
    blocked: false,
  },
  {
    id: 3,
    phoneNo: "5556667777",
    referenceNo: "REF789",
    firstName: "Bob",
    lastName: "Johnson",
    dob: "1978-12-10",
    address: "789 Pine St",
    isKycDone: true,
    role: "Moderator",
    blocked: false,
  },
  {
    id: 4,
    phoneNo: "4443332222",
    referenceNo: "REF987",
    firstName: "Alice",
    lastName: "Williams",
    dob: "1995-08-22",
    address: "987 Elm St",
    isKycDone: false,
    role: "User",
    blocked: false,
  },
  {
    id: 5,
    phoneNo: "1112223333",
    referenceNo: "REF654",
    firstName: "Eva",
    lastName: "Davis",
    dob: "1982-03-05",
    address: "654 Cedar St",
    isKycDone: true,
    role: "Admin",
    blocked: false,
  },
];

const CustomSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#4F0336",
    "&:hover": {
      backgroundColor: alpha("#4F0336", theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#4F0336",
  },
}));

export const UserTable: FC<any> = ({ users }) => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState<User | null>(null);
  const [selectedUserRole, setSelectedUserRole] = React.useState("");
  const [deleteUser, setDeleteUser] = React.useState(false);
  const [blockUser, setBlockUser] = React.useState(false);
  console.log(users);
  const handleButtonClick = (user: any) => {
    setSelectedUser(user);
    setSelectedUserRole(user.role?.name);
    setDeleteUser(false);
    setBlockUser(user.blockedBy || false);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSaveRole = () => {
    if (selectedUser) {
      // Update the role for the selected user in the userRows array
      const updatedUserRows = userRows.map((user) =>
        user.id === selectedUser.id
          ? { ...user, role: selectedUserRole, blocked: blockUser }
          : user
      );

      // If delete user is selected, filter out the user
      const finalUserRows = deleteUser
        ? updatedUserRows.filter((user) => user.id !== selectedUser.id)
        : updatedUserRows;

      // Update the state with the new userRows
      // Implement your logic to save the updated userRows to a database or state management
      console.log("Updated User Rows:", finalUserRows);
    }
    setOpenDialog(false);
  };

  return (
    <Box>
      <Box sx={{ mt: 5, width: "100%" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>S. No</StyledTableCell>
                <StyledTableCell>Phone No</StyledTableCell>
                <StyledTableCell>Reference No</StyledTableCell>
                <StyledTableCell>First Name</StyledTableCell>
                <StyledTableCell>Last Name</StyledTableCell>
                <StyledTableCell>DOB</StyledTableCell>
                <StyledTableCell>Address Proof One</StyledTableCell>
                <StyledTableCell>Address Proof Two</StyledTableCell>
                <StyledTableCell>Role</StyledTableCell>
                <StyledTableCell>Created Date</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users?.map((user: any, index: number) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell>{index + 1}</StyledTableCell>
                  <StyledTableCell>{user.phoneNo || "NA"}</StyledTableCell>
                  <StyledTableCell>{user.referenceNo || "NA"}</StyledTableCell>
                  <StyledTableCell>
                    {user.userInfo?.firstName || "NA"}
                  </StyledTableCell>
                  <StyledTableCell>
                    {user.userInfo?.lastName || "NA"}
                  </StyledTableCell>
                  <StyledTableCell>
                    {user.userInfo?.dateOfBirth || "NA"}
                  </StyledTableCell>
                  <StyledTableCell>
                    {user.userInfo?.addressProofOne || "NA"}
                  </StyledTableCell>
                  <StyledTableCell>
                    {user.userInfo?.addressProofTwo || "NA"}
                  </StyledTableCell>
                  <StyledTableCell>{user.role?.name || "NA"}</StyledTableCell>
                  <StyledTableCell>{user.createdDate || "NA"}</StyledTableCell>
                  <StyledTableCell>
                    <Button
                      variant="text"
                      onClick={() => handleButtonClick(user)}
                      sx={{
                        color: "#4F0336",
                      }}
                    >
                      <Typography
                        component="span"
                        textTransform={"none"}
                        fontSize={14}
                      >
                        Action
                      </Typography>
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle sx={dialogHeaderStyles}>Select Action</DialogTitle>
          <DialogContent sx={dialogContentStyles}>
            <DialogContentText sx={{ mt: 2, mb: 1 }}>
              {" "}
              Select the role for the user:{" "}
            </DialogContentText>
            <Select
              value={selectedUserRole}
              onChange={(e) => setSelectedUserRole(e.target.value)}
              fullWidth
            >
              <MenuItem value="Normal">NORMAL</MenuItem>
              <MenuItem value="Manager">MANAGER</MenuItem>
              <MenuItem value="Admin">ADMIN</MenuItem>
              <MenuItem value="SuperAdmin">SUPER ADMIN</MenuItem>
            </Select>
            <Box
              sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}
            >
              <label>Delete User</label>
              <CustomSwitch
                checked={deleteUser}
                onChange={() => setDeleteUser(!deleteUser)}
              />
            </Box>
            <Box
              sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}
            >
              <label>Block User</label>
              <CustomSwitch
                checked={blockUser}
                onChange={() => setBlockUser(!blockUser)}
              />
            </Box>
          <DialogActions sx={dialogActionsStyles}>
            <Button
              onClick={handleCloseDialog}
              size="small"
              sx={dialogCancelActionStyles}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSaveRole}
              size="small"
              sx={dialogSubmitActionStyles}
            >
              Save
            </Button>
          </DialogActions>
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};
