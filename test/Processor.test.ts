import { User } from '../src/User'
import { Processor } from '../src/Processor'

describe('processor test', () => {
  let user1: User
  beforeEach(() => {
    user1 = new User('Sasha', 'Smith', '65575885', 'Koidula 7-15', 18)
  })
  test('Default state undefined', () => {
    expect(user1.consentGiven).toBeUndefined()
  })
  test('State is true', () => {
    Processor.giveConsent(user1)
    expect(user1.consentGiven).toBe(true)
  })
  test('Processor verify consent test', () => {
    Processor.giveConsent(user1)
    expect(Processor.verifyConsent(user1)).toBeTruthy()
  })
  test('Verify consent is false', () => {
    expect(Processor.verifyConsent(user1)).toBeFalsy()
  })
})
describe('User age test', () => {
  test('Test user under 18 years old can not give consent', () => {
    const user2 = new User('Jane', 'Doe', '65758549505', 'Berlin', 16)
    expect(Processor.checkConsentEligibility(user2)).toBe(false)
  })
  test('Test user above or equal 18 years old can give consent', () => {
    const user3 = new User('Jane', 'Doe', '65758549505', 'Berlin', 26)
    expect(Processor.checkConsentEligibility(user3)).toBe(true)
  })
})
describe('Consent revoke', () => {
  test('Test Consent was revoked, if consentGiven is true', () => {
    const user4 = new User('Jane', 'Doe', '65758549505', 'Berlin', 24, true)
    Processor.revokeConsent(user4)
    expect(user4.consentGiven).toBe(false)
  })
  test('Test consent was not revoked, if consentGiven is undefined', () => {
    const user5 = new User('Jane', 'Doe', '65758549505', 'Berlin', 24)
    Processor.revokeConsent(user5)
    expect(user5.consentGiven).toBeUndefined()
  })
  test('Test consentGiven is still false after revoke', () => {
    const user6 = new User('Jane', 'Doe', '65758549505', 'Berlin', 24, false)
    Processor.revokeConsent(user6)
    expect(user6.consentGiven).toBe(false)
  })
})
