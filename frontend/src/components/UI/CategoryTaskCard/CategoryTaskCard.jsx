import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useClasses } from "../../../hooks/custom/useClasses"
import { selectedTaskActions } from "../../../store/door-store/selected-task-slice"
import CardBody from "../CardBody/CardBody"
import CardHeader from "../CardHeader/CardHeader"
import styles from "./CategoryTaskCard.module.css"
import { useDrag } from "react-dnd"

/* eslint-disable */
function CategoryTaskCard({ task, idx }) {
  const cardType = true
  const dispatch = useDispatch()
  const { selectedTaskList } = useSelector((state) => state.doorstask)
  const [toggleHover, toggleSelect, customSelect, classes] = useClasses(
    styles,
    "task-card-container"
  )
  const selected =
    selectedTaskList.findIndex((val) => val.id === task.id) !== -1
  const doneFlag = task.column === "Done"

  useEffect(
    function () {
      customSelect(selected)
    },
    [selected]
  )

  const toggleWorkHandler = function () {
    if (task.column === "Done") {
      return
    }
    dispatch(
      selectedTaskActions.addSelectedTask({
        newTask: {
          ...task,
        },
      })
    )
  }

  const [{ isDragging }, drag] = useDrag({
    type: "Task",
    item: { idx, task },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (selected) {
        return
      }
      if (dropResult) {
        if (dropResult.title === "selectedTask") {
          toggleWorkHandler()
        }
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0.6 : 1

  return (
    <div
      onClick={toggleWorkHandler}
      ref={drag}
      style={{ opacity }}
      className={`${classes}
      ${
        selected
          ? styles["selected-card"]
          : doneFlag
          ? styles[`done-card`]
          : null
      }`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <CardHeader data={task} cardType={cardType} />
      <div className={`${styles["done-tag"]}`}>
        {task.column === "Done" ? "완료됨" : ""}
      </div>
      <CardBody data={task} />
    </div>
  )
}

export default CategoryTaskCard
