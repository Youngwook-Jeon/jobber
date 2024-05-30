import { FC, ReactElement, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AppRouter from './AppRoutes';
import { socketService } from './sockets/socket.service';

const App: FC = (): ReactElement => {
  useEffect(() => {
    socketService.setupSocketConnection();
  }, []);

  return (
    <>
      <BrowserRouter>
        <div className="w-screen min-h-screen flex flex-col relative">
          <AppRouter />
          <ToastContainer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
