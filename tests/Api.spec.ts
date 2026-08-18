import {test,request,expect,Page} from "@playwright/test";

// test("GET API testing", async ({request}) => {
//     const response = await request.get("https://jsonplaceholder.typicode.com/posts/1");
//     expect(response.status()).toBe(200);
// });


// test("GET API testing", async ({request}) => {
//     const response = await request.get("https://api.restfulapi.dev/objects?id=3");
//     console.log(await response.json());
//     expect(response.status()).toBe(200);
// });

test("GET API testing", async ({page}) => {
    const apiContext = await request.newContext();
    const response = await request.get("https://api.restfulapi.dev/objects?id=3");
    console.log(await response.json());
    expect(response.status()).toBe(200);

    var productvaluefromAPI = await response.json();
    console.log(productvaluefromAPI.data[0].name);
});

test("POST API testing", async ({page}) => {
    const payload = {
        "name": "New Product",
        "description": "This is a new product",
        "price": 19.99
    };
    
    const apiContext = await request.newContext();
    const response = await apiContext.post("https://api.restfulapi.dev/objects?id=3");
    console.log(await response.json());
    expect(response.status()).toBe(200);

    var productvaluefromAPI = await response.json();
    console.log(productvaluefromAPI.data[0].name);
});