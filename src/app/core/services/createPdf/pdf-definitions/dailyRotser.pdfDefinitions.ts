import { logo } from '../../../../../assets/images/logo.dataurl';
import { DailyRosterDoc } from '../../../../roster/models/dailyRosterDoc.model';
import { MemberDailyState } from '../../../../roster/models/dailyRoster.model';
import { signaturedataURL } from '../../../../../assets/images/signature.dataurl';
import { stamp } from '../../../../../assets/images/stamp.dataurl';
import * as moment from 'moment';

function buildTableBody(data: MemberDailyState[], columns: string[]) {
  const body = [];

  body.push(columns);

  data.forEach((row) => {
      const dataRow = [];

      columns.forEach((column) => {
          dataRow.push({text: row[column].toString(), fontSize: 9});
      })

      body.push(dataRow);
  });

  return body;
}

function table(data: MemberDailyState[], columns: string[]) {
  return {
      table: {
          headerRows: 1,
          body: buildTableBody(data, columns)
      }
  };
}

export function  dailyRoster_pdf_def(data: DailyRosterDoc): {content:any[], styles:any} {


  return {
    content: [
      {
        columns: [
          {
            stack: [
              {image: logo, width: 50}
            ],
            width: 'auto'
          },
          {
            stack: [
              '744 ENGINEER COMPANY'
            ],
            width: 'auto',
            margin: [10, 25, 0, 0]
          }
        ],

        style: 'header'
      },
      {
        stack: [`Daily roster (${moment(data.date).format('DD/MM/YYYY')})`],
        style: 'title'
      },

      {
        columns: [
          {
            stack: [
              { text: 'officers roster', style: 'header' },
              table(data.roster.officersRoster, ['rank', 'fullname', 'state'])
                ]
          },                               {
            stack: [

              { text: 'soldiers roster', style: 'header' },
              table(data.roster.soldiersRoster, ['rank', 'fullname', 'state'])
                ]
          }
        ]
      },
      {
        style: 'tablereport',
        table: {
          body: [
            ['Total manpower', data.roster.report.count_total],
            ['Present members', data.roster.report.count_present],
            ['Unpresent members', data.roster.report.count_unpresent]
          ]
        }
      },
      {
        columns: [
          {
            stack: [
              {image: stamp}
            ],
            style: 'footer'
          },
          {
            stack: [
              moment(data.date).format('DD/MM/YYYY'),
              {text: 'Commander', style: 'subfooter'},
              {text: 'Major Rios Alex', style:'subfooter'},
              {image: signaturedataURL}
          ],
          style: 'footer'
          }
        ]
    }

    ],
    styles: {
      header: {
        fontSize: 12,
        bold: true,
      },
      title: {
        fontSize: 12,
        bold: true,
        alignment: 'center',
        margin: [0, 10, 0, 40],
        decoration: 'underline'
      },
      tablereport: {
        margin: [0, 10, 0, 0]
      },
      footer: {
        margin: [0, 30, 60, 0],
        alignment: 'center'
      },
      subfooter: {
        margin: [0, 10, 0, 10]
      }
    }
  }
}
