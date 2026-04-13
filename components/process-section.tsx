const steps = [
  {
    number: "01",
    title: "Đăng ký & Tư vấn",
    description: "Liên hệ qua hotline hoặc văn phòng IFN để được tư vấn miễn phí về các chương trình học bổng A1/A2/A3 phù hợp với hoàn cảnh và nguyện vọng",
  },
  {
    number: "02",
    title: "Phỏng vấn - Xét duyệt",
    description: "Đánh giá ý thức, định hướng nghề nghiệp và hoàn cảnh gia đình để xét duyệt gói học bổng phù hợp nhất",
  },
  {
    number: "03",
    title: "Nhập học & Đào tạo",
    description: "Bắt đầu học tập tại trường với chương trình đào tạo linh hoạt, kết hợp lý thuyết, thực hành và kỹ năng mềm xen kẽ tại nhà trường và nhà máy",
  },
  {
    number: "04",
    title: "Thực hành có lương",
    description: "Vừa học vừa thực hành tại doanh nghiệp FDI, nhận trợ cấp từ 2-8 triệu đồng/tháng tùy chương trình. Có xe đưa đón nếu ở xa nhà máy",
  },
  {
    number: "05",
    title: "Tốt nghiệp & Nhận bằng",
    description: "Hoàn thành chương trình đào tạo, nhận bằng Cao đẳng chính quy (hoặc bằng THPT, Trung cấp với hệ 9+ liên thông)",
  },
  {
    number: "06",
    title: "Việc làm & Phát triển",
    description: "Được bố trí làm việc tại doanh nghiệp FDI tối thiểu 1 năm. Sinh viên xuất sắc có cơ hội được tài trợ du học hoặc xuất khẩu lao động sang Nhật Bản, Hàn Quốc",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            Lộ trình đào tạo
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Hành trình từ sinh viên đến chuyên gia
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Chương trình đào tạo linh hoạt với các tín chỉ được dạy cả online và offline, phù hợp với mọi ngành học
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card rounded-3xl p-8 border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Yêu cầu tham gia chương trình
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-foreground">Độ tuổi: 18 - 21 (đến 30 xét duyệt)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-foreground">Tốt nghiệp THPT hoặc THCS (hệ 9+)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-foreground">Có ý thức học tập và làm việc</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-foreground">Cam kết làm việc tối thiểu 1 năm</span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-primary">Ưu tiên:</span> Học sinh có hoàn cảnh khó khăn, con cháu gia đình chính sách, Bộ đội xuất ngũ (20-30 tuổi).
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
