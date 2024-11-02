import Header_icon from "@/app/assets/Home_art 1.svg"
import TypingAnimation from '@/components/ui/typing-animation'
import Image from 'next/image'

type Props = {}

function HeaderScetion({ }: Props) {
    return (
        <div className='w-full md:flex justify-between'>
            <div className='md:w-[45%] flex justify-center items-center'>
                <div className='w-[80%]'>
                    <TypingAnimation
                        text={`Hello! I'm Sujan, a Creative Web Designer`}
                        duration={100}
                    />
                    <p className='text-[14px] font-[400] text-gray-600 mt-2'>
                        I'm passionate about creating visually stunning and user-friendly web experiences.
                        With 2 years of dedicated experience in web development, I specialize in
                        <strong> React, Next.js, Typescript and Tailwind CSS</strong>.
                        Let's collaborate to bring your ideas to life!
                    </p>
                </div>

            </div>
            <div className='md:w-[45%] flex justify-start'>
                <Image src={Header_icon} alt='' className="w-[500px]"/>

            </div>

        </div>
    )
}

export default HeaderScetion