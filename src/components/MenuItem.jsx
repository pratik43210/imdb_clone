import Link from "next/link";

export default function MenuItem({title,address,Icon}) {
  return (
    <div>
      <Link href={address} className="mx-4 hover:text-amber-600">
        <Icon className="text-2xl sm:hidden mx-4"/>
        <p className="hidden sm:inline">{title}</p>
      </Link>
    </div>
  )
}