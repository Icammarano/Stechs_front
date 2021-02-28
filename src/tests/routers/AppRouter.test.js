import { shallow } from "enzyme";
import { AppRouter } from "../../routers/AppRouter";

describe("Pruebas en <AppRouter />", () => {
    test("Debe mostrarse correctamente", () => {
        const wrapper = shallow(<AppRouter />);
        expect(wrapper).toMatchSnapshot();
    });
});
