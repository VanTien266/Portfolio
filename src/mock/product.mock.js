import { v4 as uuidv4 } from 'uuid';
import mock from '../utils/mock';

const products = [
  {
    id: uuidv4(),
    title: 'Fabric Roll Order Management',
    description: '',
    startDate: '2021-10-01',
    endDate: '2022-06-01',
    img:
      'https://images.unsplash.com/photo-1659535844436-64344882b939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
  },
  {
    id: uuidv4(),
    title: 'Fabric Roll Order Management',
    description: '',
    startDate: '2021-10-01',
    endDate: '2022-06-01',
    img:
      'https://images.unsplash.com/photo-1659535844436-64344882b939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
  },
  {
    id: uuidv4(),
    title: 'Fabric Roll Order Management',
    description: '',
    startDate: '2021-10-01',
    endDate: '2022-06-01',
    img:
      'https://images.unsplash.com/photo-1659535844436-64344882b939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
  },
  {
    id: uuidv4(),
    title: 'Fabric Roll Order Management',
    description: '',
    startDate: '2021-10-01',
    endDate: '2022-06-01',
    img:
      'https://images.unsplash.com/photo-1659535844436-64344882b939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
  },
];

mock.onGet('http://localhost:3000/api/v1/product').reply(200, {
  products,
});
