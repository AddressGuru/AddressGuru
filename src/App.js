import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Categories from "./Api/Categories";
import CityList from "./Api/CityList";
import Footer from "./Atoms/Footer/Footer";
import Header from "./Atoms/Header/Header";
import AboutUs from "./View/AboutUs";
import CategoriesLanding from "./View/CategoriesLanding";
import Claim from "./View/Claim";
import Contact from "./View/Contact";
import Dealer from "./View/Dealer";
import Index from "./View/Index";
import Infringementpolicy from "./View/Infringement-policy";
import Job from "./View/Job";
import Landing from "./View/Landing";
import Login from "./View/Login";
import MarketLanding from "./View/MarketLanding";
import NotFound from "./View/NotFound";
import Partner from "./View/Partner";
import PostingRules from "./View/PostingRules";
import Pricing from "./View/Pricing";
import Privacy from "./View/PrivacyPolicy";

const App = () => {
        return (
                <>
                        <CityList>
                                
                                        <Header />
                             
                        </CityList>
                        <Categories />
                        <Routes>
                                <Route path="/" element={<Categories><Index /></Categories>} />
                                <Route path="/landing" element={<CategoriesLanding />} />
                                <Route path="/third" element={<Landing />} />
                                <Route path="/privacyPolicy" element={<Privacy />} />
                                <Route path="/about" element={<AboutUs />} />
                                <Route path="/InfregmentPolicy" element={<Infringementpolicy />} />
                                <Route path="/postingrules" element={<PostingRules />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/pricing" element={<Pricing />} />
                                
                                <Route path="/login" element={<Login />} />
                                <Route path="/job" element={<Job />} />
                                <Route path="/partner" element={<Partner />} />
                                 
                                <Route path="/claim" element={<Claim />} />   
                                <Route path="*" element={<NotFound />} />   

                                <Route path="/dealer" element={<Dealer />} />  
                                <Route path="/Market" element={<MarketLanding />} />
                        </Routes>
                        <Footer />
                </>
        )
}

export default App;