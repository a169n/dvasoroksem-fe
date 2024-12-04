
import { Container } from '@mui/material';
import { Footer } from '@shared/ui/footer';
import { Outlet } from 'react-router-dom';
import { Header } from '@shared/ui/header';

export function DefaultLayout() {
  return (
    <Container maxWidth={false} disableGutters sx={{ maxWidth: '1920px' }}>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default DefaultLayout;