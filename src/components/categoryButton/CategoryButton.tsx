

type Props = {
    title: string,
    onClick: any,
    className: string
}

export default function CategoryButton({ title, onClick, className }: Props) {
    return (
        <div onClick={onClick} className={className}>
            {title}
        </div>
    )
}