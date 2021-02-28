import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomeScreen } from "../components/home/HomeScreen";
import { Navbar } from "../components/ui/NavBar";
import { VendorScreen } from "../components/vendors/VendorScreen";
import { VendorsModelsScreen } from "../components/vendors/VendorsModelsScreen";

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/vendors" component={VendorScreen} />
                    <Route
                        exact
                        path="/vendors/AddModels"
                        component={VendorsModelsScreen}
                    />
                    <Route path="/" component={HomeScreen} />
                </Switch>
            </div>
        </>
    );
};
