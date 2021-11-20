import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Profile',
    path: '/profile/:id',
    icon: getIcon(peopleFill),
  },
  {
    title: 'Tasks',
    path: '/tasks',
    icon: getIcon(peopleFill),
  },
  {
    title: 'Nearest',
    path: '/nearest',
    icon: getIcon(pieChart2Fill),
  },
  {
    title: 'Lenta',
    path: '/lenta',
    icon: getIcon(shoppingBagFill),
  },
  {
    title: 'Chats',
    path: '/chats',
    icon: getIcon(fileTextFill),
  },
  {
    title: 'Top',
    path: '/top',
    icon: getIcon(fileTextFill),
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon(lockFill),
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon(personAddFill),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon(alertTriangleFill),
  },
];

export default sidebarConfig;
