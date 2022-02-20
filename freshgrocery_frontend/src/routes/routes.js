import Dashboard  from '../components/admin/Dashboard';
import Profile from '../components/admin/Profile';
import Category from '../components/admin/category/Category';
import ViewCategory from '../components/admin/category/ViewCategory';
import EditCategory from '../components/admin/category/EditCategory';
import Product from '../components/admin/product/Product';
import ViewProduct from '../components/admin/product/ViewProduct';
import EditProduct from '../components/admin/product/EditProduct';

const routes =[
    {path: '/admin', exact: true, name: 'Admin'},
    {path: '/admin/dashboard', exact: true, name: 'Dashboard', component: Dashboard},
    {path: '/admin/profile', exact: true, name: 'Profile', component: Profile},
    {path: '/admin/add-category', exact: true, name: 'Category', component: Category},
    {path: '/admin/view-category', exact: true, name: 'ViewCategory', component: ViewCategory},
    {path: '/admin/edit-category/:id', exact: true, name: 'EditCategory', component: EditCategory},
    {path: '/admin/add-product', exact: true, name: 'Product', component: Product},
    {path: '/admin/view-product', exact: true, name: 'ViewProduct', component: ViewProduct},
    {path: '/admin/edit-product/:id', exact: true, name: 'EditProduct', component: EditProduct},
];

export default routes;