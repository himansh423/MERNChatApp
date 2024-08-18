import styles from "./Terms.module.css";
import hammer from "../assets/hammer.jpeg";
const Terms = () => {
  return (
    <main>
      <div className="bg-black  w-screen pt-4">
        <h1 className={`${styles.head} text-center`}>Terms & Conditions</h1>
        <div className="w-screen h-full flex justify-center mt-7">
          <img
            className="max-w-[250px] rounded-md max-h-[250px]"
            src={hammer}
            alt="Clyphix, the ultimate secure chat application designed for private, encrypted conversations. With Clyphix, you can effortlessly create and manage personalized chat rooms, ensuring your communications remain confidential and secure. Our platform offers real-time messaging and advanced privacy features, making it ideal for confidential discussions, social interactions, and business communications. Experience a seamless and secure chatting environment with Clyphix, where your privacy is our top priority. Whether connecting with friends, family, or colleagues, Clyphix provides the perfect solution for secure, end-to-end encrypted messaging. Start your private chat now with Clyphix and enjoy the peace of mind that comes with a secure, reliable, and user-friendly communication platform."
          />
        </div>
        <div className="w-screen px-7 lg:px-28 mt-7 flex gap-5 flex-col text-white items-center">
          <p className="text-center ">
            Welcome to our chat application. By accessing or using our services,
            you agree to comply with and be bound by these terms and conditions.
            Please read them carefully.
          </p>

          <h1 className={`${styles.head} text-center`}>
            User Responsibilities
          </h1>

          <p className="text-center">
            As a user of our chat application, you agree to: Provide accurate
            and complete information during registration. Use the chat rooms for
            lawful purposes only. Refrain from sharing or distributing harmful,
            offensive, or illegal content. Respect the privacy and rights of
            other users.
          </p>
          <h1 className={`${styles.head} text-center`}>Acceptable Use</h1>
          <p className="text-center">
            You agree not to misuse the chat application in any way, including
            but not limited to: Engaging in any form of harassment, abuse, or
            threats. Impersonating others or providing false information.
            Spamming or distributing unsolicited messages.
          </p>

          <h1 className={`${styles.head} text-center`}> Limitation of Liability</h1>
          <p className="text-center">
          We strive to ensure the availability and reliability of our services. However, we are not liable for any interruptions, data loss, or damages resulting from the use or inability to use the chat application.
          </p>

          <h1 className={`${styles.head} text-center`}> Modifications to Terms</h1>
          <p className="text-center">
          We reserve the right to modify these terms and conditions at any time. Any changes will be effective immediately upon posting. Your continued use of the application signifies your acceptance of the updated terms.
          </p>
          <h1 className={`${styles.head} mb-32 text-center`}>Contact Information</h1>
          <p className="text-center">
          If you have any questions or concerns about these terms, please contact us at <a href="mailto:cyrowebsolutions@gmail.com">cyrowebsolutions@gmail.com</a> .
          </p>
        </div>
      </div>
    </main>
  );
};

export default Terms;
