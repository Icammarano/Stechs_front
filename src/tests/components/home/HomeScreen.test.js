import { shallow } from "enzyme";
import { HomeScreen } from "../../../components/home/HomeScreen";

describe("Pruebas en <HomeScreen />", () => {
    test("Debe mostrarse correctamente", () => {
        const wrapper = shallow(<HomeScreen />);
        expect(wrapper).toMatchSnapshot();
    });
});
