
import React, { useState } from 'react'
import { Select, MenuItem, FormControl, InputLabel, makeStyles } from '@material-ui/core'
import '../functions/section.css'
import { imagedata } from '../timetableimages'
import { IKImage, IKContext, IKUpload } from 'imagekitio-react'

const useStyles = makeStyles(theme => ({

    formControl:
    {
        minWidth: 125
    }
}));

var FullName = "z0bbc";
var flag = false;


function TimeMenu() {

    var s, y, b;
    const classes = useStyles();
    const [branch, setBranch] = useState({
        branch: 'bbc',
    })


    const [section, setSection] = useState({
        section: 'z'
    })

    const [year, setYear] = useState({
        year: '0'
    })



    function handleSection(event) {
        setSection({ section: event.target.value })
        s = section.section
        console.log(s)
    }
    function handleYear(event) {
        setYear({ year: event.target.value })
        y = year.year
        console.log(y)
    }
    function handleBranch(event) {
        setBranch({ branch: event.target.value })
        b = branch.branch
        console.log(b)
    }
    function handleFile(e) {

        FullName = section.section + year.year + branch.branch
        console.log(FullName)
    }
    const [stop, setStop] = useState(false)


    return (
        <>
            <div className="menusection">


                <div className="menu" id="section">
                    <FormControl className={classes.formControl}>
                        <InputLabel> Section</InputLabel>
                        <Select onChange={handleSection}>
                            <MenuItem value={'a'}>A</MenuItem>
                            <MenuItem value={'b'}>B</MenuItem>
                            <MenuItem value={'c'}>C</MenuItem>
                            <MenuItem value={'d'}>D</MenuItem>
                            <MenuItem value={'e'}>E</MenuItem>
                            <MenuItem value={'f'}>F</MenuItem>
                            <MenuItem value={'g'}>G</MenuItem>
                            <MenuItem value={'h'}>H</MenuItem>
                            <MenuItem value={'i'}>I</MenuItem>
                        </Select>
                    </FormControl>

                </div>

                <div className="menu" id="year">
                    <FormControl className={classes.formControl}>
                        <InputLabel> Year</InputLabel>
                        <Select onChange={handleYear}>
                            <MenuItem value={1}>First</MenuItem>
                            <MenuItem value={2}>Second</MenuItem>
                            <MenuItem value={3}>Third</MenuItem>
                            <MenuItem value={4}>Fourth</MenuItem>
                        </Select>
                    </FormControl>

                </div>

                <div className="menu" id="branch">
                    <FormControl className={classes.formControl}>
                        <InputLabel> Branch</InputLabel>
                        <Select onChange={handleBranch}>
                            <MenuItem value={'cse'}>CSE</MenuItem>
                            <MenuItem value={'ece'}>ECE</MenuItem>
                            <MenuItem value={'eee'}>EEE</MenuItem>
                            <MenuItem value={'it'}>IT</MenuItem>
                            <MenuItem value={'bba'}>BBA</MenuItem>

                        </Select>
                    </FormControl>

                </div>

                <button className="button"
                    onClick={handleFile()}>
                </button>

                        </div>
                
                    {imagedata.map((val, key) => {

                        if (FullName === val.filename) {
                            flag = true;
                            return (
                                <>
                                
                                    
                                    <div
                                        key={key}
                                        className="timeTableImage">

                                        <IKContext urlEndpoint="https://ik.imagekit.io/783peqtlypv">
                                            <IKImage src={val.link} />
                                        </IKContext>
                                    </div>
                                </>
                            )
                        }
                    }
                    )}



        

        </>

    )
}







export default TimeMenu
export { FullName } 