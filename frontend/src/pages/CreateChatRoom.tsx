import styles from "./CreateChatRoom.module.css";

const CreateChatRoom = () => {
  return (
    <main className="bg-black py-4 h-screen w-screen text-white">
      <div>
      <h1 className={`${styles.head} text-center font-bold`}>Create Chatroom</h1>
      <form className="flex flex-col items-center mt-7 px-5">
        <div className="flex flex-col gap-2 w-full ">
            <label htmlFor="name" className="px-1">Name of Chatroom*</label>
            <input
              type="text"
              className={`${styles.input} h-14 w-full border border-gray-400 bg-[#171717] px-3 py-2 rounded-md`}
              name="chatroomName"
              id="chatroomName"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col gap-2 w-full mt-6">
            <label htmlFor="email" className="px-1">Duration*</label>
            <select defaultValue={1} name="time"  id="time" className={`${styles.input} h-14 bg-[#171717] border px-4 border-gray-400 rounded-md`}>
              <option value="1">1 hour from Now</option>
              <option value="2">2 Hour from Now</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 w-full mt-6">
            <label htmlFor="email" className="px-1">Max number of Participants*</label>
            <select defaultValue={2} name="time"  id="time" className={`${styles.input} h-14 bg-[#171717] px-4 border border-gray-400 rounded-md`}>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 w-full  mt-6">
            <label htmlFor="password" className="px-1">Chatroom Password*</label>
            <input
              type="password"
              className={`${styles.input} h-14 w-full border border-gray-400 bg-[#171717] px-3 py-2 rounded-md`}
              name="password"
              id="password"
              autoComplete="off"
            />
          </div>

          <button className={`${styles.SubmitButton} mt-7 w-full h-14 bg-purple-600  text-white py-2 px-4 rounded`}>Create Chatroom</button>
        </form>
      </div>
    </main>
  )
}

export default CreateChatRoom
