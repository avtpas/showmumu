import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import { Icon } from '@iconify/react';

// ----------------------------------------------------------------------

const getIcon = name => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: '工单大盘',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill),
  },
  {
    title: '故障列表',
    path: '/dashboard/fault',
    icon: getIcon(fileTextFill),
  },
  {
    title: '用户管理',
    path: '/dashboard/user',
    icon: getIcon(peopleFill),
  },
  {
    title: '故障统计',
    path: '/dashboard/products',
    icon: getIcon(shoppingBagFill),
  },
  {
    title: '登录页',
    path: '/login',
    icon: getIcon(lockFill),
  },
  {
    title: '注册页',
    path: '/register',
    icon: getIcon(personAddFill),
  },
  {
    title: '错误页',
    path: '/404',
    icon: getIcon(alertTriangleFill),
  },
];

export default sidebarConfig;
