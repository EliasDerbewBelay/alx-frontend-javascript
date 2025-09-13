interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: "Alx",
  lastName: "Ethiopia",
  fullTimeEmployee: true,
  location: "Addis Ababa, Ethiopia",
  contract: true,
};

console.log(teacher3)
