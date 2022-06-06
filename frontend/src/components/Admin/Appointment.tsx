import React from 'react';
import { useTranslation } from 'react-i18next';
import IAppointment from '../../types/IAppointment';

interface IAppointmentProps {
    appointment: IAppointment;
    index: number;
}

const Appointment = ({ appointment } : IAppointmentProps) => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '1rem 0' }}>
      {appointment.date}
      {' '}
      {appointment.startHour}
      {' '}
      -
      {' '}
      {appointment.endHour}
      {' '}
      {appointment.patientFirstName}
      {' '}
      {appointment.patientLastName}
      {' '}
      <button type="submit">{ t('cancel') }</button>
    </div>
  );
}

export default Appointment;
