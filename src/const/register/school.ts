interface School {
  school_id: number
  name: {
    en: string
    th: string
  }
  value: string
}

const Schools: School[] = [
  {
    school_id: 1,
    name: {
      th: 'สาธิตมหาวิทยาลัยราชภัฏบ้านสมเด็จเจ้าพระยา',
      en: 'Demonstration School of Bansomdejchaopraya Rajabhat University',
    },
    value: 'Demonstration School of Bansomdejchaopraya Rajabhat University',
  },
  {
    school_id: 2,
    name: {
      th: 'กรุงเทพคริสเตียนวิทยาลัย',
      en: 'Bangkok Chistian College',
    },
    value: 'Bangkok Chistian College',
  },
  ]

export default Schools
