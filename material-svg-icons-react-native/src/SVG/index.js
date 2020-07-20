/* eslint-disable react/display-name */
import React from 'react';
import * as Chat from './Chat';
import * as Calendar from './Calendar';
import * as Activity from './Activity';
import * as AIAnalytics from './AIAnalytics';
import * as Design from './Design';
import * as Checklist from './Checklist';
import * as Budget from './Budget';
import * as EMS from './EMS';
import * as Groups from './Groups';
import * as Tasks from './Tasks';
import * as Meetings from './Meetings';
import * as Project from './Project';
import * as Target from './Target';
import * as Polls from './Polls';
import * as Promotion from './Promotion';
import * as Event from './Event';
import * as Eventdata from './Eventdata';
import * as Expenses from './Expenses';
import * as Location from './Location';
import * as Notes from './Notes';
import * as Planning from './Planning';
import * as PO from './PO';
import * as Proposal from './Proposal';
import * as Publishing from './Publishing';
import * as Questions from './Questions';
import * as Remainder from './Remainder';
import * as Sales from './Sales';
import * as Tags from './Tags';
import * as Tickets from './Tickets';
import * as Todos from './Todos';
import * as VoiceMessage from './VoiceMessage';
import * as WorkFlow from './WorkFlow';
import * as WorkSpace from './WorkSpace';
import * as Create from './Create';
import * as Doctor from './Doctor';
import * as Hospital from './Hospital';
import * as Patient from './Patient';
import * as Status from './Status';

const IconList = {
    'calendar-text':(props) => <Activity.Activity {...props} />,
	'AIAnalytics':(props) => <AIAnalytics.AIAnalytics {...props} />,
    'Budget':(props) => <Budget.Budget {...props} />,
    'Calendar':(props) => <Calendar.Calendar {...props} />,
    'message-text':(props) => <Chat.Chat {...props} />,
    'format-list-bulleted':(props) => <Checklist.Checklist {...props} />,
    'material-design':(props) => <Design.Design {...props} />,
    'blur': (props) => <Chat.Chat {...props} />,
    'ticket':(props) => <EMS.EMS {...props} />,
    'forum':(props) => <Groups.Groups {...props} />,
    'clipboard-text':(props) => <Tasks.Tasks {...props} />,
    'calendar-today': (props) => <Meetings.Meetings {...props} />,
    'clipboard-check':(props) => <Project.Project {...props} />,
    'radar':(props) => <Target.Target {...props} />,
    'poll':(props) => <Polls.Polls {...props} />,
    'bullhorn': (props) => <Promotion.Promotion {...props} />,
    'calendar':(props) => <Event.Event {...props} />,
	'finance':(props) => <Eventdata.Eventdata {...props} />,
    'wallet':(props) => <Expenses.Expenses {...props} />,
    'Location':(props) => <Location.Location {...props} />,
    'Notes':(props) => <Notes.Notes {...props} />,
    'playlist-check':(props) => <Planning.Planning {...props} />,
    'ticket-confirmation':(props) => <PO.PO {...props} />,
    'checkbook': (props) => <Proposal.Proposal {...props} />,
    'Publishing':(props) => <Publishing.Publishing {...props} />,
    'Questions':(props) => <Questions.Questions {...props} />,
    'Remainder':(props) => <Remainder.Remainder {...props} />,
    'Sales': (props) => <Sales.Sales {...props} />,
    'Tags':(props) => <Tags.Tags {...props} />,
    'ticket-confirmation':(props) => <Tickets.Tickets {...props} />,
    'format-list-checkbox':(props) => <Todos.Todos {...props} />,
    'VoiceMessage': (props) => <VoiceMessage.VoiceMessage {...props} />,
    'book-open':(props) => <WorkFlow.WorkFlow {...props} />,
    'briefcase':(props) => <WorkSpace.WorkSpace {...props} />,
    'Create':(props) => <Create.Create {...props} />,
    'Doctor':(props) => <Doctor.Doctor {...props} />,
    'Hospital':(props) => <Hospital.Hospital {...props} />,
    'Patient':(props) => <Patient.Patient {...props} />,
    'Meeting': (props) => <Meetings.Meetings {...props} />,
    'Status': (props) => <Status.Status {...props} />,
};
const Icon = (props) => {
	return IconList[props.name] ? IconList[props.name](props) : IconList['blur'](props);
};

export default Icon;