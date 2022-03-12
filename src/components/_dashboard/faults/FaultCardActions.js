import { Button, Menu, MenuItem } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useState } from 'react';

const FaultCardActions = () => {
  const { enqueueSnackbar: toast } = useSnackbar();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = e => {
    toast(e.currentTarget.innerText + '成功');
    setAnchorEl(null);
  };

  return (
    <div>
      <Button variant="outlined" color="error" onClick={handleClick}>
        处理
      </Button>
      <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
        <MenuItem onClick={handleClose}>掉闸</MenuItem>
        <MenuItem onClick={handleClose}>转班组</MenuItem>
        <MenuItem onClick={handleClose}>到达现场</MenuItem>
        <MenuItem onClick={handleClose}>接调度令</MenuItem>
        <MenuItem onClick={handleClose}>报竣工</MenuItem>
      </Menu>
    </div>
  );
};

export default FaultCardActions;
