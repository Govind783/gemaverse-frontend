import React from 'react'
import Image from 'next/image'
import Controller from "../../assets/controller.png"
import mouse from "../../assets/mouse.png"
import { useRef, useEffect } from 'react'

const HomeIndex = () => {
    const controllerRef = useRef<HTMLImageElement>(null);


    useEffect(() => {
        const controller:any = controllerRef.current!;

        const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
            const { clientX, clientY } = event;
            const centerX = controller.offsetLeft + controller.offsetWidth / 2;
            const centerY = controller.offsetTop + controller.offsetHeight / 2;
            const deltaX = clientX - centerX;
            const deltaY = clientY - centerY;
            const percentX = deltaX / (controller.offsetWidth / 2);
            const percentY = deltaY / (controller.offsetHeight / 2);
            const maxAngle = 3;
            const angleX = -maxAngle * percentY;
            const angleY = maxAngle * percentX;

            controller.style.transition = "transform 0.2s ease-out"; // Add transition
            controller.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        };

        const handleMouseLeave = () => {
            controller.style.transition = "transform 0.5s ease-in"; // Add transition
            controller.style.transform = "";
        };

        if (controller) {
            controller.addEventListener("mousemove", handleMouseMove);
            controller.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (controller) {
                controller.removeEventListener("mousemove", handleMouseMove);
                controller.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, [controllerRef]);

    return (
        <div className='homeIndexMainParent'>
            <div>
                <p className='heroIntroduceFont font-extralight interFont text-center text-sm'>INTRODUCING GEMAVERSE</p>
                <br />
                <div className='heroText lg:text-9xl  md:text-7xl text-7xl text-center'>GAME ON GET FIT</div>
                <p className='proxonFont text-center offWhite text-xl mt-2 font-normal'>
                    Level up your gaming skill and health, and earn rewards for
                    <br />
                    your victories on our platform.
                </p>
            </div>

            <div className='container'>
                <Image src={Controller} alt='Controller' quality={100} className='mx-auto controller' ref={controllerRef} />
            </div>

            <div className='relative lg:-top-40 md:-top-28 '>
                {/*<Image src={mouse} alt='mouse' quality={100} className='mx-auto' />*/}
                <div className="mouse">
                    <div className="roll"></div>
                    <div className="rollshadow"></div>
                </div>
            </div> 

            <div className="divider mx-auto">

            </div>

        </div>
    )
}

export default HomeIndex