import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Webshop from '../../webshop/Webshop.vue'

const webShopItems = [
    {
        id: 1,
        name: "A 1",
        price: 123
    }
];


describe('HelloWorld', () => {
    it('renders properly', () => {
        const websComp = mount(Webshop, {
        });

        expect(websComp.text()).contains("webShop Component");

        webShopItems.forEach((item) => {

            expect(websComp.text()).contains("ID: " + item.id);
            expect(websComp.text()).contains(item.name);
            expect(websComp.text()).contains(item.price + " Ft");
            //id
            const div = websComp.get("#webshop-product-" + item.id);
            const subDivHTML = div.html();

            expect(div.attributes().id).toEqual("webshop-product-" + item.id)

            expect(subDivHTML).contains("ID: " + item.id);
            expect(subDivHTML).contains(item.name);
            expect(subDivHTML).contains(item.price + " Ft");

        })
    })
})