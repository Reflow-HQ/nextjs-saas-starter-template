interface Props {
  src: string;
}

export default function UserAvatar({ src }: Props) {
  return (
    <img
      src={src}
      alt="Avatar"
      className="mx-1 h-[30px] w-[30px] rounded-full object-cover"
    />
  );
}
