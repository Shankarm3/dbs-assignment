import { mount } from 'enzyme';
import DataStore from '../../utils/DataStore';
import HowItWorks from '../HowItWorks';
import InsuranceDetails from '../InsuranceDetails';
import HomeLoanDetails from '../HomeLoanDetails';
import PolicyDetails from '../PolicyDetails';

describe('Test cases for How It Works', () => {
    it('How it works render without error', ()=> {
        const wrapper = mount(<HowItWorks data={DataStore.INSURANCE_DATA}/>);
        expect(wrapper.find('.columns')).toHaveLength(2);
    })
    it('Insurance Details render without error', ()=> {
        const wrapper = mount(<InsuranceDetails data={DataStore.INSURANCE_DATA[0]}/>);
        expect(wrapper.find('.homeloan-wrapper')).toHaveLength(1);
        expect(wrapper.find('.policy-detail-table')).toHaveLength(1);
    })
    it('HomeLoanDetails render without error', ()=> {
        const wrapper = mount(<HomeLoanDetails data={DataStore.INSURANCE_DATA[0].homeLoans}/>);
        expect(wrapper.find('.homeloan-wrapper')).toHaveLength(1);
        expect(wrapper.find('.homeloan-table')).toHaveLength(1);
    })
    it('PolicyDetails render without error', ()=> {
        const wrapper = mount(<PolicyDetails data={DataStore.INSURANCE_DATA[0].policyDetails}/>);
        expect(wrapper.find('.policy-detail-wrapper')).toHaveLength(1);
        expect(wrapper.find('.policy-detail-table')).toHaveLength(1);
    })
})