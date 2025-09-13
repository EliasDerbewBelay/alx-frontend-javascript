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

console.log(teacher3);

// task 2

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "Elias",
  lastName: "Belay",
  fullTimeEmployee: false,
  location: "Addis Ababa, Ethiopia",
  numberOfReports: 17,
};

console.log(director1);
