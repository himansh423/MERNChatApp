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
    <main className="h-screen w-screen bg-[#141414] flex flex-col">
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
      <div className={styles.content}>
        <div className="chatContainer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda facilis pariatur consequuntur ullam facere eligendi cum dolor adipisci, sequi aliquid debitis doloremque at. Ex ab voluptatum dolorum tempora. Ipsam!
        Qui atque, reiciendis aspernatur ipsa reprehenderit eum dignissimos quam suscipit possimus excepturi voluptatem molestiae hic quis enim cum voluptatibus odio! Ipsam, quisquam? Cumque quasi quis corporis, earum excepturi quas iure.
        Itaque optio mollitia corrupti expedita aliquam! Error harum aliquam, reprehenderit hic quo, impedit dolorem perspiciatis tempora ab facere ullam laborum iure. Ab libero, aspernatur voluptates cum impedit ullam hic ipsa.
        Nostrum laborum repellendus velit consequatur nesciunt, doloribus, eveniet qui aliquid, fuga labore ullam eligendi? Vero porro eveniet veniam. Laborum quaerat excepturi, inventore tempora quos earum quo et aspernatur ipsa odit.
        Nihil unde ut pariatur eos dolores delectus doloremque soluta corporis mollitia voluptatibus ducimus, aliquid nesciunt ratione magni libero incidunt, eum debitis necessitatibus. Molestias amet delectus aspernatur atque quaerat tempora dolores!
        Impedit modi corporis, nobis voluptatibus id eos reprehenderit eius obcaecati atque unde adipisci, veniam magnam totam minus amet? Minima rem illum, harum veniam quasi fugit. Nobis, doloremque. Quae, ex dignissimos?
        Id nam architecto magni vero iusto labore nemo quod ad aspernatur quasi, possimus ullam placeat nihil tenetur animi sapiente magnam impedit, recusandae modi quidem voluptatem amet in velit! Sapiente, ea!
        Recusandae, natus reiciendis. Modi, exercitationem non impedit repudiandae excepturi dolores voluptatibus sunt consequatur. Voluptas libero, non harum sint nobis odio inventore! Recusandae nisi repellat alias earum id sequi quidem eligendi.
        Totam, praesentium quis. Alias, cumque. Necessitatibus nostrum, rerum quod inventore magnam eos vero. Ipsa nihil aliquam odit dicta facere repellat molestias distinctio, maxime perferendis alias quibusdam repellendus? Dicta, quaerat impedit.
        Quisquam nihil illo, possimus esse debitis facilis sunt rerum amet suscipit tempora. Ipsum enim explicabo alias corporis mollitia, nostrum nemo recusandae porro harum velit molestiae aperiam cupiditate ratione, delectus assumenda!
        Laboriosam facere ipsa natus enim veniam quo temporibus aut praesentium molestias commodi ut odio dolores nihil, voluptatibus in porro qui recusandae, iusto molestiae cupiditate eos exercitationem modi ipsum reiciendis! Excepturi!
        Omnis ea delectus, adipisci velit laboriosam placeat aliquam. Ex numquam eum cumque necessitatibus, nemo earum quasi autem sequi vero saepe eaque at ducimus deserunt asperiores perferendis quod! Explicabo, dolore magni.
        Vel neque sit deleniti tempora, cupiditate consequatur hic error id amet in corrupti at suscipit recusandae corporis, perferendis ex temporibus earum animi blanditiis quaerat? Cum quas reprehenderit sed quis fugiat.
        Dolores ratione recusandae cum minus tempore! Ea sunt quibusdam laboriosam optio ipsa voluptates vel corrupti earum. Ducimus, voluptatibus omnis aliquam atque culpa rerum, eligendi numquam vero id dolorem ex explicabo!
        Perferendis voluptatem iste molestiae voluptates eligendi aperiam ratione culpa explicabo numquam, mollitia ullam optio ab. Eligendi, aperiam! Officia, rem provident ex vitae fuga fugit id atque assumenda possimus labore mollitia.
        Ex inventore cum, officia accusantium voluptate qui rerum ipsam! Facilis nulla ab sunt tempore nemo error eius aut commodi ipsam optio fugiat esse, laudantium cumque, enim quam fugit nam expedita.
        Dolores repellendus blanditiis labore minus minima asperiores ullam officia? Saepe optio eaque atque veritatis recusandae, corrupti molestiae illum temporibus voluptas qui ut quas error sint porro eius, aspernatur officia totam.
        Adipisci delectus nulla quis in nisi necessitatibus rerum eaque voluptate similique eos expedita temporibus error itaque voluptatum excepturi laborum magnam, esse a totam iste cupiditate ad deleniti nihil. Sit, delectus.
        Sapiente inventore cum repellat in blanditiis fugiat dicta quae iusto. Dolorum a eos fuga aliquid eum doloribus vero maxime, possimus dolores eveniet rerum quas animi repellendus aspernatur ex recusandae magnam?
        Dignissimos eius totam dolore vero facere error repudiandae minima, praesentium iure nihil non magnam et tenetur, quos iusto expedita aut. In commodi necessitatibus autem facere quos repellat. Qui, nisi consectetur.
        Numquam nisi maxime placeat sed iusto, nulla sint officia, minus autem doloribus, tenetur quam eius? Velit, nostrum ratione obcaecati laborum maxime iusto nemo alias placeat vero quam quod in voluptatum?
        Alias corrupti modi aut non laudantium quibusdam vero accusamus hic facere debitis accusantium quasi quas inventore mollitia iste deleniti officia nemo consectetur, ex, quae voluptatibus? Officiis quos ducimus corporis et?
        Nostrum assumenda repellat dolorum maxime dolor. Repellat aliquam nihil sunt maiores vel aperiam pariatur libero veniam velit recusandae id, sed expedita totam accusamus eius quo, veritatis eos, corrupti earum commodi.
        Laudantium natus dignissimos vitae asperiores ab numquam omnis exercitationem dolores voluptas, deleniti dicta molestias incidunt! Magni nobis, accusantium voluptas commodi praesentium quam nemo repellendus numquam est hic qui corporis ducimus.
        Exercitationem provident debitis laudantium voluptate voluptates ducimus maiores at ut aperiam! Dignissimos temporibus iure laudantium excepturi aut laborum magnam, assumenda officiis ducimus iste ex corporis delectus! Quia architecto quibusdam commodi!
        Labore officiis repellat, adipisci minus voluptates iusto doloribus aliquam voluptatibus, eligendi impedit voluptatum dolores sequi eum amet veniam excepturi nesciunt obcaecati minima perferendis. Asperiores officia temporibus suscipit quae, inventore dolorem.
        Assumenda, laboriosam harum maiores quas expedita doloremque. Dolore hic, at quae, nisi necessitatibus esse rerum pariatur aliquam assumenda perspiciatis minima fugiat, quo molestias soluta maxime eum exercitationem quibusdam. Facere, harum.
        Optio voluptates doloribus molestiae rerum itaque. In obcaecati eius debitis aut labore voluptas sequi atque explicabo molestiae eaque repudiandae, accusantium, ipsam perferendis et a quibusdam architecto magnam saepe eligendi consequatur?
        Adipisci quia ullam obcaecati sapiente vero numquam corrupti nisi quis atque quasi! A aperiam quas cupiditate quasi porro sequi ipsa ab reiciendis, architecto eaque excepturi sit sint ipsam, laudantium autem?
        Ratione ipsum doloribus voluptates laudantium minima consequatur harum nostrum, cupiditate, animi laboriosam quod distinctio consectetur ut officiis tenetur cumque natus nam quis dolores praesentium repellat dignissimos. Consectetur laborum quo quisquam.
        Dignissimos ab quia labore unde veniam quas earum nihil facilis aliquid quae deserunt, alias, sapiente animi laboriosam vero ducimus architecto iure adipisci. Impedit expedita inventore at alias saepe, minima eum.
        Velit magnam architecto quo sit est voluptate! Impedit, ea dolorum asperiores voluptatum doloremque, explicabo facere voluptas exercitationem commodi ducimus vel perferendis, sunt pariatur nihil placeat. Nostrum praesentium dolorum quia eveniet.
        Reiciendis rerum tempora corporis quos atque facilis veniam doloremque omnis, odio aperiam hic in aliquid, ut ullam dignissimos earum vitae excepturi culpa? Non mollitia dolorem facere eligendi obcaecati! Ea, quis?
        Quam ducimus eligendi ab quas animi quis odio obcaecati ea magni? Est doloremque aliquid obcaecati quia. Sapiente incidunt neque eaque eum ducimus officia hic optio est! Vero minima earum adipisci.
        Qui adipisci earum quaerat expedita odio. Voluptas, optio. Nobis aspernatur aliquid exercitationem dolorum ratione totam veniam saepe praesentium nihil tempore esse, possimus, libero sint vel magni autem. Aperiam, earum ullam!
        Mollitia, quidem, saepe tempore dolor perferendis quam repellat dolores aut ex suscipit, illum veniam unde qui assumenda quos est nostrum harum placeat labore quia. Ad maiores quam facilis a incidunt.
        Ea harum est quis enim tempore consequuntur velit aut aspernatur iusto repudiandae! Hic vel commodi quaerat reiciendis, fugit exercitationem asperiores ratione assumenda officia porro consectetur deleniti temporibus adipisci recusandae molestiae.
        Corporis quidem rem assumenda animi distinctio, explicabo voluptatem hic vero unde quo quam laborum a sapiente, saepe quis ea iusto aliquam quasi? Harum vitae eaque placeat! Molestiae ab temporibus incidunt!
        Iusto, molestias. Facere minus fugiat iure laboriosam et? Sunt laudantium cumque quibusdam nesciunt animi sed dicta reprehenderit praesentium assumenda qui accusamus, corrupti at optio dolores adipisci minus delectus ipsa! Voluptates.
        Cum porro aspernatur aut? Quibusdam, ad omnis! Vitae quas, iusto quae non modi fuga ullam vero incidunt quidem architecto, animi perferendis neque dolores doloribus nisi cum similique enim alias voluptatibus.
        Eius incidunt soluta provident quibusdam quasi in omnis voluptas aut ex accusamus ullam corporis nobis maiores, mollitia inventore? Et error pariatur iste vero? Saepe porro vitae pariatur, velit ipsa quia.
        Libero nihil minima voluptas nam repudiandae, autem quaerat eaque vero, fuga magnam voluptate similique. Error, quasi mollitia veniam vitae blanditiis deleniti ab quas delectus aspernatur cum assumenda neque eveniet odit.
        Sunt earum aut laboriosam fuga, praesentium ratione, officia tempora nam delectus perferendis culpa reprehenderit placeat veniam est aliquam temporibus vitae reiciendis saepe qui repudiandae! Praesentium necessitatibus quos similique! Error, laudantium?
        Laborum accusamus vel quisquam maiores? Nostrum enim ipsum inventore possimus totam qui quae aliquid, consectetur dolor! Aspernatur natus nemo, itaque commodi quam et amet. Asperiores ullam error quia eligendi commodi.
        Iste iure illum dolor fugiat, in quasi ipsa hic vitae labore, quae amet! Sunt pariatur placeat aliquid dolorem! Dolores aut quam est maxime? Ducimus voluptas qui est ullam, possimus enim.
        Obcaecati totam dignissimos voluptas eaque ea modi vitae? Inventore iure temporibus cupiditate, distinctio nihil id eaque corporis. Magnam nisi consequatur deleniti magni a vel dolorem inventore, quidem repellendus eveniet et.
        Porro blanditiis nostrum alias praesentium fugit! Iste dolorum consequuntur aliquam illo! Illo necessitatibus porro perferendis consectetur molestiae in iure, beatae facere distinctio qui quam, at suscipit quod dignissimos maxime! Earum.
        Soluta temporibus fugiat natus, dolorum minus excepturi iste ipsam ab corrupti perferendis ex, deserunt facere. Pariatur incidunt ab fugiat minus doloremque error itaque, inventore est assumenda libero numquam earum quis.
        Libero quas delectus perferendis similique blanditiis, iusto architecto? Natus dolorum dicta voluptas! Nulla, repellendus esse. Soluta ipsum minus officiis, quidem tempora doloremque, inventore laborum earum harum aut dolore reiciendis repellat?
        Repellat, harum? Quibusdam, unde voluptatum vero nisi exercitationem eius odio sed repudiandae illum veniam aut sequi expedita ullam aspernatur! Hic tenetur perspiciatis numquam ipsum praesentium magni, nobis quis dolore! Ab.
        Temporibus inventore, voluptatibus amet corporis ad corrupti eius? Voluptatum expedita cumque libero vero harum culpa iure, velit distinctio cum totam repellat quas porro consequatur omnis deleniti unde sed, ad similique.
        Esse alias dolores fugit eius! Suscipit aspernatur reprehenderit eaque, quasi molestias velit quidem excepturi reiciendis nobis temporibus dicta mollitia architecto veritatis consequatur repellendus recusandae. Veritatis explicabo asperiores at officiis? Ad!
        Dignissimos accusantium ipsum id ipsa sint perspiciatis eum harum atque mollitia illo, obcaecati autem, dicta saepe soluta, perferendis unde sed blanditiis amet voluptates consequuntur qui veritatis ipsam hic dolore? Quibusdam.
        Quidem, officia neque! Neque atque cum repudiandae aliquam voluptatem fugit ex corrupti alias ut. Praesentium veniam sit tempore fugiat magni expedita itaque, perspiciatis cum odit alias id vitae? Cumque, aliquam.
        Reprehenderit, maxime eos? Labore corporis adipisci ipsam velit doloremque dicta mollitia non ipsum consectetur voluptates magnam, nisi recusandae, officiis hic, dignissimos animi rem quibusdam autem suscipit quod in? Voluptatum, illo.
        Quibusdam at, ullam ipsam eveniet facere quaerat asperiores fugit alias suscipit ratione dolores dolore earum! Minus, asperiores, laudantium dolor accusantium ipsum quaerat totam quos velit corporis, earum numquam nihil quia!
        Laudantium, tempore? Quod alias deleniti eligendi impedit repellendus odio exercitationem quidem sint nemo consequuntur totam sit laboriosam, amet quasi sapiente explicabo quos, nostrum sed a ab iste illum facere doloribus.
        Reprehenderit, blanditiis suscipit maxime quibusdam illum recusandae odio nulla quis iusto facere laborum aspernatur quaerat dicta hic harum, officia saepe quia adipisci maiores ea? Quidem, culpa officiis! Provident, odit maxime?
        Ex aliquid esse quod iste accusantium, totam aspernatur unde, quia perspiciatis omnis reiciendis exercitationem iusto repudiandae, voluptatem architecto! Optio harum omnis molestias et voluptatibus voluptates quis recusandae atque ipsum doloribus.
        Suscipit vitae pariatur tempore dicta dolores aut voluptas sapiente facere autem modi? Natus doloremque magnam distinctio aut soluta. Sunt illum facere est adipisci quaerat similique numquam odit eius natus delectus!</div>
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
    </main>
  );
};

export default ChatRoom;
