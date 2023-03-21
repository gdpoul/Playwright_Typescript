import {test, expect} from "@playwright/test";
import * as data from "D:/Playwright_Typescript/test-data/api-testdata.json"


const baseUrl="https://reqres.in/api";
test.describe.parallel("DEMO-API",()=>{

    test("Assert Response Status",async({request})=>{
        const response= await request.get(`${baseUrl}/users/2`); 
        expect(response.status(),'200 Status code was not displayed').toBe(200);
                      
    })
    test("Assert Invalid Endpoint",async({request})=>{
        const response= await request.get(`${baseUrl}/users/invalid-end-point`); 
        expect(response.status()).toBe(404);        
    })

    test("Get User Details",async({request})=>{
        const response= await request.get(`${baseUrl}/users/2`); 
        const responseBody= JSON.parse(await response.text());
        expect(response.status()).toBe(200);

        // Assertion on response body
        expect(await responseBody.data.id).toBe(2);
        expect(await responseBody.data.first_name).toBe(data.first_name);
        expect(await responseBody.data.last_name).toBe(data.last_name);
        expect(await responseBody.data.email).toBeTruthy();
        expect(await responseBody.data.email).toBe(data.email);
                
    })
    test("POST Request Create User", async({request})=>{
        const response= await request.post(`${baseUrl}/users`,{
            data:{
                name: "David",
                job: "QA Engg.."
            }
        }); 
        const responseBody= JSON.parse(await response.text());
        expect(response.status()).toBe(201);
        console.log(responseBody);       
        expect(responseBody.id).toBeTruthy();
    })
    test("Login Successful", async({request})=>{
        const response= await request.post(`${baseUrl}/login`,{
            data:{
                email:     "eve.holt@reqres.in",
                password:  "cityslicka"
            }
        }); 
        const responseBody= JSON.parse(await response.text());
        expect(response.status()).toBe(200);
        console.log(responseBody);       
        expect(responseBody.token).toBeTruthy();
    })

    test("Login UnSuccessful", async({request})=>{
        const response= await request.post(`${baseUrl}/login`,{
            data:{
                email:     "eve.holt@reqres.in"
            }
        }); 
        const responseBody= JSON.parse(await response.text());
        expect(response.status()).toBe(400);
        console.log(responseBody);       
        expect(responseBody.error).toBe('Missing password');
    })

    test("PUT Request - Update User",async({request})=>{
        const response= await request.put(`${baseUrl}/users/2`,{
            data:{
                name:"new name",
                job:"new job"
            }
        });
        const responseBody=JSON.parse(await response.text());
        expect(response.status()).toBe(200);
        expect(responseBody.name).toBe("new name");
        expect(responseBody.job).toBe("new job");
        expect(responseBody.updatedAt).toBeTruthy();
    })

    test("DELETE API - Delete User", async({request})=>{
        const response=await request.delete(`${baseUrl}/users/2`);
        expect(response.status()).toBe(204);
    })
})
