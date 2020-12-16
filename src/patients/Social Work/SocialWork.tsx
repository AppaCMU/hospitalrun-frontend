import React from 'react'
import { Route } from 'react-router-dom'

import useAddBreadcrumbs from '../../page-header/breadcrumbs/useAddBreadcrumbs'
import Patient from '../../shared/model/Patient'
import SocialWorkList from './SocialWorksList'

interface MedicationsProps {
  patient: Patient
}

const SocialWork = (props: MedicationsProps) => {
  const { patient } = props

  const breadcrumbs = [
    {
      i18nKey: 'patient.socialwork.label',
      location: `/patients/${patient.id}/socialwork`,
    },
  ]
  useAddBreadcrumbs(breadcrumbs)

  return (
    <Route exact path="/patients/:id/socialwork">
      <SocialWorkList patient={patient} />
    </Route>
  )
}

export default SocialWork
