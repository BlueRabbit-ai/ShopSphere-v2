import Link from "next/link"
import Image from "next/image"

interface CategoryCardProps {
  name: string
  image: string
  href: string
}

export function CategoryCard({ name, image, href }: CategoryCardProps) {
  return (
    <Link href={href} className="group relative overflow-hidden rounded-lg">
      <Image
        src={image || "/placeholder.svg"}
        alt={name}
        width={300}
        height={200}
        className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-2xl font-bold text-white">{name}</h3>
      </div>
    </Link>
  )
}

