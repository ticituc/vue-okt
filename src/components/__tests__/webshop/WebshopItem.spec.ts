import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WebshopItem from '../../webshop/WebshopItem.vue'


describe('HelloWorld', () => {
    it('renders properly', async () => {
        const websComp = mount(WebshopItem, {
            id: 1,
            name: "teszt",
            price: 123,
        });


        expect(websComp.get('h3').text()).toEqual("teszt");
        expect(websComp.get('p').text()).toEqual("123 Ft");
        expect(websComp.get('span').text()).toEqual("ID: 1");

        const websComp2 = mount(WebshopItem, {
            id: 1,
            name: "teszt",
            price: 123,
        });

        websComp2.setProps({
            id: 2,
            name: "teszt2",
            price: 321,
        });

        expect(websComp2.get('h3').text()).toEqual("teszt2");
        expect(websComp2.get('p').text()).toEqual("321 Ft");
        expect(websComp2.get('span').text()).toEqual("ID: 2");

    })
})
