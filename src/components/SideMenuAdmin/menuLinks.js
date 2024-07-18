import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const sideLinks = [
  {
    id: 1,
    label: "Pedidos",
    link: "produtos",
    icon: ListAltOutlinedIcon,
  },
  {
    id: 2,
    label: "Listar produtos",
    link: "listar-produtos",
    icon: Inventory2OutlinedIcon,
  },
  {
    id: 3,
    label: "Cadastrar produtos",
    link: "novo-produto",
    icon: AddShoppingCartOutlinedIcon,
  },
];

export default sideLinks;
