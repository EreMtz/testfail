import React from 'react';
import {shallow} from 'enzyme'; 
import Header from "./Header";

it('Debe devolver el número de servicio al cliente', ()=> {
    const wrapper = shallow(<Footer/>);
    const ancor = wrapper.find('.a1');
    const result = ancor.text(); //declaramos el resultado esperado
         expect (result).toBe('Home'); 


 })