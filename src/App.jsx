import { useState } from 'react'
import React, { useEffect, lazy, Suspense } from "react";
import Home from './pages/Home';
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Products from './pages/Product';
import Certificate from './pages/Certificate';
import ContactUs from './pages/ContactUs';
import Manufacturing from './pages/Manufacturing';
import Media from './pages/Media';
import RTADetailsComplianceOfficer from './pages/RTADetailsComplianceOfficer';
import PCDFranchise from './pages/PCDFranchise';
import ShareholdingPattern from './pages/ShareholdingPattern';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import CodeOfBusinessConductEthics from './pages/CodeOfBusinessConductEthics';
import CorporateSocialResponsibilityPolicy from './pages/CorporateSocialResponsibilityPolicy';
import CriteriaForMakingPaymentsToNonExecutiveDirectors from './pages/CriteriaForMakingPaymentsToNonExecutiveDirectors';
import FamiliarizationProgrammeForIndependentDirectors from './pages/FamiliarizationProgrammeForIndependentDirectors';
import NominationAndRemunerationPolicy from './pages/NominationAndRemunerationPolicy';
import PolicyForPreservationOfDocumentsAndArchivalPolicy from './pages/PolicyForPreservationOfDocumentsAndArchivalPolicy';
import PolicyOnDeterminingMaterialSubsidiaries from './pages/PolicyOnDeterminingMaterialSubsidiaries';
import POSHPolicy from './pages/POSHPolicy';
import RelatedPartyTransactionPolicy from './pages/RelatedPartyTransactionPolicy';
import RiskManagementPolicy from './pages/RiskManagementPolicy';
import WhistleBlowerPolicy from './pages/WhistleBlowerPolicy';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import WhyPartnerWithUs from './pages/WhyPartnerWithUs';
import AdminLogin from './pages/AdminLogin';
import AdminPanel from './pages/AdminPanel';

import './App.css'

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <Suspense fallback={<div className="w-full h-screen flex justify-center items-center text-2xl">Loading...</div>}>
      {!isAdminRoute && <Navbar/>}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/certificates" element={<Certificate/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/rta-details-compliance-officer" element={<RTADetailsComplianceOfficer/>}/>
      <Route path="/terms" element={<Terms/>}/>
      <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
      <Route path="/why-partner-with-us" element={<WhyPartnerWithUs/>}/>
      <Route path="/pcd-franchise" element={<PCDFranchise/>}/>
      <Route path="/Shareholding-Pattern" element={<ShareholdingPattern/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/manufacturing" element={<Manufacturing/>}/>
      <Route path="/media" element={<Media/>}/>
      <Route path="/code-of-business-conduct-ethics" element={<CodeOfBusinessConductEthics/>}/>
      <Route path="/corporate-social-responsibility-policy" element={<CorporateSocialResponsibilityPolicy/>}/>
      <Route path="/criteria-for-making-payments-to-non-executive-directors" element={<CriteriaForMakingPaymentsToNonExecutiveDirectors/>}/>
      <Route path="/familiarization-programme-for-independent-directors" element={<FamiliarizationProgrammeForIndependentDirectors/>}/>
      <Route path="/nomination-and-remuneration-policy" element={<NominationAndRemunerationPolicy/>}/>
      <Route path="/policy-for-preservation-of-documents-and-archival-policy" element={<PolicyForPreservationOfDocumentsAndArchivalPolicy/>}/>
      <Route path="/policy-on-determining-material-subsidiaries" element={<PolicyOnDeterminingMaterialSubsidiaries/>}/>
      <Route path="/posh-policy" element={<POSHPolicy/>}/>
      <Route path="/related-party-transaction-policy" element={<RelatedPartyTransactionPolicy/>}/>
      <Route path="/risk-management-policy" element={<RiskManagementPolicy/>}/>
      <Route path="/whistle-blower-policy" element={<WhistleBlowerPolicy/>}/>
      <Route path="/admin/login" element={<AdminLogin/>}/>
      <Route path="/admin/panel" element={<AdminPanel/>}/>
    </Routes>
    {!isAdminRoute && <Footer/>}
    </Suspense>
  )
}

export default App
