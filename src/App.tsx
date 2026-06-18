import { HeroSection } from '@/components/ui/hero-section-2'

function App() {
  return (
    <div className="w-full">
      <HeroSection
        logo={{
            url: "/images/brand/logo.png",
            alt: "CR Moonlight Logo",
            text: "CR Moonlight"
        }}
        slogan="BÁNH TRUNG THU 2026"
        title={
          <>
            Hương vị <br />
            <span className="text-primary">mùa trăng</span>
          </>
        }
        subtitle="Hai mươi tư hương vị thủ công, từ cổ truyền đến hiện đại. Nguyên liệu tự nhiên, không chất bảo quản — gửi trọn tình yêu vào từng chiếc bánh."
        callToAction={{
          text: "ĐẶT HÀNG NGAY",
          href: "#dat-hang",
        }}
        backgroundImage="/images/hero/hero-bg.jpg"
        heroImage="/images/hero/mooncake-main.png"
        contactInfo={{
            website: "crmoonlight.vn",
            phone: "0909 888 999",
            address: "123 Nguyễn Huệ, Q.1, TP.HCM",
        }}
      />
    </div>
  )
}

export default App
