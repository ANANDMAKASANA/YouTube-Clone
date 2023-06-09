import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
    <Stack direction="row" alignItems="center" pl={3} sx={{ position: "sticky", background: '#000', top: 0, justifyContent: "space-between", flexWrap: "wrap" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="logo" height={70} />
        </Link>
        <SearchBar />
    </Stack>
);

export default Navbar;