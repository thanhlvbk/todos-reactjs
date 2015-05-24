# todos-reactjs


<FlatButton label="Default" />
                    <FlatButton label="Primary" primary={true} />
                    <FlatButton label="Secondary" secondary={true} />
                    <FlatButton secondary={true}>
                      <span className="mui-flat-button-label example-image-button">Choose an Image</span>
                      <input type="file" id="imageButton" className="example-image-input"></input>
                    </FlatButton>
                    <div className="button-example-container">
                      <FlatButton linkButton={true} href="https://github.com/callemall/material-ui" secondary={true}>
                        <FontIcon className="muidocs-icon-custom-github example-flat-button-icon"/>
                        <span className="mui-flat-button-label">Github</span>
                      </FlatButton>
                    </div>
                    <FlatButton label="Disabled" disabled={true} />



<RaisedButton label="Default" />
<RaisedButton label="Primary" primary={true} />
<RaisedButton label="Secondary" secondary={true} />
<RaisedButton secondary={true}>
  <span className="mui-raised-button-label example-image-button">Choose an Image</span>
  <input type="file" id="imageButton" className="example-image-input"></input>
</RaisedButton>
<div className="button-example-container">
  <RaisedButton linkButton={true} href="https://github.com/callemall/material-ui" secondary={true}>
    <FontIcon className="muidocs-icon-custom-github example-button-icon"/>
    <span className="mui-raised-button-label example-icon-button-label">Github</span>
  </RaisedButton>
</div>
<RaisedButton label="Disabled" disabled={true} />

<FloatingActionButton iconClassName="muidocs-icon-action-grade" />
<FloatingActionButton iconClassName="muidocs-icon-action-grade" mini={true} />
<FloatingActionButton iconClassName="muidocs-icon-action-grade" disabled={true} />
<FloatingActionButton iconClassName="muidocs-icon-custom-github" linkButton={true} href="https://github.com/callemall/material-ui" mini={true} secondary={true}/><FloatingActionButton iconClassName="muidocs-icon-action-grade" mini={true} disabled={true} />
<FloatingActionButton iconClassName="muidocs-icon-action-grade" secondary={true} />
<FloatingActionButton iconClassName="muidocs-icon-action-grade" mini={true} secondary={true} />


<Slider name="slider1" />

<Slider name="slider2" defaultValue={0.5} />
<Slider name="slider3" defaultValue={1} />

<Slider name="slider1" disabled={true} />
<Slider name="slider2" disabled={true} value={0.5} />
<Slider name="slider3" disabled={true} value={1} />


<Checkbox
  name="checkboxName1"
  value="checkboxValue1"
  label="went for a run today" />
<Checkbox
  name="checkboxName2"
  value="checkboxValue2"
  label="fed the dog"
  defaultSwitched={true} />
<Checkbox
  name="checkboxName3"
  value="checkboxValue3"
  label="built a house on the moon"
  disabled={true} />

<RadioButtonGroup 
  name="shipSpeed"
  defaultSelected="not_light">
    <RadioButton
      value="light"
      label="prepare for light speed" />
    <RadioButton
      value="not_light"
      label="light speed too slow"
      defaultChecked={true} />
   <RadioButton
      value="ludicrous"
      label="go to ludicous speed"
      disabled={true}/>
</RadioButtonGroup>

<Toggle
  name="toggleName1"
  value="toggleValue1"
  label="activate thrusters" />
<Toggle
  name="toggleName2"
  value="toggleValue2"
  label="auto-pilot"
  defaultToggled={true} />
<Toggle
  name="toggleName3"
  value="toggleValue3"
  label="initiate self-destruct sequence"
  disabled={true} />

<LeftNav docked={false} menuItems={menuItems} />