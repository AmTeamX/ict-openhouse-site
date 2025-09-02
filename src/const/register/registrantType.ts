interface IRegistrantType {
  type: string
  label: string
  icon: string
}

const RegistrantTypes: IRegistrantType[] = [{
  type: 'student',
  label: 'REG_TYPE_STUDENT',
  icon: '/static/images/types/type-icon-student.png',
},
{
  type: 'uni_student',
  label: 'REG_TYPE_UNI_STUDENT',
  icon: '/static/images/types/type-icon-college-student.png',
}, {
  type: 'teacher',
  label: 'REG_TYPE_TEACHER',
  icon: '/static/images/types/type-icon-teacher.png',
}, {
  type: 'parents',
  label: 'REG_TYPE_PARENTS',
  icon: '/static/images/types/type-icon-parents.png',
}, {
  type: 'mu_staff',
  label: 'REG_TYPE_MU_STAFF',
  icon: '/static/images/types/type-icon-mu-staff.png',
}, {
  type: 'external',
  label: 'REG_TYPE_EXTERNAL',
  icon: '/static/images/types/type-icon-external.png',
}]

export default RegistrantTypes
