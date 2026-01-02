import Container from "./components/Container/Container.jsx";
import DeleteModal from "./components/DeleteModal/DeleteModal.jsx";
import ModalWrapper from "./components/ModalWrapper/ModalWrapper.jsx";
import MonthList from "./components/MonthList/MonthList.jsx";
import { MONTH_NAMES } from "./data/monthData.js";
import { useState } from "react";

const App = () => {
  const [month, setMonth] = useState(MONTH_NAMES);

  const [modalAdd, setModalAdd] = useState(false);
  const [modalDeleteEl, setModalDeleteEl] = useState(false);

  const [savedMonthID, setSavedMonthID] = useState(0);
  const [savedGoalID, setSavedGoalID] = useState("");


  const handleDeleteGoal = (month_id, goal_id) => {
    setModalDeleteEl(true)
    setSavedMonthID(month_id)
    setSavedGoalID(goal_id)
  };

  const handleDeleteGoalYes = () => {
    setMonth(prev =>
      prev.map(month =>
        month.id === savedMonthID
          ? {
            ...month,
            data: month.data.filter(goal => goal.goal_id !== savedGoalID),
          }
          : month
      )
    );
    setModalDeleteEl(false);
    setSavedMonthID(0)
    setSavedGoalID("")
  }

  const handleDeleteGoalNo = () => {
    setModalDeleteEl(false);
    setSavedMonthID(0)
    setSavedGoalID("")
  }

  const handleDoneGoal = (month_id, goal_id, status) => {
    setMonth(prev =>
      prev.map(month =>
        month.id === month_id
          ? {
            ...month,
            data: month.data.map(goal => {
              return goal.goal_id === goal_id ? {
                ...goal,
                goal_status: !status
              } : goal
            }),
          }
          : month
      )
    );
  }


  return (
    <>
      <Container>
        <MonthList month={month} setModal={setModalAdd} handleDeleteGoal={handleDeleteGoal} handleDoneGoal={handleDoneGoal} />
      </Container>

      <ModalWrapper setModal={setModalAdd} modal={modalAdd}>
          -
      </ModalWrapper>
      <ModalWrapper setModal={setModalDeleteEl} modal={modalDeleteEl}>
        <DeleteModal handleDeleteGoalYes={handleDeleteGoalYes} handleDeleteGoalNo={handleDeleteGoalNo} />
      </ModalWrapper>
    </>

  )
}

export default App
