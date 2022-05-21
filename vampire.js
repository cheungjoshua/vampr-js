class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let number = 0;
    let currentCreator = this;

    while (currentCreator.creator) {
      currentCreator = currentCreator.creator;
      number += 1;
    }
    return number;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (!vampire.creator) {
      return false;
    }
    if (this.creator === vampire) {
      return false;
    }
    if (!this.creator) {
      return true;
    }
    if (this.creator !== vampire.creator) {
      return true;
    }
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    let a = this.numberOfVampiresFromOriginal;
    let b = vampire.numberOfVampiresFromOriginal;
    if (a === b) {
      return this.creator;
    } else if (a < b) {
      return this;
    }
    return vampire;
  }
}

module.exports = Vampire;
