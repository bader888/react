    import * as React from "react";
    import Button from "@mui/material/Button";
    import Menu from "@mui/material/Menu";
    import MenuItem from "@mui/material/MenuItem";
    import ListItemIcon from "@mui/material/ListItemIcon";
    import ListItemText from "@mui/material/ListItemText"; 
    import personDetails from "../../Resources/PersonDetails 32.png";
    import DeleteUserImg from "../../Resources/Delete 32 2.png";
    import UpdateUserImg from "../../Resources/User 32 -2.png";
    import CreateUserImg from "../../Resources/Add New User 32.png";
    import { Divider } from "@mui/material";

    export default function UserContextMenu({
    HandleCreateUser,
    HandleUpdateUser,
    HandleShowUserDetails,
    HandleRemoveUser,
    }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleRemoveUser = () => {
        HandleRemoveUser();
        handleClose();
    };

    const handleUpdateUser = () => {
        HandleUpdateUser();
        handleClose();

    };

    const handleCreateUser = () => {
        HandleCreateUser();
        handleClose();

    };

    const handleShowDetails = () => {
        HandleShowUserDetails();
        handleClose();

    };

    return (
        <div>
        <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
        >
            settings
        </Button>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            "aria-labelledby": "basic-button",
            }}
        >
            <MenuItem onClick={handleShowDetails}>
            <ListItemIcon>
                <img src={personDetails} alt="person details" />
            </ListItemIcon>
            <ListItemText>show user details</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleCreateUser}>
            <ListItemIcon>
                <img src={CreateUserImg} alt="person details" />
            </ListItemIcon>
            <ListItemText>Add New User</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleUpdateUser}>
            <ListItemIcon>
                <img src={UpdateUserImg} alt="person details" />
            </ListItemIcon>
            <ListItemText>Update User</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleRemoveUser}>
            <ListItemIcon>
                <img src={DeleteUserImg} alt="person details" />
            </ListItemIcon>
            <ListItemText>Remove User</ListItemText>
            </MenuItem>
        </Menu>
        </div>
    );
    }
