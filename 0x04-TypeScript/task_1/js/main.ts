interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any;
}
interface Director extends Teacher {
  numberOfReports: number;
}

// Interface
interface printTeacherFunction {
  ({ firstName, lastName }: { firstName: string; lastName: string }): string;
}

// Function
function printTeacher({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}): string {
  return `${firstName}. ${lastName}`;
}

// Example
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // J. Doe

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the class with matching parameter names
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// ✅ Example usage
const student = new StudentClass("John", "Doe");
console.log(student.displayName());
console.log(student.workOnHomework());
