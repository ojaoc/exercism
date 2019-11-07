export const toRna = (dna) => {
  const transcribe = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
  };
  let rna = dna.split("");
  return rna.map(char => transcribe[char])
            .join("");
}