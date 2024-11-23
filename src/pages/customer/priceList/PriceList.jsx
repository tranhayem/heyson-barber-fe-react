import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import { barberService, barberShop } from "~/api/mock/barberData";

import CustomTable from "~/components/custom/table/CustomTable";
import TitleCustom from "~/components/custom/title/TitleCustom";

const renderTableRows = (data, typeName) => {
  if (!data || data.length === 0) return null;

  return data.map((item, index) => (
    <TableRow key={item.name}>
      {index === 0 && (
        <TableCell
          align="center"
          rowSpan={data.length}
          sx={{ verticalAlign: "middle", width: "25%", fontSize: "24px" }}
        >
          {typeName}
        </TableCell>
      )}

      <TableCell align="center" sx={{ width: "50%", fontSize: "20px" }}>
        {item.name || ""}
      </TableCell>

      <TableCell align="center" sx={{ width: "25%", fontSize: "20px" }}>
        {item.price || "Liên hệ"}
      </TableCell>
    </TableRow>
  ));
};

const PriceList = () => {
  const serviceColumns = [
    { label: "Loại dịch vụ", width: "25%" },
    { label: "Dịch vụ", width: "50%" },
    { label: "Đơn giá", width: "25%" },
  ];

  const productColumns = [
    { label: "Loại sản phẩm", width: "25%" },
    { label: "Sản phẩm", width: "50%" },
    { label: "Đơn giá", width: "25%" },
  ];

  return (
    <Container>
      {Array.isArray(barberService) && barberService.length > 0 && (
        <Box sx={{ py: { xs: 2, sm: 4 } }}>
          <TitleCustom title="Bảng giá dịch vụ" />
          <CustomTable
            data={barberService}
            isService={true}
            columns={serviceColumns}
            renderRows={(productType) =>
              renderTableRows(
                productType.service_data,
                productType.service_type_name
              )
            }
          />
        </Box>
      )}

      {Array.isArray(barberShop) && barberShop.length > 0 && (
        <Box sx={{ py: { xs: 2, sm: 4 } }}>
          <TitleCustom title="Bảng giá sản phẩm" />
          <CustomTable
            data={barberShop}
            isService={false}
            columns={productColumns}
            renderRows={(productType) =>
              renderTableRows(
                productType.product_data,
                productType.product_type_name
              )
            }
          />
        </Box>
      )}
    </Container>
  );
};

export default PriceList;
