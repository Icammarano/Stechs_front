import { shallow } from "enzyme";
import { VendorScreen } from "../../../components/vendors/VendorScreen";

describe("Pruebas en <VendorScreen />", () => {
    const wrapper = shallow(<VendorScreen />);

    test("Debe mostrarse correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("debe tener un parrafo con el title", () => {
        const p = wrapper.find("h1");
        expect(p.text().trim()).toBe("Vendors Search");
    });
});
