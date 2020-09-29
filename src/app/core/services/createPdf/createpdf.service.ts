import { Injectable } from '@angular/core';
import { DayoffDoc } from '@app/dayoff/models/dayoffdoc.model';
import { DailyRosterDoc } from '@app/roster/models/dailyRosterDoc.model';
import { dayoff_pdf_def } from './pdf-definitions/dayoff.pdfDefinitions';
import { dailyRoster_pdf_def } from './pdf-definitions/dailyRotser.pdfDefinitions';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

type PdfAction = 'export' | 'print' | 'download'

@Injectable({
  providedIn: 'root'
})
export class CreatepdfService {

  constructor() { }

  public dayoffPdf(doc: DayoffDoc, action: PdfAction): void{
    const documentDefinition = dayoff_pdf_def(doc)
    this.generatePdf(documentDefinition, action);
  }

  public dailyRosterPdf(doc: DailyRosterDoc, action: PdfAction): void{
    const documentDefinition = dailyRoster_pdf_def(doc)
    this.generatePdf(documentDefinition, action);
  }

  private generatePdf(documentDefinition: {content:any[], styles:any}, action: PdfAction): void{
    if (action == 'export'){
      pdfMake.createPdf(documentDefinition).open();
    }
    else if (action == 'print'){
      pdfMake.createPdf(documentDefinition).print();
    }
    else {
      pdfMake.createPdf(documentDefinition).download();
    }
   }

}
