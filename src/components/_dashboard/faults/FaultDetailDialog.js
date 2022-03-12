import { LoadingButton } from '@mui/lab';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import FaultDetailForm from './FaultDetailForm';

export default function FaultDetailDialog(props) {
  const { onClose = () => {}, open, fault = {} } = props;

  // useEffect(() => {
  //   setOpen(props.open);
  // }, [props.open]);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  // const fullScreen = false;
  const [loading, setLoading] = useState(false);

  const handleDelayClose = () => {
    // setOpen(false);
    setLoading(true);
    setTimeout(() => {
      onClose();
      setLoading(false);
    }, 1000);
  };
  return (
    <Dialog
      fullScreen={fullScreen}
      fullWidth
      open={open}
      sx={{
        right: 10,
        top: 10,
        bottom: 10,
        left: 10,
        borderRadius: 1,
        overflow: 'hidden',
      }}
    >
      <DialogTitle id="responsive-dialog-title">
        {fault.id ? '故障详情' : '新增故障'}
      </DialogTitle>
      <DialogContent>
        <FaultDetailForm fault={fault} />
      </DialogContent>
      <DialogActions>
        <LoadingButton
          loading={loading}
          autoFocus
          onClick={handleDelayClose}
          color="secondary"
        >
          关闭
        </LoadingButton>
        <LoadingButton
          loading={loading}
          onClick={handleDelayClose}
          color="primary"
        >
          保存
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
