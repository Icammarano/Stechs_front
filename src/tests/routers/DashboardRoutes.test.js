import { shallow } from "enzyme";
import { DashboardRoutes } from "../../routers/DashboardRoutes";

describe("Pruebas en <DashboardRoutes />", () => {
    test("Debe mostrarse correctamente", () => {
        const wrapper = shallow(<DashboardRoutes />);
        expect(wrapper).toMatchSnapshot();
    });
});
