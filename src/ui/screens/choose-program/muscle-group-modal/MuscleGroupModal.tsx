import React from 'react'
import { Button } from 'react-bootstrap';
import {Modal} from 'react-bootstrap/esm/';
import './muscle-group-modal.scss';
import locales from '../../../../assets/locales/en.json';
import testData from '../../../../data/data.json';
import ExerciseCard from '../exercise-card/ExerciseCard';
import { ExerciseModel } from '../../../../models/ExerciseModel';
import Form from 'react-bootstrap/Form';

const MuscleGroupModal = (props:{show:boolean, handleClose:() => void, muscle:string}) => {
    
    const [exerciseName, setExerciseName] = React.useState<string | null>(null);
    const [exercise, setExercise] = React.useState<ExerciseModel | null>(null);
    const onCloseHandler = () => {
        setExercise(null);
        setExerciseName(null);
        props.handleClose();
    }
    const onExerciseChange = (exName:string) => {
        setExerciseName(exName);
        // setExercise(exercise);
    }
    
    React.useEffect( () => {
        
        if(!exerciseName && props.show) setExercise(testData[0])
        else if(props.show) setExercise(testData.filter(ex => ex.name === exerciseName)[0]);
    }, [exerciseName, props.show]);

    return (
      <>
        <Modal className='costum-model text-secondary muscle-modal'
          show={props.show}
          onHide={onCloseHandler}
          backdrop="static"
          keyboard={false}
          contentClassName='bg-success'
          fullscreen={true}
        >
          <Modal.Header closeButton className='text-secondary'>
            
            <Modal.Title className='row col-md-10'>
                <span className='col-sm-5'>{locales.chooseProgramScreen.modalTitle} </span>
                {(testData.length > 0)?<Form.Select className='col-sm' onChange={(e) => onExerciseChange(e.currentTarget.value)}>
                {testData.map((exrcs,idx) => 
                        <option value={exrcs.name} key={idx}>{exrcs.name}</option>
                    )}
                </Form.Select>:null}
           
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className='row text-center'>

            {exercise?<div className='col-md'>
                <ExerciseCard exercise={exercise}/>
            </div>:<div className='mt-3'>No Exercises Found.</div>}
          
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" color='primary'  onClick={onCloseHandler}>
              Close
            </Button>
          </Modal.Footer>

        </Modal>
      </>
    );
}

export default MuscleGroupModal