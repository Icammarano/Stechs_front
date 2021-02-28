/* eslint-disable jest/no-conditional-expect */
import { shallow } from "enzyme";
import { VendorsModelsScreen } from "../../../components/vendors/VendorsModelsScreen";

describe("Pruebas en <VendorsModelsScreen />", () => {
    const history = {
        length: 3,
        push: jest.fn(),
        goBack: jest.fn(),
    };

    const wrapper = shallow(<VendorsModelsScreen history={history} />);

    test("Debe mostrarse correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("Debe volver atras al presionar boton", () => {
        const handleClick = wrapper
            .find(".vendors__button__back")
            .prop("onClick");
        handleClick();

        if (history.length <= 2) {
            expect(history.push).toHaveBeenCalledWith("/");
        } else {
            expect(history.goBack).toHaveBeenCalled();
        }
    });
});
