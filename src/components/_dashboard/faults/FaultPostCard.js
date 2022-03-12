import { Icon } from '@iconify/react';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
} from '@mui/material';
// material
import { styled } from '@mui/material/styles';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { useState } from 'react';
import SvgIconStyle from 'src/components/SvgIconStyle';
import FaultCardActions from './FaultCardActions';

// ----------------------------------------------------------------------
const CardMediaStyle = styled('div')({
  position: 'relative',
  // paddingTop: 'calc(100% * 3 / 4)',
});
const AvatarStyle = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 32,
  height: 32,
  position: 'absolute',
  left: theme.spacing(3),
  bottom: theme.spacing(-2),
}));

const FaultStatusBadge = styled(Box)(({ theme, status }) => {
  return {
    position: 'absolute',
    zIndex: 1,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    color: 'white',
    // borderBottomRightRadius: theme.shape.borderRadiusMd,
    borderBottomLeftRadius: theme.shape.borderRadiusMd,
    top: 0,
    right: 0,
    background:
      status === '新'
        ? theme.palette.secondary.main
        : status === '待审批'
        ? theme.palette.grey[700]
        : theme.palette.primary.main,
  };
});

// ----------------------------------------------------------------------

FaultPostCard.propTypes = {
  fault: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function FaultPostCard({ fault, detailHandler }) {
  const {
    faultPart,
    faultReason,
    company,
    faultDevice,
    cover,
    pic,
    lineNo,
    lineName,
    status,
    time,
  } = fault;

  const [expanded, setExpanded] = useState(false);

  const toggle = () => {
    setExpanded(!expanded);
  };
  const { enqueueSnackbar: toast } = useSnackbar();

  const handleClickDelete = () => {
    toast('不允许删除', { variant: 'error' });
  };
  const handleClickShare = () => {
    toast('分享', { variant: 'success' });
  };
  const handleClickDetail = () => {
    toast('查看详情');
    detailHandler(fault);
  };

  return (
    <Grid item xs={12} sm={6} md={3} lg={4}>
      <Card sx={{ position: 'relative' }}>
        <CardHeader
          onClick={toggle}
          sx={{ marginBottom: 1 }}
          avatar={
            <Avatar
              sx={{ bgcolor: '#ff0000' }}
              src={pic.avatar}
              aria-label="recipe"
            />
          }
          title={lineName}
          subheader={time}
        />
        <FaultStatusBadge status={status}>{status}</FaultStatusBadge>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardMediaStyle>
            <SvgIconStyle
              color="paper"
              src="/static/icons/shape-avatar.svg"
              sx={{
                width: 80,
                height: 36,
                zIndex: 9,
                bottom: -15,
                position: 'absolute',
              }}
            />
            <AvatarStyle src={pic.avatar} />
            <ImageList sx={{ width: '100%' }} cols={3}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
                <ImageListItem key={item}>
                  <img src={cover} alt="" />
                </ImageListItem>
              ))}
            </ImageList>
          </CardMediaStyle>
          <CardContent>
            <Collapse in={expanded}>
              <Typography
                gutterBottom
                variant="caption"
                sx={{ color: 'text.disabled', display: 'block' }}
              >
                {company}: {pic.name}
              </Typography>

              <Typography variant="subtitle2">线路编号：{lineNo}</Typography>
              <Typography variant="subtitle2">线路名称：{lineName}</Typography>
              <Typography variant="subtitle2">
                故障设备：{faultDevice}
              </Typography>
              <Typography variant="subtitle2">故障部位：{faultPart}</Typography>
              <Typography variant="subtitle2">
                故障原因：{faultReason}
              </Typography>
              <Typography variant="subtitle2">故障时间：{time}</Typography>
            </Collapse>
          </CardContent>
          <CardActions sx={{ justifyContent: 'space-between' }}>
            <Stack direction="row" spacing={2}>
              <IconButton onClick={handleClickShare} title="分享">
                <Icon icon="bi:share" />
              </IconButton>
              <IconButton onClick={handleClickDelete} title="删除">
                <Icon icon="ant-design:delete-outlined" />
              </IconButton>
              <IconButton onClick={handleClickDetail} title="查看详情">
                <Icon icon="fluent:clipboard-more-20-regular" />
              </IconButton>
            </Stack>
            <FaultCardActions />
          </CardActions>
        </Collapse>
      </Card>
    </Grid>
  );
}
