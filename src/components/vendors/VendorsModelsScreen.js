import React from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";
import { addNewModel } from "../../services/ModelsServices";
import "../../styles/components/Models.css";

export const VendorsModelsScreen = ({ history }) => {
    const initialState = { vendor: "", name: "", soft: "" };
    const [{ vendor, name, soft }, handleInputChange, reset] = useForm(
        initialState
    );
    const handleBack = () => {
        if (history.length <= 2) {
            history.push("/");
        } else {
            history.goBack();
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();

        if (isFormValid()) {
            try {
                let result = await addNewModel({ vendor, name, soft });
                // console.log("RESULT________", result);
                if (result.status === 201) {
                    Swal.fire(
                        "Success",
                        "Vendor Model created succefully",
                        "success"
                    );
                    reset();
                } else {
                    Swal.fire("Warning", result.data.msg, "warning");
                }
            } catch (error) {
                console.log(error);
                Swal.fire("Error", error.data.msg, "error");
            }
        }
    };

    const handleReset = () => {
        reset();
    };

    const isFormValid = () => {
        if (!vendor || !name || !soft) {
            Swal.fire("Error", "Vendor, Name and Soft are required", "error");
            return false;
        }
        return true;
    };

    return (
        <div className="models__main">
            <h1>Models Administrator</h1>
            <Button
                variant="warning"
                onClick={handleBack}
                className="vendors__button__back"
            >
                Back to Search
            </Button>
            <div className="models__div__form">
                <form className="models__form">
                    <input
                        type="text"
                        name="vendor"
                        placeholder="Vendor"
                        className="form-control models__input"
                        autoComplete="off"
                        onChange={handleInputChange}
                        value={vendor}
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="form-control models__input"
                        autoComplete="off"
                        onChange={handleInputChange}
                        value={name}
                    />
                    <input
                        type="text"
                        name="soft"
                        placeholder="Soft"
                        className="form-control models__input"
                        autoComplete="off"
                        onChange={handleInputChange}
                        value={soft}
                    />
                    <div className="models__div__button">
                        <Button
                            variant="primary"
                            className="models__button "
                            onClick={handleSave}
                        >
                            Save
                        </Button>
                        <Button
                            variant="secondary"
                            className="models__button"
                            onClick={handleReset}
                        >
                            Clear
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
