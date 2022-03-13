import { Box, Card, Container, Link, Typography } from '@mui/material';
// material
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { MHidden } from '../components/@material-extend';
import { RegisterForm } from '../components/authentication/register';
// components
import Page from '../components/Page';
// layouts
import AuthLayout from '../layouts/AuthLayout';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Register() {
  return (
    <RootStyle title="Register | Minimal-UI">
      <AuthLayout>
        已有账号? &nbsp;
        <Link
          underline="none"
          variant="subtitle2"
          component={RouterLink}
          to="/login"
        >
          去登录
        </Link>
      </AuthLayout>

      <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            管理您的工作内容与效率
          </Typography>
          <img
            alt="register"
            src="/showmumu/static/illustrations/illustration_register.png"
          />
        </SectionStyle>
      </MHidden>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              快速注册
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              或咨询管理员获得账号
            </Typography>
          </Box>

          {/* <AuthSocial /> */}

          <RegisterForm />

          <Typography
            variant="body2"
            align="center"
            sx={{ color: 'text.secondary', mt: 3 }}
          >
            注册代表您同意本系统的&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              服务协议
            </Link>
            &nbsp;与&nbsp;
            <Link underline="always" sx={{ color: 'text.primary' }}>
              隐私协议
            </Link>
            .
          </Typography>

          <MHidden width="smUp">
            <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
              已有账号?&nbsp;
              <Link to="/login" component={RouterLink}>
                去登录
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
