import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import { Delete, Details, UpdateOutlined } from "@mui/icons-material";

const MyTable = ({ tableData, handleRowClick , handleUpdate ,handleShowDetails,handleDelete}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [RowID, setRowID] = useState(-1);
  const open = Boolean(anchorEl);

  let th = [];
  let tr = [];
  for (let i = 0; i < tableData.length; i++) {
    let arr = [];
    for (let key in tableData[i]) {
      arr.push(tableData[i][key]);
    }
    tr.push(arr);
  }

  const handleClick = (event) => { 
    setAnchorEl(event.currentTarget);
    setRowID(+event.currentTarget.children.item(0).textContent);
    handleRowClick(event.currentTarget.children.item(0).textContent);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const HandleUpdate = () => {
    handleClose();
    handleUpdate(RowID);
  };

  const HandleDelete = () => {
    handleClose();
    handleDelete(RowID);
  };

  const HandleShowDetails = () => {
    handleClose();
    handleShowDetails(RowID);
  };

  for (let key in tableData[0]) {
    th.push(key);
  }
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ background: "#96C9F4" }}>
            <TableRow
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              {th.map((headname, index) => (
                <TableCell component={"th"} key={index} align="center">
                  {headname}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {tr.map((row, rowindex) => (
              <TableRow
                key={rowindex}
                onClick={handleClick}
                hover
                sx={
                  rowindex % 2 === 0
                    ? { background: "#fff" }
                    : { background: "#eee" }
                }
              >
                {row.map((cell, cellindex) => (
                  <TableCell key={cellindex} align="center">
                    {typeof cell == "boolean"
                      ? cell === true
                        ? "yes"
                        : "no"
                      : cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="countContainer">
        <span>count: {tableData.length} </span>
      </div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={HandleShowDetails}>
          <ListItemIcon>
            <Details />
          </ListItemIcon>
          <ListItemText>show Details</ListItemText>
        </MenuItem>

        <MenuItem onClick={HandleUpdate}>
          <ListItemIcon>
            <UpdateOutlined />
          </ListItemIcon>
          <ListItemText>Update</ListItemText>
        </MenuItem>

        <MenuItem onClick={HandleDelete}>
          <ListItemIcon>
            <Delete />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MyTable;
