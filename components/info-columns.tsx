import Image from "next/image"

const infoColumns = [
  {
    title: "Quality Products",
    description:
      "We source only the finest materials and work with trusted manufacturers to ensure top-notch quality in all our products.",
    image: "/images/quality-products.jpg",
  },
  {
    title: "Sustainable Fashion",
    description:
      "Our commitment to sustainability means we use eco-friendly materials and ethical production processes whenever possible.",
    image: "/images/sustainable-fashion.jpg",
  },
  {
    title: "Customer Satisfaction",
    description:
      "Your satisfaction is our priority. We offer excellent customer service and a hassle-free shopping experience.",
    image: "/images/customer-satisfaction.jpg",
  },
]

export function InfoColumns() {
  return (
    <section className="py-12">
      <h2 className="mb-6 text-2xl font-bold">Why Choose Us</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {infoColumns.map((column, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image
              src={column.image || "/placeholder.svg"}
              alt={column.title}
              width={300}
              height={200}
              className="mb-4 rounded-lg object-cover"
            />
            <h3 className="mb-2 text-xl font-semibold">{column.title}</h3>
            <p className="text-muted-foreground">{column.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

