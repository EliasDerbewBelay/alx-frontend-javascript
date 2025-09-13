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

// Interface for the function
interface printTeacherFunction {
  ({ firstName, lastName }: { firstName: string; lastName: string }): string;
}

// Function implementation
function printTeacher({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Example
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // J. Doe
// Output: J. Doe
