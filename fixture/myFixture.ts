import { test as myTest } from "@playwright/test";


const myFixtureTest = myTest.extend<{
    age: number,
    email: string
}>({
    age: 25,
    email:"gdpoul@gmail.com"
})

export const test = myFixtureTest;