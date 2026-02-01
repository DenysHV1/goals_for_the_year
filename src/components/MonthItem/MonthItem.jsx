import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import clsx from "clsx";
import s from "./monthItem.module.css";

import { Button } from "denvik-ui-kit";

const MonthItem = ({
  name,
  data,
  setMonth,
  handleAddGoal,
  handleDeleteGoal,
  month_id,
  handleDoneGoal,
  onOpenUpdate,
}) => {
  const [draggingId, setDraggingId] = useState(null);

  const handleDragStart = (id) => setDraggingId(id);

  const handleDrop = (overId) => {
    if (!draggingId || draggingId === overId) return;

    setMonth((prev) =>
      prev.map((month) => {
        if (month.id !== month_id) return month;

        const updated = [...month.data];
        const fromIndex = updated.findIndex((i) => i.goal_id === draggingId);
        const toIndex = updated.findIndex((i) => i.goal_id === overId);

        const [moved] = updated.splice(fromIndex, 1);
        updated.splice(toIndex, 0, moved);

        return { ...month, data: updated };
      })
    );

    setDraggingId(null);
  };

  return (
    <li className={s.item}>
      <h3 className={s.name}>{name}</h3>

      <ul className={s.goals}>
        {data.map(({ goal_id, goal_txt, goal_status }, idx) => (
          <li
            key={goal_id}
            draggable
            className={clsx(goal_status && s.goal_item_done, s.goal_item)}
            onDragStart={() => handleDragStart(goal_id)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(goal_id)}
          >
            <p className={s.num}>{idx + 1}.</p>

            <div className={s.left_info}>
              <input
                type="checkbox"
                checked={goal_status}
                className={s.check}
                onChange={() => handleDoneGoal(month_id, goal_id, goal_status)}
              />

              {/* UPDATE */}
              <Button
                size="icon"
                variant="ghost"
                aria-label="Update goal"
                title="Update"
                onClick={() => onOpenUpdate(month_id, goal_id, goal_txt)}
                className={s.update_btn}
              >
                <GrUpdate />
              </Button>
            </div>

            <p className={clsx(s.goal_txt, goal_status && s.goal_txt_done)}>
              {goal_txt}
            </p>

            {/* DELETE */}
            <Button
              size="icon"
              variant="destructive"
              aria-label="Delete goal"
              title="Delete"
              onClick={() => handleDeleteGoal(month_id, goal_id)}
              className={s.btn}
            >
              <IoClose />
            </Button>
          </li>
        ))}
      </ul>

      {/* ADD */}
      <Button
        size="icon"
        variant="primary"
        aria-label="Add goal"
        title="Add"
        onClick={() => handleAddGoal(month_id)}
        className={s.add}
      >
        <FaPlus />
      </Button>
    </li>
  );
};

export default MonthItem;
