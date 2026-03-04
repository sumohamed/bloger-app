import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";

import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Pricing from "../pages/pricing/Pricing";
import Dashboard from "../pages/dashboard/Dashboard";
import NotFound from "../pages/notFound/NotFound";
import ProtectedRoute from "../components/common/protectedRoute/ProtectedRoute";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/pricing" element={<Pricing />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog/:id" element={<Blog />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route
					path="/dashboard"
					element={
						<ProtectedRoute>
							<Dashboard />
						</ProtectedRoute>
					}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
