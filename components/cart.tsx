import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
import { useCart } from "@/lib/use-cart"
import Image from "next/image"
import { formatCurrency } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { ShoppingCart } from "lucide-react"

export function Cart() {
  const { items, removeItem, updateQuantity, formattedTotal } = useCart()
  const router = useRouter()

  const handleCheckout = () => {
    router.push("/checkout")
  }

  return (
    <TooltipProvider>
      <Sheet>
        <Tooltip>
          <SheetTrigger asChild>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="border-border size-8 shrink-0 border relative">
                <ShoppingCart className="size-4" />
                <span className="sr-only">Cart</span>
                {items.length > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                    {items.length}
                  </span>
                )}
              </Button>
            </TooltipTrigger>
          </SheetTrigger>
          <TooltipContent align="end">Cart</TooltipContent>
          <SheetContent side="right" className="flex w-full flex-col justify-between p-4 pt-12 md:w-[400px]">
            <SheetTitle className="absolute left-4 top-3 text-xl ">Cart</SheetTitle>
            <div className="flex flex-col gap-3 overflow-y-auto">
              {items.length === 0 ? (
                <p className="text-muted-foreground text-sm">No items in your cart.</p>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-muted-foreground text-sm">{formatCurrency(item.price, item.currency)}</p>
                      <div className="flex items-center gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-6 w-6"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-6 w-6"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                      &times;
                    </Button>
                  </div>
                ))
              )}
            </div>
            <div className="flex flex-col gap-3 pt-4">
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>{formattedTotal}</span>
              </div>
              <Button variant="default" size="sm" disabled={items.length === 0} onClick={handleCheckout}>
                Proceed to Checkout
              </Button>
            </div>
          </SheetContent>
        </Tooltip>
      </Sheet>
    </TooltipProvider>
  )
}

