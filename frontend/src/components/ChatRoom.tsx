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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla deleniti sequi fugit deserunt laborum, ut sint iure quae nostrum eaque ea nam quo reiciendis fuga! Ipsa quo culpa assumenda aut.
        Excepturi, minima recusandae dignissimos aut eligendi error? Sit a suscipit ducimus id pariatur molestias vitae beatae deleniti atque corrupti earum sequi error reprehenderit veniam, accusantium numquam aliquam fuga recusandae natus.
        Ipsam aut numquam quisquam quidem vitae odit laboriosam. Tenetur, tempora libero quasi similique at, ea debitis atque labore enim illum in magni, dolor perspiciatis odit temporibus esse incidunt magnam! Doloribus!
        Facilis culpa accusamus et incidunt. Ex hic perferendis quidem autem cupiditate alias doloremque modi corporis ipsa? Placeat veritatis id ab sunt temporibus, hic ipsum architecto animi debitis, quidem mollitia voluptates?
        Maxime facere culpa maiores soluta corporis perferendis quibusdam accusamus delectus sed perspiciatis illum fugit beatae cumque omnis, architecto deleniti rem, explicabo, commodi quasi nemo ex voluptate mollitia temporibus dolores! Repudiandae.
        Natus corporis enim numquam autem tempore aspernatur. Error commodi magnam quibusdam! Quaerat aliquid optio sapiente nulla voluptatibus. Dolorem molestiae autem corporis eaque itaque amet vitae, earum sed cumque iusto voluptate.
        Voluptates aliquid reiciendis ex quas enim perspiciatis debitis earum amet laboriosam! Blanditiis officiis molestiae nostrum, iure porro maxime nisi quod quae quos fugit sint ab, numquam rem quidem natus deleniti!
        Eligendi, sint velit placeat pariatur vero sapiente aperiam qui eos deleniti non dolore beatae neque. Accusantium vel itaque id rerum dolore nostrum ab, repellendus, aperiam doloribus sapiente delectus cupiditate totam!
        Qui ullam quibusdam sed? Tempora ducimus rerum nobis ut doloribus officiis, odio enim qui commodi. Doloribus natus qui harum. Illum, a. Sit accusantium id autem ab excepturi dolorum, unde iure!
        Consequatur, dicta? Veniam, eligendi vero. Vitae earum hic exercitationem corrupti laborum nihil veritatis quidem, ut, aperiam laudantium eos sed ullam! Consequatur neque blanditiis ea eaque repudiandae iure doloribus incidunt provident?
        Ut tempore pariatur quam cupiditate minus, molestias doloremque quibusdam quaerat ex! Enim illum iure consequatur facilis amet repellendus natus odit omnis accusamus cupiditate aut, vero porro qui corrupti, consectetur quasi?
        Officiis exercitationem recusandae enim perspiciatis optio repellendus illum distinctio at! Voluptate, illo id! Doloribus fugit, debitis ducimus distinctio enim eveniet eius dolorem, nostrum dolor atque harum laboriosam voluptates, soluta incidunt?
        Ea, temporibus? Possimus veniam amet similique modi quisquam, illo temporibus eos veritatis nesciunt vero earum corrupti consequuntur non beatae inventore voluptatum deleniti vel quis libero aut quam iusto fugit laboriosam.
        Velit nulla sequi, repudiandae, maiores provident rerum quisquam ducimus itaque unde perferendis libero aperiam doloribus praesentium obcaecati repellat molestiae corporis nihil eum consequuntur esse hic! Consectetur accusantium corrupti quo ea!
        Quae est iure qui inventore excepturi numquam ea fuga quaerat quo officia officiis doloremque, dolorem nemo? Dolor officiis magnam pariatur eveniet dolorem tempora reiciendis animi? Mollitia quam saepe velit temporibus?
        Similique harum, accusantium nulla dolore omnis odio sapiente hic? Sit perspiciatis tempore, incidunt mollitia quidem maiores quasi? Perferendis, reiciendis dolores earum, beatae consequatur repellat, repudiandae harum consectetur esse error perspiciatis.
        Qui maxime, accusamus sint quidem quis porro inventore aspernatur! Molestiae possimus, nostrum eaque quae consectetur mollitia maxime dolore porro sit, ut veritatis culpa debitis! Iste adipisci omnis totam eligendi quaerat?
        Labore neque iste dolores qui magnam laborum eveniet temporibus tempora. Neque quisquam illum nam unde atque magni repellendus quia sunt odit earum, soluta doloremque, molestiae nemo modi deserunt, tenetur rerum.
        Incidunt, nostrum quas, necessitatibus exercitationem maiores adipisci minus ut quibusdam vitae ipsam aliquam ducimus consequuntur tenetur nemo eaque quaerat laborum commodi iste ipsum facilis repellat quae, esse reprehenderit. Nisi, officia?
        Repellendus tenetur odit at sit sunt natus? Quibusdam, enim veritatis, saepe sed alias hic id praesentium maxime consequatur ea beatae architecto nam, vel magni assumenda quasi ab animi perspiciatis! A.
        Ducimus quia laboriosam eum quam facere commodi, qui molestiae eaque, aliquam, magnam ex voluptates maxime fugit! Impedit commodi sit sequi, velit nemo aliquam voluptas sint tempora nobis at soluta rerum.
        Dolores, voluptates dolor. Ducimus consectetur sapiente suscipit obcaecati quae porro expedita esse odit quia excepturi? Quod ratione eligendi ipsum deleniti soluta est voluptate nisi? Excepturi unde dolor culpa placeat atque.
        Qui tempore deserunt ullam eligendi ab est nobis vel id minima obcaecati voluptatem, accusantium ipsam ut voluptate nesciunt praesentium nemo consectetur repudiandae maxime cumque quas veniam atque? Eius, saepe at.
        Sunt vero repudiandae blanditiis? Provident reprehenderit perferendis natus ipsa. Incidunt qui dolorem saepe neque debitis adipisci, obcaecati ex ut corrupti tenetur nostrum pariatur itaque vero placeat accusamus. Explicabo, suscipit? Repellendus!
        Eligendi, incidunt error magni quisquam sunt alias, mollitia iure, nesciunt aliquam similique asperiores omnis quis sequi. Hic ut veniam ea eligendi voluptate minima corrupti officiis iure! Harum blanditiis quas delectus.
        Ea culpa unde laborum autem laudantium aut ipsam atque, veritatis consectetur iusto voluptatem natus consequatur voluptas molestias dignissimos aliquam voluptatibus, libero asperiores placeat? Aut cupiditate facilis, quas vel distinctio obcaecati.
        Facere at soluta sequi sed earum accusantium quod non aut id, blanditiis enim voluptates omnis repellendus, atque aperiam quibusdam! Quis qui, at esse illum dolorum cumque veniam natus necessitatibus ea.
        Dolor, facere eius. Sapiente excepturi rerum, doloribus repellendus quidem quaerat magni recusandae ut reiciendis commodi at aliquid possimus vel cumque omnis aperiam quis, doloremque earum ullam maiores facere velit facilis.
        Deserunt neque illo asperiores aperiam odit et commodi temporibus. Quod fuga ea voluptatum expedita enim atque velit dolor ipsum et repellat iusto harum, est quae quibusdam alias ratione asperiores consequuntur?
        Cupiditate animi in qui dolor. Sint, soluta quidem labore laboriosam, inventore ea quis adipisci libero nobis esse quae nihil in minus, laudantium ad nisi maxime aliquam quas aliquid incidunt repudiandae!
        Dolores reiciendis, saepe beatae, cupiditate consectetur odit at, molestias nobis eaque autem esse necessitatibus. Minima amet assumenda, vel placeat velit deleniti dignissimos maiores provident sapiente ad dolorem, doloremque, accusantium magnam.
        Rem maxime dignissimos libero quae illum, impedit facilis quo tenetur esse a, mollitia dicta exercitationem, debitis quis quidem. Veniam odit illum omnis ea cumque sapiente debitis dignissimos ratione facilis porro.
        Deleniti tempore deserunt nostrum nihil omnis natus qui repudiandae explicabo recusandae pariatur aspernatur minus facilis quo odio repellendus perferendis, eligendi libero, non doloribus quidem commodi accusantium et iure harum? Recusandae.
        A mollitia, aliquid illum explicabo neque quam itaque odio, eveniet officiis quidem consequuntur enim vitae iusto facere saepe minima eum accusamus voluptate dignissimos distinctio. In veritatis temporibus accusantium recusandae voluptates?
        Iste quia consequatur eaque ad libero repellendus assumenda suscipit doloremque illo obcaecati non consectetur sed explicabo maxime totam, optio in, id qui quibusdam impedit saepe odit, aperiam hic. Doloremque, blanditiis.
        Aliquid sed rerum quam cumque, totam tempora molestias voluptas repudiandae placeat vitae, nobis blanditiis deserunt porro exercitationem illum omnis incidunt? Unde excepturi quod iste enim est praesentium aspernatur facilis cupiditate?
        Perferendis quaerat magni molestiae ipsa blanditiis aliquam voluptate odit nesciunt autem, incidunt saepe vero. Id facere vero, cupiditate asperiores illo rem facilis. Consequuntur error, facilis molestias totam sequi ipsam facere.
        Nihil nemo, delectus dolore dolor adipisci itaque facilis repellendus blanditiis illo voluptatum. Magnam vitae rem suscipit provident, ipsum in id laboriosam corrupti iusto dolorem. Nostrum nam velit quo nisi quisquam?
        Ratione dolores saepe at, iusto unde aliquid, provident ducimus dolorem, voluptatibus repellat dolore minima laboriosam eos mollitia quidem reiciendis quaerat itaque ullam voluptatum incidunt quisquam? Excepturi ullam aut voluptatum laboriosam.
        Impedit laudantium alias tempora similique. Asperiores vel, recusandae aspernatur rem nostrum fuga! Vitae, rem modi! Nulla itaque et magnam iusto ex labore nesciunt. Nam amet dicta facere magnam voluptatem unde!
        Nihil esse, maxime alias quos voluptatem nobis molestiae ipsam libero porro! Debitis, quibusdam quo non ipsum eius magni ipsam officia fugit dolorum? Eligendi quidem consequatur ad distinctio harum vero veniam.
        Eaque, quas nisi? Sed quasi minima sint. Aliquam, provident, perferendis, quidem fugit aut pariatur beatae molestias vero reprehenderit repellendus porro! Tempora perspiciatis voluptates saepe nostrum distinctio illo, odit accusamus exercitationem?
        Cum aliquid a maiores quis hic? Numquam molestiae soluta quas neque explicabo. Quos soluta necessitatibus fugiat, earum corporis tempora rerum sed, est labore sint a ducimus omnis, odio eum illum.
        Aperiam quisquam, nihil pariatur perspiciatis odio, beatae nobis rem ipsum veniam id consequuntur, quos neque! Soluta recusandae nihil incidunt corporis asperiores repudiandae amet. Id autem dolorem facere, magni et aliquam.
        Corporis ad in, neque commodi voluptas provident explicabo fugit minima. Non hic suscipit, eos vel ad minima veniam excepturi. Quo laborum dolorem aperiam cumque exercitationem ex nobis et quod accusantium?
        Tempora, molestias ipsa? Explicabo nulla, ad odit, est iste delectus animi nisi reprehenderit id quae quibusdam ea ut! Ad ex cumque obcaecati incidunt animi fuga enim ipsam magni dolorem in.
        Maiores voluptatum repudiandae omnis error! Velit, magni minima quos laboriosam earum possimus facilis rerum nobis deleniti aliquid, eum molestias amet reiciendis ipsam impedit ex illo, aperiam asperiores dolorem consequuntur aliquam.
        Repudiandae consequuntur maiores quo deserunt, possimus quos vitae cum, atque aliquam architecto odit quam molestias saepe non quaerat error aliquid accusamus. Quasi, saepe? Culpa sapiente id magnam quo possimus accusantium?
        Corrupti aliquam neque dolore eveniet ab corporis. Rerum maxime explicabo quibusdam vel, totam voluptate hic alias neque dignissimos nesciunt exercitationem ad fuga! Eius culpa sapiente perspiciatis quibusdam sint. Ullam, fugit!
        Modi tempora cumque necessitatibus sint molestias perspiciatis, laudantium dolorem sed quia, laboriosam deleniti! Cupiditate, esse! Molestias expedita doloremque ipsam soluta, rem totam repellendus obcaecati voluptatem perferendis dolorum repellat, assumenda incidunt.
        Voluptates, iure! Quidem ipsum accusantium explicabo quas voluptates quod dignissimos at corporis, harum nulla esse totam laudantium velit, culpa numquam natus fuga debitis dolore sequi labore ipsam quo enim voluptatum.
        Officia quos excepturi quod nisi fugiat placeat at, neque beatae deserunt architecto rerum sequi aut repellendus voluptatibus consequuntur similique dicta accusantium. Recusandae qui, quod veritatis culpa eligendi blanditiis nam quis.
        Odio est, iusto inventore at soluta tempora reprehenderit! Repudiandae magni esse laudantium dolorem nesciunt consectetur numquam? Voluptate esse molestias neque possimus eaque veniam quam corrupti sint animi perferendis, deserunt aut?
        Itaque esse id repellendus vero natus, nihil impedit similique, nemo aliquid maxime qui? Culpa, optio esse. Nesciunt molestiae architecto esse quae, maiores ullam recusandae beatae iste eaque dolorum id deserunt.
        Inventore animi ab saepe, veritatis dolor eum fuga corporis pariatur optio quas quam asperiores earum enim sint quisquam nesciunt! Similique commodi dolor ad repellendus deleniti totam error fugiat sint veritatis?
        Recusandae, laborum minus numquam odit voluptate delectus, ducimus minima doloribus maiores nostrum esse corporis nam et sunt, incidunt earum adipisci perferendis excepturi! Consectetur sint facilis inventore fugit nemo perspiciatis sapiente.
        Nobis sed tenetur maiores reiciendis fugiat quibusdam porro placeat atque odio assumenda, sunt quo corporis, non eligendi magnam ea a provident tempore blanditiis perspiciatis ipsum aliquam laborum fuga. Laborum, earum?
        Quo dolor praesentium, quidem repudiandae voluptate velit quaerat a minima nisi sed. Explicabo ad, quisquam quo ut aspernatur corrupti neque consectetur excepturi sequi vel enim, inventore deleniti, commodi ab odit.
        Voluptatem expedita molestiae nostrum quam, veniam ex labore ad corporis eveniet quis, repudiandae porro nisi quidem tempora! Quidem vitae quos, explicabo praesentium quibusdam odio totam voluptate iste recusandae laudantium optio.
        Vero placeat quidem molestias. Aperiam repudiandae explicabo obcaecati provident impedit molestias repellendus, iure ratione odit quae! Eaque eveniet quam odio corporis at libero, dicta expedita. Recusandae quo enim tenetur asp
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
