import {test } from "@playwright/test";

test("Drag and Drop", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.dragAndDrop("div#draggable","div#droppable");   
})