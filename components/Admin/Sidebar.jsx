import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { clearFormData, closeToolbar } from '../../redux/admin/toolbarSlice';
import SideBarLink from './SideBarLink';

const Sidebar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const path = router.pathname;

  const handleChangePage = () => {
    dispatch(closeToolbar());
    dispatch(clearFormData());
  };

  return (
    <div className="flex">
      <div className="w-[240px] h-full bg-white flex flex-col shadow-md py-6 gap-6">
        <div className="flex-center">
          <h1 className="text-2xl text-blue-pastel font-bold">Admin Panel</h1>
        </div>

        <div className="flex flex-col gap-8">
          <SideBarLink
            href="/admin"
            handleChangePage={handleChangePage}
            name="Dashboard"
            path={path}
          >
            <DashboardIcon />
          </SideBarLink>

          <SideBarLink
            href="/admin/product"
            handleChangePage={handleChangePage}
            name="Products"
            path={path}
          >
            <LocalOfferIcon />
          </SideBarLink>

          <SideBarLink
            href="/admin/user"
            handleChangePage={handleChangePage}
            name="Users"
            path={path}
          >
            <PersonIcon />
          </SideBarLink>

          <SideBarLink
            href="/admin/order"
            handleChangePage={handleChangePage}
            name="Orders"
            path={path}
          >
            <ShoppingCartIcon />
          </SideBarLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
