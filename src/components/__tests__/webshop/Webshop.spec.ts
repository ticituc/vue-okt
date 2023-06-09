import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Webshop from '../../webshop/Webshop.vue'
import { createTestingPinia } from '@pinia/testing'
import { useWebshopStore } from '@/stores/webshop';

import { fn } from '@vitest/spy'

const webShopItems = [
    {
        id: 1,
        name: "A 1",
        price: 123
    },
    {
        id: 2,
        name: "A 2",
        price: 321
    },
    {
        id: 3,
        name: "A 3",
        price: 456
    },
    {
        id: 4,
        name: "A 4",
        price: 789
    }

];


describe('HelloWorld', () => {
    it('renders properly', () => {
        const websComp = mount(Webshop, {
            global: {
                plugins: [createTestingPinia({
                    createSpy: fn,
                    initialState: {

                    },
                }),],
            },
        });

        const webshopStore = useWebshopStore()

        expect(webshopStore.getData).toHaveBeenCalledTimes(1);
        //const store = useWebshopStore() // uses the testing pinia!
        websComp.get('button').element.click()

        expect(webshopStore.getData).toHaveBeenCalledTimes(2);

        expect(webshopStore.getData).toBeCalledWith(true);


        //expect(websComp.text()).contains("webShop Component");

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
