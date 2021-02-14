import React from 'react'

import PanelPicker from './components/PanelPicker'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import Checkbox from '@material-ui/core/Checkbox'
import Collapse from '@material-ui/core/Collapse'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'


const Design = () => {
  const panel_array = [
    "Front",
    "Top",
    "Left Side",
    "Right Side"
  ]

  const case_array = [
    "NZXT H710",
    "NZXT H510",
    "NZXT H210",
  ]

  return <Container fixed>
    <Grid container justify="space-between" alignItems="flex-end" name="topbar">
      <Grid item xs>
        <Box p={2}>
          <Typography variant="h3">Custom Wrap <br/>Configurator</Typography>
        </Box>
      </Grid>
      <Grid item>
        <Typography variant="h5">Toggle 3D View:  <Switch name="3dview" /></Typography>
      </Grid>
    </Grid>
    <Grid container>
      <Grid xs={3} item name="sidebar">
        <Box name="casepicker" p={1}>
          <Typography variant="h4">Case:</Typography>
          <Select name="case" fullWidth  >
            {
              case_array.map((item, index)  => {
                return <MenuItem key={"ca"+index} value={item}>{item}</MenuItem>
              })
            }
          </Select>
        </Box>
        <Box>
          {
            panel_array.map((string,index) => {
              return <PanelPicker key={"panelp"+index} title={string}/>
            })
          }
        </Box>
      </Grid>
      <Grid item xs name="body">
        <Box minHeight="50vh" m={5}>
          Main Image Goes Here
        </Box>
        <Typography variant="body2">
          Preview Blurry?<br/>
          Hit the upscale button for each individual image to make them look sharper.
        </Typography>
      </Grid>
    </Grid>
  </Container>
}

export default Design
