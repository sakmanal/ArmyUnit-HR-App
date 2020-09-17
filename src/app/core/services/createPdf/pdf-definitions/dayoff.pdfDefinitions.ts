import { signaturedataURL } from '../../../../../assets/images/signature.dataurl';
import { stamp } from '../../../../../assets/images/stamp.dataurl';
import { DayoffDoc } from '../../../../dayoff/models/dayoffdoc.model';
import { convertToWord } from '../../../../shared/helpers/numberToText';
import * as moment from 'moment';

export function  dayoff_pdf_def(data: DayoffDoc): {content:any[], styles:any} {
  const startDate = moment(data.startDate).format('DD/MM/YYYY');
  const endDate = moment(data.endDate).add(1, 'days').format('DD/MM/YYYY');
  const count = moment(data.endDate).diff(moment(data.startDate), 'days') + 1;
  const currentDate = moment().format('DD/MM/YYYY');
  const countWord = convertToWord(count);
  return {
    content: [
      {
        stack: [
          '4th ARMY CORPS',
          '744 ENGINEER COMPANY',
        ],
        style: 'header'
      },
      {
          stack: ['DAY OFF DOCUMENT'],
          style: 'title'
      },
      {
        text: [
          `We grant permission to ${data.fullnameTitle} for ${count}(${countWord}) days ${data.type}, for ${data.destination}.\n`,
          `The Duration of this, starts from ${startDate} and expires on ${endDate} at 06:30 a.m, when the above mentioned must return on his position.`

        ]
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
                `${currentDate}`,
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
        alignment: 'left',
        margin: [0, 20, 0, 0]
      },
      title: {
          fontSize: 12,
        bold: true,
        alignment: 'center',
        margin: [0, 30, 0, 40],
        decoration: 'underline'
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
