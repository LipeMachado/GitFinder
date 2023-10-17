import { BiMap } from "react-icons/bi";

export function ProfileCard() {
    return (
        <>
            <div className="w-[90%] sm:w-[500px] h-[300px] mt-6 sm:mt-12 rounded border-[1px] border-[#7858A6] bg-[#19191F] text-[#f6f6f7] select-none">
                <div className="flex items-center py-4 px-5">
                    <div className="">
                        <img className="w-[70px] h-[60px] rounded" src="https://picsum.photos/1200/1200" />
                    </div>
                    <div className="w-full flex items-center justify-around">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-lg font-bold">Nome</h2>
                            <div className="flex justify-center items-center gap-1 mr-10">
                                <BiMap />
                                <span className="text-xs">São Paulo, Brasil</span>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-5">
                            <div className="flex flex-col gap-1 text-center mr-5">
                                <h3 className="font-bold">Seguidores</h3>
                                <span className="text-sm">30k</span>
                            </div>
                            <div className="flex flex-col gap-1 text-center">
                                <h3 className="font-bold">Seguindo</h3>
                                <span className="text-sm">30k</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}