import IconLoading from "../custom/icon-loading"

export default function ContentLoading({
    isLoading,
    error,
    children,
    className,
    hight = 230
}: PageLoadingProps) {
    return <>
        {
            isLoading
                ? <div className={"flex justify-center items-center " + className} style={{ height: hight }}>
                    <IconLoading size={12} />
                </div>
                : (
                    error
                        ? <div className={"flex justify-center items-center " + className} style={{ height: hight }}>
                            <div className="text-red-500">{error}</div>
                        </div>
                        : children
                )
        }
    </>
}

type PageLoadingProps = {
    isLoading: boolean
    error?: string
    children: React.ReactNode,
    className?: string,
    hight?: number,
}