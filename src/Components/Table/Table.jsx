import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const MyTable = ({ tableData, HandleRowClick }) => {
  let th = [];
  let tr = [];
  for (let i = 0; i < tableData.length; i++) {
    let arr = [];
    for (let key in tableData[i]) {
      arr.push(tableData[i][key]);
    }
    tr.push(arr);
  }
  const handleRowClick = (event) => {
  for(let i =0 ; i <  event.target.parentElement.parentElement.children.length ; i++ )
    {
      if(i % 2 ===0)
      {
        event.target.parentElement.parentElement.children[i].style.background = '#fff'
      }else
      {
        event.target.parentElement.parentElement.children[i].style.background = '#eee' 
      }
    }  
    event.target.parentElement.style.background  = '#FFAF00';
    HandleRowClick(event.target.parentElement.children[0].innerHTML);
  };

  for (let key in tableData[0]) {
    th.push(key);
  }
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ background: "#96C9F4" }}>
            <TableRow id="basic-button">
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
                onClick={handleRowClick}
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
    </div>
  );
};

export default MyTable;
