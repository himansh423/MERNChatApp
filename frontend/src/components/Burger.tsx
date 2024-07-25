import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import gsap from "gsap";
import styles from "./Burger.module.css";
import { RxCross1 } from "react-icons/rx";
import { BurgerAction } from "../store/Burger";
import { Link } from "react-router-dom";
import { RootState } from "../store"; // Assuming you have a RootState type defined in your store

const Burger: React.FC = () => {
  const { burClick } = useSelector((store: RootState) => store.burger);
  const dispatch = useDispatch();
  const burgerRef = useRef<HTMLDivElement | null>(null);
  const crossRef = useRef<HTMLButtonElement | null>(null);
  const optionRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const handleBurgerClick = (bool?: boolean) => {
    if (bool) {
      dispatch(BurgerAction.crossClick());
    } else {
      if (burClick) {
        dispatch(BurgerAction.crossClick());
      } else {
        dispatch(BurgerAction.burgerClick());
      }
    }
  };

  useEffect(() => {
    const burgerElement = burgerRef.current;
    const crossElement = crossRef.current;
    const optionElements = optionRefs.current.filter(Boolean) as HTMLAnchorElement[];

    if (!burgerElement || !crossElement || optionElements.length === 0) {
      return;
    }

    gsap.killTweensOf([burgerElement, crossElement, ...optionElements]);

    if (burClick) {
      let tl = gsap.timeline();
      tl.to(burgerElement, {
        display: "flex",
        right: 0,
        duration: 0.7,
      });
      tl.fromTo(
        optionElements,
        {
          x: 150,
          opacity: 0,
        },
        {
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          opacity: 1,
        }
      );
      tl.fromTo(
        crossElement,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        }
      );
    } else if (burClick === false) {
      let tl = gsap.timeline();
      tl.to(crossElement, {
        opacity: 0,
        duration: 0.5,
      });
      tl.to(optionElements, {
        x: 150,
        duration: 0.5,
        stagger: 0.1,
        opacity: 0,
      });
      tl.to(burgerElement, {
        right: "-100%",
        duration: 0.7,
      }).then(() => {
        gsap.set(burgerElement, { display: "none" });
        gsap.set(crossElement, { opacity: 0 });
        gsap.set(optionElements, { x: 150, opacity: 0 });
      });
    }
  }, [burClick]);

  return (
    <div
      ref={burgerRef}
      className={`${styles.BurgerContainer} hidden h-screen w-screen flex-col items-start gap-8 pl-10 pt-20 absolute top-0 right-[-120%] z-40`}
    >
      <button ref={crossRef} onClick={() => handleBurgerClick()}>
        <RxCross1 className="absolute top-8 right-6 text-2xl" />
      </button>
      {["Enter in Chatroom", "Create Chatroom", "Contact", "About","Terms & Conditions"].map((text, index) => (
        <Link
          to={`/${text}`}
          key={index}
          onClick={() => handleBurgerClick(true)}
          ref={(el) => (optionRefs.current[index] = el)}
          className="text-black w-60 h-[50px] text-2xl border-b-2 border-black"
        >
          {text}
        </Link>
      ))}
    </div>
  );
};

export default Burger;
