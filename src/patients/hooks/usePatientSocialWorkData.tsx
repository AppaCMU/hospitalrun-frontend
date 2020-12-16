import { useQuery } from 'react-query'

import PatientRepository from '../../shared/db/PatientRepository'
import SocialWork from '../../shared/model/SocialWork'
import PatientRepository from '../../shared/db/PatientRepository'

async function fetchPatientSocialWorkData(_: string, patientId: string): Promise<Medication[]> {
  const fetchedMedications = await PatientRepository.getMedications(patientId)
  return fetchedMedications || []
}

export default function usePatientMedications(patientId: string) {
  return useQuery(['medications', patientId], fetchPatientSocialWorkData)
}
