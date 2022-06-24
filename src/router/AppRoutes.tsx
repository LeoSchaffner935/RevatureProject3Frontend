import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Cart } from '../components/cart/Cart';
import Checkout from '../components/checkout/Checkout';
import { DisplayProducts } from "../components/display-products/DisplayProducts";
import ForgotPassword from '../components/forgot-password/ForgotPassword';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import ResetPassword from '../components/reset-password/ResetPassword';
import ResetPasswordSuccess from '../components/reset-password/PasswordResetSuccess';
import CheckEmailNotification from '../components/forgot-password/CheckEmailNotification';
export const AppRoutes: React.FC<unknown> = () => (
  <Routes>
    <Route path="/" element={<DisplayProducts />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/reset-password/:id"  element={<ResetPassword/>} />
    <Route path="/forgot-password" element={<ForgotPassword/>} />
    <Route path="/reset-password-success" element={<ResetPasswordSuccess/>} />
    <Route path="/check-email" element={<CheckEmailNotification/>} />
  </Routes>
)