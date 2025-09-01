/* eslint-disable no-unused-vars */
export enum QUESTION_TYPE {
  TEXT_FIELD = 'TEXT_FIELD',
  TEXT_AREA = 'TEXT_AREA',
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  MULTIPLE_SELECT = 'MULTIPLE_SELECT',
}

export type IQuestion<T = string> =
  | TextFieldQuestion<T>
  | TextAreaQuestion<T>
  | MultipleChoiceQuestion<T>
  | MultipleSelectQuestion<T>

export interface I18nTranslation {
  th: string
  en: string
}

interface BaseQuestion<T = string> {
  id: string
  type: QUESTION_TYPE
  questNo: number
  questTitle: T
  question: T
}

interface TextFieldQuestion<T> extends BaseQuestion<T> {
  type: QUESTION_TYPE.TEXT_FIELD
  expectedAnswer: string[]
}

interface TextAreaQuestion<T> extends BaseQuestion<T> {
  type: QUESTION_TYPE.TEXT_AREA
  expectedAnswer: string[]
}

interface MultipleChoiceQuestion<T> extends BaseQuestion<T> {
  type: QUESTION_TYPE.MULTIPLE_CHOICE
  choices: Record<string, T>
  expectedAnswer: string | string[]
}

interface MultipleSelectQuestion<T> extends BaseQuestion<T> {
  type: QUESTION_TYPE.MULTIPLE_SELECT
  choices: Record<string, T>
  expectedAnswer: string[]
}

export const QUESTIONS: IQuestion<I18nTranslation>[] = [
  {
    id: 'Q2',
    type: QUESTION_TYPE.MULTIPLE_CHOICE,
    questNo: 2,
    questTitle: {
      th: 'Guidance Zone',
      en: 'Guidance Zone',
    },
    question: {
      th: 'หลักสูตรนานาชาติของคณะเทคโนโลยีสารสนเทศและการสื่อสาร(ICT) มีทั้งหมดกี่ Specializations',
      en: 'How many specialization of ICT program?',
    },
    choices:{
      '6': {
        th: '6',
        en: '6',
      },
      '7':{
        th: '7',  
        en: '7',
      },
      '8': {
        th: '8',  
        en: '8',
      },
      '9':{
        th: '9',  
        en: '9',
      },
    },
    expectedAnswer: ['8'],
  },
  {
    id: 'Q3',
    type: QUESTION_TYPE.MULTIPLE_CHOICE,
    questNo: 3,
    questTitle: {
      th: 'International Experiences Zone',
      en: 'International Experiences Zone',
    },
    question: {
      th: 'นักศึกษาสามารถไปฝึกงานต่างประเทศที่ประเทศใดได้บ้าง?',
      en: 'Which countries ca nstudent join the internship program?',
    },
    choices:{
      KIF: {
        th: 'เกาหลี อิตาลี ฟินแลนด์',
        en: 'Korea Italy Finland',
      },
      JTG: {
        th: 'ญี่ปุ่น ไต้หวัน เยอรมัน',
        en: 'Japan Taiwan Germany',
      },
      KJC:{
        th: 'เกาหลี ญี่ปุ่น จีน',
        en: 'Korea Japan China',
      },
      TGC:{
        th: 'ไต้หวัน เยอรมัน จีน',
        en: 'Taiwan Germany China',
      },
    },
    expectedAnswer: ['JTG'],
  },
  {
    id: 'Q4',
    type: QUESTION_TYPE.MULTIPLE_CHOICE,
    questNo: 4,
    questTitle: {
      th: 'Innovative Projects Zone',
      en: 'Innovative Projects Zone',
    },
    question: {
      th: 'โปรเจคจบสามารถมีสมาชิกได้สูงสุดกี่คน?',
      en: 'What is the maximum number of group members can be formed for the senior project?',
    },
    choices:{
      '2': {
        th: '2',
        en: '2',
      },
      '3': {
        th: '3',
        en: '3',
      },
      '4': {
        th: '4',
        en: '4',
      },
      '5': {
        th: '5',
        en: '5',
      },
    },
    expectedAnswer: ['3'],
  },
  {
    id: 'Q5',
    type: QUESTION_TYPE.MULTIPLE_CHOICE,
    questNo: 5,
    questTitle: {
      th: 'Innovative Projects Zone',
      en: 'Innovative Projects Zone',
    },
    question: {
      th: 'โปรเจกต์ใดที่คุณชื่นชอบ?',
      en: 'What is your favourite senior project in this exhibition?',
    },
    choices: {
      'Suture-Bot':{ 
        th: 'Suture-Bot: Bot เย็บแผล',
        en: 'Suture-Bot: Bot stitches',
      },
      'MASENG': { 
        th: 'MASENG: Project งู', 
        en: 'MASENG: Snake Identification Project',
      },
      'Zensiphus': { 
        th: 'Project ตรวจจับโรคซึมเศร้าโดยใช้ ECG',
        en: 'Detect depression using ECG project',
      },
      'Bioacoustic': { 
        th: 'Bio-acoustic IoT sensors: Project ยุง',
        en: 'Bio-acoustic IoT sensors: Mosquitoes project',
      },
      'HoloLensVirtualAnatomy': { 
        th: 'Holo Lens Virtual Anatomy: Project VR Anatomy',
        en: 'Holo Lens Virtual Anatomy: Project VR Anatomy',
      },
      'CAMELON': { 
        th: 'CAMELON: Web ติดตามอาชญากรรมจากข่าวออนไลน์',
        en: 'CAMELON: Crime and Accident Monitoring Online Web',
      },
      'Hawker': { 
        th: 'Hawker: Web ประเมินความเสี่ยงข้อมูลส่วนตัว',
        en: 'Hawker: Estimating Public exposure and sensitive data',
      },
      'CRIMEX': { 
        th: 'CRIMEX: Project แยกข้อมูลอาชญากรรมจากข่าวออนไลน์',
        en: 'CRIMEX: Metadata Extraction of Crime and Accident Events',
      },
      'Stack-ECK': { 
        th: 'Stack-ECK: AI ช่วยแก้โค้ดจาก Error',
        en: 'Stack-ECK: AI helps fix code from errors',
      },
      'Asthsist': { 
        th: 'Asthsist: App ช่วยโรคหอบหืด',
        en: 'Asthsist: Mobile App Assisting Asthma Management',
      },
      'Busget': { 
        th: 'Busget: App ช่วยคำนวณค่ารถเมล์',
        en: 'Busget: Get the bus with budget.',
      },
      'WHEEL-GO': { 
        th: 'WHEEL GO: App อำนวยความสะดวกผู้ใช้ wheelchair',
        en: 'WHEEL GO: App to facilitate wheelchair users',
      },
    },
    expectedAnswer: [
      'Suture-Bot',
      'MASENG',
      'Zensiphus',
      'Bioacoustic',
      'HoloLensVirtualAnatomy',
      'CAMELON',
      'Hawker',
      'CRIMEX',
      'Stack-ECK',
      'Asthsist',
      'Busget',
      'WHEEL-GO',
    ],
  },
]


