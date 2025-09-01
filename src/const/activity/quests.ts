export interface IQuestList {
  icon: string
  title: string
  success?: boolean
}

export const questLists: (IQuestList & { questNo: number })[] = [
  { questNo: 1, icon: 'op2022:text-snippet', title: 'Register' },
  { questNo: 2, icon: 'op2022:app-registration', title: 'Guidance' },
  { questNo: 3, icon: 'op2022:modern-mic', title: 'Intern' },
  {
    questNo: 4,
    icon: 'op2022:earth',
    title: 'Innovative Project I',
  },
  { questNo: 5, icon: 'op2022:chalkboard-teacher', title: 'Innovative Project II' },
  { questNo: 6, icon: 'op2022:star-half', title: 'Evaluation' },
  // { questNo: 5, icon: 'op2022:text-snippet', title: 'Meet & Greet' },
  // { questNo: 6, icon: 'op2022:star-half', title: 'Evaluation' },
]