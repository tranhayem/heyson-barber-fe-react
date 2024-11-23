import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import PropTypes from "prop-types";

const CustomTable = ({ data, isService, columns, renderRows }) => {
  const tableCellStyles = {
    color: (theme) => theme.heySonCustom.palette.highlightColor,
    fontSize: "28px",
    fontWeight: "bold",
  };

  return (
    <TableContainer>
      <Table sx={{ width: "100%" }}>
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell
                key={index}
                align="center"
                sx={{ ...tableCellStyles, width: column.width }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{data.map(renderRows)}</TableBody>
      </Table>
    </TableContainer>
  );
};

// PropTypes for better readability and validation
CustomTable.propTypes = {
  data: PropTypes.array.isRequired,
  isService: PropTypes.bool,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      width: PropTypes.string.isRequired,
    })
  ).isRequired,
  renderRows: PropTypes.func.isRequired,
};

export default CustomTable;
