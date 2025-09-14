/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "../interface";
import * as CRUD from "./crud";

// Original row object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert row
const newRowID: RowID = CRUD.insertRow(row);

// Updated row using object spread
const updatedRow: RowElement = { ...row, age: 23 };

// Update row
CRUD.updateRow(newRowID, updatedRow);

// Delete row
CRUD.deleteRow(newRowID);
