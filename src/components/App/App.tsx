import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StyledApp } from "./Styled";
import TitularPage from "../Pages/Titular_page";
import PhotosPage from "../Pages/Photos_page";
import ServicePage from "../Pages/Service_page";
import NotFoundPage from "../Pages/Not_Found_page";
import Layout from "../Layout";
import ContactsPage from "../Pages/Contacts_page";
import InformationPage from "../Pages/Information_page";

const App = () => {
  return (
    <BrowserRouter>
      <StyledApp>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<TitularPage />} />
              <Route path="titular" element={<TitularPage />} />
              <Route path="services" element={<ServicePage />} />
              <Route path="photos" element={<PhotosPage />} />
              <Route path="information" element={<InformationPage />} />
              <Route path="information/:procedure" element={<InformationPage />} />
              <Route path="contacts" element={<ContactsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
