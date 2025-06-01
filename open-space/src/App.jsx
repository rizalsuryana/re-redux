import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loading } from './components/Loading';
import { Loginpage } from './pages/Loginpage';
import { HomePage } from './pages/HomePage';
import { Navigation } from './components/Navigation';
import { RegisterPage } from './pages/RegisterPage';
import { DetailPage } from './pages/DetailPage';
import { useSelector, useDispatch } from 'react-redux';
import { authUserThunks } from './states/authUser/action';
import { isPreloadThunks } from './states/isPreload/action';

export const App = () => {

  // const {
  //   authUser = null,
  //   isPreload = false,
  // } = useSelector((states) => states);
  const authUser = useSelector((states) => states.authUser);
  const isPreload = useSelector((states) => states.isPreload);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch async action to preload app
    dispatch(isPreloadThunks.asyncPreload());
  }, [dispatch]);

  const onSignOut = () => {
    // @TODO: dispatch async action to sign out
    dispatch(authUserThunks.asyncUnsetAuthUser());

  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/*" element={<Loginpage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <Loading />
      <div className="app-container">
        <header>
          <Navigation authUser={authUser} signOut={onSignOut} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/talks/:id" element={<DetailPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
};