import { XCircle } from "lucide-react"

const problems = [
  {
    title: "Không có tài chính",
    description: "Nhiều học sinh không có khả năng chi trả học phí đại học (300-600 triệu/4 năm)",
  },
  {
    title: "Lo lắng về tương lai",
    description: "Học xong vẫn có nguy cơ thất nghiệp hoặc làm trái ngành, không đúng chuyên môn",
  },
  {
    title: "Áp lực gia đình",
    description: "Muốn đi làm sớm để phụ giúp gia đình nhưng thiếu kỹ năng và bằng cấp",
  },
  {
    title: "Thiếu định hướng",
    description: "Không biết nên chọn ngành gì, học ở đâu để đảm bảo có việc làm tốt",
  },
]

export function ProblemsSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Bạn đang gặp những vấn đề này?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Đây là những khó khăn phổ biến mà hầu hết học sinh THPT đang phải đối mặt
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
                  <XCircle className="h-5 w-5 text-destructive" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
