import React, {Component} from 'react';
import Paper from '@mui/material/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Appointments,
  AppointmentForm,
  Resources,
  AppointmentTooltip,
  EditRecurrenceMenu,
  DayView,
  AllDayPanel,
  ConfirmationDialog,
  DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui';
import { owners } from './demo-data/tasks';
import { appointments, resourcesData } from './demo-data/resources';


export default class Dayview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
      currentDate: '2018-06-27',

      addedAppointment: {},
      appointmentChanges: {},
      editingAppointment: undefined,
      resources: [
        {
          fieldName: 'roomId',
          title: 'Room',
          instances: resourcesData,
        },
        {
          fieldName: 'members',
          title: 'Members',
          instances: owners,
          allowMultiple: true,
        },
      ],
    };

    this.commitChanges = this.commitChanges.bind(this);
    
  }


  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });
  }

  render() {
    const { data, resources } = this.state;

    return (
      <Paper>
        <Scheduler
          data={data}
        >
          <ViewState
            defaultCurrentDate="2017-05-25"
          />
          <EditingState
            onCommitChanges={this.commitChanges}
          />
          <EditRecurrenceMenu />

          <DayView startDayHour={9}
            endDayHour={19} />
          <Appointments />
          <AppointmentTooltip
            showOpenButton
          />
          <AppointmentForm />

          <Resources
            data={resources}
            mainResourceName="roomId"
          />
          <DragDropProvider />
        </Scheduler>
      </Paper>
    );
  }
}