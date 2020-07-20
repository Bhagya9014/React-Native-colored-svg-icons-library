import React, { Component } from 'react'

import Icon from 'material-svg-icons-react-native'

export default class App extends Component {
  render () {
    let temp=[
    'message-text',
    'format-list-bulleted',
    'material-design',
    'ticket',
    'forum',
    'clipboard-text',
    'calendar-today',
    'clipboard-check',
    'radar',
    'poll',
    'bullhorn',
    'calendar-text',
    'AIAnalytics',
    'Budget',
    'Calendar',
    'blur',
    'calendar',
    'finance',
    'wallet',
    'Location',
    'Notes',
    'playlist-check',
    'ticket-confirmation',
    'checkbook',
    'Publishing',
    'Questions',
    'Remainder',
    'Sales',
    'Tags',
    'ticket-confirmation',
    'format-list-checkbox',
    'VoiceMessage',
    'briefcase',
    'book-open',
    'Create',
    'Doctor',
    'Hospital',
    'Patient',
    'Meeting',
    'Status',
  ]
    return (
      <div>
        {temp.map((item,index)=> (
          <div style={{display:'flex',flexDirection:'row'}}>
          <Icon name={item} size='24px' color='grey' />
          ----{item}
          </div>
        ))}
         
      </div>
    )
  }
}
