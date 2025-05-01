'use client';
// import { useDispatch } from 'react-redux';
import { Box, Container } from '@mui/material';

// import Drawer from './Drawer';
// import Footer from './Footer';
import Header from './Header';

// import useServerMenu from './Drawer/hooks/useMenuItem';
// import { openDrawer } from '@/store/reducers/menu';

const MainLayout = () => {
  //const dispatch = useDispatch();
  // const drawerOpen = useSelector((state) => state.menu.drawerOpen);
  const drawerOpen = true;
  // const { container } = useSelector((state) => state.config);

  const handleDrawerToggle = () => {
    //  dispatch(openDrawer({ drawerOpen: !drawerOpen }));
  };

  // const menuItems = useServerMenu();

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Header open={drawerOpen} handleDrawerToggle={handleDrawerToggle} />
      {/* <Drawer open={drawerOpen} handleDrawerToggle={handleDrawerToggle} /> */}
      <Box
        component="main"
        sx={{ width: 'calc(100% - 260px)', flexGrow: 1, p: { xs: 2, sm: 3 } }}
      >
        {/* <Toolbar /> */}
        <Container
          maxWidth="xl"
          sx={{
            position: 'relative',
            minHeight: 'calc(100vh - 110px)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          test
          {/* <Footer /> */}
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout;
