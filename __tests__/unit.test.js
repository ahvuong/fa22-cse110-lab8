// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
test('Number (342)324-5234 a phone number', () => {
    let real = functions.isPhoneNumber("(342)324-5234");
    expect(real).toBe(true);
  });
test('Number (415)330-1234 a phone number', () => {
    let real = functions.isPhoneNumber("(415)330-1234");
    expect(real).toBe(true);
});
test('Number (342)324-523 a phone number', () => {
    let real = functions.isPhoneNumber("(342)324-523");
    expect(real).toBe(false);
  });
test('Number (415)330-123 a phone number', () => {
    let real = functions.isPhoneNumber("(415)330-123");
    expect(real).toBe(false);
});
// TODO - Part 2
test('Test is example@gmail.com', () => {
    let real = functions.isEmail("example@gmail.com");
    expect(real).toBe(true);
});
test('Test is exa_mple456765432@gmail.com', () => {
    let real = functions.isEmail("exa_mple456765432@gmail.com");
    expect(real).toBe(true);
});
test('Test is exa_mple456765432!@gmail.com', () => {
    let real = functions.isEmail("exa_mple456765432!@gmail.com");
    expect(real).toBe(false);
});
test('Test is example@gmail', () => {
    let real = functions.isEmail("example@gmail");
    expect(real).toBe(false);
});

test('Test is sjhduwnvgbhnjsa a strong password', () => {
    let real = functions.isStrongPassword("sjhduwnvgbhnjsa");
    expect(real).toBe(true);
});
test('Test is 1jhduwnvgbhnjsa a strong password', () => {
    let real = functions.isStrongPassword("1jhduwnvgbhnjsa");
    expect(real).toBe(false);
});
test('Test is jhduwnvg1bhnjsa a strong password', () => {
    let real = functions.isStrongPassword("jhduwnvg1bhnjsa");
    expect(real).toBe(true);
});
test('Test is jhd a strong password', () => {
    let real = functions.isStrongPassword("jhd");
    expect(real).toBe(false);
});

test('Test is 11/11/1111 a date', () => {
    let real = functions.isDate("11/11/1111");
    expect(real).toBe(true);
});
test('Test is 11/19/2022 a date', () => {
    let real = functions.isDate("11/19/2022");
    expect(real).toBe(true);
});
test('Test is 11/11/11 a date', () => {
    let real = functions.isDate("11/11/11");
    expect(real).toBe(false);
});
test('Test is 11/19/20221 a date', () => {
    let real = functions.isDate("11/19/20221");
    expect(real).toBe(false);
});