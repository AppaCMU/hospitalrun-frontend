import AbstractDBModel from './AbstractDBModel'
import ContactInformation from './ContactInformation'
import Name from './Name'
import RelatedPerson from './RelatedPerson'
import Visit from './Visit'

export default interface SocialWork extends AbstractDBModel, Name, ContactInformation {
  sex: string
  dateOfBirth: string
  isApproximateDateOfBirth: boolean
  preferredLanguage?: string
  occupation?: string
  type?: string
  code: string
  relatedPersons?: RelatedPerson[]
  index: string
  bloodType: string
  visits: Visit[]
}
