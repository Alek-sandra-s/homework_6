import { User } from "../src/User";
import { Processor } from "../src/Processor";

describe("processor test", () => {
    let user1: User
    beforeEach(() => {
        user1 = new User("Sasha", "Smith", "65575885", "Koidula 7-15");
    })
    test("Default state undefined", () => {

        expect(user1.consentGiven).toBeUndefined()
    })
    test("State is true", () => {

        Processor.giveConsent(user1)
        expect(user1.consentGiven).toBe(true)
    })
    test("Processor verify consent test", () => {

        Processor.giveConsent(user1)
        expect(Processor.verifyConsent(user1)).toBeTruthy()

    })
    test("Verify consent is false", () => {

        expect(Processor.verifyConsent(user1)).toBeFalsy()
    })
})
