import { expect } from "@playwright/test";
import {test} from "./myFixture"

test.describe("ABC",()=>{
    test("fixture demo", async ({ age, email }) => { 
        const i=10;
        console.log(age+15, email.toUpperCase());
        expect(i).toBe(10);
    }) 
})

