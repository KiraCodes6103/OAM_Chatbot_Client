import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold">
      <div>SAMSUNG CHATBOT</div>
      <div className="flex items-center gap-4">
        <AccountCircleIcon
          className="cursor-pointer"
          onClick={handleMenuOpen}
          aria-controls="menu"
          aria-haspopup="true"
        />
        <MoreVertIcon
          className="cursor-pointer"
          onClick={handleMenuOpen}
          aria-controls="menu"
          aria-haspopup="true"
        />
        <Menu
          id="menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          getContentAnchorEl={null}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
