import React from 'react'
import {Modal} from 'react-bootstrap/esm/';
import './muscle-group-modal.scss';
import ExerciseCard from '../exercise-card/ExerciseCard';
import { ExerciseModel } from '../../../../models/ExerciseModel';
import Form from 'react-bootstrap/Form';
import { WorkourProgramCtxt } from '../../../../services/context/WorkoutProgramService';
import CostumBtn from '../../../components/costum-button/CostumBtn';
import CostumLeftBtn from '../../../components/costum-button/costumeLeftBtn';
import { LanguageCtst } from '../../../../services/context/LanguageService';

interface Props{
  show:boolean, handleClose:() => void, 
  muscleGroupName:string,
  muscleName: string
}

const MuscleGroupModal = (props:Props) => {

    const {language} = React.useContext(LanguageCtst);
    const workoutCtxt = React.useContext(WorkourProgramCtxt);
    const screenTxts = language.chooseProgramScreen;
    const [exerciseName, setExerciseName] = React.useState<string | null>(null);
    const [exercise, setExercise] = React.useState<ExerciseModel | null>(null);
    const onCloseHandler = () => {
        setExercise(null);
        setExerciseName(null);
        props.handleClose();
      }
      const onExerciseChange = (exName:string) => {
        setExerciseName(exName);
        console.log(exName);
      }
      const onAddExerciseBtnClick = () => {
        workoutCtxt.funcs.updateUserExerciseToProgram(props.muscleGroupName,exerciseName)
        .then(() => {
          onCloseHandler()
        })
    }
    
    React.useEffect( () => {
        if(!exerciseName && props.show) {
          setExercise(workoutCtxt.states.exercises[0] );
          setExerciseName(workoutCtxt.states.exercises[0].name);
        }
        else if(props.show) setExercise(workoutCtxt.states.exercises.filter((ex:ExerciseModel) => ex.name === exerciseName)[0]);
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
                <span className='col-sm-5'>{screenTxts.modalTitle} </span>
                {(workoutCtxt.states.exercises.length > 0)?<Form.Select className='col-sm' onChange={(e) => onExerciseChange(e.currentTarget.value)}>
                {workoutCtxt.states.exercises.map((exrcs:ExerciseModel,idx:number) => 
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
            <div onClick={onCloseHandler} className='col-md-3'>
              <CostumLeftBtn theme={'dark'} txt={'close'}/>
            </div>
            <div onClick={onAddExerciseBtnClick} className='col-md-3'>
              <CostumBtn theme={'light'} txt={screenTxts.modalBtns.add}/>
            </div>
          </Modal.Footer>

        </Modal>
      </>
    );
}

export default MuscleGroupModal