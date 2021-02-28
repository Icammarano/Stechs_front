import { Button } from "react-bootstrap";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";
import { getVendorsUndefined } from "../../services/VendorsServices";
import "../../styles/components/Vendors.css";
import { ModelsTable } from "../models/ModelsTable";

export const VendorScreen = ({ history }) => {
    const initialState = { vendor: "" };
    const [vendorModels, setVendorModels] = useState({});
    const [{ vendor }, handleInputChange] = useForm(initialState);

    const handleSearchVendor = async (e) => {
        e.preventDefault();
        if (isFormValid()) {
            try {
                let results = await getVendorsUndefined(vendor);
                let models = results.data.modems;
                if (models.length > 0) {
                    setVendorModels(models);
                } else {
                    setVendorModels({});
                    Swal.fire(
                        "Information",
                        "There are no unregistered models for the searched vendor",
                        "info"
                    );
                }
            } catch (error) {
                console.log(error);
                Swal.fire("Error", error.data.msg, "error");
            }
        }
    };

    const isFormValid = () => {
        if (!vendor) {
            Swal.fire("Error", "Vendor is required", "error");
            return false;
        }
        return true;
    };

    const handleAddNewModel = () => {
        history.push("/vendors/AddModels");
    };

    return (
        <div className="container mt-1 vendors__main">
            <h1>Vendors Search</h1>
            <div className="row">
                <div className="vendors__search">
                    <form onSubmit={handleSearchVendor}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                name="vendor"
                                placeholder="Search vendor"
                                className="form-control vendors__input"
                                autoComplete="off"
                                onChange={handleInputChange}
                                value={vendor}
                            />
                            <Button variant="primary" type="submit">
                                Search
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={handleAddNewModel}
                            >
                                Add New Model
                            </Button>{" "}
                        </div>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="vendors__table">
                    <ModelsTable data={vendorModels} />
                </div>
            </div>
        </div>
    );
};
