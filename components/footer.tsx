import Image from "next/image"
import { MapPin } from "lucide-react"

const locations = [
  {
    city: "Tại Hà Nội",
    address: "Số 11, Ngõ 28 Dương Khuê, Phường Từ Liêm, TP Hà Nội, Việt Nam",
  },
  {
    city: "Tại Thanh Hóa",
    address: "Trung Tâm Hướng Nghiệp Tỉnh Đoàn, Đại Lộ Võ Nguyên Giáp, Thành Phố Thanh Hóa",
  },
  {
    city: "Tại Nghệ An",
    address: "Khu Đô Thị Chung Cư Trường Sơn - Khối Nghi Kim 12 p Phường Vinh Hưng, TP Vinh - Nghệ An",
  },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IfUkm2PL51PbgsdokjnuYni67tDBfR.png"
            alt="IFN GROUP"
            width={180}
            height={40}
            className="h-10 w-auto brightness-0 invert"
          />
          
          <div className="mt-10 grid gap-6 sm:grid-cols-3 w-full max-w-4xl">
            {locations.map((location) => (
              <div key={location.city} className="flex flex-col items-center text-center">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-semibold text-background">{location.city}</span>
                </div>
                <p className="text-sm text-background/70 leading-relaxed">
                  {location.address}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <p className="text-center text-sm text-background/50">
            © 2026 IFN GROUP. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  )
}
