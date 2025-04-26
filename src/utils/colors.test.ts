import { isValidHexColor } from './colors';

describe('isValidHexColor', () => {
  test('should return true for valid 6-digit hex colors', () => {
    expect(isValidHexColor('#000000')).toBe(true);
    expect(isValidHexColor('#FFFFFF')).toBe(true);
    expect(isValidHexColor('#FF0000')).toBe(true);
    expect(isValidHexColor('#00ff00')).toBe(true);
    expect(isValidHexColor('#0000FF')).toBe(true);
  });

  test('should return true for valid 3-digit hex colors', () => {
    expect(isValidHexColor('#000')).toBe(true);
    expect(isValidHexColor('#FFF')).toBe(true);
    expect(isValidHexColor('#f0f')).toBe(true);
    expect(isValidHexColor('#0F0')).toBe(true);
  });

  test('should return false for invalid hex colors', () => {
    expect(isValidHexColor('000000')).toBe(false); // missing #
    expect(isValidHexColor('#00000')).toBe(false); // 5 digits
    expect(isValidHexColor('#0000000')).toBe(false); // 7 digits
    expect(isValidHexColor('#GGGGGG')).toBe(false); // invalid characters
    expect(isValidHexColor('#GGG')).toBe(false); // invalid characters
    expect(isValidHexColor('')).toBe(false); // empty string
    expect(isValidHexColor('#')).toBe(false); // only #
    expect(isValidHexColor('invalid')).toBe(false); // random string
  });
});
