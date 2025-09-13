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
