// enum LANG {
//   en = 'en',
//   th = 'th',
// }

type I18nTranslation = Record<string, string>

interface ISpeaker {
  name: I18nTranslation
  position: I18nTranslation
}

interface IEventItem {
  title: I18nTranslation
  startAt: Date
  endAt: Date
  isLive?: boolean
  speakers?: ISpeaker[]
  location: I18nTranslation
}

export const AGENDA: Record<string, IEventItem[]> = {
  '2023-9-16': [ //'2022-10-28'
    {
      title: {
        th: 'แนะนำคณะ ICT และกิจกรรมงาน MUICT Open House 2023',
        en: 'Introduction of ICT & MUICT Open House 2023',
      },
      startAt: new Date('2023-09-16T08:00:00+07:00'),
      endAt: new Date('2023-09-16T08:45:00+07:00'),
      // isLive: true,
      location: {
        th: 'เวที ชั้น 1',
        en: 'Stage 1st Fl.',
      },
      // speakers: [
      //   {
      //     name: {
      //       th: 'ดร.พัฒนศักดิ์ มงคลวัฒน์',
      //       en: 'MC',
      //     },
      //     position: {
      //       th: 'คณบดีคณะเทคโนโลยีสารสนเทศและการสื่อสาร',
      //       en: 'Microphone Controler',
      //     },
      //   },
      // ],
    },
    {
      title: {
        th: 'แนะนำหลักสูตรและการสมัครเรียนของคณะ ICT',
        en: 'Introduction of ICT programme and registration',
      },
      location: {
        th: 'เวที ชั้น 1',
        en: 'Stage 1st Fl.',
      },
      startAt: new Date('2023-09-16T08:45:00+07:00'),
      endAt: new Date('2023-09-16T09:30:00+07:00'),
      // isLive: true,
    },
    {
      title: {
        th: 'ทุนการศึกษานักศึกษาคณะ ICT',
        en: 'ICT Scholarship',
      },
      location: {
        th: 'เวที ชั้น 1',
        en: 'Stage 1st Fl.',
      },
      // isLive: true,
      startAt: new Date('2023-09-16T09:30:00+07:00'),
      endAt: new Date('2023-09-16T10:00:00+07:00'),
    },
    {
      title: {
        th: 'แนะนำหลักสูตรและการสมัครเรียนของคณะ ICT',
        en: 'Introduction of ICT programme and registration',
      },
      location: {
        th: 'เวที ชั้น 1',
        en: 'Stage 1st Fl.',
      },
      startAt: new Date('2023-09-16T10:00:00+07:00'),
      endAt: new Date('2023-09-16T10:30:00+07:00'),
      // isLive: true,
    },
    {
      title: {
        th: 'Internship ของนักเรียนคณะ ICT',
        en: 'ICT Internship',
      },
      location: {
        th: 'เวที ชั้น 1',
        en: 'Stage 1st Fl.',
      },
      startAt: new Date('2023-09-16T10:30:00+07:00'),
      endAt: new Date('2023-09-16T11:30:00+07:00'),
    },
    {
      title: {
        th: 'กิจกรรมเกม Kahoot ลุ้นรับของรางวัล!',
        en: 'Game Session I',
      },
      location: {
        th: 'เวที ชั้น 1',
        en: 'Stage 1st Fl.',
      },
      startAt: new Date('2023-09-16T11:30:00+07:00'),
      endAt: new Date('2023-09-16T11:45:00+07:00'),
    },
    {
      title: {
        th: 'การแสดงดนตรีสด: วง PufferFish',
        en: 'Live Music from PufferFish band',
      },
      startAt: new Date('2023-09-16T11:45:00+07:00'),
      endAt: new Date('2023-09-16T12:45:00+07:00'),
      location: {
        th: 'เวที ชั้น 1',
        en: 'Stage 1st Fl.',
      },
    },
    {
      title: {
        th: 'แนะนำคณะ ICT และกิจกรรมงาน MUICT Open House 2023',
        en: 'Introduction of ICT & MUICT Open House 2023',
      },
      startAt: new Date('2023-09-16T12:45:00+07:00'),
      endAt: new Date('2023-09-16T13:00:00+07:00'),
      location: {
        th: 'เวที ชั้น 1',
        en: 'Stage 1st Fl.',
      },
    },
    {
      title: {
        th: 'ICT Club',
        en: 'ICT Club',
      },
      startAt: new Date('2023-09-16T13:00:00+07:00'),
      endAt: new Date('2023-09-16T14:00:00+07:00'),
      location: {
        th: 'เวที ชั้น 1',
        en: 'Stage 1st Fl.',
      },
    },
    {
      title: {
        th: 'แนะนำคณะ ICT และกิจกรรมงาน MUICT Open House 2023',
        en: 'Introduction of ICT & MUICT Open House 2023',
      },
      startAt: new Date('2023-09-16T14:00:00+07:00'),
      endAt: new Date('2023-09-16T14:30:00+07:00'),
      location: {
        th: 'เวที ชั้น 1',
        en: 'Stage 1st Fl.',
      },
    },
    {
      title: {
        th: 'กิจกรรมเกม DAVINCI',
        en: 'Game Sesssion II',
      },
      startAt: new Date('2023-09-16T14:30:00+07:00'),
      endAt: new Date('2023-09-16T15:00:00+07:00'),
      location: {
        th: 'เวที ชั้น 1',
        en: 'Stage 1st Fl.',
      },
    },
    {
      title: {
        th: 'การแสดงดนตรีสด: วง Philing',
        en: 'Live Music from Philing band',
      },
      startAt: new Date('2023-09-16T15:00:00+07:00'),
      endAt: new Date('2023-09-16T16:00:00+07:00'),
      location: {
        th: 'เวที ชั้น 1',
        en: 'Stage 1st Fl.',
      },
    },
  ],
  '2023-9-17': [
    {
      title: {
        th: 'แนะนำคณะ ICT และกิจกรรมงาน MUICT Open House 2023',
        en: 'Introduction of ICT & MUICT Open House 2023',
      },
      startAt: new Date('2023-09-17T08:00:00+07:00'),
      endAt: new Date('2023-09-17T08:45:00+07:00'),
      location: {
        th: 'เวที ชั้น 1',
        en: 'Stage 1st Fl.',
      },
    },
    {
      title: {
        th: 'แนะนำหลักสูตรและการสมัครเรียนของคณะ ICT',
        en: 'Introduction of ICT programme and registration',
      },
      startAt: new Date('2023-09-17T08:45:00+07:00'),
      endAt: new Date('2023-09-17T09:30:00+07:00'),
      location: {
        th: 'เวที ชั้น 1',
        en: 'Stage 1st Fl.',
      },
    },
    {
      title: {
        th: 'ทุนการศึกษานักศึกษาคณะ ICT',
        en: 'ICT Scholarship',
      },
      startAt: new Date('2023-09-17T09:30:00+07:00'),
      endAt: new Date('2023-09-17T10:00:00+07:00'),
      location: {
        th: 'เวที ชั้น 1',
        en: 'Stage 1st Fl.',
      },
    },
    {
      title: {
        th: 'แนะนำคณะ ICT และกิจกรรมงาน MUICT Open House 2023',
        en: 'Introduction of ICT & MUICT Open House 2023',
      },
      startAt: new Date('2023-09-17T10:00:00+07:00'),
      endAt: new Date('2023-09-17T10:30:00+07:00'),
      location: {
        th: 'เวที ชั้น 1',
        en: 'Stage 1st Fl.',
      },
    },
    {
      title: {
        th: 'Internship ของนักเรียนคณะ ICT',
        en: 'ICT Internship',
      },
      location: {
        th: 'เวที ชั้น 1',
        en: 'Stage 1st Fl.',
      },
      startAt: new Date('2023-09-17T10:30:00+07:00'),
      endAt: new Date('2023-09-17T11:30:00+07:00'),
    },
    {
      title: {
        th: 'กิจกรรมเกม Kahoot ลุ้นรับของรางวัล!',
        en: 'Game Session I',
      },
      location: {
        th: 'เวที ชั้น 1',
        en: 'Stage 1st Fl.',
      },
      startAt: new Date('2023-09-17T11:30:00+07:00'),
      endAt: new Date('2023-09-17T11:45:00+07:00'),
    },
    {
      title: {
        th: 'การแสดงดนตรีสด: วง ily',
        en: 'Live Music from ily band',
      },
      location: {
        th: 'เวที ชั้น 1',
        en: 'Stage 1st Fl.',
      },
      startAt: new Date('2023-09-17T11:45:00+07:00'),
      endAt: new Date('2023-09-17T12:45:00+07:00'),
    },
    {
      title: {
        th: 'แนะนำคณะ ICT และกิจกรรมงาน MUICT Open House 2023',
        en: 'Introduction of ICT & MUICT Open House 2023',
      },
      startAt: new Date('2023-09-17T10:00:00+07:00'),
      endAt: new Date('2023-09-17T10:30:00+07:00'),
      location: {
        th: 'เวที ชั้น 1',
        en: 'Stage 1st Fl.',
      },
    },
    {
      title: {
        th: 'ICT club',
        en: 'ICT club',
      },
      location: {
        th: 'เวที ชั้น 1',
        en: 'Stage 1st Fl.',
      },
      startAt: new Date('2023-09-17T13:00:00+07:00'),
      endAt: new Date('2023-09-17T14:00:00+07:00'),
    },
    {
      title: {
        th: 'การแสดงดนตรีสด: วง PufferFish',
        en: 'Live Music from PufferFish band',
      },
      location: {
        th: 'เวที ชั้น 1',
        en: 'Stage 1st Fl.',
      },
      startAt: new Date('2023-09-17T14:00:00+07:00'),
      endAt: new Date('2023-09-17T14:30:00+07:00'),
    },
  ],
}