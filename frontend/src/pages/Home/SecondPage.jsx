import styles from "./SecondPage.module.css"
import React from "react"

function SecondPage() {
  return (
    <div className={`${styles["container"]}`}>
      <h2>
        내 모든 업무 현황을 한눈에 조회하고 한 곳에서 관리하세요.
        <br />
        이제껏 경험 못 했던 쉽고 편리한 금융 서비스,
        <br />
        calmwave와 함께라면 당신의 일상이 새로워질 거예요.
      </h2>
    </div>
  )
}
export default SecondPage
