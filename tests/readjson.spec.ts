import data from "../Files/data.json";
import {test, expect} from "@playwright/test";

// test("read JSON data", async () => {
//     expect(data.id).toBe(1);
//     expect(data.name).toBe("Jane Doe");
//     expect(data.email).toBe("jane.doe@example.com");
//     expect(data.is_active).toBe(true);
//     expect(data.age).toBe(28);
//     expect(data.hobbies).toEqual(["reading", "hiking", "coding"]);
//     expect(data.address.city).toBe("Monterrey");
//     expect(data.address.country).toBe("Mexico");
//     expect(data.phone_number).toBeNull();
// });

test("console log JSON data", async () => {
    console.log(data.id);
    console.log(data.name);
    console.log(data.email);
    console.log(data.is_active);
    console.log(data.age);
    console.log(data.hobbies);
    console.log(data.address.city);
    console.log(data.address.country);
    console.log(data.phone_number);
});