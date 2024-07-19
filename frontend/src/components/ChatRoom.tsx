import React, { useEffect, useState } from 'react';
import { IoSendSharp } from 'react-icons/io5';
import img from '../assets/chatlogo.png';
import styles from './ChatRoom.module.css';

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

    window.addEventListener('resize', adjustHeight);
    window.addEventListener('focusin', handleFocus);
    window.addEventListener('focusout', handleBlur);

    return () => {
      window.removeEventListener('resize', adjustHeight);
      window.removeEventListener('focusin', handleFocus);
      window.removeEventListener('focusout', handleBlur);
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
            <p>Participant1</p>,
            <p>Participant2</p>
          </div>
        </div>
      </div>
      <div className={styles.content}>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe neque ipsam distinctio assumenda voluptatibus odio consectetur sed ut reiciendis. Autem distinctio consequatur temporibus fugit accusantium veritatis nam earum ratione reprehenderit?
       Dolor ad consectetur laborum quod culpa rem aliquam modi illo laudantium doloribus. Iure repellendus perferendis omnis! Voluptates, aspernatur. Dolorum in repudiandae eligendi id praesentium aliquam incidunt amet totam ullam dignissimos.
       Sint voluptatum in dolorem facere perferendis, saepe non corporis fuga, enim quia culpa? Tempore natus temporibus ipsam quod expedita in necessitatibus consectetur dignissimos sed sapiente aut sint, obcaecati, iste illum.
       Rerum perferendis error rem debitis eligendi fuga temporibus voluptas ipsum tempora vitae deleniti nemo ipsam repellat quia quaerat nobis, possimus ex fugiat autem accusamus. Illum quam ullam adipisci laboriosam molestias?
       Ipsa ex rerum molestias dolores tenetur est distinctio? Excepturi enim voluptatum consequatur officiis error quis cumque placeat fuga, ex unde aliquid id numquam doloremque eaque autem nisi modi ut cupiditate!
       Rem culpa eum possimus vitae! Nobis dolorum dicta quisquam, molestias neque deleniti explicabo repudiandae quaerat reprehenderit magni, debitis pariatur nulla asperiores aut unde! Maiores perspiciatis alias harum omnis nesciunt quae.
       Molestias, obcaecati? Sint at magni, provident natus optio corporis placeat officia voluptate mollitia minima, dolores fugiat possimus non dicta earum commodi quibusdam autem nemo excepturi repellendus repudiandae. Expedita, vero sed?
       Nobis, vero minus nisi consequuntur placeat libero officia veritatis perferendis, fugiat repellat vel excepturi nam asperiores aspernatur nihil! Quia sed iusto numquam suscipit nemo officiis dignissimos dolore minima ratione recusandae.
       Quas deleniti in omnis officia esse, similique quibusdam cumque libero voluptate amet sit iusto? Quia quidem maiores ab fugiat molestias quaerat maxime eveniet incidunt temporibus, qui porro modi earum at!
       Distinctio voluptatem odit laudantium provident ipsam adipisci at optio, eaque nihil atque quasi totam et perspiciatis autem veritatis labore a quis reprehenderit dolorem. Animi, itaque! Aut quia vero quasi! Quisquam.
       Aliquam modi ipsam qui nemo impedit, est repudiandae accusamus iure voluptas quia odit ducimus nulla tempore, rerum repellendus! Ducimus molestias qui, repellat officiis et facere aliquid ullam saepe ratione praesentium.
       Dolores consequuntur at non sed reprehenderit molestiae, tenetur, natus error eius ut aspernatur amet labore sapiente eveniet voluptate nisi vel harum velit. Soluta delectus ipsum voluptatibus illo in nostrum saepe?
       Officiis saepe odio ducimus itaque, dignissimos repellendus debitis nobis rem. Similique modi, totam quae laborum praesentium assumenda, dicta neque omnis est fuga maxime accusantium qui velit reiciendis iure quisquam earum.
       Dignissimos sit consequatur adipisci voluptatum quod, molestiae doloremque cumque nostrum harum corporis fuga officiis reprehenderit id voluptates excepturi veniam in ipsa tempora non dolor debitis, ducimus unde dolores ut? Impedit?
       Blanditiis, laborum unde nesciunt et error animi tempore odio temporibus nam facere accusamus at, dolore expedita id ea qui autem aliquam vel saepe consectetur totam nulla asperiores magni! Iste, excepturi?
       Delectus eum dolores praesentium culpa, facilis officiis error labore veniam, nemo, modi eveniet quis sit animi repudiandae iure vitae! Voluptatem aliquid laborum fuga quae praesentium consectetur nemo doloremque, cumque accusamus.
       Recusandae quod dolorem est minus suscipit deleniti maxime commodi similique eum dolores architecto molestias ex quaerat vitae magni nemo, eius voluptas odit saepe accusantium harum vel. Architecto corporis quaerat maiores!
       Molestias nisi ex alias adipisci aliquid quos facere ad est harum. Eligendi, quas suscipit. Officia ex obcaecati, soluta rem voluptates unde quasi odio laboriosam a ut voluptatum magnam, at esse?
       Enim, nostrum animi doloremque placeat molestiae facere cum nobis adipisci at consequuntur quam, labore praesentium similique. Saepe dolorum iusto quas, debitis quae sint consequatur odit numquam accusantium eaque amet eos.
       Sequi, ipsam aut rem sint reprehenderit recusandae quia nostrum, fugiat molestiae quod expedita dignissimos quas voluptas deserunt harum facilis. Accusamus corporis accusantium fugit voluptas quod veritatis, impedit tempore quidem magni.
       Ab, iure cupiditate doloremque cum quam fuga nemo et! Impedit eius ad repellendus fuga commodi doloremque enim assumenda deserunt facilis iste natus, provident, alias atque voluptate eligendi esse maxime inventore!
       Inventore numquam eligendi excepturi. Et provident amet, expedita dolor id magnam, nulla porro suscipit itaque eligendi minima voluptatibus, a asperiores maiores. Ipsum molestias blanditiis modi neque, sed commodi doloribus consequuntur.
       Blanditiis, consectetur impedit aspernatur veritatis similique reiciendis eius, natus minima amet iure sed aliquam eveniet, voluptate sunt officiis corporis earum! Sunt nisi sit aut. Odit incidunt necessitatibus debitis earum ut.
       Recusandae quae porro illum earum rem magnam numquam voluptatem repellendus impedit, sint sapiente placeat esse ipsa fuga a ipsam quos minima! Corrupti ipsum iure sit enim quia animi. Vero, non?
       At eum labore delectus consequatur rerum sapiente aut consequuntur id! Iste distinctio sit suscipit illo, voluptates nostrum et perspiciatis error ipsum temporibus! Reiciendis officiis esse aspernatur soluta cupiditate in natus!
       Enim dolorum aliquid nulla quibusdam deleniti vitae, officiis minima fugiat ad reprehenderit consectetur eos architecto blanditiis et explicabo consequatur ipsum eum impedit aliquam voluptas quae, maiores aperiam ab autem? Reiciendis.
       Similique eum aperiam ea adipisci laborum repudiandae reprehenderit neque ipsa eaque quod fugiat expedita aliquam modi autem, quas veritatis ducimus saepe dolore. Delectus earum, doloribus iure architecto dignissimos impedit facere!
       Consequuntur vero enim soluta iste ad laudantium mollitia tempora hic praesentium facere nulla architecto voluptates, id, dolores reiciendis blanditiis, vitae aspernatur nam qui. Dolor doloremque laborum rem illo doloribus adipisci!
       Necessitatibus minima at vel labore ut beatae? Dolore dolor dicta nihil necessitatibus, dolores odit sunt libero est aspernatur ducimus minima aperiam, quo excepturi sit rem eius perferendis eum facere deserunt.
       Officiis cum voluptatibus, eaque doloremque cumque unde nisi, inventore ex dignissimos totam doloribus temporibus dolores eveniet necessitatibus eius ducimus nam! Quaerat expedita veritatis nulla pariatur. Totam, deleniti! Doloremque, eius commodi.
       Voluptatem maxime corporis debitis maiores ex reprehenderit repellendus cumque, aspernatur labore natus atque esse repudiandae cupiditate dolores quod modi aliquid voluptate, quos placeat doloremque. Vel eaque nam error adipisci repellat.
       Architecto, expedita labore. Quibusdam doloremque doloribus delectus voluptate atque nostrum dolor provident unde molestias optio, consequuntur ullam laudantium accusamus. Quisquam rem eius incidunt, assumenda cumque error quae inventore nesciunt veniam!
       Atque consectetur architecto quod pariatur, amet est perspiciatis ab doloremque provident dolore ad magnam totam nemo sit eius sunt, aspernatur ex! Enim ratione reprehenderit omnis excepturi eos sit animi modi.
       Dolore debitis in exercitationem officiis temporibus neque, molestias pariatur reprehenderit sunt nemo accusamus dicta quidem veritatis facilis dolorem asperiores eum odio, eos dignissimos saepe mollitia unde illo incidunt. Magnam, tempora!
       Quam eveniet officiis hic quo sit nihil quisquam aliquid voluptates, est ut inventore tenetur omnis libero delectus rem necessitatibus repellat? Aut eos, repellendus nihil similique suscipit magni eligendi possimus totam?
       Vel tempore aperiam dolorum minus. Mollitia unde quisquam rem nobis autem aliquam deserunt officia consectetur, obcaecati nesciunt illum possimus quos ex sint doloribus nihil iusto cupiditate, nostrum fugiat aliquid corrupti.
       Quaerat illo error molestiae ipsam, aliquid magnam exercitationem architecto veritatis quis et, libero consequuntur nostrum dolore sit cumque perspiciatis non ut omnis ad quas iste laborum eos. Sed, quis ipsa.
       Culpa dignissimos ut voluptates voluptatem veritatis consequatur vero iste in, similique nisi repudiandae tenetur itaque qui obcaecati quos, placeat delectus ea commodi, ducimus aperiam reprehenderit? Provident, reiciendis? Ad, fuga cupiditate!
       Voluptatem sint excepturi magnam consequatur unde! Unde optio ratione odio vitae dolores veritatis vero. At odio alias pariatur ipsam numquam laboriosam neque, quo asperiores sapiente cupiditate consectetur quos quam animi.
       Eum at fugit nam provident dolorum odit illum laboriosam magni? Aperiam veniam corporis quisquam unde explicabo dolorem magnam laborum enim ab esse quam beatae possimus laudantium libero, rerum, expedita doloribus.
       Nihil perspiciatis eum delectus error laudantium consequatur! Perspiciatis dolor quod similique neque dicta quia consequatur repellat! Dolor illum recusandae consectetur, sapiente iste neque aperiam cum odit eaque atque magni officiis.
       Ratione nesciunt, dignissimos ullam dolorem enim iusto amet esse vero harum optio doloribus adipisci sapiente minus mollitia nam est praesentium tempora corporis quos iste veritatis animi cupiditate quaerat! Libero, saepe.
       Voluptas deserunt ab illo. Cum dolorem architecto distinctio quasi deserunt, laboriosam necessitatibus eius voluptatum? Nostrum laboriosam consequatur tempore voluptate! Ab minus nobis rerum, debitis officiis quis nam ducimus facere quidem.
       Aspernatur consectetur quasi aperiam quae natus culpa minima rerum optio, corporis in fugiat magni necessitatibus vitae commodi nostrum itaque vero officiis eius exercitationem quod ex ducimus. Magni voluptate dolores reiciendis.
       Ullam repellat quo consectetur iste dicta voluptatibus dolore minima, ea alias. Eos aliquid nobis cupiditate nesciunt eius quo quaerat iure eligendi quia hic, impedit laboriosam, laborum autem iste mollitia doloribus.
       Eveniet repudiandae totam assumenda odio iusto itaque! Error ut odit nesciunt dolorem tenetur, vitae perspiciatis pariatur, nobis soluta, at vel facere velit sunt natus earum! Inventore, modi quasi? Error, illo.
       Laboriosam, inventore dicta at nam accusantium eos, quasi distinctio necessitatibus voluptatem id molestiae nihil, cum aliquid consequuntur excepturi accusamus assumenda porro tempore cumque animi in magnam sapiente veritatis. Quidem, blanditiis!
       Cum accusantium modi doloribus iure dolorem dolor soluta! Delectus voluptate culpa voluptatum deserunt animi suscipit, est neque minus ullam officia tenetur ea rerum inventore, dolorum, harum labore tempore obcaecati possimus.
       Porro recusandae magnam voluptas perferendis et voluptatem facilis expedita quidem nulla. Facilis aspernatur doloremque ea nisi maxime et tenetur velit esse voluptates at voluptatem id, dicta perferendis tempora repellendus officia.
       Adipisci cumque voluptate explicabo iste dolore. Voluptate molestiae iure officia voluptatem aut deleniti labore aspernatur ducimus quos! Minus reiciendis, vero unde ratione laboriosam animi enim vel dolorum, voluptas eum inventore.
       Ut, adipisci? Placeat eius veniam quasi quo minus nam officiis, vitae iste soluta reiciendis repellendus, recusandae autem perferendis atque. Fuga, numquam pariatur est ipsum corporis error necessitatibus molestias autem recusandae.
       Qui quisquam suscipit quam. Incidunt rerum repellat ducimus et, libero, qui facere vitae, voluptate nesciunt nobis sequi. Officiis harum voluptatibus a commodi corrupti? Aspernatur, adipisci. Quam magni nemo sit ullam.
       Quod, maiores earum? Dolorem tempore voluptatem reiciendis iste vel rerum autem cum sed, fugiat, voluptates officiis molestias, nesciunt eaque assumenda aperiam. Provident tenetur, quo nihil perferendis porro obcaecati repudiandae enim!
       Quae ipsa laborum enim quam tempore culpa iste repellendus, et minus sunt sint fugit, ipsam obcaecati aliquid quo veritatis quod quasi maxime sit, earum alias aut assumenda mollitia iusto. Qui!
       Natus nostrum sed, assumenda odit, quos iusto error aut similique cum quod eum totam eius porro dolores cumque at repudiandae? Esse praesentium quaerat hic consequatur similique nam illum iste doloribus.
       Quaerat corporis rem id perferendis consectetur nemo! Voluptatem accusantium dolorem delectus quidem, reprehenderit impedit minus pariatur aperiam vero, quas deleniti velit vel aut doloremque nemo ducimus unde repellat fuga officiis!
       Tempora quis optio assumenda. Corrupti, enim animi unde amet tenetur deserunt vitae cumque quibusdam cum sunt. Deserunt quibusdam esse voluptate veritatis neque, optio necessitatibus explicabo, nostrum iusto nam itaque fugiat.
       Repudiandae optio impedit necessitatibus distinctio dolores reprehenderit blanditiis eos ad consequatur iste. Repudiandae rem, nesciunt magnam distinctio tempora in asperiores, accusantium alias provident totam ea itaque minus enim ut dolorem?
       Provident aperiam necessitatibus vitae delectus excepturi est praesentium deserunt, atque ex deleniti, soluta itaque maxime doloremque laboriosam dolorum numquam rerum cupiditate inventore vero et quas sunt sapiente! Iusto, dolor nostrum.
       Delectus dolore labore modi, quidem sequi aliquid, aliquam temporibus nesciunt consequatur quibusdam repudiandae molestiae doloremque animi! Tempore at nisi doloremque, quae eligendi porro ex fuga obcaecati labore dolor atque omnis!
      </div>
      <div className={styles.inputContainer} style={{ bottom: `${inputContainerBottom}px` }}>
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
