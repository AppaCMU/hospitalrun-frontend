import { Alert, Table } from '@hospitalrun/components'
import format from 'date-fns/format'
import React from 'react'
import { useHistory } from 'react-router-dom'

import Loading from '../../shared/components/Loading'
import useTranslator from '../../shared/hooks/useTranslator'
import Patient from '../../shared/model/Patient'
import usePatientMedications from '../hooks/usePatientSocialWorkData'

interface Props {
  patient: Patient
}

const SocialWorksList = (props: Props) => {
  const { patient } = props
  const history = useHistory()
  const { t } = useTranslator()
  const { data, status } = usePatientSocialWorkData(patient.id)

  if (data === undefined || status === 'loading') {
    return <Loading />
  }

  if (data.length === 0) {
    return (
      <Alert
        color="warning"
        title={t('patient.socialwork.warning.noFamily')}
        message={t('patient.socialwork.noFamilyMessage')}
      />
    )
  }

  return (
    <Table
      actionsHeaderText={t('actions.label')}
      getID={(row) => row.id}
      data={data}
      columns={[
        { label: t('socialwork.person.relationship'), key: 'relationship' },
        { label: t('socialwork.person.firstname'), key: 'firstname' },
        { label: t('socialwork.person.lastname'), key: 'lastname' },
        {
          label: t('socialwork.person.requestedOn'),
          key: 'requestedOn',
          formatter: (row) =>
            row.requestedOn ? format(new Date(row.requestedOn), 'yyyy-MM-dd hh:mm a') : '',
        },
        { label: t('socialwork.person.status'), key: 'status' },
      ]}
      actions={[
        { label: t('actions.view'), action: (row) => history.push(`/socialwork/${row.id}`) },
      ]}
    />
  )
}

export default SocialWorksList
