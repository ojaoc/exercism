//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rna) => {
  const translationValues = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP'
  }
  if (typeof rna != 'string') return [];
  const getCodons = rna.match(/.{1,3}/g);
  let proteinArr = [];
  for (let i = 0; i < getCodons.length; i++) {
    if (getCodons[i] in translationValues) {
      if (translationValues[getCodons[i]] !== 'STOP') {
        proteinArr.push(translationValues[getCodons[i]]);
      } else {
        break;
      }
    } else {
      throw new Error('Invalid codon');
    }
  }
  return proteinArr;
};