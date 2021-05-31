import { render, screen } from '@testing-library/react';
import {shallow, mount} from 'enzyme';
import toJson from "enzyme-to-json";
import ManageUserProfileContainers from './../components/ManageUserProfileContainer';
import UserProfileContainer from './../components/UserProfileContainer';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });

describe('<ManageUserProfileContainers>', ()=>{

    it('matches snapshot', () =>{
        const wrapper = shallow(<ManageUserProfileContainers/>);
        expect(toJson(wrapper)).toMatchSnapshot()
    });

   it('should find div', () =>{
        const wrapper = shallow(<ManageUserProfileContainers/>);
       expect(wrapper.find("div").length).toEqual(1);
    });

    it('verify initial states', () =>{
        const wrapper = shallow(<ManageUserProfileContainers/>);
        expect(wrapper.state().userData.length).toEqual(0);
        expect(wrapper.state().filteredData.length).toEqual(0);
    });

    it('verify updated state', () =>{
        const wrapper = shallow(<ManageUserProfileContainers/>);

        wrapper.state().userData = [
            {
                address: {
                    city: "Hamillhaven",
                    street_name: "Feest Field",
                    street_address: "4589 Adrian Land",
                    zip_code: "30531-0927",
                    state: "Hawaii"
                },
                avatar: "https://robohash.org/itaqueutsimilique.png?size=300x300&set=set1",
                date_of_birth: "1997-12-15",
                email: "homer.smith@email.com",
                employment: {title: "Lead Education Coordinator", key_skill: "Problem solving"},
                first_name: "Homer",
                gender: "Bigender",
                id: 2948,
                last_name: "Smith",
                phone_number: "+965 1-915-048-1041",
                uid: "38973318-7d18-4660-a4cc-a1c0c21bde80",
            }
        ];
        expect(wrapper.state().userData.length).toEqual(1);
        expect(wrapper.state().filteredData.length).toEqual(0);
    });


});
