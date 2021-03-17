import Cep from '@modules/Cep/Cep';

describe('Class CEP', () => {
  it('should be valid CEP', () => {
    const ceps = ['14.050-360', '14.050.360', '14.050 360', '14050.360', '14050-360', '14050 360', '14050360'];
    // eslint-disable-next-line no-restricted-syntax
    for (const cep of ceps) {
      expect(Cep.isValid(cep)).toBe(true);
    }
  });

  it('should not be valid CEP', () => {
    const ceps = ['14.050-360a', '14 050.360', '14.050A360', 'CEP1423', '14050,360'];
    // eslint-disable-next-line no-restricted-syntax
    for (const cep of ceps) {
      expect(Cep.isValid(cep)).toBe(false);
    }
  });

  it('should be clear value', () => {
    const ceps = ['14.050-360a', '14 050.360', '14.050A360', '14050,360'];
    // eslint-disable-next-line no-restricted-syntax
    for (const cep of ceps) {
      expect(Cep.clearedValue(cep)).toBe('14050360');
    }
    expect(Cep.clearedValue('Abcdefg')).toBe('');
  });

  it('should be add 0 right to left', () => {
    let cep = '14753362';
    const possibleCeps = [
      '14753360',
      '14753300',
      '14753000',
      '14750000',
      '14700000',
      '14000000',
      '10000000',
      '00000000',
    ];
    // eslint-disable-next-line no-restricted-syntax
    for (const possibleCep of possibleCeps) {
      cep = Cep.possibleNewCep(cep);
      expect(cep).toBe(possibleCep);
    }
  });
});
