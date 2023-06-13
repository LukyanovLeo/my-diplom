import { Routes, Route } from 'react-router-dom';
import { Links } from './Links';
import { Glav } from './Glav';
import { LK } from './LK';
import { LKPicture } from './LKPicture';
import { PictureUploadPage } from './PictureUploadPage';
import { Login } from './Login';
import { Register } from './Register';

export const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/" element={<Links />} />
        <Route path="/glavst" element={<Glav />} />
        <Route path="/lika:id" element={<LK />} />
        <Route path="/likapicture:id" element={<LKPicture />} />
        <Route path="/loadingpicture" element={<PictureUploadPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sigin" element={<Register />} />
      </Routes>
    );
  }
  
  return (
    <Routes>
      <Route path="/" element={<Links />} />
    </Routes>
  );
};