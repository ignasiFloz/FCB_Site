export class Human {
    id: string;
    name: string;
    placeOfBirth: string;
    dateOfBirth: string;
    weight: number;
    height: number;
    biography: string;
  
    constructor(
      id: string,
      name: string,
      placeOfBirth: string,
      dateOfBirth: string,
      weight: number,
      height: number,
      biography: string
    ) {
      this.id = id;
      this.name = name;
      this.placeOfBirth = placeOfBirth;
      this.dateOfBirth = dateOfBirth;
      this.weight = weight;
      this.height = height;
      this.biography = biography;
    }
}