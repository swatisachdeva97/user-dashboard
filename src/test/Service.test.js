import {mount, shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import {act} from '../../../node_modules/react-dom/test-utils';
import getUserData from './../services/Service'
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });

jest.mock('./../services/Service', ()=> {
    return {
        __esModule: true,
        default: async ()=>[
            {
                address: {
                    city: "Hamillhaven",
                    street_name: "Feest Field",
                    street_address: "4589 Adrian Land",
                    zip_code: "30531-0927",
                    state: "Hawaii"
                },
                avatar: "https://robohash.org/itaqueutsimilique.png?size=300x300&set=set1",
                credit_card: {cc_number: "4410-9301-2227-9726"},
                date_of_birth: "1997-12-15",
                email: "homer.smith@email.com",
                employment: {title: "Lead Education Coordinator", key_skill: "Problem solving"},
                first_name: "Homer",
                gender: "Bigender",
                id: 2948,
                last_name: "Smith",
                password: "3AYqun9LkI",
                phone_number: "+965 1-915-048-1041",
                social_insurance_number: "290503952",
                subscription: {plan: "Platinum", status: "Idle", payment_method: "Bitcoins", term: "Monthly"},
                uid: "38973318-7d18-4660-a4cc-a1c0c21bde80",
                username: "homer.smith"
            }
        ]
    }
});

describe('Service Tests', ()=>{

    it('matches snapshot', () =>{
        const GetUserData = require('./../services/Service').default;
        let wrapper = shallow(<GetUserData/>);
        wrapper.update();
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});