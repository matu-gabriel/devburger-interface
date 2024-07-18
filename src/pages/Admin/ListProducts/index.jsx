import { useEffect, useState } from "react";
import { Container, EditIconStyle } from "./style";
import api from "../../../services/api";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Modal } from "../../../components";

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalProducts, setModalProducts] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await api.get("products");
      setProducts(data);
    };
    getProducts();
  }, []);

  const isOffer = (offer) => {
    if (offer) {
      return <CheckCircleIcon style={{ color: "rgba(14, 146, 27, 1)" }} />;
    }
    return <CancelIcon style={{ color: "rgba(158, 28, 0, 1)" }} />;
  };

  const handleOpenModal = (product) => {
    setModalProducts(product);
    setShowModal(true);
  };

  const handleClosedModal = () => {
    setModalProducts(null);
    setShowModal(false);
  };

  return (
    <Container>
      <TableContainer
        component={Paper}
        style={{ borderTopLeftRadius: "30px", borderTopRightRadius: "30px" }}
      >
        <Table sx={{ minWidth: 1250 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: "rgba(51, 50, 50, 1)" }}>
            <TableRow>
              <TableCell
                style={{ fontSize: "20px", color: "#fff", fontWeight: "700" }}
              >
                Nome
              </TableCell>
              <TableCell
                style={{ fontSize: "20px", color: "#fff", fontWeight: "700" }}
              >
                Preço
              </TableCell>
              <TableCell
                style={{ fontSize: "20px", color: "#fff", fontWeight: "700" }}
              >
                Oferta
              </TableCell>
              <TableCell
                style={{ fontSize: "20px", color: "#fff", fontWeight: "700" }}
              ></TableCell>
              <TableCell
                style={{ fontSize: "20px", color: "#fff", fontWeight: "700" }}
              >
                Editar
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    style={{ fontSize: "18px" }}
                    component="th"
                    scope="row"
                  >
                    {product.name}
                  </TableCell>
                  <TableCell style={{ fontSize: "18px" }}>
                    {product.price}
                  </TableCell>
                  <TableCell style={{ fontSize: "18px" }}>
                    {isOffer(product.offer)}
                  </TableCell>
                  <TableCell>
                    <img
                      src={product.url}
                      alt="imagem-produto"
                      style={{ width: "80px" }}
                    />
                  </TableCell>
                  <TableCell>
                    <EditIconStyle onClick={() => handleOpenModal(product)} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        show={showModal}
        onClose={handleClosedModal}
        product={modalProducts}
      />
    </Container>
  );
};

export default ListProducts;
