import { useRef, memo } from "react"
import styles from "./CardFooter.module.css"
import { useCustomWidthHeight } from "../../../hooks/custom/useCustomWidthHeight"
import FooterGraph from "../../Canvas/FooterGraph/FooterGraph"

function CardFooter({ data, big, small }) {
  const footerRef = useRef(null)
  const { width, height } = useCustomWidthHeight(footerRef)
  return (
    <div ref={footerRef} className={`${styles[`card-footer-container`]}`}>
      <FooterGraph
        canvasWidth={width}
        canvasHeight={height}
        bgColor={`rgba(255, 255, 255, 1)`}
        fillColor={`rgba(52, 104, 199, 1)`}
        maxPoint={big}
        nowPoint={small}
      />
    </div>
  )
}

export default memo(CardFooter)
