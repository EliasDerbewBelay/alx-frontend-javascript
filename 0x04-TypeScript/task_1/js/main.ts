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

// 1. Define an interface for the constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// 2. Define an interface for the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// 3. Implement the class
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

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
const student: StudentClassInterface = new StudentClass("John", "Doe");
console.log(student.displayName()); // Output: John
console.log(student.workOnHomework()); // Output: Currently working
