import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

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
  {
    id: 4,
    label: "Criar categoria",
    link: "nova-categoria",
    icon: AddCircleOutlinedIcon,
  },
];

export default sideLinks;
