import React from 'react'

import Box from '@material-ui/core/Box'

import Checkbox from '@material-ui/core/Checkbox'
import Collapse from '@material-ui/core/Collapse'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'

const PanelPicker = (props) => {
    const [collapseState, setCollapseState] = React.useState(false)

    return <Box p={1}>
      <Typography variant="h4">{props.title}:<Switch name={props.title} onClick={() => setCollapseState(!collapseState)}/></Typography>
      <Collapse in={collapseState} >
        <Typography variant="body1">Upload Custom Image:</Typography>
        <input type="file" />
        <Typography variant="body1">Custom Url To Image:</Typography>
        <input type="text" />
        <Typography variant="body1">Upscale Image:<Checkbox /></Typography>
      </Collapse>
    </Box>
}

export default PanelPicker