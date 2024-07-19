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
      <div className={styles.content}>
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
        <div className="overflow-scroll">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores aliquid beatae, eos architecto sunt voluptatum, placeat cumque deleniti illo impedit culpa maxime tempore error quo odit possimus exercitationem! Illo, itaque.
        Dignissimos ratione necessitatibus non sit in distinctio dolorem molestias iusto, nisi, soluta perferendis, similique molestiae iure quae quisquam? Dignissimos rerum voluptatem dolorem quaerat dolorum ipsam in consequuntur perferendis aperiam. Blanditiis.
        Excepturi amet ducimus porro neque vel similique sed, dicta illo nam, provident debitis blanditiis veniam optio natus placeat rem nisi eveniet error a at perspiciatis aliquid dolor corrupti est! Soluta?
        Dolorem placeat eius dolor commodi sequi? Dicta corrupti, sed temporibus vitae deleniti dolorem quibusdam iusto quae earum! Eum voluptas molestiae voluptatum, eius, vero eos cupiditate perspiciatis, deleniti assumenda hic animi.
        Dolores sapiente eligendi autem quas vel libero quia, ea quibusdam rem laboriosam minima cupiditate veniam accusamus officiis, repudiandae dolor pariatur optio laudantium modi voluptate amet aspernatur natus aut quam. Rerum.
        Nam non atque aspernatur, illo repudiandae sunt voluptatem quisquam dolor! Voluptates ullam eum pariatur veniam, quo officiis tenetur at accusantium sint quae deserunt ea ab aliquid similique culpa! Ab, incidunt.
        Reiciendis aut ea quos, animi, assumenda laborum est maiores, repellat praesentium vero eius. Veritatis ipsam repellendus atque. Ipsam quidem cumque minus ab, fuga ullam impedit debitis non aliquid quos qui.
        Amet aliquam facere ipsa eos fuga asperiores aspernatur modi animi eius, nisi quae earum alias esse non reprehenderit voluptatum nam voluptas facilis vitae quidem maxime beatae! Libero qui iure iusto!
        Earum, deserunt quos ex amet tempora quasi magnam tenetur consequuntur magni dolor perferendis aliquam facilis aut sunt ducimus soluta iure eveniet quas quia labore dignissimos, possimus inventore a nobis! Delectus?
        Quidem magni autem, quisquam at neque ad quibusdam dolorum, aperiam molestias eius non, nesciunt distinctio praesentium necessitatibus? Asperiores maxime eaque, minus quas illum distinctio. Amet animi hic vitae veritatis perferendis?
        Culpa, sit! Et possimus quidem sed quo atque! Magni voluptatum eaque qui, iure perferendis iusto tenetur pariatur praesentium sapiente libero modi? Quae nobis accusantium facere corporis quo voluptates molestias quaerat.
        Dignissimos exercitationem reiciendis aliquam, asperiores, eos aut perferendis distinctio commodi possimus, reprehenderit a. Molestiae nihil praesentium assumenda error. Quasi, ea necessitatibus tenetur mollitia molestias fugit sunt rerum ullam similique labore!
        Adipisci eum tempore explicabo iure enim consequatur expedita voluptate magni vel excepturi, dignissimos ipsam nostrum modi vero illo nesciunt neque accusamus? Consequatur voluptatibus libero distinctio asperiores cum recusandae voluptatem adipisci?
        Neque aperiam asperiores deleniti a quasi quaerat voluptatibus esse, vero illum veritatis, temporibus, libero commodi recusandae aspernatur cupiditate id laboriosam officia omnis? Magni, repellendus nostrum accusamus quia at itaque officiis?
        Vitae laborum recusandae maiores hic sed ut reprehenderit itaque possimus. Quis odio illum facere totam harum, veritatis placeat neque. Suscipit consequatur error odio eaque, omnis quod voluptates officiis atque distinctio!
        Veritatis ducimus necessitatibus quis provident! Quisquam aperiam cumque saepe, odit harum rem neque tenetur officia inventore et voluptatem quos odio temporibus velit alias dignissimos. Quibusdam voluptas dolor nulla voluptatem illo?
        Non expedita veniam laudantium ratione quisquam tempore possimus, minima cum porro ut aliquam numquam praesentium nisi unde sequi pariatur quaerat nesciunt. Vel tempora expedita, unde dolorem repellat ratione nam voluptatem.
        Qui, fugit incidunt! Labore laboriosam molestiae quasi optio id distinctio! Soluta molestiae sapiente, voluptate sit harum ab aspernatur laboriosam quisquam. Assumenda sed nulla consectetur inventore fugit voluptates voluptas dolorem necessitatibus.
        Odio ad doloribus, facilis nam sunt doloremque odit cum in ullam quod ut possimus, dolorem itaque sequi necessitatibus accusamus asperiores? In voluptas rerum, nemo eligendi magnam commodi reiciendis dolores similique.
        Nisi magni enim rerum numquam itaque sed, voluptas aliquid officia. Dolorem rem qui sit maxime. Maxime quis laudantium enim aut! Nobis ratione natus dolore quidem omnis illum excepturi. Voluptates, obcaecati.
        Accusamus vitae cum eaque illo nihil commodi magnam perferendis amet maiores nisi exercitationem ab, corrupti minus quo corporis consequatur praesentium voluptates quae debitis sed fugit mollitia odio at! Voluptatibus, id?
        Labore, tempore libero voluptate accusantium consequatur incidunt totam vitae quam modi quibusdam accusamus voluptatem iure rerum beatae qui cumque itaque eveniet necessitatibus repudiandae delectus, voluptatibus et ut, dolorem quaerat! Itaque?
        Nulla sequi ullam laborum impedit consectetur ipsam libero et fuga. Repudiandae quia, voluptatum cum, sed sapiente dolores blanditiis doloremque odio ab voluptatem magni illo quibusdam nemo labore dolorem autem ipsam?
        Velit, eligendi, perspiciatis magni beatae, vitae commodi a accusantium sequi et ducimus earum incidunt animi doloribus optio vel provident eum iusto? Doloremque vero deserunt est asperiores deleniti quia culpa assumenda?
        Praesentium unde libero cumque a veniam asperiores, veritatis quo. Aliquid nulla asperiores, dolorum nam ab cumque sint facilis maiores aliquam deserunt veritatis. Corrupti mollitia aliquid, nostrum laborum omnis quia accusamus.
        Velit accusamus culpa delectus nobis eligendi quis consequuntur cumque provident libero ducimus omnis nemo dignissimos, itaque unde, quidem in deleniti fugiat voluptatum eum, corrupti natus quae totam aperiam? Sunt, similique.
        Consequuntur iste amet, ex facilis aut quasi eveniet temporibus illo voluptates maxime magni harum accusamus modi nulla quis consectetur totam doloribus corrupti sapiente tenetur voluptate aperiam eligendi quos. Id, dolores?
        Hic quam blanditiis fugiat dignissimos! Omnis excepturi corrupti voluptatem beatae saepe eveniet? Hic quod in eum, magni illum quia, accusamus dolor provident ipsam sequi, eos consequatur impedit eveniet. Architecto, numquam.
        Magnam assumenda explicabo repellendus ea, dolore voluptatibus vero rem sapiente, molestias provident sed culpa et non maiores iste facere magni porro possimus qui veniam quia distinctio atque odio deleniti. Error?
        Quae alias at, inventore ipsam eum omnis commodi. Placeat quisquam ex, ipsa dolore molestias enim assumenda non adipisci at mollitia in eos provident, ea reiciendis optio quod officia. Sed, dolore.
        Eveniet voluptate aliquam ipsam, odio doloremque animi accusantium facilis quo temporibus alias consectetur beatae neque enim natus, suscipit iste qui placeat quia illum ab dicta maxime aperiam. Provident, sed. Excepturi.
        Magnam quis molestiae quo ad eius dignissimos eveniet. Perspiciatis ex eos deleniti ut reprehenderit facilis optio iste omnis molestiae, dolor maiores accusantium soluta voluptatem. Nihil totam blanditiis et illum numquam.
        Architecto recusandae quod tempora ullam necessitatibus. Alias quaerat at aperiam possimus perspiciatis aliquid illum optio dolorem perferendis nam. Cum, corporis? Ut, repellat ab. Doloribus nulla ducimus corporis eaque aperiam amet?
        Modi veritatis nulla hic. Vero reprehenderit eaque harum rem! Quam sed rerum qui perferendis minima distinctio. Veritatis, expedita amet architecto consequuntur omnis eligendi atque nemo nostrum, iste id magni aperiam?
        Illo cum sit corporis provident distinctio adipisci quia. Consequuntur ullam quasi laudantium ut unde, voluptatum est omnis, nulla ducimus saepe quo? Nesciunt reprehenderit, a mollitia in cumque alias corporis esse!
        Officiis vero delectus corrupti, minima ipsum voluptatibus dolor. Cumque numquam nesciunt inventore soluta hic eos facere reiciendis magnam nobis, iste harum, est repellendus accusamus repudiandae ipsam eius quia consectetur minima?
        Eos veniam qui reiciendis itaque delectus, quidem possimus ullam, repellendus obcaecati quibusdam sunt dolorem minus! Nulla nihil sunt quia, nisi ullam explicabo repellat quis dolore quos atque blanditiis cumque architecto.
        Assumenda maxime, laudantium quae vitae commodi quisquam facilis, incidunt est placeat modi quaerat, iusto repellat illum culpa saepe. Suscipit quia aperiam earum laboriosam blanditiis eaque libero. Quod unde perferendis aliquam.
        Adipisci voluptatum architecto beatae magni sapiente harum provident obcaecati soluta eius odit ipsa aut error labore voluptate doloribus, modi incidunt pariatur in nesciunt, accusamus natus unde aliquid officia temporibus. Quam!
        Dolorum officiis, consequatur dicta aperiam saepe at dolores. Ab vel dolore deserunt impedit voluptatibus, officia, adipisci optio et exercitationem magni cum nulla quam praesentium. Cum iure maxime animi quos error.
        Maiores, facere. Nulla quia fuga, libero possimus iusto at officia inventore facere qui cupiditate ipsum voluptates eum est deleniti non. Sit quae assumenda voluptatem mollitia et! Maxime assumenda labore repellat!
        Excepturi id in tenetur, eum ratione nisi assumenda eius? Saepe unde doloremque facilis eum reiciendis nam suscipit natus, minus, quae cumque excepturi eius alias neque beatae! Aperiam, tempora? Quam, corrupti.
        Quas illum molestias expedita alias quasi aspernatur perspiciatis atque repellat perferendis, soluta iure suscipit inventore iusto obcaecati unde mollitia! Quod ipsum excepturi sapiente omnis neque optio illum quia laudantium eos.
        Soluta et sapiente doloremque. Repudiandae molestiae suscipit recusandae, eaque ut, quia obcaecati accusamus ipsam tenetur ullam ex unde nulla repellendus odio alias eum soluta tempore voluptas deserunt commodi eveniet deleniti.
        Laudantium quibusdam accusantium doloremque, cupiditate blanditiis praesentium! Facilis voluptate iusto, voluptatibus iste saepe nihil eius ratione reprehenderit omnis veniam impedit quam hic ab iure dolor ad suscipit odio deleniti. Mollitia!
        Vero, ratione? Recusandae, ab excepturi? Reprehenderit assumenda delectus dolor eveniet quasi? Sed, non numquam fuga asperiores deserunt assumenda nemo quae voluptatum pariatur illo. Dolorem ea vero nam assumenda suscipit tempora?
        Quisquam, ipsam est! Eaque reprehenderit quasi quis possimus porro vero repellat. Asperiores eius eum architecto eligendi beatae explicabo doloremque ipsa quae odit? Laudantium voluptates, neque nemo doloribus error sapiente veniam?
        Doloremque repudiandae consequuntur assumenda eaque? Tempore dicta delectus dignissimos possimus numquam ut, ea maiores totam fugit sed deleniti quis, eum vero? Vero mollitia, minus rem corrupti necessitatibus reiciendis sunt deleniti!
        Eaque eligendi maxime consequatur voluptates dolorem voluptas tempore sint corrupti minus. Eaque explicabo quas totam consectetur? Velit consequuntur, dolorum nemo ducimus nulla tempore, mollitia suscipit, officiis aspernatur vero rerum veniam.
        Laudantium itaque pariatur deleniti delectus provident illum ab mollitia blanditiis eligendi odit numquam nobis fuga, cum asperiores optio nihil illo recusandae fugiat unde accusamus doloribus error iure? Impedit, soluta veritatis.
        Aperiam ratione deleniti, molestiae velit voluptatibus enim illum magnam quaerat dolorum harum vitae similique? Totam, cum similique! Doloribus, magnam. Alias, commodi error adipisci id molestiae harum optio deserunt possimus nisi.
        Necessitatibus pariatur recusandae animi dolorem nulla magnam, excepturi tenetur blanditiis repellendus quam totam ipsam inventore aut esse, eveniet, accusamus impedit voluptatibus quod quo eaque? Accusamus libero perspiciatis eligendi inventore unde.
        Velit alias, autem quaerat porro optio ad dolor minus beatae nihil. Natus quos deleniti, eius voluptate laborum, fugiat molestias dignissimos minima ipsam voluptas distinctio vel facilis delectus velit inventore corporis.
        Esse, fugit dolores ipsam ratione eveniet molestias accusamus quas asperiores, rem placeat consequatur quibusdam provident? Eos culpa quos earum corporis nulla pariatur necessitatibus repellat veniam sit. Asperiores in molestiae accusamus.
        Ipsam necessitatibus, ratione ipsa cum rem dolor impedit, commodi neque, nam a nisi esse aliquam sequi assumenda? Iure temporibus reiciendis magnam voluptates quas, adipisci dolorem possimus atque harum aut dolorum.
        Temporibus unde facilis voluptatem officiis voluptatibus aspernatur, autem nihil laudantium quas sed ea laboriosam, alias iusto voluptates id expedita minus repellat qui eveniet nostrum minima inventore quaerat animi esse! Obcaecati.
        Ipsam tempora labore atque dolore sit unde! Animi quasi culpa doloremque nulla omnis deserunt temporibus perspiciatis repellendus sed quos dicta, asperiores earum est cumque optio libero natus aut incidunt impedit!
        Facere necessitatibus corporis adipisci dolore rerum aspernatur beatae, reprehenderit aut quidem totam placeat corrupti facilis delectus harum debitis laborum iusto dignissimos magnam nesciunt illum quae, quaerat illo labore alias? Porro?
        Doloribus possimus, accusamus ullam adipisci, natus tenetur consectetur blanditiis consequatur eligendi voluptatibus rem, ipsam tempora cum debitis minima vero! Blanditiis vitae explicabo pariatur qui ipsa assumenda aliquid aperiam voluptatibus animi?
        At earum, sint aut hic possimus explicabo fugiat nihil expedita? Illum corrupti omnis ex deleniti temporibus cumque laboriosam harum excepturi blanditiis repellat. Voluptate earum facere neque a magni deserunt labore?</div>
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
