interface Box2Props {
  title: string;
  subtitle: string;
  icon: string;
  bgColor: string;
}

export default function Box2({ title, subtitle, icon, bgColor }: Box2Props) {
  return (
    <div className={`${bgColor} rounded-lg p-6 hover:scale-[1.02] transition-transform cursor-pointer`}>
      <div className="w-16 h-16 mb-4">
        <img src={icon} alt={title} className="w-full h-full" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/80">{subtitle}</p>
    </div>
  )
} 