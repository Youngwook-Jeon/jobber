import { FC, ReactNode, Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import AppPage from './features/AppPage';
import ConfirmEmail from './features/auth/components/ConfirmEmail';
import ResetPassword from './features/auth/components/ResetPassword';
import BuyerDashboard from './features/buyer/components/Dashboard';
import Chat from './features/chat/components/Chat';
import Error from './features/error/Error';
import AddGig from './features/gig/components/gig/AddGig';
import EditGig from './features/gig/components/gig/EditGig';
import Gigs from './features/gig/components/gigs/Gigs';
import GigView from './features/gig/components/view/GigView';
import Home from './features/home/components/Home';
import ProtectedRoute from './features/ProtectedRoute';
import AddSeller from './features/seller/components/add/AddSeller';
import ManageEarnings from './features/seller/components/dashboard/ManageEarnings';
import ManageOrders from './features/seller/components/dashboard/ManageOrders';
import Seller from './features/seller/components/dashboard/Seller';
import SellerDashboard from './features/seller/components/dashboard/SellerDashboard';
import CurrentSellerProfile from './features/seller/components/profile/CurrentSellerProfile';
import SellerProfile from './features/seller/components/profile/SellerProfile';

const Layout = ({ backgroundColor = '#fff', children }: { backgroundColor: string; children: ReactNode }): JSX.Element => (
  <div style={{ backgroundColor }} className="flex flex-grow">
    {children}
  </div>
);

const AppRouter: FC = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <AppPage />
    },
    {
      path: 'reset_password',
      element: (
        <Suspense>
          <ResetPassword />
        </Suspense>
      )
    },
    {
      path: 'confirm_email',
      element: (
        <Suspense>
          <ConfirmEmail />
        </Suspense>
      )
    },
    {
      path: '/',
      element: (
        <Suspense>
          <ProtectedRoute>
            <Layout backgroundColor="#ffffff">
              <Home />
            </Layout>
          </ProtectedRoute>
        </Suspense>
      )
    },
    {
      path: '/users/:username/:buyerId/orders',
      element: (
        <Suspense>
          <ProtectedRoute>
            <Layout backgroundColor="#ffffff">
              <BuyerDashboard />
            </Layout>
          </ProtectedRoute>
        </Suspense>
      )
    },
    {
      path: '/seller_onboarding',
      element: (
        <Suspense>
          <ProtectedRoute>
            <Layout backgroundColor="#ffffff">
              <AddSeller />
            </Layout>
          </ProtectedRoute>
        </Suspense>
      )
    },
    {
      path: '/seller_profile/:username/:sellerId/edit',
      element: (
        <Suspense>
          <ProtectedRoute>
            <Layout backgroundColor="#ffffff">
              <CurrentSellerProfile />
            </Layout>
          </ProtectedRoute>
        </Suspense>
      )
    },
    {
      path: '/seller_profile/:username/:sellerId/view',
      element: (
        <Suspense>
          <ProtectedRoute>
            <Layout backgroundColor="#ffffff">
              <SellerProfile />
            </Layout>
          </ProtectedRoute>
        </Suspense>
      )
    },
    {
      path: '/:username/:sellerId',
      element: (
        <Suspense>
          <ProtectedRoute>
            <Layout backgroundColor="#ffffff">
              <Seller />
            </Layout>
          </ProtectedRoute>
        </Suspense>
      ),
      children: [
        {
          path: 'seller_dashboard',
          element: <SellerDashboard />
        },
        {
          path: 'manage_orders',
          element: <ManageOrders />
        },
        {
          path: 'manage_earnings',
          element: <ManageEarnings />
        }
      ]
    },
    {
      path: '/manage_gigs/new/:sellerId',
      element: (
        <Suspense>
          <ProtectedRoute>
            <Layout backgroundColor="#ffffff">
              <AddGig />
            </Layout>
          </ProtectedRoute>
        </Suspense>
      )
    },
    {
      path: '/manage_gigs/edit/:gigId',
      element: (
        <Suspense>
          <ProtectedRoute>
            <Layout backgroundColor="#ffffff">
              <EditGig />
            </Layout>
          </ProtectedRoute>
        </Suspense>
      )
    },
    {
      path: '/gig/:username/:title/:sellerId/:gigId/view',
      element: (
        <Suspense>
          <ProtectedRoute>
            <Layout backgroundColor="#ffffff">
              <GigView />
            </Layout>
          </ProtectedRoute>
        </Suspense>
      )
    },
    {
      path: '/categories/:category',
      element: (
        <Suspense>
          <ProtectedRoute>
            <Layout backgroundColor="#ffffff">
              <Gigs type="categories" />
            </Layout>
          </ProtectedRoute>
        </Suspense>
      )
    },
    {
      path: '/search/gigs',
      element: (
        <Suspense>
          <ProtectedRoute>
            <Layout backgroundColor="#ffffff">
              <Gigs type="search" />
            </Layout>
          </ProtectedRoute>
        </Suspense>
      )
    },
    {
      path: '/inbox',
      element: (
        <Suspense>
          <ProtectedRoute>
            <Layout backgroundColor="#ffffff">
              <Chat />
            </Layout>
          </ProtectedRoute>
        </Suspense>
      )
    },
    {
      path: '/inbox/:username/:conversationId',
      element: (
        <Suspense>
          <ProtectedRoute>
            <Layout backgroundColor="#ffffff">
              <Chat />
            </Layout>
          </ProtectedRoute>
        </Suspense>
      )
    },
    {
      path: '*',
      element: (
        <Suspense>
          <Error />
        </Suspense>
      )
    }
  ];

  return useRoutes(routes);
};

export default AppRouter;
