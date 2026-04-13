import { School, Building2, GraduationCap, Award } from "lucide-react"

const schools = [
  {
    name: "Trường Cao đẳng Quốc tế Hà Nội",
    type: "Cao đẳng",
  },
  {
    name: "Trường Cao đẳng Công Thương Quốc tế",
    type: "Cao đẳng",
  },
  {
    name: "Trường Cao đẳng Thương mại và Du lịch Hà Nội",
    type: "Cao đẳng",
  },
  {
    name: "Trường Cao Đẳng Công Nghiệp",
    type: "Cao đẳng",
  },
  {
    name: "Trường Trung cấp Thái Nguyên",
    type: "Trung cấp",
  },
]

export function SchoolsSection() {
  return (
    <section id="schools" className="py-20 md:py-28 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            Trường liên kết đào tạo
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Hệ thống trường liên kết
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Chương trình liên kết đào tạo với các trường Cao đẳng và Trung cấp uy tín trên toàn quốc
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {schools.map((school) => (
            <div
              key={school.name}
              className="flex items-center gap-4 bg-card rounded-2xl p-5 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <School className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">
                  {school.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {school.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}