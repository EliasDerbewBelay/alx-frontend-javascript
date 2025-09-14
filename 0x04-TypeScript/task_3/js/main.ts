/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// Create an object of type RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert row and store new ID
const newRowID: RowID = CRUD.insertRow(row);

// Create updated row with age
const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
};

// Update row
CRUD.updateRow(newRowID, updatedRow);

// Delete row
CRUD.deleteRow(newRowID);
