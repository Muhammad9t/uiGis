import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  HomeIcon,
  SettingsIcon,
  UsersIcon,
  MenuIcon,
  SunIcon,
  MoonIcon,
  MapIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import UsersPage from "@/pages/UsersPage";
import Surveys from "@/pages/Surveys";
import Mydrivers from "@/pages/MyDrivers";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import SuperAdminDashboard from "./pages/SuperAdminDashboard";
import CustomerManagement from "./pages/CustomerManagement";
import UploadServey from "./pages/UploadServey";
import SurveyManagement from "./pages/SurveyManagement";
import CityManagement from "./pages/CityManagement";
import AddCity from "./pages/AddCity";
import CheckServeys from "./pages/CheckServeys";
import SurveyDetails from "./pages/SurveyDetails";
import CheckMap from "./pages/CheckMap";
import AddCustomer from "./pages/AddCustomer";
import AddDriver from "./pages/AddDriver";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Settings from "./pages/Settings";

function Navbar() {
  const { toggleSidebar } = useSidebar();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <Button
          variant="ghost"
          size="icon"
          className="mr-2"
          onClick={toggleSidebar}
        >
          <MenuIcon className="h-5 w-5" />
        </Button>
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-semibold">My App</h2>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </Button>
        </div>
        <div className="px-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <p>User Name</p>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <p>user@example.com</p>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/settings">
                  <SettingsIcon className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

function App() {
  const location = useLocation();

  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen flex-col w-full">
        <Navbar />
        <div className="flex flex-1 w-full mx-auto">
          <Sidebar>
            <SidebarHeader>
              <img src="/Berkenbusch.svg" alt="" />
              <hr />
              <div className="flex items-center space-x-3 px-2 py-4">
                <Avatar>
                  <AvatarFallback>RW</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-foreground">
                    Robert Wilson
                  </div>
                  <div className="text-xs text-muted-foreground">
                    robert@example.com
                  </div>
                </div>
              </div>
              <hr />
            </SidebarHeader>
            <SidebarContent className="px-2 py-3">
              <SidebarMenu>
                <small className="mt-1">Admin Flow</small>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    tooltip="Home"
                    isActive={location.pathname === "/"}
                  >
                    <Link to="/">
                      <HomeIcon />
                      <span>Dashboard</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    tooltip="Users"
                    isActive={location.pathname === "/users"}
                  >
                    <Link to="/users">
                      <UsersIcon />
                      <span>Profile</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    tooltip="MyDrivers"
                    isActive={location.pathname === "/mydrivers"}
                  >
                    <Link to="/mydrivers">
                      <SettingsIcon />
                      <span>My Drivers</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    tooltip="Surveys"
                    isActive={location.pathname === "/surveys"}
                  >
                    <Link to="/surveys">
                      <MapIcon />
                      <span>Surveys</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <hr />
                <small className="mt-5">Super Admin Flow</small>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    tooltip="SuperAdminDashboard"
                    isActive={location.pathname === "/superadmindashboard"}
                  >
                    <Link to="/superadmindashboard">
                      <MapIcon />
                      <span>Super Admin Dashboard</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    tooltip="Users"
                    isActive={location.pathname === "/users"}
                  >
                    <Link to="/users">
                      <UsersIcon />

                      <span>Super Admin Profile</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    tooltip="CustomerManagement"
                    isActive={location.pathname === "/customer-management"}
                  >
                    <Link to="/customer-management">
                      <UsersIcon />

                      <span>Customer Management</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    tooltip="CityManagement"
                    isActive={location.pathname === "/city-management"}
                  >
                    <Link to="/city-management">
                      <MapIcon />

                      <span>City Management</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <hr />
                <small className="mt-5">User Flow</small>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    tooltip="UploadServey"
                    isActive={location.pathname === "/upload-servey"}
                  >
                    <Link to="/upload-servey">
                      <MapIcon />

                      <span>Uplaod Servey</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    tooltip="SurveyManagement"
                    isActive={location.pathname === "/servey-management"}
                  >
                    <Link to="/servey-management">
                      <MapIcon />

                      <span>Survey Management</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
            <SidebarFooter>
              <SidebarTrigger />
            </SidebarFooter>
          </Sidebar>
          <main className="flex flex-col w-full p-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/surveys" element={<Surveys />} />
              <Route path="/mydrivers" element={<Mydrivers />} />
              <Route
                path="/superadmindashboard"
                element={<SuperAdminDashboard />}
              />
              <Route path="/add-city" element={<AddCity />} />
              <Route
                path="/customer-management"
                element={<CustomerManagement />}
              />
              <Route path="/upload-servey" element={<UploadServey />} />
              <Route path="/servey-management" element={<SurveyManagement />} />
              <Route path="/city-management" element={<CityManagement />} />
              <Route path="/check-serveys" element={<CheckServeys />} />
              <Route path="/survey-details" element={<SurveyDetails />} />
              <Route path="/check-map" element={<CheckMap />} />
              <Route path="/add-customer" element={<AddCustomer />} />
              <Route path="/add-driver" element={<AddDriver />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<Signup />} />

              {/* Add a catch-all or redirect if needed */}
            </Routes>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default App;
