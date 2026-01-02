import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

import Container from "./components/Container/Container.jsx";
import DeleteModal from "./components/DeleteModal/DeleteModal.jsx";
import ModalWrapper from "./components/ModalWrapper/ModalWrapper.jsx";
import MonthList from "./components/MonthList/MonthList.jsx";
import UpdateModal from "./components/UpdateModal/UpdateModal.jsx";
import { MONTH_NAMES } from "./data/monthData.js";
import { useEffect, useState } from "react";
import AddModal from "./components/AddModal/AddModal.jsx";
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const [month, setMonth] = useState(() => {
    const saved = localStorage.getItem('month');
    return saved ? JSON.parse(saved) : MONTH_NAMES;
  });

  useEffect(() => {
    localStorage.setItem('month', JSON.stringify(month));
  }, [month]);



  const [modalAdd, setModalAdd] = useState(false);
  const [modalDeleteEl, setModalDeleteEl] = useState(false);
  const [modalUpdateEl, setModalUpdateEl] = useState(false);

  const [savedMonthID, setSavedMonthID] = useState(0);
  const [savedGoalID, setSavedGoalID] = useState("");
  const [savedGoalTXT, setSavedGoalTXT] = useState("");

  //!DELETE
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

    iziToast.success({
      title: 'Success',
      message: 'Goal has been deleted.',
      timeout: 3000,
    });
  }
  const handleDeleteGoalNo = () => {
    setModalDeleteEl(false);
    setSavedMonthID(0)
    setSavedGoalID("")
  }

  //!DONE
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
    if (!status) {
      iziToast.success({
        title: 'Success',
        message: 'Goal has been completed.',
        timeout: 3000,
      });
    }

  }

  //! UPDATE
  const handleUpdateGoal = (month_id, goal_id, goal_txt) => {
    setModalUpdateEl(true)
    setSavedMonthID(month_id);
    setSavedGoalID(goal_id);
    setSavedGoalTXT(goal_txt);
  }
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.txt.value.trim();

    if (!value) {
      iziToast.warning({
        title: 'Empty value',
        message: 'Please enter a new goal text.',
        timeout: 3000,
      });
      return;
    }
    if (value === savedGoalTXT) {
      iziToast.warning({
        title: 'No changes',
        message: 'The new goal is the same as the old one.',
        timeout: 3000,
      });
      return;
    }
    if (!value.replace(/[^\p{L}\p{N}\s,-]/gu, "")) {
      iziToast.warning({
        title: 'Invalid characters',
        message: 'The goal contains only invalid symbols.',
        timeout: 3000,
      });
      return;
    }
    if (!isNaN(Number(value))) {
      iziToast.warning({
        title: 'Invalid value',
        message: 'The goal cannot be a number only.',
        timeout: 3000,
      });
      return;
    }

    setMonth(prev =>
      prev.map(month =>
        month.id === savedMonthID
          ? {
            ...month,
            data: month.data.map(goal =>
              goal.goal_id === savedGoalID
                ? { ...goal, goal_txt: value }
                : goal
            ),
          }
          : month
      )
    );
    e.target.reset();
    setModalUpdateEl(false);
    iziToast.success({
      title: 'Success',
      message: 'Goal has been updated.',
      timeout: 3000,
    });
  };


  //!ADD

  const handleAddGoal = (month_id) => {
    setModalAdd(true);
    setSavedMonthID(month_id);
  }

  const handleSubmitAdd = (e) => {
    e.preventDefault();
    const value = e.target.elements.txt.value.trim();

    if (!value) {
      iziToast.warning({
        title: 'Empty value',
        message: 'Please enter a new goal text.',
        timeout: 3000,
      });
      return;
    }
    if (!value.replace(/[^\p{L}\p{N}\s,-]/gu, "")) {
      iziToast.warning({
        title: 'Invalid characters',
        message: 'The goal contains only invalid symbols.',
        timeout: 3000,
      });
      return;
    }
    if (!isNaN(Number(value))) {
      iziToast.warning({
        title: 'Invalid value',
        message: 'The goal cannot be a number only.',
        timeout: 3000,
      });
      return;
    }

    setMonth(prev =>
      prev.map(month =>
        month.id === savedMonthID
          ? {
            ...month,
            data: [
              ...month.data,
              {
                goal_id: uuidv4(),
                goal_txt: value,
                goal_status: false,
              },
            ],
          }
          : month
      )
    );

    e.target.reset();
    setModalAdd(false);
    iziToast.success({
      title: 'Success',
      message: 'Goal has been added.',
      timeout: 3000,
    });
  }

  return (
    <>
      <Container>
        <MonthList month={month} handleAddGoal={handleAddGoal} handleDeleteGoal={handleDeleteGoal} handleDoneGoal={handleDoneGoal} onOpenUpdate={handleUpdateGoal} />
      </Container>

      <ModalWrapper setModal={setModalAdd} modal={modalAdd}>
        <AddModal handleSubmitAdd={handleSubmitAdd} />
      </ModalWrapper>
      <ModalWrapper setModal={setModalDeleteEl} modal={modalDeleteEl}>
        <DeleteModal handleDeleteGoalYes={handleDeleteGoalYes} handleDeleteGoalNo={handleDeleteGoalNo} />
      </ModalWrapper>

      <ModalWrapper setModal={setModalUpdateEl} modal={modalUpdateEl}>
        <UpdateModal handleUpdateSubmit={handleUpdateSubmit} savedGoalTXT={savedGoalTXT} />
      </ModalWrapper>
    </>

  )
}

export default App
