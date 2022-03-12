// material
import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { Form, FormikProvider, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

// ----------------------------------------------------------------------

export default function FaultDetailForm(props) {
  const { fault = {} } = props;
  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: fault,
    validationSchema: LoginSchema,
    onSubmit: () => {
      navigate('/dashboard', { replace: true });
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3} mt={2} mb={2}>
          <Divider>故障基本信息</Divider>
          <TextField fullWidth label="负责人" {...getFieldProps('pic.name')} />
          <TextField fullWidth label="线路编号" {...getFieldProps('lineNo')} />

          <TextField
            fullWidth
            label="线路名称"
            {...getFieldProps('lineName')}
          />

          <TextField fullWidth label="班组名称" {...getFieldProps('company')} />

          <TextField
            fullWidth
            label="电压等级"
            {...getFieldProps('voltageGrade')}
          />

          <TextField
            fullWidth
            label="故障设备"
            {...getFieldProps('faultDevice')}
          />

          <TextField
            fullWidth
            label="故障部位"
            {...getFieldProps('faultPart')}
          />

          <FormControl fullWidth>
            <InputLabel>故障原因分类</InputLabel>
            <Select {...getFieldProps('faultReason')}>
              <MenuItem value={10}>电缆端头</MenuItem>
              <MenuItem value={20}>电缆接头</MenuItem>
              <MenuItem value={30}>电缆本体</MenuItem>
              <MenuItem value={40}>引线</MenuItem>
              <MenuItem value={50}>其他</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            multiline
            label="材料消耗"
            {...getFieldProps('faultReasonMark')}
          />

          <TextField
            fullWidth
            label="故障现场照片"
            {...getFieldProps('faultReason')}
          />

          <TextField
            fullWidth
            label="故障处理完成照片"
            {...getFieldProps('faultReason')}
          />

          <Divider>应急处理过程</Divider>
          <TextField fullWidth label="故障设备" />
        </Stack>
      </Form>
    </FormikProvider>
  );
}
