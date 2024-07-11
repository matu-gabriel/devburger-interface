import { useEffect, useState } from "react";
import { Container, MenuStatus, LinkStatus } from "./style";
import api from "../../../services/api";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Row from "./row";
import formatedDate from "../../../utils/formatedDate";
import options from "./selectOrders";
import { useLocation } from "react-router-dom";

const Order = () => {
  const location = useLocation();
  console.log(location);
  const [orders, setOrders] = useState([]);
  const [filteredStatus, setFilteredStatus] = useState([]);
  const [activeStatus, setActiveStatus] = useState(1);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const { data } = await api.get("/orders");
      setOrders(data);
      setFilteredStatus(data);
    };

    getOrders();
  }, []);

  function createData(order) {
    return {
      orderId: order._id,
      name: order.user.name,
      date: formatedDate(order.createdAt),
      status: order.status,
      products: order.products,
    };
  }

  useEffect(() => {
    const newRows = filteredStatus.map((order) => createData(order));

    setRows(newRows);
  }, [filteredStatus]);

  useEffect(() => {
    if (activeStatus === 1) {
      setFilteredStatus(filteredStatus);
    } else {
      const statusIndex = options.findIndex((opt) => opt.id === activeStatus);
      const newFilteredStatus = orders.filter(
        (order) => order.status === options[statusIndex].value
      );

      setFilteredStatus(newFilteredStatus);
    }
  }, [orders]);

  const handleStatus = (option) => {
    if (option.id === 1) {
      setFilteredStatus(orders);
    } else {
      const filterStatus = orders.filter(
        (order) => order.status === option.value
      );
      setFilteredStatus(filterStatus);
    }
    setActiveStatus(option.id);
  };

  return (
    <Container>
      <MenuStatus>
        {options &&
          options.map((option) => (
            <LinkStatus
              key={option.id}
              onClick={() => handleStatus(option)}
              isActive={activeStatus === option.id}
            >
              {option.value}
            </LinkStatus>
          ))}
      </MenuStatus>
      <TableContainer
        component={Paper}
        style={{ borderTopLeftRadius: "30px", borderTopRightRadius: "30px" }}
      >
        <Table aria-label="collapsible table">
          <TableHead
            style={{
              backgroundColor: "rgba(51, 50, 50, 1)",
            }}
          >
            <TableRow>
              <TableCell />
              <TableCell style={{ fontSize: "18px", color: "#fff" }}>
                Pedido
              </TableCell>
              <TableCell style={{ fontSize: "18px", color: "#fff" }}>
                Cliente
              </TableCell>
              <TableCell style={{ fontSize: "18px", color: "#fff" }}>
                Data do pedido
              </TableCell>
              <TableCell style={{ fontSize: "18px", color: "#fff" }}>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.orderId}
                row={row}
                setOrders={setOrders}
                orders={orders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Order;
