import chatImg from "../assets/chatting.jpeg";
import styles from "./About.module.css";
const About = () => {
  return (
    <main>
      <div className="bg-black pt-4">
        <h1 className={`${styles.head} text-center text-2xl`}>
          About Our Chat Application
        </h1>
        <div className="w-screen h-full flex justify-center mt-7">
          <img
            className="max-w-[250px] rounded-md max-h-[250px]"
            src={chatImg}
            alt="chatting image"
          />
        </div>

        <div className="w-screen mb-10  text-white flex justify-center px-5 mt-6">
          <p className=" text-center">
            Welcome to our chat application, your go-to platform for private,
            secure conversations. Whether you're connecting with friends,
            family, or colleagues, our app provides a seamless experience for
            creating private chat rooms tailored to your needs.
          </p>
        </div>

        <div className="w-screen mb-8 flex flex-col items-center px-7 gap-5 text-white">
          <h1 className={styles.head}>Why Choose Us?</h1>
          <p className="text-start">
            <strong>Privacy First</strong>: We understand the importance of
            privacy. Our chat rooms are designed to ensure your conversations
            remain confidential and secure, protected by end-to-end encryption.
          </p>
          <p className="text-start">
            <strong>Simple & Intuitive</strong>: Creating a private chat room is
            just a few clicks away. Our user-friendly interface makes it easy to
            set up and manage your conversations.
          </p>
          <p className="text-start">
            <strong>Real-Time Communication</strong>: Experience the convenience
            of real-time messaging. Stay connected with instant notifications
            and updates, ensuring you're always in the loop.
          </p>
          <p className="text-start">
            <strong>Customizable Chats</strong>: Personalize your chat rooms to
            suit your preferences. Whether it's for business discussions, social
            gatherings, or casual talks, you have complete control.
          </p>
        </div>
        <div className="text-white h-[300px] flex flex-col gap-4 w-screen px-7">
  <h1 className={`${styles.head} text-center`}>Join Us Today</h1>
          <p className="text-center">
            {" "}
            Start creating your private chat rooms and experience communication
            like never before. Your privacy, your control, your conversations.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
