import { employee } from '../src/app/models/employee.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
employee: employee;
//DECLARE NEW VARIABLE

constructor() {
this.employee = new employee();
//CREATE NEW DM INSTANCE
    }
}
