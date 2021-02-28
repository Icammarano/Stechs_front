import { shallow } from "enzyme";
import { Navbar } from "../../../components/ui/NavBar";

describe("Pruebas en <NavBar />", () => {
    test("Debe mostrarse correctamente", () => {
        const wrapper = shallow(<Navbar />);
        expect(wrapper).toMatchSnapshot();
    });
});
