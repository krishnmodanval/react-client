import React from 'react'
import { createMuiTheme, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
const theme = createMuiTheme({
    typography: {
      fontFamily: "sans-serif",
      htmlFontSize: 10,
    },
  });
export class Math extends React.Component{
    render(){ let op=this.props.operator
        return(
            <React.Fragment >    
                <ThemeProvider theme={theme}>
                    <Typography>
                    {this.props.children===undefined?
                    this.props.second===0 && toString(this.props.operator)==='/'?<p>{this.props.first}{this.props.operator}{this.props.second}= Infinity</p>:
                        op==='+'? <p>{this.props.first}+{this.props.second}={parseInt(this.props.first)+parseInt(this.props.second)}</p>:
                        op==='-'? <p>{this.props.first}-{this.props.second}={parseInt(this.props.first)-parseInt(this.props.second)}</p>:
                        op==='*'? <p>{this.props.first}*{this.props.second}={parseInt(this.props.first)*parseInt(this.props.second)}</p>:
                        op==='/'? <p>{this.props.first}/{this.props.second}={parseInt(this.props.first)/parseInt(this.props.second)}</p>:
                        <p >{this.props.first}{this.props.operator}{this.props.second}=Invalid operator</p>
                    :this.props.second===0 && toString(this.props.operator)==='/'?<p>{this.props.first}{this.props.operator}{this.props.second}= Infinity</p>:
                        op==='+'? <p>Sum of {this.props.first} and {this.props.second} is {parseInt(this.props.first)+parseInt(this.props.second)}</p>:
                        op==='-'? <p>Sub of {this.props.first} and {this.props.second} is {parseInt(this.props.first)-parseInt(this.props.second)}</p>:
                        op==='*'? <p>Multi of {this.props.first} and {this.props.second} is {parseInt(this.props.first)*parseInt(this.props.second)}</p>:
                        op==='/'? <p>Divide of {this.props.first} and {this.props.second} is {parseInt(this.props.first)/parseInt(this.props.second)}</p>:
                        <p >{this.props.operator} of {this.props.first}and{this.props.second} is Invalid operation</p>}
                </Typography>
                </ThemeProvider>               
            </React.Fragment>
        )
    }
} 