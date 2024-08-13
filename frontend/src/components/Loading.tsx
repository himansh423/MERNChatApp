import styles from "./Loading.module.css";

const Loading = () => {
  return (
    
      <div>
          <div className="h-screen w-screen absolute z-40 bg-white opacity-25"></div>
          <div
            className={`${styles.buffer} w-[100px] h-[100px] border-t-2 border-l-2 border-yellow-400 rounded-[50%] absolute z-50 top-[50%] translate-y-[-50%] left-[50%]`}
          ></div>
        </div>
  )
}

export default Loading
