import React, { useEffect, useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import img from "../assets/chatlogo.png";
import styles from "./ChatRoom.module.css";

const ChatRoom: React.FC = () => {
  const [inputContainerBottom, setInputContainerBottom] = useState(0);

  useEffect(() => {
    const adjustHeight = () => {
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.clientHeight;

      if (viewportHeight < documentHeight) {
        setInputContainerBottom(documentHeight - viewportHeight);
      } else {
        setInputContainerBottom(0);
      }
    };

    const handleFocus = () => {
      setTimeout(adjustHeight, 300); // Delay to ensure the keyboard is fully opened
    };

    const handleBlur = () => {
      setTimeout(adjustHeight, 300); // Delay to ensure the keyboard is fully closed
    };

    window.addEventListener("resize", adjustHeight);
    window.addEventListener("focusin", handleFocus);
    window.addEventListener("focusout", handleBlur);

    return () => {
      window.removeEventListener("resize", adjustHeight);
      window.removeEventListener("focusin", handleFocus);
      window.removeEventListener("focusout", handleBlur);
    };
  }, []);

  return (
    <div>
      <div className={styles.header}>
        <div className="h-[37px] w-[37px] border">
          <img src={img} className="w-[40px] filter invert h-[40px]" alt="" />
        </div>
        <div>
          <h1 className="text-[#BFBFBF]">Hello World</h1>
          <div className="flex text-[10px] text-[#808080]">
            <p>Participant1</p>,<p>Participant2</p>
          </div>
        </div>
      </div>
      <div className="h-screen w-screen bg-[#141414] flex flex-col">
        <div className={styles.content}>
          <div className="chatContainer">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis magnam adipisci quibusdam id ullam? Quos obcaecati laboriosam nam facilis et expedita, ad odit exercitationem, reprehenderit cumque illum voluptate ipsum molestiae.
          Ipsum voluptatibus tempore soluta? Laudantium minus dolorem ab incidunt vel molestiae delectus, quos temporibus molestias earum in sunt porro nemo quae facilis. Totam dicta sint facilis, eligendi minima dolor iusto.
          Laboriosam cupiditate similique quas nesciunt ea iure maiores asperiores modi molestias, tempore aspernatur vitae sit suscipit magnam officia qui. Atque sed natus temporibus minus molestias a deserunt sit cupiditate distinctio!
          Odio quae, obcaecati at incidunt facere, sit, vero ipsam porro quis quia laudantium amet. Saepe tempore libero est, facilis labore accusamus assumenda voluptatum iure, non consequuntur velit laborum molestiae nobis!
          Optio in expedita provident consequatur. Doloribus accusamus cum soluta! Eum reiciendis debitis, impedit eligendi praesentium iste accusantium qui omnis? Distinctio aliquid fugiat veniam consequuntur illo deserunt voluptatem maxime sequi facilis.
          Error velit doloremque molestiae deleniti quod nam, sequi, et illo hic fuga quos nihil eveniet odit explicabo libero nostrum consequatur soluta consequuntur temporibus omnis ut qui saepe architecto? Recusandae, id!
          Ipsa accusamus ex porro minus! Neque, labore perspiciatis reprehenderit ex nemo, delectus id iure quae magni recusandae veniam doloribus suscipit alias odit eos temporibus error itaque. Qui cum accusantium facilis!
          Dicta totam quas obcaecati aperiam tempore beatae quidem, aliquam, incidunt similique officia ipsam eum praesentium perferendis vel quis laudantium dolorum natus error minima. Quidem, voluptatibus reprehenderit blanditiis ipsum molestiae nostrum?
          Ducimus dicta corporis ex labore, voluptatibus minus quasi et? Ducimus odit, inventore atque alias quia illum natus sint ratione, dolor cum quaerat nam soluta consequuntur? Facilis ratione exercitationem omnis labore?
          Voluptatum ea voluptate reprehenderit dolorum adipisci explicabo voluptatem, repellendus, voluptas distinctio nulla saepe, atque ullam. Aliquid eos iure eveniet recusandae ipsum nihil perspiciatis maiores incidunt sapiente, et hic? Repellendus, incidunt.
          Dolore, accusamus repellat hic inventore laboriosam at similique ducimus aliquid sint commodi, libero sapiente. Voluptates maxime at debitis delectus fugiat excepturi architecto officia asperiores sunt explicabo vel assumenda, provident aliquid?
          Consequatur, laudantium officia! A laborum soluta in sed nisi suscipit laboriosam deserunt blanditiis optio ut voluptatem incidunt est distinctio commodi deleniti mollitia nobis voluptas vero quae inventore, modi velit! Modi.
          Odio, deleniti, odit, neque ullam quaerat culpa veniam a quidem harum cum eum cumque! Exercitationem iure dolores iste, illum a officiis minus quos expedita fugit nihil itaque, dicta quisquam possimus.
          Sit necessitatibus architecto maiores? Odit commodi sequi voluptates tempore dolorem minus dolores sunt delectus ipsa. Rerum earum, officiis cupiditate fuga, quae, dolores voluptas non perspiciatis saepe recusandae porro. Quam, tenetur!
          Illo placeat nam beatae eos iusto autem distinctio quaerat modi vitae ullam ex obcaecati ipsum similique dolorem dolorum blanditiis explicabo molestias, suscipit at molestiae? Laboriosam excepturi reiciendis aliquid deserunt perferendis?
          Officiis quidem voluptate ipsum suscipit necessitatibus? Cupiditate vero ad rem, sint qui cumque praesentium odit libero dicta repudiandae dolore explicabo, odio perspiciatis voluptatem aliquid? Consectetur tenetur iure voluptatibus voluptate expedita!
          Nobis laboriosam debitis tempore aliquid perferendis ad dolorem libero. Velit perspiciatis blanditiis quam doloribus non nisi accusantium numquam voluptatem veritatis est laboriosam, et aliquid. Aut vitae numquam dolore eveniet iure!
          Officiis quidem, dolor dolorum voluptatibus incidunt aliquid obcaecati quaerat cum corporis, dignissimos explicabo iure aliquam culpa! Ab suscipit iusto expedita minima. Sed voluptate ipsam facere expedita odio. Dolores, omnis quos?
          Harum animi magni ut reiciendis officiis praesentium commodi consectetur, voluptate veritatis doloremque qui dolore ipsam sequi reprehenderit cupiditate, distinctio placeat nemo est blanditiis consequuntur ad quo! Ullam veniam in facilis!
          Doloremque sequi tenetur totam explicabo! Autem debitis odio, aliquam maiores minima, facilis deleniti consectetur deserunt ad eligendi minus fugiat optio voluptates, vitae soluta non atque voluptate odit blanditiis. Voluptatem, temporibus!
          Molestiae fugiat quod, repellat nesciunt provident quaerat alias dolor necessitatibus distinctio voluptatum ea sint expedita cumque. Quod suscipit quia libero debitis repellendus, nostrum a, laudantium, in possimus laboriosam eligendi illo.
          Perferendis eligendi quos, optio explicabo, a magnam sit voluptas, maiores aliquid iste nam laboriosam itaque sapiente fugiat porro deserunt praesentium? Optio facere nostrum quod cum sunt laudantium. Voluptatibus, eaque libero.
          Dicta similique deserunt doloribus ducimus eligendi veniam, velit praesentium consequuntur, rem ratione optio, nulla minima porro officiis mollitia magnam dignissimos. Sunt praesentium sit maiores. Deserunt minima temporibus ullam perferendis cumque.
          Atque, labore natus dolore sint porro dolorum illo omnis iste eius fugiat hic error est? Tempore cum aperiam ex? Animi, earum harum culpa eum praesentium odit ipsam nemo sed nam?
          Quibusdam vel omnis molestiae alias magnam, beatae sit deserunt neque iste possimus sapiente similique ipsum, itaque, quisquam dolor atque? Officiis temporibus officia, quod sapiente animi explicabo et aut pariatur a?
          Consequatur, quae exercitationem laboriosam ratione repellat veniam hic dolor. Aspernatur, impedit sapiente. Accusantium quam optio, repudiandae laboriosam voluptate magnam facilis dignissimos repellat quibusdam nostrum consequatur, cum provident iure, quae officiis.
          Quis in error animi porro, nam nobis cumque eligendi praesentium impedit maiores debitis consequatur voluptas ratione fugiat dolor reiciendis modi repudiandae molestiae. Recusandae aperiam in nam repellendus reprehenderit delectus nostrum?
          Corrupti molestias ullam reiciendis deleniti, quia nulla nemo assumenda adipisci, porro atque tempora enim quas voluptatum. Aut optio suscipit a nostrum eaque quam quia amet, impedit fugit, voluptatem, maiores molestiae?
          Quos quas sunt veritatis, est obcaecati voluptatem exercitationem ad laudantium, iure quidem ullam sit! Ipsa molestias minus eligendi dignissimos totam natus consequatur dicta, quo suscipit neque, ipsam exercitationem, sed sapiente?
          Voluptas nulla amet culpa necessitatibus animi dolorem quibusdam sed tempore eos perspiciatis, unde deserunt quidem ex tempora! Saepe, suscipit modi dicta autem et vel quas eius doloremque dolorum quod perferendis.
          Atque eos perferendis officia officiis harum hic reiciendis maxime dolore unde sit? Delectus tenetur fugiat doloremque a quae, dolorum in ducimus fuga consequatur corrupti totam suscipit tempora sunt odio ex.
          Possimus, vel. Corrupti magnam architecto harum minima modi quod, pariatur repudiandae, qui doloribus perferendis nihil aliquid eius eligendi voluptatibus asperiores consectetur dolorum animi illum ab corporis temporibus laborum omnis! Soluta.
          Dolores est laudantium, dolorem libero quod eius molestias magnam beatae suscipit totam voluptatum officia facilis vel similique harum omnis? Praesentium labore unde aliquid nostrum ad totam quisquam cum, repellendus aut!
          Nulla delectus id minus voluptatibus nesciunt veritatis non neque. Exercitationem, perferendis modi ex expedita saepe, explicabo iure facere consequuntur illum ratione amet perspiciatis minima veritatis dolor impedit sint ad vitae?
          Amet distinctio velit nihil quam cum reiciendis mollitia possimus veniam temporibus doloribus, reprehenderit, laborum sapiente ad ab sit autem nam modi quisquam nemo, aperiam illo! Repellat fugiat minima voluptate error?
          Placeat facilis optio odit eius accusantium, tempora modi. Quos, optio aperiam? Officiis distinctio praesentium, quidem vel eius aliquid a velit, voluptatum aspernatur molestiae omnis, sequi atque autem expedita eveniet quas.
          At facere corrupti culpa iure, deleniti explicabo a. Reiciendis doloremque, repellat, exercitationem aliquam porro quis odit ducimus voluptas, deserunt veritatis amet. Temporibus error delectus unde, mollitia doloremque tempore dolores cupiditate.
          Minima unde aliquam minus rem voluptatibus possimus optio velit delectus, odit, quasi eos sit eum illum, at placeat perferendis hic voluptas cumque odio. Eligendi voluptate placeat explicabo non. At, laborum!
          Quasi illo nobis ea deleniti voluptates, quam fugiat quaerat quo ducimus dolore adipisci eveniet facere magnam id quibusdam accusantium minus beatae, sequi hic illum. Laudantium accusamus voluptatem molestias iste consequuntur?
          Hic minus obcaecati laudantium perspiciatis, aliquid cupiditate illum ad? Accusantium illum, hic nesciunt a libero molestiae, dicta minus illo vero corrupti nihil. Omnis sunt laborum autem cumque quod, totam ullam?
          Est nihil nesciunt esse autem ipsa quaerat, rem facere rerum dignissimos. Debitis atque, repudiandae vitae, illo maiores recusandae mollitia eius id voluptate veniam neque tenetur veritatis beatae sapiente, voluptatibus natus!
          Magnam maiores accusamus veniam ipsa est. Ab asperiores nisi quia officia pariatur beatae aspernatur voluptatibus repellendus, ipsam cum veniam laudantium modi molestiae qui quidem ducimus? Autem ullam impedit ratione facilis.
          Corporis quod, quia molestias magni, temporibus commodi provident id ipsum quos tenetur, in fugiat repudiandae. Deleniti optio omnis tempore. Eaque in illo similique. Tenetur accusantium provident quis distinctio fugiat! Eligendi.
          In ab fuga delectus excepturi voluptate quisquam explicabo ipsa cum tempora praesentium veniam consequuntur, accusamus omnis. Cum laboriosam saepe enim optio eligendi accusantium, velit, iste quibusdam iusto assumenda, tempora sint.
          Aspernatur vero perspiciatis voluptatem quisquam eaque, et aliquam quas eius repellendus voluptate consequatur autem atque deleniti laudantium illo, voluptatibus quasi officia at unde minima. Dolore dicta deleniti numquam soluta optio.
          Maiores fuga ab enim? Sed voluptate rerum, ipsum, adipisci hic laudantium commodi molestiae suscipit, nesciunt voluptatibus quod quas placeat aliquam nam mollitia eaque impedit in dolor animi incidunt ex sint.
          Expedita cumque accusantium laudantium pariatur, impedit fugit eum eligendi et quibusdam necessitatibus doloribus dolore atque distinctio. Reprehenderit, eaque. Et quo dolore, dolores facere nemo quidem voluptatum quaerat eum consequuntur est!
          Quisquam eaque porro aliquam ipsa aperiam reiciendis numquam magni. Explicabo amet voluptate quae autem laborum officiis inventore, esse rerum doloribus necessitatibus quasi nobis molestias nam, cumque quis. Rem, expedita voluptas.
          Repudiandae sapiente voluptas optio omnis sed vel, nihil consequuntur. Officiis perspiciatis non autem ipsum! Distinctio magni excepturi enim assumenda dicta repellendus, at tempore earum fuga unde dolores animi sunt ab.
          Ullam dolore obcaecati cupiditate voluptatem itaque excepturi voluptatum quae reprehenderit optio incidunt assumenda, accusamus porro impedit quos exercitationem nobis laboriosam qui ab nihil! Velit, minus corporis corrupti incidunt consequuntur dolor?
          Accusantium optio explicabo natus velit fugiat, officiis magnam omnis, sunt porro provident dolore laboriosam maxime quisquam pariatur cumque consequatur aperiam deserunt iste laborum nemo, vero alias. Reiciendis doloremque dolorem culpa!
          Ex adipisci natus veritatis non, impedit labore pariatur ipsa blanditiis officiis neque doloremque voluptates explicabo laborum numquam vitae, aperiam dicta? Debitis quia quam, quo eius qui neque incidunt ex reprehenderit?
          Repellat esse pariatur veritatis sapiente doloribus! Unde possimus tempora libero, molestiae aspernatur repellat nemo rerum nostrum quod ab hic eveniet quasi, minus laboriosam veritatis sint autem ipsam architecto, aliquid tenetur!
          Ad unde, illo nostrum molestias dolor iste ab dolores dolorem qui, eum possimus omnis voluptas voluptatem sed! Fugit, natus repellat vero cum quaerat dolores, perferendis soluta eligendi laboriosam accusantium architecto.
          Dicta ut enim, molestias illum nesciunt repudiandae vel dignissimos placeat, ab tempora aspernatur, est quas! Repellendus reprehenderit delectus magnam iure, dolorem temporibus quae id corporis sed dignissimos suscipit eligendi cum!
          Eligendi illum maiores dolorem doloremque provident similique! Nihil deserunt ut delectus ab totam maxime quisquam consequuntur! Quisquam temporibus beatae inventore quis. Aspernatur beatae dolore impedit autem assumenda distinctio molestiae vel.
          Harum accusantium sit ad perspiciatis odio ipsam architecto eum incidunt velit, quibusdam eligendi ex id facere nostrum esse voluptatem voluptas tempora, eveniet excepturi molestiae in? Neque, nostrum. Quisquam, consectetur quam.
          Cumque doloribus deleniti soluta eos quod quaerat minima illum et repudiandae animi, ipsam quo totam inventore explicabo ad iste quis autem laboriosam quia at nulla amet accusamus! Aliquid, minima suscipit?
          Odit quisquam porro dolor unde magni libero iste laborum, esse quibusdam eos vel delectus necessitatibus autem impedit omnis sed accusamus qui, inventore soluta, temporibus earum veniam nostrum culpa in. Hic.
          Placeat, esse. Qui in voluptatibus deserunt ea, aspernatur velit fuga doloribus quaerat unde nostrum eius distinctio error accusantium? Dignissimos fuga sit quod dolores recusandae repudiandae iste quaerat eum possimus vitae!</div>
        </div>
      </div>
      <div
        className={styles.inputContainer}
        style={{ bottom: `${inputContainerBottom}px` }}
      >
        <input type="text" />
        <button type="submit">
          <div>
            <IoSendSharp />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
