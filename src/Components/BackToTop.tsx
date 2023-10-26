import { TbArrowNarrowUp } from "react-icons/tb";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function BackToTop() {
    const [show, setShow] = useState(false)

    const ScrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const handleScroll = useCallback(() => {
        if (!show && window.scrollY > 100) setShow(true)
        if (show && window.scrollY <= 100) setShow(false)
    }, [show])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    return (
        <>
            <AnimatePresence>
                {show && (
                    <motion.div
                        className="fixed right-4 bottom-4 z-50"
                        initial={{ opacity: 0, right: -10 }}
                        animate={{ opacity: 1, right: 16 }}
                        exit={{ opacity: 0, right: -10 }}
                    >
                        <button onClick={ScrollTop} className="shadow-lg shadow-[#8A6BFB]/25 bg-[#7359D2] py-3 px-4 rounded-lg text-white flex items-center justify-center gap-2 hover:bg-[#614bb1] transition-colors disabled:opacity-50">
                            <TbArrowNarrowUp size={20} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}