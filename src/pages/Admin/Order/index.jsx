import { useEffect, useState } from "react";
import { Container } from "./style";
import api from "../../../services/api";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Row from "./row";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const { data } = await api.get("/orders");
      setOrders(data);
    };

    getOrders();
  }, []);

  function createData(order) {
    return {
      orderId: order._id,
      name: order.user.name,
      date: order.createdAt,
      status: order.status,
      products: order.products,
    };
  }

  useEffect(() => {
    const newRows = orders.map((order) => createData(order));

    setRows(newRows);
  }, [orders]);

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.orderId} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Order;
