import ExcelJS from 'exceljs'

export default class ExcelUtility {

    static async getWorkbook(filePath) {
        const workbook = new ExcelJS.Workbook(); //ExcelJs is a class and workbook() is built in function
        // workbook() will create space for the excel
        await workbook.xlsx.readFile(filePath); // readFile() is a built in function to read and save the file from given file path
        return workbook;
    }

  
    static async getStringData(rowNum, colNum, sheetName, filePath) {

        const workbook = await this.getWorkbook(filePath);// return the excel file in the file path
        const sheet = workbook.getWorksheet(sheetName);// getWorksheet() is builtin function to retrieve the sheet from the excel file

        const row = sheet.getRow(rowNum); //getRow() is built in function to extract the row from the sheet
        const cell = row.getCell(colNum);// getCell() is  builtin function to extract the column from row
// cell.value is to get the value of the column
        return cell.value ? String(cell.value) : "";
    }


    static async getIntegerData(rowNum, colNum, sheetName, filePath) {

        const workbook = await this.getWorkbook(filePath);
        const sheet = workbook.getWorksheet(sheetName);

        const row = sheet.getRow(rowNum);
        const cell = row.getCell(colNum);

        const num = Number(cell.value);

        return isNaN(num) ? null : num.toString();
    }
}